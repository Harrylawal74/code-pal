"use client";
import React, { useState } from "react";
import MarkButton from "./MarkButton";
import { Question } from "../types/Questions";
/**
 * Types for each option and sentence part
 */
type Option = {
  id: number;
  text: string;
};

type SentencePart = {
  id: number;
  text: string;
  isBlank: boolean; // Determines if this part is a blank or plain text
  filled?: Option | null; // Holds the dropped option if filled
};

type CorrectBlank = {
  id: number; // ID of the blank in the sentenceParts array
  correctOptionId: number; // Which option ID should be in this blank
};

/**
 * Props passed from the question data file
 */
type FillInTheBlanksProps = {
  question: Question;
  sentenceParts: { id: number; text: string; isBlank: boolean }[];
  options: Option[];
  correctBlanks: CorrectBlank[];
};

const FillInTheBlanks: React.FC<FillInTheBlanksProps> = ({
  question,
  sentenceParts,
  options,
  correctBlanks,
}) => {
  // State for the sentence structure
  const [sentence, setSentence] = useState<SentencePart[]>(
    sentenceParts.map((part) => ({ ...part, filled: null }))
  );

  // State for available options (words that haven’t been placed)
  const [availableOptions, setAvailableOptions] = useState<Option[]>(options);

  /**
   * Handles when dragging starts (both from options and filled blanks)
   * dataTransfer = an API for drag and drop operations. Data can be stored in it and retrieved later during the drop event
   */
  const onDragStart = (
    e: React.DragEvent,
    option: Option,
    from: "options" | "sentence",
    index: number
  ) => {
    e.dataTransfer.setData("id", option.id.toString()); // Unique ID for the option
    e.dataTransfer.setData("text", option.text); // The word being dragged
    e.dataTransfer.setData("from", from); // Source: options or sentence
    e.dataTransfer.setData("index", index.toString()); // Index of word in its source array
  };

  /**
   * Handles dropping a word into a blank in the sentence
   */
  const onDropToBlank = (e: React.DragEvent, targetIndex: number) => {
    const id = parseInt(e.dataTransfer.getData("id"));
    const text = e.dataTransfer.getData("text");
    const from = e.dataTransfer.getData("from");
    const sourceIndex = parseInt(e.dataTransfer.getData("index"));

    if (!text) return;

    const option: Option = { id, text };

    setSentence((prev) => {
      // represents the word that is currently being replaced
      const replacedWord = prev[targetIndex].filled;

      const updated = prev.map((part, i) => {
        if (i === targetIndex) {
          return { ...part, filled: option };
        } else if (from === "sentence" && i === sourceIndex) {
          return { ...part, filled: null };
        }
        return part;
      });

      // If there's a word being replaced then return it to options
      if (replacedWord && replacedWord.id !== option.id) {
        setAvailableOptions((opts) => {
          // avoid adding duplicate if it's already in options
          return opts.some((o) => o.id === replacedWord.id)
            ? opts
            : [...opts, replacedWord];
        });
      }

      return updated;
    });

    // Remove dragged word from options if it came from options
    if (from === "options") {
      setAvailableOptions((prev) => prev.filter((opt) => opt.id !== id));
    }
  };

  /**
   * Handles dropping a filled word back into the options area
   */
  const onDropToOptions = (e: React.DragEvent) => {
    const id = parseInt(e.dataTransfer.getData("id"));
    const text = e.dataTransfer.getData("text");
    const from = e.dataTransfer.getData("from");
    const sourceIndex = parseInt(e.dataTransfer.getData("index"));

    // Only handle words coming from sentence blanks
    if (!text || from !== "sentence") return;

    const option: Option = { id, text };

    // Clear the word from the sentence
    setSentence((prev) =>
      prev.map((part, i) =>
        i === sourceIndex ? { ...part, filled: null } : part
      )
    );

    // Add the word back to options
    setAvailableOptions((prev) =>
      prev.some((o) => o.id === id) ? prev : [...prev, option]
    );
  };

  /**
   * Enables drag-over behavior for valid drop zones
   * Prevents the browser's default handling of the drop event
   */
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  /**
   * Marks the quiz by comparing blank IDs with the correct option IDs
   */
  const markQuiz = () => {
    const score = correctBlanks.reduce((acc, { id, correctOptionId }) => {
      const part = sentence.find((p) => p.id === id);
      return acc + (part?.filled?.id === correctOptionId ? 1 : 0);
    }, 0);

    //alert(`You scored ${score} / ${correctBlanks.length}`);
    return score === correctBlanks.length ? true : false;
  };

  return (
    <div className="self-start p-6 pb-15 text-white bg-gradient-to-b from-[#121723] to-[#131623] rounded-3xl border-2 border-[#2d2c47]">
      <h2 className="flex justify-center text-xl font-semibold mb-4 text-white">
        Fill in the blanks
      </h2>

      {/* Sentence rendering */}
      <p className="text-lg mb-6 flex flex-wrap text-white items-center ">
        {sentence.map((part, i) =>
          // if the sentence part is blank then render it as a drop zone
          part.isBlank ? (
            <span
              key={part.id}
              onDrop={(e) => onDropToBlank(e, i)}
              onDragOver={onDragOver}
              className="relative inline-flex min-w-[140px] mx-1 px-2 py-1 text-center items-center justify-center h-15 "
            >
              {/* The other span is so that there is a big area for the drop zone
              this span is for the visual (darker patch to show the drop zone) */}
              {!part.filled && (
                <span className="absolute bg-purple-900 w-full h-1/2 rounded-xl"></span>
              )}

              {part.filled && (
                <span
                  draggable
                  onDragStart={(e) =>
                    onDragStart(e, part.filled!, "sentence", i)
                  }
                  className="absolute cursor-move bg-gradient-to-r from-[#a283f9] to-[#8f63f7] py-1 px-2 rounded-xl hover:bg-purple-200 transition-transform hover:scale-110 duration-500"
                >
                  {part.filled.text}
                </span>
              )}
            </span>
          ) : (
            // Render normal text
            <span key={part.id} className="mx-1 whitespace-pre">
              {part.text}
            </span>
          )
        )}
      </p>

      {/* Options area for unused draggable words */}
      <div
        className="flex gap-4 flex-wrap mt-4 gap-10 justify-center items-center h-20 border-2 border-purple-900 rounded-3xl"
        onDrop={onDropToOptions}
        onDragOver={onDragOver}
      >
        {availableOptions.map((option, index) => (
          <div
            key={option.id}
            draggable
            onDragStart={(e) => onDragStart(e, option, "options", index)}
            className="cursor-move px-4 py-2 rounded-3xl shadow hover:bg-purple-900 cursor-pointer hover:scale-103 bg-purple-700 transition-transform duration-700"
          >
            {option.text}
          </div>
        ))}
      </div>

      {/* Button to mark quiz */}
      <MarkButton
        question={question}
        positiveOutcome={markQuiz()}
      ></MarkButton>
    </div>
  );
};

export default FillInTheBlanks;
