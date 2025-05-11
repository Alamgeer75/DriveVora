import { useState, useEffect } from 'react';
import featuredCars from '../assets/newData.js';

const FeaturedCars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1); // Default to 1
  const totalCards = featuredCars.length;

  // Dynamically update cards per view on mount and on resize
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerView(3);
      } else if (width >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView(); // Initial check
    window.addEventListener('resize', updateCardsPerView); // Listen to resize

    return () => window.removeEventListener('resize', updateCardsPerView); // Clean up
  }, []);

  const nextSlide = () => {
    if (currentIndex < totalCards - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="featuredCars">
      <div className="bg-[#dad7cd] my-20 mx-6 py-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          ⭐ Top Featured Cars
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Discover our top-picked vehicles, carefully selected for performance, style, and value
        </p>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {featuredCars.map((car) => (
              <div
                key={car.id}
                className="p-2"
                style={{
                  width: `${100 / cardsPerView}%`,
                  flexShrink: 0,
                }}
              >
                <div className="bg-orange-100 hover:bg-orange-200 rounded-lg shadow-md p-4 h-full overflow-hidden hover:shadow-xl transition">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="text-lg font-bold mt-4">{car.name}</h3>
                  <p className="text-gray-600">{car.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6 px-6">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= totalCards - cardsPerView}
              className="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
