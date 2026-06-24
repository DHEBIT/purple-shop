import { supabase } from '../lib/supabase'
import ProductCard from './ProductCard'
import Navbar from './Navbar'

export default async function Home() {
  const { data: products } = await supabase
    .from('products')
    .select('*')

  return (
    <main className="min-h-screen bg-white">

      <Navbar />

      <div className="bg-gradient-to-r from-purple-900 to-purple-600 text-center py-20 px-4">
        <h2 className="text-5xl font-bold text-white mb-4">Stay Covered In Style</h2>
        <p className="text-purple-200 text-lg mb-8">Premium insurance merchandise by Bernardventures</p>
        <div className="max-w-md mx-auto flex gap-2">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-3 rounded-l-full text-gray-800 outline-none bg-white"
          />
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-r-full font-bold transition-all">
            Search
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <h3 className="text-2xl font-bold mb-8 text-purple-900">Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products?.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <footer className="bg-purple-900 text-center py-8 text-purple-300 text-sm mt-12">
        © 2026 Bernardventures. All rights reserved. 💜
      </footer>

    </main>
  )
}