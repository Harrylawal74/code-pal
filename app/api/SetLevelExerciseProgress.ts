import { setLevel1CompletedExercise } from "@/lib/supabase/ServerFunctions/DatabaseLevelData";

export async function setLevel1CompletedExerciseAPI (questionID: string){
    console.log("Hello from api")
    await setLevel1CompletedExercise(questionID);
}
