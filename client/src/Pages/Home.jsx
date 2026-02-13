import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="m-6 flex bg-[#E3F0FF] rounded-lg border border-gray-200 overflow-hidden">
        {/* Left Side: Text */}
        <div className="p-12 flex-grow">
          <h2 className="text-2xl font-medium text-gray-800">Latest trending</h2>
          <h1 className="text-5xl font-bold text-gray-900 mt-2">Electronic items</h1>
          <button className="mt-8 bg-white text-gray-900 px-8 py-3 rounded-lg font-bold shadow-sm hover:bg-gray-50 border transition">
            Source now
          </button>
        </div>
        
        {/* Right Side: Image Placeholder */}
        <div className="hidden lg:block w-1/3 bg-blue-200 relative">
          <div className="absolute inset-0 flex items-center justify-center text-blue-400">
            [Product Image from Figma]
          </div>
        </div>
      </section>

      {/* Deals Section Placeholder */}
      <section className="mx-6 p-6 bg-white border rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4">Deals and offers</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* Add product cards here */}
        </div>
      </section>
    </div>
  );
};

export default Home;