import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white pt-8 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pb-6 space-y-6 md:space-y-0">
        {/* Left: Logo or Text */}
        <div className="text-lg font-bold">
          DriveVora © {new Date().getFullYear()}
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-center">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#featuredCars" className="hover:text-black">Featured</a>
          <a href="#whyChooseUs" className="hover:text-black">Why Us</a>
          <a href="#news" className="hover:text-black">News</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-xl justify-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Horizontal Line and Bottom Text */}
      <hr className="border-white" />
      <p className="text-center text-sm text-white py-4 font-bold">
        Developed By : Alamgeer Ghanghro
      </p>
    </footer>
  );
};

export default Footer;
