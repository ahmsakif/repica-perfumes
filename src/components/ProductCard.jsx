import Link from "next/link";

const ProductCard = ({ perfume }) => {
  return (
    <Link href={`/perfumes/${perfume.id}`} className="group block h-full">
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-80 w-full overflow-hidden bg-gray-100">
          <img 
            src={perfume.image} 
            alt={perfume.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          {perfume.isFeatured && (
            <span className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
              Bestseller
            </span>
          )}
        </div>

        {/* Details */}
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">
            {perfume.brand}
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition">
            {perfume.name}
          </h3>
          <div className="mt-auto flex justify-between items-center pt-4">
            <span className="text-lg font-medium text-gray-900">
              ${perfume.price}
            </span>
            <span className="text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 group-hover:decoration-black transition">
              View Scent
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;