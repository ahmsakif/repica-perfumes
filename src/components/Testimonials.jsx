import React from 'react'

export default function Testimonials() {
return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-12">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className='text-gray-600 italic mb-6'>"Absolutely love the collection. The shipping was fast and the packaging was beautiful."</p>
              <p className="font-bold text-sm uppercase tracking-wider">- Sarah J.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
