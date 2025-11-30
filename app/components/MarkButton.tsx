import Link from "next/link"

type Props = {
    nextQuestionId?: string;
}

export default function MarkButton({ nextQuestionId }: Props) {
    
    /**const correctAnswer = ;*/
    return (
    <Link href={`/exercises/${nextQuestionId}`} className="w-full h-[70px] shadow-xl shadow-purple-900 hover:shadow-2xl bg-gradient-to-r from-[#a283f9] to-[#8f63f7] px-5 py-2 rounded-2xl flex justify-center items-center hover:translate-y-[-3px] transition-all duration-400">
        <button type="submit">Next Question</button>
    </Link>)
}