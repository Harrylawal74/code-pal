'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ConfirmEmail() {
  const router = useRouter()
  const search = useSearchParams()

  const [message, setMessage] = useState('Confirming your email…')

  useEffect(() => {
    const confirm = async () => {
      const token_hash = search.get('token_hash')
      const type = search.get('type')  // should be "email"

      if (!token_hash || !type) {
        setMessage("Invalid confirmation link")
        return
      }

      // 🔥 Correct Supabase method for token_hash-based email confirmations
      const { data, error } = await supabase.auth.verifyOtp({
        token_hash,
        type: "email",
      })

      if (error) {
        console.error(error)
        setMessage("Error verifying email: " + error.message)
        return
      }

      // 🎉 USER IS NOW LOGGED IN
      setMessage("Email confirmed! Redirecting…")
      router.replace("/learn")
    }

    confirm()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      {message}
    </div>
  )
}
