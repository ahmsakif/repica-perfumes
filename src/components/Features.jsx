import React from 'react'

export default function Features() {
return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Feature 1 */}
        <div className="p-4">
          <div className="text-3xl mb-3">🚚</div>
          <h3 className="font-bold text-gray-900">Free Shipping</h3>
          <p className="text-sm text-gray-500 mt-1">On all orders over $100</p>
        </div>
        {/* Feature 2 */}
        <div className="p-4">
          <div className="text-3xl mb-3">✨</div>
          <h3 className="font-bold text-gray-900">100% Authentic</h3>
          <p className="text-sm text-gray-500 mt-1">Sourced directly from brands</p>
        </div>
        {/* Feature 3 */}
        <div className="p-4">
          <div className="text-3xl mb-3">↩️</div>
          <h3 className="font-bold text-gray-900">Easy Returns</h3>
          <p className="text-sm text-gray-500 mt-1">30-day money back guarantee</p>
        </div>
        {/* Feature 4 */}
        <div className="p-4">
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="font-bold text-gray-900">Secure Payment</h3>
          <p className="text-sm text-gray-500 mt-1">Encrypted transactions</p>
        </div>
      </div>
    </section>
  );
};

