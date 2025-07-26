'use client';
import { Question } from "../types/Questions";
import MarkButton from "./MarkButton";
import {use, useState } from "react";



/** A question object is passed to this function from the dynamic webpage [id]*/
export default function MCQs({question}: {question: Question}) {

    /** State to keep track of the selected answer and the result */
    const [selectedAnswer, setSelectedAnswer] = useState("");

    /** State to keep track of the result */
    const [result, setResult] = useState<"correct" | "incorrect" | "">("");

    /** The correct answer is predefined in the question object
     * This could be used to check if the users answer is correct or not
     */
    const correctAnswer = question.correctAnswer; // Predefined correct answer


    /* Function to handle form submission */
    /** This function is called when the user submits the form */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedAnswer === correctAnswer) {
        setResult("correct");
        } else {
        setResult("incorrect");
        }
    };


    return(
        <form onSubmit={handleSubmit} className="mx-5 my-5 bg-blue-900 px-5 py-7 rounded-4xl space-y-10 max-w-150 w-full flex flex-col items-center " >

            
            <h2 className="flex items-center justify-center text-white text-2xl font-bold bg-gray-500 rounded-4xl px-10 h-17 mb-15 gap-6 w-full ">{question.question}</h2>
                
            {/**Loops through each option and its index
             * Renders a <label> and <input> for each option
             */}
            {question.options.map((option, index) => (
            <label key={index}
            className={" cursor-pointer bg-gray-500 rounded-4xl px-10 h-17 flex items-center gap-6 w-full mb-5 "}>
                
                {/** Sets the state 'selectedAnswer to be the option that the user has selected
                 * and checks the option that the user has selected (option appears selected on form)
                 */}
                <input type="radio" name="QuestionOption" value={option} checked={selectedAnswer === option}
                    onChange={() => setSelectedAnswer(option)}/> {option}</label>
            ))}
            
        {/** The MarkButton component is used to submit the users answer*/}
            <MarkButton></MarkButton> 



        {/** Conditional rendering 
         * if result is "" then nothing is displayed
         * If the result is correct or incorrect, it displays a message
        */}
        {result && (
            <p
            className={`text-2xl font-semibold ${
                result === "correct" ? "text-green-400" : "text-red-400"
            }`}
            >
            {result === "correct" ? "✅ Correct!" : "❌ Incorrect"}
            </p>
        )}

        </form>
        
    )
}