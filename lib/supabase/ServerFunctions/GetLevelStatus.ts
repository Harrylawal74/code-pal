import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

export async function getLevelStatus() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data, error } = await supabase
    .from("level1data")
    .select("foundations, control_flow")
    .eq("user_id", user.id)
    .single()

  if (error) {
    console.error("Error fetching status:", error)
    return null
  }

  return data as { foundations: number; control_flow: number }
}
