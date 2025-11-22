import MCQs from "@/app/components/MCQs";   
import level1 from "@/app/data/leveldata/level1";
import { Question, QuestionType } from "@/app/types/Questions";
import { notFound } from "next/navigation";
import RQs from "@/app/components/RQs";
import FillInTheBlanks from "@/app/components/FillInTheBlanks";
import FIBCode from "@/app/components/FIBCode";


// ----------------------------------------------
// 🎯 FIX: Define a unique interface for your props
// ----------------------------------------------
interface ExercisePageProps {
    params: {
        id: string;
    }
}
// ----------------------------------------------


// Map string types to components (No change needed here)
const componentMap: Record<QuestionType, React.FC<{ question: Question }>> = {
  // ... (rest of componentMap)
    MCQ: MCQs,
    RQ: RQs, 
    FIB: (props) => {
        const fibData = props.question.fibData!;
        return <FillInTheBlanks
            sentenceParts={fibData.sentenceParts}
            options={fibData.options}
            correctBlanks={fibData.correctBlanks}
        />;
    },
    FIBCode: (props) => {
        const fibData = props.question.fibData!;
        return <FIBCode
            sentenceParts={fibData.sentenceParts}
            options={fibData.options}
            correctBlanks={fibData.correctBlanks}
        />;
    },
};


/** When the ExercisePage is called the id is passes as a prop "params" */
export default function ExercisePage({
  params,
}: ExercisePageProps) { // <-- Applied the unique interface here
    /**Extracts the id from params*/
    const {id} = params;

    // ... (rest of the component logic)
    const question: Question | undefined = level1.sections
        .flatMap((section) => section.exercises)
        .flatMap((exercise) => exercise.questions)
        .find((question) => question.id === id);


    if (!question) {
        return notFound();
    }


    // Get the component based on question.type
    const Component = componentMap[question.type as QuestionType];

    return (
        <main className="flex justify-center px-5 w-full overflow-hidden bg-gray-800 h-screen">
        {Component ? (
            <div className="flex w-full justify-center">
            <Component question={question} />
            </div>
        ) : (
            <p className="text-red-500">Unsupported question type: {question.type}</p>
        )}
        </main>
    );
} 