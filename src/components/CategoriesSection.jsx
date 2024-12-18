// CategoriesSection.jsx
import React from 'react';

const CategoriesSection = () => {
  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Shop by Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Example category card */}
        <div className="bg-white p-6 border rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Category 1</h3>
          <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
