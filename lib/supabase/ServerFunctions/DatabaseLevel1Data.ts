"use server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export async function getLevel1Status() {
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

export async function setLevel1Status() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const exerciseProgress = await getLevel1ExerciseProgress();

  let isStarted = false;
  let isCompleted = true;

  for (const key in exerciseProgress) {
    const value = exerciseProgress[key as keyof typeof exerciseProgress];
    isStarted = value > 0 ? true : isStarted;
    isCompleted = isCompleted === true && value === 12 ? true : false;
    console.log(isCompleted);
  }

  if (isCompleted === true) {
    const { error } = await supabase
      .from("level1data")
      .upsert({ user_id: user.id, foundations: 3 }, { onConflict: "user_id" });

    if (error) {
      console.error(error);
      throw new Error("Failed to save foundations level status as completed");
    } else {
      return null;
    }
  } else if (isStarted === true) {
    const { error } = await supabase
      .from("level1data")
      .upsert({ user_id: user.id, foundations: 2 }, { onConflict: "user_id" });

    if (error) {
      console.error(error);
      throw new Error("Failed to save foundations level status as in progress");
    } else {
      return null;
    }
  } else {
    const { error } = await supabase
      .from("level1data")
      .upsert({ user_id: user.id, foundations: 1 }, { onConflict: "user_id" });

    if (error) {
      console.error(error);
      throw new Error("Failed to save foundations level status as not started");
    } else {
      return null;
    }
  }
}

export async function getLevel1ExerciseProgress() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("level1exerciseprogress")
    .select("introduction_to_programming, if_statements, syntax_basics")
    .eq("user_id", user.id)
    .single();

  if (error) {
    console.error("Error fetching status:", error);
    return null;
  }

  return data as {
    introduction_to_programming: number;
    if_statements: number;
    syntax_basics: number;
  };
}

//Updating the database to reflect level progress
//Find where I'm using CharAt() and replace with this logic
export async function setHighestCompletedLevel1Exercise(questionID: string) {
  const supabase = createServerComponentClient({ cookies });

  const questionIdParts = questionID.split("-");
  const sectionNumber = Number(questionIdParts[1]) - 1;
  const exerciseNumber = Number(questionIdParts[2]);

  const sections = [
    "introduction_to_programming",
    "if_statements",
    "syntax_basics",
  ] as const;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const exerciseProgress = await getLevel1ExerciseProgress();
  if (!exerciseProgress) {
    console.error("Exercise progress not available");
    return null;
  }

  const currentProgress = exerciseProgress[sections[sectionNumber]];

  if (currentProgress < exerciseNumber) {
    const { error } = await supabase
      .from("level1exerciseprogress")
      .upsert(
        { user_id: user.id, [sections[sectionNumber]]: exerciseNumber },
        { onConflict: "user_id" }
      );

    if (error) {
      console.error(error);
      throw new Error("Failed to save latest exercise");
    }
  } else {
    return null;
  }
}
