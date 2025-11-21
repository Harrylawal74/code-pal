'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const run = async () => {
      // This will handle the session from the email link (magic link or verify email)
      await supabase.auth.exchangeCodeForSession(window.location.href)
      router.push('/learn')   // change this to wherever you want them to land
    }

    run()
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      Verifying email…
    </div>
  )
}
