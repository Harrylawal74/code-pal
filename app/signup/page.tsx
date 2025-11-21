'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Check your email for a confirmation link.')
      // Optional: redirect after 2 sec
      setTimeout(() => router.push('/login'), 2000)
    }
  }

  return (
    <div className='flex justify-center bg-gray-800 min-h-screen'>
      <form onSubmit={handleSignup} className="space-y-4 mt-20 bg-gray-700 p-5 pt-15 rounded-xl h-[400px] w-[400px]">
        <h1 className='font-bold text-xl'>Sign Up</h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button type="submit" className="bg-blue-600 text-white rounded p-2 mt-10">
          Create Account
        </button>

        {message && <p className="text-sm text-blue-300">{message}</p>}

        <a href="/login" className="text-sm text-blue-400 hover:underline block">
          Already have an account? Log in
        </a>
      </form>
    </div>
  )
}
