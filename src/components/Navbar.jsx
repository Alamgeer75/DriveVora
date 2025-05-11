import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-orange-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="text-xl font-bold cursor-pointer" id="#home">DriveVora</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#featuredCars" className="hover:text-black">Featured Cars</a>
          <a href="#whyChooseUs" className="hover:text-black">Why Choose Us</a>
          <a href="#news" className="hover:text-black">News</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>

        {/* Right Button (visible on md and up) */}
        <div className="hidden md:block">
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#home" className="block text-lg hover:text-gray-300">Home</a>
          <a href="#featuredCars" className="block text-lg hover:text-gray-300">Featured Cars</a>
          <a href="#whyChooseUs" className="block text-lg hover:text-gray-300">Why Choose Us</a>
          <a href="#news" className="block text-lg hover:text-gray-300">News</a>
          <a href="#contact" className="block text-lg hover:text-gray-300">Contact</a>
          <button className="w-full bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
