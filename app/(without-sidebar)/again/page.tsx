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
    .from("testtable")
    .select("message")
    .eq("user_id", user.id)
    .single()

  if (error) {
    console.error(error)
    return <div>Error loading message.</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Message from TestTable:</h1>
      <p className="mt-4 text-lg">{data.message}</p>
    </div>
  )
}

{/** 

  
const [correctCount, setCorrectCount] = useState(0);
const [answeredCount, setAnsweredCount] = useState(0);

const markQuestion = (isCorrect) => {
  setAnsweredCount(prev => prev + 1);
  if (isCorrect) {
    setCorrectCount(prev => prev + 1);
  }
};

const hasPassed = correctCount >= 7;

const resetQuiz = () => {
  setCorrectCount(0);
  setAnsweredCount(0);
};


*/}