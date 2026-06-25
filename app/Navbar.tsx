'use client'
import { useCart } from './CartContext'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { itemCount } = useCart()
  const router = useRouter()

  return (
    <nav className="bg-purple-900 px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => router.push('/')}>💜 Purple Shop</h1>
      <div className="flex items-center gap-6">
       <div className="hidden md:flex items-center gap-6">
  <span className="text-purple-200 text-sm">by Bernardventures</span>
  <a href="/contact" className="text-purple-200 hover:text-white text-sm transition-all">Contact</a>
</div>
        <button onClick={() => router.push('/auth')} className="text-white text-sm border border-purple-400 px-4 py-1 rounded-full hover:bg-purple-700">Sign In</button>
        <div className="relative cursor-pointer" onClick={() => router.push('/cart')}>
          <span className="text-white text-2xl">🛒</span>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {itemCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}