
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
    /** The main tag is the whole area minus the sidebar (when visible) items are stacked on top of each other
     * Items are centered 
     */
    <main className="flex-col flex-start justify-center overflow-hidden w-full">
        {/**This will be the top bar of the page */}
        <div className="flex justify-center">Top bar. This will contain hearts, streak etc</div>

        {/**This container holds the two columns in the center of the page, items inside are centered 
         * This container will grow wide enough to fit its contents without wrapping
         * This container will shrink down but not below the minimum width of its contents 
        */}
        <div className=" flex justify-center overflow-auto gap-15 mt-10 min-w-max px-4">
        
            {/* main exercises column. e.g. syntax basics followed by exercise squares */}
            {/*This column (left) shrinks down to a fixed with and is always in page view */}
            <div className="flex justify-center min-w-[212px] ">
                <section className="mb-8">
                <ExerciseSectionTabTemplate />
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
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

            {/* This column does not shrink or grow when the page is resized. it has a fixed width and overflows off the the
            right when the page is too small*/}
            <div className="flex justify-center flex-shrink-0 w-[364px]">
                <section className="mb-8">
                <ExerciseSectionTabTemplate />
                    <div className="grid grid-cols-5 gap-4 mt-4">
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
