// FeaturedProducts.jsx
import React from 'react';

const FeaturedProducts = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example of a product card */}
        <div className="bg-white p-4 border rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40 object-cover mb-4" />
          <h3 className="text-xl font-semibold">Product Name</h3>
          <p className="text-sm text-gray-500">Description</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-xl font-bold">$19.99</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full">Add to Cart</button>
          </div>
        </div>
        <div className="bg-white p-4 border rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40 object-cover mb-4" />
          <h3 className="text-xl font-semibold">Product Name</h3>
          <p className="text-sm text-gray-500">Description</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-xl font-bold">$19.99</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
