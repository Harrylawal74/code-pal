import MCQs from "@/app/components/MCQs";
import level1 from "@/app/data/leveldata/level1";
import level2 from "@/app/data/leveldata/level2";
import { Question, QuestionType } from "@/app/types/Questions";
import { notFound } from "next/navigation";
import RQs from "@/app/components/RQs"; // Assuming you have a component for RQ type questions

// Import the FillInTheBlanks component for FIB questions
import FillInTheBlanks from "@/app/components/FillInTheBlanks"; // <-- Added import for FIB component
import FIBCode from "@/app/components/FIBCode";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

// Map string types to components
// Each component accepts a question prip of type Question
// e.g when question.type === "MCQ" then the MCQs component is rendered
// Note: I was going to use a series of if statements to check the type of question but
// that had an O(n) time complexity, whereas this has an O(1) time complexity
const componentMap: Record<QuestionType, React.FC<{ question: Question }>> = {
  MCQ: MCQs,
  RQ: RQs,
  FIB: (props) => {
    // Wrap the FIB component to pass only fibData props to match the expected props shape
    const fibData = props.question.fibData!;
    return (
      <FillInTheBlanks
        question={props.question}
        sentenceParts={fibData.sentenceParts}
        options={fibData.options}
        correctBlanks={fibData.correctBlanks}
      />
    );
  },
  FIBCode: (props) => {
    // Wrap the FIB component to pass only fibData props to match the expected props shape
    const fibData = props.question.fibData!;
    return (
      <FIBCode
        question={props.question}
        sentenceParts={fibData.sentenceParts}
        options={fibData.options}
        correctBlanks={fibData.correctBlanks}
      />
    );
  },
};

/** When the ExercisePage is called the id is passes as a prop "params" */
export default async function ExercisePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  /**Extracts the id from params*/
  const { id } = await params;

  /** Need to create a condition that identifies which level to look for e.g. if ID is 2-1-1-1 then look
     in level 2 or 4-1-1-1-1 then look in level 4. This could also dictate the imports e.g. if level
     4 is being loaded then import level 4 and if an MCQ is being called then import the MCQ component*/

  /** Uses the id to find the corresponding question in level1.ts */
  const question: Question | undefined = (
    id.charAt(0) === "1" ? level1.sections : level2.sections
  )
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

  // Get the component based on question.type
  const Component = componentMap[question.type as QuestionType];

  /** Renders the correct component and passes the question object so that the question
   * information can be displayed
   */
  return (
    <main className="flex justify-center px-5 w-full overflow-hidden bg-gray-800 h-screen pt-30">
      {Component ? (
        <div className="flex w-full justify-center">
          <Component question={question} />
        </div>
      ) : (
        <p className="text-red-500">
          Unsupported question type: {question.type}
        </p>
      )}
    </main>
  );
}
