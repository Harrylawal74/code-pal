import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

export default async function TestPage() {
  const supabase = createServerComponentClient({ cookies })

  // 1. Get the logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return <div>You must log in.</div>
  }

  // 2. Fetch string from TestTable
  const { data, error } = await supabase
    .from("level1data")
    .select("foundations")
    .eq("user_id", user.id)
    .single()

  if (error) {
    console.error(error)
    return <div>Error loading message.</div>
  }

  if(!data.foundations){
    return <div>
      <h1 className="text-xl font-bold">Message from TestTable:</h1>
      No data found.</div>
  }
}