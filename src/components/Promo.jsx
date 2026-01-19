import Link from 'next/link';
import React from 'react'

export default function Promo() {
  return (
    <section className="py-24 bg-black text-white text-center px-4">
      <p className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-400">
        Limited Time Offer
      </p>
      <h2 className="text-4xl md:text-6xl font-serif mb-8">
        The Summer Collection
      </h2>
      <Link href="/perfumes" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition">
        Explore Now
      </Link>
    </section>
  );
}
