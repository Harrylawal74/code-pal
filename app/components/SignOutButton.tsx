'use client'

import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function SignOutButton() {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error.message)
    } else {
      // Redirect to login page or home
      router.push('/login')
      window.location.reload()
    }
  }

  return (
    <button
      onClick={handleSignOut}
      className="bg-purple-800 text-white p-2 rounded-xl shadow-[0_4px_0_0_#4c1d95] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#4c1d95] active:translate-y-[4px] active:shadow-none duration-150"
    >
      Sign Out
    </button>
  )
}

