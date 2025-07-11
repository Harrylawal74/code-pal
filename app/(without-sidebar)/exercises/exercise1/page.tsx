export function MultipleChoiceTab(){
    return(
        <form className="mx-5 my-5 bg-gray-500 px-5 py-5 rounded-4xl gap-10" >
    
            <div className="bg-red-500"> 
                <input className="" type="radio" name="question1" value="q1" />
                <label className="m-10">q</label>
            </div>
            <div className="bg-red-500">
            <input type="radio" name="question1" value="q1" />
            <label className="m-10">a</label>
            </div>
        </form>
    )
}


export default function Exercise(){
    return(
        <div className="rounded-2xl mx-4 my-10 px-5 py-5 flex flex-col justify-center">
            <MultipleChoiceTab/>

        </div>
    )
}