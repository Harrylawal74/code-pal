"use client";
import { Question } from "../types/Questions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setLevel1CompletedExercise } from "@/lib/supabase/ServerFunctions/DatabaseLevelData";
import { setLevel1CompletedExerciseAPI } from "../api/SetLevelExerciseProgress";
type Props = {
  question: Question;
  positiveOutcome: boolean;
};

export default function MarkButton({ question, positiveOutcome }: Props) {
  const router = useRouter();
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  // Load counts from localStorage on mount
  useEffect(() => {
    const storedCorrect = Number(localStorage.getItem("correctCount") || 0);
    const storedAnswered = Number(localStorage.getItem("answeredCount") || 0);
    setCorrectCount(storedCorrect);
    setAnsweredCount(storedAnswered);
  }, []);

  const handleNextQuestion = () => {
    let newAnswered = 0;
    let newCorrect = 0;
    if (question.firstQuestion) {
      localStorage.removeItem("answeredCount");
      localStorage.removeItem("correctCount");
    } else {
      //Calculate new counts
      newAnswered = answeredCount + 1;
      newCorrect = positiveOutcome ? correctCount + 1 : correctCount;
    }

    // Update state
    setAnsweredCount(newAnswered);
    setCorrectCount(newCorrect);
    // Update localStorage
    localStorage.setItem("answeredCount", newAnswered.toString());
    localStorage.setItem("correctCount", newCorrect.toString());

    // Navigate
    if (question.nextQuestionId) {
      router.push(`/exercises/${question.nextQuestionId}`);
    }
    console.log(answeredCount, correctCount);
  };

  const handleEndQuiz = () => {
    const newAnswered = answeredCount + 1;
    const newCorrect = positiveOutcome ? correctCount + 1 : correctCount;

    setAnsweredCount(newAnswered);
    setCorrectCount(newCorrect);

    localStorage.setItem("answeredCount", newAnswered.toString());
    localStorage.setItem("correctCount", newCorrect.toString());

    // Check if passed
    if (newCorrect / newAnswered >= 0.7) {
      // call API to mark as passed
      // include animation of some sort
      console.log("You passed");
      setLevel1CompletedExercise(question.id);

    } else {
      // call API to mark as failed
      // animation of some sort
      console.log("You failed");
      setLevel1CompletedExercise(question.id);
    }

    // Reset counts for next quiz
    localStorage.removeItem("answeredCount");
    localStorage.removeItem("correctCount");

    // Navigate to learn page
    router.push("/learn");
  };

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
