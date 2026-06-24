import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'
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

    <footer className="bg-purple-900 mt-12 py-12 px-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-purple-300 text-sm mb-8">
    <div>
      <h4 className="text-white font-bold text-lg mb-3">💜 Purple Shop</h4>
      <p className="text-purple-300">Premium insurance merchandise by Bernardventures. Stay covered in style.</p>
    </div>
    <div>
      <h4 className="text-white font-bold mb-3">Quick Links</h4>
      <div className="space-y-2">
        <p><a href="/" className="hover:text-white transition-all">Home</a></p>
        <p><a href="/contact" className="hover:text-white transition-all">Contact Us</a></p>
        <p><a href="/cart" className="hover:text-white transition-all">Cart</a></p>
      </div>
    </div>
    <div>
      <h4 className="text-white font-bold mb-3">Follow Us</h4>
      <div className="flex gap-4 mt-2">
       <a href="https://github.com/DHEBIT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-purple-300 hover:text-white transition-all text-3xl"><FaGithub /></a>
       <a href="https://instagram.com/ben_tetteh_ae" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-purple-300 hover:text-pink-400 transition-all text-3xl"><FaInstagram /></a>
       <a href="mailto:drahbernard5@gmail.com" aria-label="Email" className="text-purple-300 hover:text-red-400 transition-all text-3xl"><FaEnvelope /></a>      </div>
    </div>
  </div>
  <div className="border-t border-purple-800 pt-6 text-center text-purple-400 text-xs">
    © 2026 Bernardventures. All rights reserved. 💜
  </div>
</footer>
    </main>
  )
}