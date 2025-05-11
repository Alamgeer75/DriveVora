import React from "react";
import brands from "../assets/logo.js";
import '../components/Slider.css'; // we'll add keyframes here

const TopBrands = () => {
  return (
    <section className="bg-[#dad7cd] my-20 mx-6 py-8 rounded-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          🏷️ Top Car Brands
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Explore the most trusted and iconic car brands from around the world
        </p>

        {/* Scroll container */}
        <div className="overflow-hidden relative">
          <div className="flex gap-6 animate-slide-loop w-max">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="min-w-[150px] group rounded bg-orange-100 hover:bg-orange-500 flex flex-col items-center overflow-hidden hover:shadow-xl transition"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-md bg-gray-100 group-hover:scale-110 transition transform duration-300">
                  <img
                    src={brand.logo}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
