'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`
    })

    if (error) setMessage(error.message)
    else setMessage('A reset link has been sent to your email.')
  }

  return (
    <div className='flex justify-center bg-gray-800 min-h-screen'>
      <form onSubmit={handleReset} className="space-y-4 mt-20 bg-gray-700 p-5 pt-15 rounded-xl h-[300px] w-[400px]">
        <h1 className='font-bold text-xl'>Reset Password</h1>

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button type="submit" className="bg-blue-600 text-white rounded p-2">
          Send Reset Email
        </button>

        {message && <p className="text-sm text-green-300">{message}</p>}
      </form>
    </div>
  )
}
