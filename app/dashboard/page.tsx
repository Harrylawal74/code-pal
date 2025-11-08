import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    // Redirect if not logged in
    return <div>You must be logged in.</div>
  }

  // Fetch user data from your database
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Welcome, {profile?.username || user.email}</h1>
      <p>Email: {user.email}</p>
    </div>
  )
}
