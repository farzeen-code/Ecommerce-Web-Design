import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-200">
      {/* Brand Logo */}
      <div className="flex items-center text-blue-600 font-bold text-2xl">
        <span className="bg-blue-600 text-white rounded p-1 mr-2 text-lg">🛒</span> Brand
      </div>

      {/* Search Bar - Matching Figma blue border */}
      <div className="hidden md:flex flex-grow max-w-2xl mx-10">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full px-4 py-2 border-2 border-blue-600 rounded-l-lg outline-none"
        />
        <select className="border-y-2 border-r-2 border-blue-600 px-4 outline-none bg-gray-50 text-gray-600">
          <option>All category</option>
        </select>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-r-lg font-semibold hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      {/* Right Icons */}
      <div className="flex space-x-8 text-gray-500 text-xs text-center">
        <div className="cursor-pointer hover:text-blue-600">👤<p>Profile</p></div>
        <div className="cursor-pointer hover:text-blue-600">💬<p>Message</p></div>
        <div className="cursor-pointer hover:text-blue-600">❤️<p>Orders</p></div>
        <div className="text-blue-600 font-bold cursor-pointer">🛒<p>My cart</p></div>
      </div>
    </nav>
  );
};

export default Navbar;