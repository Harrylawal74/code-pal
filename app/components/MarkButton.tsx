import Link from "next/link";
import { Question } from "../types/Questions";
import { useState } from "react";

type Props = {
  question: Question;
  outcome: boolean;
};

const [correctCount, setCorrectCount] = useState(0);
const [answeredCount, setAnsweredCount] = useState(0);

export default function MarkButton({ question, outcome }: Props) {

  function isQuizCorrect() {
    if (outcome === false) {
      //window.location.href = "/again";
    } else {
      //window.location.href = "/learn"; // redirect
    }
  }

  if (question.nextQuestionId) {
      return (
    <Link
      href={`/exercises/${question.nextQuestionId}`}
      className="w-full h-[70px] shadow-xl shadow-purple-900 hover:shadow-2xl bg-gradient-to-r from-[#a283f9] to-[#8f63f7] px-5 py-2 rounded-2xl flex justify-center items-center hover:translate-y-[-3px] transition-all duration-400 mt-5"
    >
      <button type="button" onClick={isQuizCorrect}>
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
      <button type="button" onClick={isQuizCorrect}>
        End Quiz
      </button>
    </Link>
  );
  }
}

export function  
