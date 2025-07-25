import { Question } from "../types/Questions"   

export default function RQs({question}: {question: Question}){
    return(
        <main>
            <div>hello world</div>
        <div>{question.question}</div>
        </main>
        
    )
}