'use client'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import { FaGoogle } from 'react-icons/fa'

export default function AuthPage() {
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://purple-shop-1iss.vercel.app'
      }
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-purple-900 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => router.push('/')}>💜 Purple Shop</h1>
        <span className="text-purple-200 text-sm">by Bernardventures</span>
      </nav>

      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md border border-purple-100 text-center">
          <p className="text-5xl mb-4">💜</p>
          <h2 className="text-2xl font-bold text-purple-900 mb-2">Welcome to Purple Shop</h2>
          <p className="text-gray-500 mb-8">Sign in to track your orders and checkout faster</p>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-purple-400 text-gray-700 py-3 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
          >
            <FaGoogle className="text-red-500 text-xl" />
            Continue with Google
          </button>

          <p className="text-xs text-gray-400 mt-6">
            By signing in you agree to our terms of service. Your data is safe with us. 🔒
          </p>

          <button
            onClick={() => router.push('/')}
            className="mt-4 text-purple-700 text-sm hover:underline"
          >
            ← Back to shop
          </button>
        </div>
      </div>

      <footer className="bg-purple-900 text-center py-6 text-purple-300 text-sm">
        © 2026 Bernardventures. All rights reserved. 💜
      </footer>
    </main>
  )
}