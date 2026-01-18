import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif tracking-tight">Repica.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Curating the world's finest fragrances for the modern individual. 
              Authentic. Timeless. Yours.
            </p>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/perfumes" className="hover:text-white transition">All Perfumes</Link></li>
              <li><Link href="/perfumes" className="hover:text-white transition">Best Sellers</Link></li>
              <li><Link href="/perfumes" className="hover:text-white transition">New Arrivals</Link></li>
              <li><Link href="/perfumes" className="hover:text-white transition">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Returns & Exchanges</Link></li>
              <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay in the Know</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for exclusive drops and early access.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-900 border border-gray-700 text-white text-sm rounded px-3 py-2 focus:outline-none focus:border-gray-500 transition"
              />
              <button className="bg-white text-black text-sm font-bold px-4 py-2 rounded hover:bg-gray-200 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Repica Scents. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;