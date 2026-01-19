"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddItemForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    image: "", 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send data to OUR internal API
      const res = await fetch("/api/perfumes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Perfume Added Successfully!");
        router.push("/perfumes"); // Redirect to shop
        router.refresh();         // Refresh data
      } else {
        alert("Failed to add perfume");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name */}
        <div>
          <label className="block text-sm font-bold mb-2">Perfume Name</label>
          <input 
            name="name" 
            required 
            placeholder="e.g. Midnight Santal"
            className="w-full px-4 py-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-black outline-none transition"
            onChange={handleChange}
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-bold mb-2">Brand</label>
          <input 
            name="brand" 
            required 
            placeholder="e.g. Chanel"
            className="w-full px-4 py-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-black outline-none transition"
            onChange={handleChange}
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-bold mb-2">Price ($)</label>
          <input 
            name="price" 
            type="number" 
            required 
            placeholder="125"
            className="w-full px-4 py-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-black outline-none transition"
            onChange={handleChange}
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-bold mb-2">Image URL</label>
          <input 
            name="image" 
            type="url"
            required 
            placeholder="https://..."
            className="w-full px-4 py-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-black outline-none transition"
            onChange={handleChange}
          />
          <p className="text-xs text-gray-400 mt-1">Paste a link from Unsplash or Google Images</p>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-bold mb-2">Description</label>
          <textarea 
            name="description" 
            required 
            rows="4"
            placeholder="Describe the scent notes..."
            className="w-full px-4 py-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-black outline-none transition"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add to Collection"}
        </button>

      </form>
    </div>
  );
}