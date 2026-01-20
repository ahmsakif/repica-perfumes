import Link from 'next/link';
import React from 'react'

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* 1. Image Side (Visual) */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-2xl transform -translate-x-4 -translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1000&auto=format&fit=crop" 
              alt="Perfume Craftsmanship" 
              className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover z-10"
            />
          </div>

          {/* 2. Content Side (Story) */}
          <div className="w-full md:w-1/2">
            <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
              The Art of <span className="italic text-gray-600">Scent</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Repica, we believe that a fragrance is more than just a smell—it is a memory, an emotion, and a statement. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2026, our mission is to curate the world's most exquisite olfactory experiences. Every bottle in our collection is hand-picked for its authenticity, longevity, and unique character.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-8 mb-8">
              <div>
                <span className="block text-3xl font-bold text-black">50+</span>
                <span className="text-sm text-gray-500">Luxury Brands</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-black">10k+</span>
                <span className="text-sm text-gray-500">Happy Clients</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-black">100%</span>
                <span className="text-sm text-gray-500">Authentic</span>
              </div>
            </div>

            <Link 
              href="/perfumes" 
              className="text-black font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition"
            >
              Read Full Story
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
