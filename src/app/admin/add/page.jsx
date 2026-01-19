import AddItemForm from "@/components/form/AddItemForm";
import Link from "next/link";

export default function AddPerfumePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold font-serif">Add New Perfume</h1>
          <Link href="/perfumes" className="text-sm underline hover:text-gray-600">
            Cancel
          </Link>
        </div>

        {/* The Form Component */}
        <AddItemForm />

      </div>
    </div>
  );
}