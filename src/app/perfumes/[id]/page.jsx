import Link from 'next/link';
import React from 'react'


async function getPerfume(id) {
    try{
        const res = await fetch(`${getBaseUrl}/api/perfumes/${id}`, {cache: "no-store"})

        if(!res.ok) return null

        return res.json()
    } catch {
        console.error("Error", error);
        return null 
    }
    
}

export default async function PerfumeDetails({ params }) {

    const { id } = await params
    const perfume = await getPerfume(id)
    
return (
    <div className="min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
           <Link href="/perfumes" className="hover:text-black">Shop</Link> / <span>{perfume.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[4/5]">
            <img src={perfume.image} alt={perfume.name} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{perfume.name}</h1>
            <p className="text-xl font-medium text-gray-900 mb-6">${perfume.price}</p>
            <p className="text-gray-600 mb-8">{perfume.description}</p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
