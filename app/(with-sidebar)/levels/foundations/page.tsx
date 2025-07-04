
export function ExerciseBox(){
    return(
        <div className=" w-15 h-15 rounded-xl bg-[#4b5563] transition-all duration-300 hover:scale-110 active "></div>
    )
}


/** This is the ExerciseSectionTab Template
 * * It is used to display a section of exercieses within a level.
 */
export function ExerciseSectionTabTemplate(){
    return(
        <div className="h-20 rounded-xl bg-[#2a6aee] flex justify-center items-center text-white text-sm md:text-xl sm:text-lg font-bold">
            Syntax Basics
        </div>
    )
}

/** To-do
 * *Need to create differenct exercise section tabs
 * *Copy the method used in the LevelTabTemplate to pass props to the template. above^^^
 */



export default function FoundationsPage() {
  return (
    <main className="flex-col flex-start justify-center overflow-auto gap-15 w-full">
        <div className="flex justify-center">Top bar. This will contain hearts, streak etc</div>
        <div className=" flex justify-center overflow-auto gap-15 mt-10">
        
            {/* main exercises column. e.g. syntax basics followed by exercise squares */}
            <div className=" ">
                <section className="mb-8">
                <ExerciseSectionTabTemplate />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                    </div>
                </section>
            </div>

            <div className="">
                <section className="mb-8">
                <ExerciseSectionTabTemplate />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                        <ExerciseBox />
                    </div>
                </section>
            </div>
            </div>
    </main>
  );
}
