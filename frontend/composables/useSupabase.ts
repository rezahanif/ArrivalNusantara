import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const config = useRuntimeConfig()
  
  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseAnonKey

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase URL or Key is missing from environment variables')
  }

  const supabase = createClient(supabaseUrl || '', supabaseKey || '')

  return {
    supabase,
    /**
     * Get current user session
     */
    async getSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      return session
    },
    /**
     * Sign in with email and password
     */
    async signIn(email: string, password: string) {
      return await supabase.auth.signInWithPassword({
        email,
        password,
      })
    },
    /**
     * Sign up with email and password
     */
    async signUp(email: string, password: string) {
      return await supabase.auth.signUp({
        email,
        password,
      })
    },
    /**
     * Sign out
     */
    async signOut() {
      return await supabase.auth.signOut()
    },
    /**
     * Reset password
     */
    async resetPassword(email: string) {
      return await supabase.auth.resetPasswordForEmail(email)
    },
    /**
     * Update user password
     */
    async updatePassword(newPassword: string) {
      return await supabase.auth.updateUser({
        password: newPassword,
      })
    },
  }
}
