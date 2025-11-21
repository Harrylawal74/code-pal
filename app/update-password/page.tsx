'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.auth.updateUser({ password })

    if (error) setMessage(error.message)
    else setMessage('Password updated! You can now log in.')
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
