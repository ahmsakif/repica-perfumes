
import ProductCard from "@/components/ProductCard";
import { getBaseUrl } from "@/lib/getBaseUrl";
import Link from "next/link";

async function getPerfumes() {
  try {

    const res = await fetch(`${getBaseUrl}/api/perfumes`, { 
      cache: "no-store" 
    });

    if (!res.ok) {
      throw new Error("Failed to fetch perfumes");
    }

    return res.json();
  } catch (error) {
    console.error("Load Error:", error);
    return []; 
  }
}

export default async function PerfumesPage() {
  const perfumes = await getPerfumes();

  return (
    <div className="min-h-screen  py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
            The Collection
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            All Fragrances
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Explore our exclusive range of signature scents, crafted for the modern individual.
          </p>
        </div>

        {/* --- Product Grid --- */}
        {perfumes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {perfumes.map((perfume) => (
              <ProductCard key={perfume.id} perfume={perfume} />
            ))}
          </div>
        ) : (
          /* Empty State (If API fails or is empty) */
          <div className="text-center py-20 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">No perfumes found</h3>
          </div>
        )}
        
        {/* --- Back Home Button --- */}
        <div className="mt-16 text-center">
          <Link href="/" className="text-sm font-bold text-gray-900 border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}