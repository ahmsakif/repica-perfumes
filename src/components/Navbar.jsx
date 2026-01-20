import Link from "next/link";
import AuthButton from "./AuthButton";
import DashboardButton from "./DashboardButton";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* --- LEFT: Logo --- */}
          {/* Uses standard font-bold and text-xl instead of daisy classes */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              Repica
            </Link>
          </div>

          {/* --- CENTER: Desktop Links --- */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/perfumes" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Shop Collection
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <DashboardButton />
          </div>

          {/* --- RIGHT: Login Button --- */}
          <div className="flex items-center space-x-4">
            {/* Mobile "Shop" Link (visible only on small screens) */}
            <Link href="/perfumes" className="md:hidden text-gray-600 text-sm font-medium">
              Shop
            </Link>

            <AuthButton />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;