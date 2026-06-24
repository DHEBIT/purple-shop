'use client'
import {FaGithub, FaInstagram, FaEnvelope} from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ContactPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields')
      return
    }
    setSent(true)
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-purple-900 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => router.push('/')}>💜 Purple Shop</h1>
        <span className="text-purple-200 text-sm">by Bernardventures</span>
      </nav>

      <div className="bg-gradient-to-r from-purple-900 to-purple-600 text-center py-16 px-4">
        <h2 className="text-4xl font-bold text-white mb-3">We'd Love To Hear From You</h2>
        <p className="text-purple-200 text-lg">Reach out and we'll get back to you as soon as possible</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Message Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
          <h3 className="text-2xl font-bold text-purple-900 mb-6">Send Us a Message</h3>
          {sent ? (
            <div className="text-center py-12">
              <p className="text-5xl mb-4">💜</p>
              <h4 className="text-xl font-bold text-purple-900 mb-2">Message Sent!</h4>
              <p className="text-gray-500">We'll get back to you within 24 hours.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-purple-700 underline text-sm">Send another message</button>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  placeholder="How can we help you?"
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-all resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-purple-700 hover:bg-purple-600 text-white py-3 rounded-full font-bold transition-all"
              >
                Send Message 💜
              </button>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">Contact Information</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a href="mailto:drahbernard5@gmail.com" className="text-purple-700 hover:underline">drahbernard5@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <a href="tel:+233559583322" className="text-purple-700 hover:underline">+233 55 958 3322</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">123 Coffie Street, Ghana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-900 mb-4">🕐 Working Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-semibold text-gray-800">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="font-semibold text-gray-800">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="font-semibold text-red-500">Closed</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Follow Us</h3>
            <div className="flex gap-6 mt-2">
           <a href="https://github.com/DHEBIT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-purple-700 hover:text-black transition-all text-4xl"><FaGithub /></a>
           <a href="https://instagram.com/ben_tetteh_ae" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-purple-700 hover:text-pink-500 transition-all text-4xl"><FaInstagram /></a>
           <a href="mailto:drahbernard5@gmail.com" aria-label="Email" className="text-purple-700 hover:text-red-500 transition-all text-4xl"><FaEnvelope /></a>
       </div>
          </div>
        </div>
      </div>

      <footer className="bg-purple-900 text-center py-8 text-purple-300 text-sm">
        © 2026 Bernardventures. All rights reserved. 💜
      </footer>
    </main>
  )
}