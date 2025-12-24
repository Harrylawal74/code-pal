"use client";

import React, { useState } from "react";
import MarkButton from "./MarkButton";
import { Question } from "../types/Questions";

// Types
type Option = { id: number; text: string };
type SentencePart = {
  id: number;
  text: string;
  isBlank: boolean;
  filled?: Option | null;
};
type CorrectBlank = { id: number; correctOptionId: number };

interface FIBCodeProps {
  sentenceParts: SentencePart[];
  options: Option[];
  correctBlanks: CorrectBlank[];
  question: Question;
}

// Keywords & builtins
const PYTHON_KEYWORDS = [
  "def",
  "for",
  "in",
  "if",
  "else",
  "return",
  "while",
  "class",
  "import",
];
const PYTHON_BUILTINS = [
  "print",
  "len",
  "range",
  "int",
  "str",
  "float",
  "list",
  "dict",
];

// Regex patterns
const STRING_PATTERN = /^(['"]).*?\1$/;
const NUMBER_PATTERN = /^[0-9]+(\.[0-9]+)?$/;

const FIBCode: React.FC<FIBCodeProps> = ({
  question,
  sentenceParts,
  options,
  correctBlanks,
}) => {
  const [sentence, setSentence] = useState<SentencePart[]>(
    sentenceParts.map((p) => ({ ...p, filled: null }))
  );
  const [availableOptions, setAvailableOptions] = useState<Option[]>(options);

  // Drag start
  const onDragStart = (
    e: React.DragEvent,
    option: Option,
    from: "options" | "sentence",
    index: number
  ) => {
    e.dataTransfer.setData("id", option.id.toString());
    e.dataTransfer.setData("from", from);
    e.dataTransfer.setData("index", index.toString());
    e.dataTransfer.setData("text", option.text);
  };

  // Drop to blank
  const onDropToBlank = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    const id = parseInt(e.dataTransfer.getData("id"));
    const text = e.dataTransfer.getData("text");
    const from = e.dataTransfer.getData("from");
    const sourceIndex = parseInt(e.dataTransfer.getData("index"));
    if (!text) return;

    const option: Option = { id, text };

    setSentence((prev) => {
      const replacedWord = prev[targetIndex].filled;
      const updated = prev.map((part, i) => {
        if (i === targetIndex) return { ...part, filled: option };
        if (from === "sentence" && i === sourceIndex)
          return { ...part, filled: null };
        return part;
      });

      if (replacedWord && replacedWord.id !== option.id) {
        setAvailableOptions((prevOpts) =>
          prevOpts.some((o) => o.id === replacedWord.id)
            ? prevOpts
            : [...prevOpts, replacedWord]
        );
      }
      return updated;
    });

    if (from === "options") {
      setAvailableOptions((prev) => prev.filter((o) => o.id !== id));
    }
  };

  // Drop back to options area
  const onDropToOptions = (e: React.DragEvent) => {
    e.preventDefault();
    const id = parseInt(e.dataTransfer.getData("id"));
    const text = e.dataTransfer.getData("text");
    const from = e.dataTransfer.getData("from");
    const sourceIndex = parseInt(e.dataTransfer.getData("index"));
    if (!text) return;

    // Only allow from sentence → options
    if (from === "sentence") {
      setSentence((prev) =>
        prev.map((part, i) =>
          i === sourceIndex ? { ...part, filled: null } : part
        )
      );

      setAvailableOptions((prev) =>
        prev.some((o) => o.id === id) ? prev : [...prev, { id, text }]
      );
    }
  };

  const onDragOver = (e: React.DragEvent) => e.preventDefault();

  // Mark quiz
  const markQuiz = () => {
    const score = correctBlanks.reduce((acc, { id, correctOptionId }) => {
      const part = sentence.find((p) => p.id === id);
      return acc + (part?.filled?.id === correctOptionId ? 1 : 0);
    }, 0);

    return score === correctBlanks.length ? true : false;
  };

  // Syntax highlighting
  const renderInlineCode = (text: string) => {
    if (text === "\n") return <br />;

    if (text.trim().startsWith("#")) {
      return <span className="text-gray-500">{text}</span>;
    }

    // Regex to match strings first, then words/numbers
    const regex = /(\d+(\.\d+)?\||\".*?\"|'.*?'|\b\w+\b|\s+|[^\s\w])/g;
    const tokens = text.match(regex) || [];

    return tokens.map((token, idx) => {
      if (!token.trim()) return <span key={idx}>{token}</span>;

      if (/^".*"$|^'.*'$/.test(token)) {
        // Strings including quotes
        return (
          <span key={idx} className="text-green-400">
            {token}
          </span>
        );
      } else if (PYTHON_KEYWORDS.includes(token)) {
        return (
          <span key={idx} className="text-purple-400 font-semibold">
            {token}
          </span>
        );
      } else if (PYTHON_BUILTINS.includes(token)) {
        return (
          <span key={idx} className="text-blue-400">
            {token}
          </span>
        );
      } else if (/^\d+(\.\d+)?\|$/.test(token)) {
        return (
          <span key={idx} className="text-gray-200">
            {token}
          </span>
        );
      } else if (/^[0-9]+(\.[0-9]+)?$/.test(token)) {
        return (
          <span key={idx} className="text-orange-400">
            {token}
          </span>
        );
      } else {
        return <span key={idx}>{token}</span>;
      }
    });
  };

  return (
    <div className="self-start py-10 px-8 bg-gray-900 text-white text-4xl rounded-lg font-mono w-full min-h-100 max-w-250 w-3/10">
      <h2 className="text-4xl font-semibold mb-8 text-white">
        {question.question}
      </h2>
      {/* Sentence area */}
      <pre className="whitespace-pre-wrap">
        {sentence.map((part, i) =>
          part.isBlank ? (
            <span
              key={part.id}
              onDrop={(e) => onDropToBlank(e, i)}
              onDragOver={onDragOver}
              className="inline-block min-w-[100px] py-0.5 mx-0.5 border-b-2 border-white cursor-pointer text-center align-middle"
            >
              {part.filled ? (
                <span
                  draggable
                  onDragStart={(e) =>
                    onDragStart(e, part.filled!, "sentence", i)
                  }
                  className="bg-gray-800 px-1 rounded"
                >
                  {renderInlineCode(part.filled.text)}
                </span>
              ) : (
                <span>&nbsp;&nbsp;&nbsp;</span>
              )}
            </span>
          ) : (
            <span key={part.id}>{renderInlineCode(part.text)}</span>
          )
        )}
      </pre>

      {/* Options area */}
      <div
        className="flex justify-center flex-wrap gap-2 mt-7 p-4 border border-dashed border-gray-600 rounded min-h-[100px]"
        onDrop={onDropToOptions}
        onDragOver={onDragOver}
      >
        {availableOptions.map((opt, idx) => (
          <div
            key={opt.id}
            draggable
            onDragStart={(e) => onDragStart(e, opt, "options", idx)}
            className="flex items-center justify-center px-2 py-1 bg-black rounded-lg cursor-pointer hover:bg-purple-900"
          >
            {renderInlineCode(opt.text)}
          </div>
        ))}
      </div>
      <div className=""><MarkButton question={question} positiveOutcome={markQuiz()}></MarkButton></div>
      
    </div>
  );
};

export default FIBCode;
