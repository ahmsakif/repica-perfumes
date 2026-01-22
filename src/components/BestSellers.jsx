import React from 'react'
import ProductCard from './ProductCard';
import Link from 'next/link';

async function getBestSellers() {
  try {
    const res = await fetch("https://repica-perfumes.vercel.app/api/perfumes", { cache: "no-store" });
    const data = await res.json();
    return data.slice(0, 3);
  } catch (e) {
    return [];
  }
}

export default async function BestSellers() {

  const perfumes = await getBestSellers();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold font-serif text-gray-900">Best Sellers</h2>
          <Link href="/perfumes" className="text-sm font-bold border-b border-black pb-1">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perfumes.map((perfume) => (
            <ProductCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </div>
    </section>
  );
};
