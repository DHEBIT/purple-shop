'use client'
import { useState } from 'react'
import { useCart } from './CartContext'

export default function ProductCard({ product }: { product: any }) {
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
      <div className="relative overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow text-gray-400 hover:text-purple-600">
          ♡
        </button>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h4>
        <p className="text-gray-500 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-purple-700 font-bold text-lg">GH₵ {product.price}</span>
          <button
            onClick={handleAddToCart}
            className={`${added ? 'bg-green-600' : 'bg-purple-700 hover:bg-purple-600'} text-white px-4 py-2 rounded-full text-sm transition-all flex items-center gap-2`}
          >
            {added ? '✅ Added!' : '🛒 Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}