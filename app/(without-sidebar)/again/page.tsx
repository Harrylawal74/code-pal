import level1 from "@/app/data/leveldata/level1";
import FillInTheBlanks from "@/app/components/FillInTheBlanks"; 
import FIBTyping from "@/app/components/FIBTyping";


export default function LessonPage() {
  const fibQuestion = level1.sections[0].exercises[0].questions.find(q => q.type === "FIB");

  if (!fibQuestion?.fibData) return null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-800 min-w-screen">
    <FIBTyping
      sentenceParts={fibQuestion.fibData.sentenceParts}
      options={fibQuestion.fibData.options}
      correctBlanks={fibQuestion.fibData.correctBlanks}
    />
    </main>
  );
}