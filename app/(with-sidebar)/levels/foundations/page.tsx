import Link from "next/link";
import ExerciseBox from "../../../components/ExerciseBox";
import level1 from "../../../data/leveldata/level1";
import React from "react";
import { getLevel1ExerciseProgress } from "@/lib/supabase/ServerFunctions/DatabaseLevel1Data";

type Props = {
  title: string;
  bgcolor: string;
};

/** This is the ExerciseSectionTab Template
 * * It is used to display a section of exercieses within a level.
 */

function ExerciseSectionTabTemplate({ title, bgcolor }: Props) {
  return (
    <div
      className={`h-20 rounded-xl ${bgcolor} flex justify-center items-center text-white text-sm md:text-xl sm:text-lg font-bold`}
    >
      {title}
    </div>
  );
}

/** To-do
 * *Need to create differenct exercise section tabs
 * *Copy the method used in the LevelTabTemplate to pass props to the template. above^^^
 */

export default async function FoundationsPage() {
  
  async function isExerciseCompleted(
    sectionIndex: number,
    exerciseIndex: number
  ): Promise<boolean> {
    const progress = await getLevel1ExerciseProgress();
    if (!progress) return false;

    if (exerciseIndex <= Object.values(progress)[sectionIndex]) {
      return true;
    } else {
      return false;
    }
  }

  // Calculate completed for section 1
  const section1Completed = await Promise.all(
    level1.sections[0].exercises.map((_, index) =>
      isExerciseCompleted(0, index)
    )
  );
  // Calculate completed for section 2
  const section2Completed = await Promise.all(
    level1.sections[1].exercises.map((_, index) =>
      isExerciseCompleted(1, index)
    )
  );
  // Calculate completed for section 3
  const section3Completed = await Promise.all(
    level1.sections[2].exercises.map((_, index) =>
      isExerciseCompleted(2, index)
    )
  );

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
        <div className="flex-col justify-center min-w-[212px]">
          {/*Syntax basics Section*/}
          <section className="mb-8">
            <ExerciseSectionTabTemplate
              title={level1.sections[0].title}
              bgcolor={"bg-purple-500"}
            />
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
              {level1.sections[0].exercises.map((exercise, index) =>
                section1Completed[index] ? (
                  <Link
                    key={index}
                    href={`/exercises/${exercise.questions[0].id}`}
                  >
                    <ExerciseBox completed={section1Completed[index]} />
                  </Link>
                ) : (
                  <span key={index}>
                    <ExerciseBox completed={section1Completed[index]} />
                  </span>
                )
              )}
            </div>
          </section>
          {/*If Statements Section*/}
          <section className="mb-8 mt-20">
            <ExerciseSectionTabTemplate
              title={level1.sections[1].title}
              bgcolor={"bg-purple-500"}
            />
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
              {level1.sections[1].exercises.map((exercise, index) =>
                section2Completed[index] ? (
                  <Link
                    key={index}
                    href={`/exercises/${exercise.questions[0].id}`}
                  >
                    <ExerciseBox completed={section2Completed[index]} />
                  </Link>
                ) : (
                  <span key={index}>
                    <ExerciseBox completed={section2Completed[index]} />
                  </span>
                )
              )}
            </div>
          </section>

          <section className="mb-8 mt-20">
            <ExerciseSectionTabTemplate
              title={level1.sections[2].title}
              bgcolor={"bg-purple-500"}
            />
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
              {level1.sections[2].exercises.map((exercise, index) =>
                section3Completed[index] ? (
                  <Link
                    key={index}
                    href={`/exercises/${exercise.questions[0].id}`}
                  >
                    <ExerciseBox completed={section3Completed[index]} />
                  </Link>
                ) : (
                  <span key={index}>
                    <ExerciseBox completed={section3Completed[index]} />
                  </span>
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
