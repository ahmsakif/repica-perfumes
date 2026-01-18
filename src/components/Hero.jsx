import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] bg-black flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          // High-quality perfume/luxury aesthetic image
          backgroundImage: "url('https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* 2. Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        {/* Subheading */}
        <p className="text-gray-300 uppercase tracking-[0.2em] text-sm md:text-base mb-4 animate-fadeIn">
          New Collection 2026
        </p>

        {/* Main Headline (Uses your Jakarta font) */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
          Essence of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Elegance</span>
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Discover a curated selection of rare and authentic fragrances designed to define your presence.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/perfumes" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Shop Collection
          </Link>
          <Link 
            href="/login" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-500 text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300 backdrop-blur-sm"
          >
            Log In
          </Link>
        </div>
      </div>
      
      {/* Decorative Gradient at bottom to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </div>
  );
};

export default Hero;