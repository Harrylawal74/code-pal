
export function ExerciseBox(){
    return(
        <div className=" w-21 h-21 rounded-xl bg-red-900 "></div>
    )
}

export function ExerciseSectionTab(){
    return(
        <div className="h-20 w-full rounded-xl bg-blue-300"></div>
    )
}


export default function FoundationsPage() {
    return(
        <div className="name-foundationsPage w-150 pt-20 px-15">
            <ExerciseSectionTab/>
                <div className="w-full inline-grid md:grid-cols-5 sm:grid-cols-2 gap-4 sm:mt-10">
        
                    <ExerciseBox/>
                    <ExerciseBox/>
                    <ExerciseBox/>
                    <ExerciseBox/>
                    <ExerciseBox/>
                    <ExerciseBox/>
                    <ExerciseBox/>
                    <ExerciseBox/>
                    <ExerciseBox/>
                    <ExerciseBox/>

                </div>
        </div>
    )
}