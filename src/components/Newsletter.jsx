import React from 'react'

export default function Newsletter() {
return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Inner Circle</h2>
        <p className="text-gray-500 mb-8">Subscribe to receive exclusive offers and early access to new drops.</p>
        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
          />
          <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
