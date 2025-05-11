import React, { useState, useEffect } from "react";
import testimonials from '../assets/testimonials.js'

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#dad7cd] my-20 mx-6 py-8 rounded-lg">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">💬 Customer Reviews</h2>
        <p className="text-center text-gray-600 mb-10">Hear what our happy customers have to say about their car buying experience</p>
        <div className="relative">
          <div className="bg-orange-100 hover:bg-orange-200 p-6 rounded-2xl overflow-hidden hover:shadow-xl shadow-md max-w-xl mx-auto transition-all duration-500">
            <img
              src={testimonials[current].photo}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 italic mb-4">“{testimonials[current].review}”</p>
            <div className="text-yellow-400 mb-2">
              {"★".repeat(testimonials[current].rating)}{"☆".repeat(5 - testimonials[current].rating)}
            </div>
            <h4 className="text-lg font-semibold text-gray-800">{testimonials[current].name}</h4>
          </div>

          {/* Controls */}
          <div className="flex justify-between mt-4 px-6">
            <button
              onClick={prevSlide}
              className="text-gray-500 font-extrabold hover:text-gray-800 text-xl"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="text-gray-500 hover:text-gray-800 text-xl"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
