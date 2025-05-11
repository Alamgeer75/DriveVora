import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center bg-no-repeat py-20 px-4 sm:py-32 sm:px-6 lg:px-8 flex items-center justify-center"
      style={{
        backgroundImage: "url('new3.jpg')",
      }}
    >
      <div className="text-center text-orange-500 shadow-md max-w-2xl">
        <h1 className="text-4xl sm:text-5xl py-4 font-bold mb-1 drop-shadow-lg">
        Explore the Best Cars for Every Lifestyle !
        </h1>
        <p className="text-2xl text-white sm:text-xl mb-2 drop-shadow-md">
          Explore top-rated cars with detailed reviews, specs, and the best deals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center mt-10 sm:mt-20 gap-4 sm:gap-16">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-orange-600 transition">
            Buy Now
          </button>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-xl shadow-md hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
