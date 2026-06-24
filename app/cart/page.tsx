'use client'
import React from 'react'
import { useCart } from '../CartContext'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

function PaystackButton({ total }: { total: number }) {
  const config = {
    reference: new Date().getTime().toString(),
    email: 'customer@example.com',
    amount: total * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
  }

  const [PaystackHook, setPaystackHook] = React.useState<any>(null)

  React.useEffect(() => {
    import('react-paystack').then((mod) => {
      setPaystackHook(() => mod.usePaystackPayment)
    })
  }, [])

  const handlePayment = () => {
    if (!PaystackHook) return
    const initializePayment = PaystackHook(config)
    initializePayment({
      onSuccess: () => alert('Payment successful! 🎉'),
      onClose: () => alert('Payment cancelled'),
    })
  }

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-purple-700 hover:bg-purple-600 text-white py-3 rounded-full font-bold transition-all mb-3"
    >
      Proceed to Checkout 💳
    </button>
  )
}

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, total, itemCount } = useCart()
  const router = useRouter()

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <nav className="bg-purple-900 px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => router.push('/')}>💜 Purple Shop</h1>
          <span className="text-purple-200 text-sm">by Bernardventures</span>
        </nav>
        <div className="text-center py-32">
          <p className="text-6xl mb-6">🛒</p>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Add some insurance merch to get started!</p>
          <button onClick={() => router.push('/')} className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-bold transition-all">
            Continue Shopping
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-purple-900 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => router.push('/')}>💜 Purple Shop</h1>
        <span className="text-purple-200 text-sm">by Bernardventures</span>
      </nav>
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Shopping Cart</h2>
          <span className="text-gray-500">{itemCount} item(s) in your cart</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-700">Cart Items</h3>
              <button onClick={clearCart} className="text-red-500 text-sm hover:underline">🗑 Clear All</button>
            </div>
            {cart.map((item: any) => (
              <div key={item.id} className="bg-white rounded-2xl p-5 shadow flex gap-4 items-center">
                <img src={item.image_url} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-gray-500 text-sm">GH₵ {item.price} each</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-purple-100 hover:bg-purple-200 text-purple-700 w-8 h-8 rounded-full font-bold">-</button>
                    <span className="font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-purple-100 hover:bg-purple-200 text-purple-700 w-8 h-8 rounded-full font-bold">+</button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-purple-700">GH₵ {(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 text-sm hover:underline mt-1">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 shadow h-fit">
            <h3 className="font-bold text-gray-800 text-lg mb-4">Order Summary</h3>
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="flex justify-between">
                <span>Subtotal ({itemCount} items)</span>
                <span>GH₵ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-gray-800 text-base">
                <span>Total</span>
                <span className="text-purple-700">GH₵ {total.toFixed(2)}</span>
              </div>
            </div>
            <PaystackButton total={total} />
            <button onClick={() => router.push('/')} className="w-full text-purple-700 border border-purple-300 py-3 rounded-full text-sm hover:bg-purple-50 transition-all">
              ← Continue Shopping
            </button>
            <div className="mt-4 space-y-2 text-xs text-gray-400">
              <p>🔒 Secure SSL checkout</p>
              <p>🚚 Free returns within 30 days</p>
              <p>💜 24/7 customer support</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-purple-900 text-center py-8 text-purple-300 text-sm mt-12">
        © 2026 Bernardventures. All rights reserved. 💜
      </footer>
    </main>
  )
}