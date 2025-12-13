"use server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export async function getLevelStatus() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("level1data")
    .select("foundations, control_flow")
    .eq("user_id", user.id)
    .single();

  if (error) {
    console.error("Error fetching status:", error);
    return null;
  }

  return data as { foundations: number; control_flow: number };
}

export async function getLevel1ExerciseProgress() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("level1exerciseprogress")
    .select("syntax_basics, if_statements, introduction_to_programming")
    .eq("user_id", user.id)
    .single();

  if (error) {
    console.error("Error fetching status:", error);
    return null;
  }

  return data as {
    syntax_basics: number;
    if_statements: number;
    introduction_to_programming: number;
  };
}

//Updating the database to reflect level progress
//Find where I'm using CharAt() and replace with this logic
export async function setHighestCompletedLevel1Exercise(questionID: string) {
  console.log("Hello world");
  const supabase = createServerComponentClient({ cookies });
  const questionIdParts = questionID.split("-");
  const section = Number(questionIdParts[1]);
  const exercise = Number(questionIdParts[2]);
  console.log(questionIdParts);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { error } = await supabase
    .from("level1exerciseprogress")
    .upsert({ user_id: user.id, syntax_basics: exercise }, { onConflict: "user_id" });

  if (error) {
    console.error(error);
    throw new Error("Failed to save latest exercise");
  }
}
