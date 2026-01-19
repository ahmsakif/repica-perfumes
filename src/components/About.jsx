import React from 'react'

export default function About() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1000&auto=format&fit=crop"
                        alt="About Repica"
                        className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-serif font-bold mb-6">The Art of Scent</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        At Repica, we believe that a fragrance is more than just a smell—it is a memory, an emotion, and a statement.
                        Our collection is carefully curated to offer you the most exquisite olfactory experiences from around the globe.
                    </p>
                    <div className="grid grid-cols-2 gap-8 mt-8">
                        <div>
                            <span className="block text-3xl font-bold">50+</span>
                            <span className="text-gray-500">Luxury Brands</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold">10k+</span>
                            <span className="text-gray-500">Happy Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
