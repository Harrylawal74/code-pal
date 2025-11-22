'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else window.location.href = '/learn'
  }

  
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error.message)
    } else {
      // Redirect to reset password page
      window.location.href = '/reset-password'
    }
  }

  return (
    <div className='flex justify-center bg-gray-800 min-h-screen'>
      <form onSubmit={handleLogin} className="space-y-4 mt-25 bg-gray-700 p-5 pt-15 rounded-xl h-[440px] w-[400px]">
        <h1 className='font-bold text-xl'>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
        <button type="submit" className="bg-blue-600 text-white rounded p-2 mt-10">
          Log In
        </button>
        <a href="/signup" className='text-blue-400 text-sm hover:underline block mt-1'>Create an account !</a>
        <a href="" className="text-blue-400 text-sm hover:underline block mt-2 pointer" onClick={handleSignOut}>
          Forgot password?
        </a>
      </form>
    </div>
  )
}
