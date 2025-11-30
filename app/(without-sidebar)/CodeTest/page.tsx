import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

export default async function TestPage() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return <div>You must log in.</div>
  }

  const userId = user.id

  // ---------- SERVER ACTION ----------
async function saveMessage(formData: FormData) {
  "use server"

  const message = formData.get("message") as string

  const supabase = createServerComponentClient({ cookies })

  const { error } = await supabase
    .from("testtable")
    .upsert(
      { user_id: userId, message },
      { onConflict: "user_id" }
    )

  if (error) {
    console.error(error)
    throw new Error("Failed to save message")
  }
}

  // -----------------------------------

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Write Message to TestTable</h1>

      <form action={saveMessage} className="mt-4 space-y-4">
        <input
          name="message"
          placeholder="Type your message..."
          className="border p-2 w-full"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  )
}

