"use client";
import { Question } from "../types/Questions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setHighestCompletedLevel1Exercise } from "@/lib/supabase/ServerFunctions/DatabaseLevel1Data";

type Props = {
  question: Question;
  positiveOutcome: boolean;
};

export default function MarkButton({ question, positiveOutcome }: Props) {
  const router = useRouter();
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  // Load counts from localStorage on mount (only for continuation of a quiz)
  useEffect(() => {
    if (!question.firstQuestion) {
      const storedCorrect = Number(localStorage.getItem("correctCount") || 0);
      const storedAnswered = Number(localStorage.getItem("answeredCount") || 0);
      setCorrectCount(storedCorrect);
      setAnsweredCount(storedAnswered);
    }
  }, [question.firstQuestion]);

  // Function to reset counts for a new quiz
  const resetCountsForNewQuiz = () => {
    setCorrectCount(0);
    setAnsweredCount(0);
    localStorage.setItem("correctCount", "0");
    localStorage.setItem("answeredCount", "0");
  };

  const handleNextQuestion = () => {
    const newAnswered = answeredCount + 1;
    const newCorrect = positiveOutcome ? correctCount + 1 : correctCount;

    setAnsweredCount(newAnswered);
    setCorrectCount(newCorrect);

    // Update localStorage with new counts
    localStorage.setItem("answeredCount", newAnswered.toString());
    localStorage.setItem("correctCount", newCorrect.toString());

    // Navigate to next question
    if (question.nextQuestionId) {
      router.push(`/exercises/${question.nextQuestionId}`);
    }

    
    console.log(
      "Answered Count:",
      answeredCount,
      "Correct Count:",
      correctCount)
  };

  const handleEndQuiz = () => {
    const newAnswered = answeredCount + 1;
    const newCorrect = positiveOutcome ? correctCount + 1 : correctCount;

    setAnsweredCount(newAnswered);
    setCorrectCount(newCorrect);

    localStorage.setItem("answeredCount", newAnswered.toString());
    localStorage.setItem("correctCount", newCorrect.toString());

    // Check if the user passed
    if (newCorrect / newAnswered >= 0.7) {
      setHighestCompletedLevel1Exercise(question.id);
      console.log("You passed");
    } else {
      setHighestCompletedLevel1Exercise(question.id);
      console.log("You failed");
    }

    // Reset counts for next quiz (if desired)
    localStorage.removeItem("answeredCount");
    localStorage.removeItem("correctCount");

    
    console.log(
      "Answered Count:",
      answeredCount,
      "Correct Count:",
      correctCount)

    // Navigate to the learn page
    router.push("/learn");
  };

  useEffect(() => {
    // If it's the first question of the quiz, reset the counts
    if (question.firstQuestion) {
      resetCountsForNewQuiz();
    }
  }, [question.firstQuestion]);

  return (
    <button
      type="button"
      onClick={question.nextQuestionId ? handleNextQuestion : handleEndQuiz}
      className="w-full h-[70px] shadow-xl shadow-purple-900 hover:shadow-2xl bg-gradient-to-r from-[#a283f9] to-[#8f63f7] px-5 py-2 rounded-2xl flex justify-center items-center hover:translate-y-[-3px] transition-all duration-400 mt-5"
    >
      {question.nextQuestionId ? "Next Question" : "End Quiz"}
    </button>
  );
}
