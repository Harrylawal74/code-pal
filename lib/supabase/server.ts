import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
export const dynamic = 'force-dynamic'

export function createClient() {
  const cookieStore = cookies()
  return createServerComponentClient({ cookies: () => cookieStore })
}
