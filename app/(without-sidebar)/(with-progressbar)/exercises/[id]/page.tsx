import MCQs from "@/app/components/MCQs"   
import level1 from "@/app/data/leveldata/level1"
import { Question } from "@/app/types/Questions";
import {notFound} from "next/navigation";




interface Props {
    params: {
        id: string;
    }
}


/** When the ExercisePage is called the id is passes as a prop "params" */
export default async function ExercisePage({ params }: Props){

    /**Extracts the id from params*/
    const {id} = await params;

    /** Need to create a condition that identifies which level to look for e.g. if ID is 2-1-1-1 then look
     in level 2 or 4-1-1-1-1 then look in level 4. This could also dictate the imports e.g. if level
     4 is being loaded then import level 4 and if an MCQ is being called then import the MCQ component*/
    
    /** Uses the id to find the corresponding question in level1.ts */
    const question: Question | undefined = level1.sections


        /** for each section take the exercises array
         * flattens all exercises into a single array
        */
        .flatMap((section) => section.exercises)


        /** for each exercise take its questions array
         * flattents all the questions into a single array
         */
        .flatMap((exercise) => exercise.questions)


        /** searches the array of questions generated above 
         * returns the Question with the matching id 
         * or undefined if not found
         */
        .find((question) => question.id === id);



    if (!question) {
        return notFound();
    }


    return(
        <main className="flex items-center rounded-2xl mx-4 my-10 px-5 py-5 w-full overflow-hidden ">
            {question.type === "MCQ" ? (
            <div className="flex w-full justify-center">
                <MCQs question={question}/>
                </div>
            ):(
                <p className="text-red-500">Unsupported question type</p>
            )}

            
            
        </main>
    );
}
