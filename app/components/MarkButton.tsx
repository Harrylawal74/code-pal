import Link from "next/link";
import { Question } from "../types/Questions";
import { useState } from "react";

type Props = {
  question: Question;
  outcome: boolean;
};

export default function MarkButton({ question, outcome }: Props) {
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  function isQuestionCorrect() {
    setAnsweredCount((prev) => prev + 1);

    if (outcome === true) {
      setCorrectCount((prev) => prev + 1);
      //window.location.href = "/again";
    } else {
      //window.location.href = "/learn"; // redirect
    }
  }

  function hasPassed() {
    setAnsweredCount((prev) => prev + 1);

    if (outcome === true) {
      setCorrectCount((prev) => prev + 1);
      //window.location.href = "/again";
    } else {
      //window.location.href = "/learn"; // redirect
    }
    
    if (correctCount / answeredCount >= 0.7) {
      //database funciton to mark quiz as passed
      
      //some visual feedback for passing
    }else{
        //no database update 
      //some visual feedback for failing
    }
  }

  // Mark button / end quiz button comonents
  if (question.nextQuestionId) {
    return (
      <Link
        href={`/exercises/${question.nextQuestionId}`}
        className="w-full h-[70px] shadow-xl shadow-purple-900 hover:shadow-2xl bg-gradient-to-r from-[#a283f9] to-[#8f63f7] px-5 py-2 rounded-2xl flex justify-center items-center hover:translate-y-[-3px] transition-all duration-400 mt-5"
      >
        <button type="button" onClick={isQuestionCorrect}>
          Next Question
        </button>
      </Link>
    );
  } else {
    return (
      <Link
        href={`/learn`}
        className="w-full h-[70px] shadow-xl shadow-purple-900 hover:shadow-2xl bg-gradient-to-r from-[#a283f9] to-[#8f63f7] px-5 py-2 rounded-2xl flex justify-center items-center hover:translate-y-[-3px] transition-all duration-400 mt-5"
      >
        <button type="button" onClick={hasPassed}>
          End Quiz
        </button>
      </Link>
    );
  }
}
