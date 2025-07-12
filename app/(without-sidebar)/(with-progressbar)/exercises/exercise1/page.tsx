export function MultipleChoiceTab(){
    return(
        <form className="mx-5 my-5 bg-blue-900 px-5 py-7 rounded-4xl space-y-10 max-w-150 w-full flex flex-col items-center " >

            {/*Question Options*/}
            
            <h2 className="flex items-center justify-center text-white text-2xl font-bold bg-gray-500 rounded-4xl px-10 h-17 mb-15 gap-6 w-full ">Question</h2>
                
            <label className={" cursor-pointer bg-gray-500 rounded-4xl px-10 h-17 flex items-center gap-6 w-full mb-5 "}>
                <input type="radio" name="QuestionOption" value="Option A" /> A</label>
            

            
            
            <label className={"cursor-pointer bg-gray-500 rounded-4xl px-10 h-17 flex items-center gap-6 w-full mb-5"}>
            <input type="radio" name="QuestionOption" value="Option B" />B</label>
            

            
            
            <label className={"cursor-pointer bg-gray-500 rounded-4xl px-10 h-17 flex items-center gap-6 w-full mb-5"}>
            <input type="radio" name="QuestionOption" value="Option C" />C</label>
            

            
            
            <label className={"cursor-pointer bg-gray-500 rounded-4xl px-10 h-17 flex items-center gap-6 w-full mb-5"}>
            <input type="radio" name="QuestionOption" value="Option D" />D</label>
            

            
            
            <label className={"cursor-pointer bg-gray-500 rounded-4xl px-10 h-17 flex items-center gap-6 w-full mb-5 "}>
            <input type="radio" name="QuestionOption" value="Option E" />E</label>
            
        </form>
    )
}


export default function Exercise(){
    return(
        <main className="flex items-center rounded-2xl mx-4 my-10 px-5 py-5 w-full overflow-hidden ">
            <div className="flex w-full justify-center"><MultipleChoiceTab/></div>
            
        </main>
    )
}