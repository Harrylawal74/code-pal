'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  // 🔥 1. Restore session from URL token
  useEffect(() => {
    const exchangeSession = async () => {
      const { data, error } = await supabase.auth.exchangeCodeForSession(window.location.href)
      if (error) console.log('Session exchange error:', error.message)
    }
    exchangeSession()
  }, [])

  // 🔥 2. Update password USING the recovered session
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.auth.updateUser({ password })
    if (error) setMessage(error.message)
    else {
      setMessage('Password updated successfully! Redirecting to login…')
      setTimeout(() => router.push('/login'), 1500)
    }
  }

  return (
    <div className='flex justify-center bg-gray-800 min-h-screen'>
      <form onSubmit={handleUpdate} className="space-y-4 mt-20 bg-gray-700 p-5 pt-15 rounded-xl h-[300px] w-[400px]">
        <h1 className='font-bold text-xl'>Set New Password</h1>

        <input
          type="password"
          placeholder="New password"
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button type="submit" className="bg-blue-600 text-white rounded p-2">
          Update Password
        </button>

        {message && <p className="text-sm text-green-300">{message}</p>}
      </form>
    </div>
  )
}
