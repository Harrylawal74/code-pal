import Link from "next/link";
import ExerciseBox from "../../../components/ExerciseBox";
import level1 from "../../../data/leveldata/level1";
import React from "react";
import { Question } from "../../../types/Questions";

type Props = {
  title: string;
};

/** This is the ExerciseSectionTab Template
 * * It is used to display a section of exercieses within a level.
 */

function ExerciseSectionTabTemplate({ title }: Props) {
  return (
    <div className="h-20 rounded-xl bg-[#2a6aee] flex justify-center items-center text-white text-sm md:text-xl sm:text-lg font-bold">
      {title}
    </div>
  );
}

/** To-do
 * *Need to create differenct exercise section tabs
 * *Copy the method used in the LevelTabTemplate to pass props to the template. above^^^
 */

export default function FoundationsPage() {
  return (
    /** The main tag is the whole area minus the sidebar (when visible) items are stacked on top of each other
     * Items are centered
     */
    <main className="flex-col justify-center overflow-auto w-full h-[calc(100vh-96px)] bg-gray-700 rounded-3xl m-5 p-20 no-scrollbar">
      {/**This container holds the two columns in the center of the page, items inside are centered
       * This container will grow wide enough to fit its contents without wrapping (min-w-max)
       * This container will shrink down but not below the minimum width of its contents (min-w-max)
       */}
      <div className="flex justify-center overflow-auto gap-15 min-w-max px-4 ">
        {/* main exercises column. e.g. syntax basics followed by exercise squares */}
        {/*This column (left) shrinks down to a fixed with and is always in page view */}
        <div className="flex justify-center min-w-[212px] ">
          <section className="mb-8">
            <ExerciseSectionTabTemplate title={level1.sections[0].title} />
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
              {level1.sections[0].exercises[0].questions.map(
                (question, index) => (
                  <Link key={index} href={`/exercises/${question.id}`}>
                    <ExerciseBox />
                  </Link>
                )
              )}
            </div>
          </section>
        </div>

        {/* This column does not shrink or grow when the page is resized. it has a fixed width and overflows off the the
            right when the page is too small*/}
        <div className="flex justify-center flex-shrink-0 w-[364px] bg-gray-500 rounded-3xl h-200 pt-10">
          Some stuff i havent thought about yet
        </div>
      </div>
    </main>
  );
}
