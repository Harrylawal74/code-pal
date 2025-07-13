import FourMCQs from "@/app/components/MCQs"    
import level1 from "@/app/data/leveldata/level1"
import { Question } from "@/app/types/Questions";
import {notFound} from "next/navigation";

interface Props {
    params: {
        id: string;
    }
}


export default function ExercisePage({ params }: Props){
    const {id} = params;

    const question: Question | undefined = level1.sections
        .flatMap((section) => section.exercises)
        .flatMap((exercise) => exercise.questions)
        .find((question) => question.id === id);



    if (!question) {
        return notFound();
    }


    return(
        <main className="flex items-center rounded-2xl mx-4 my-10 px-5 py-5 w-full overflow-hidden ">
            {question.type === "MCQ4" ? (
            <div className="flex w-full justify-center">
                <FourMCQs question={question}/>
                </div>
            ) : (
                <p className="text-red-500">Unsupported question type</p>
            )}
            
        </main>
    );
}