import React from "react";
import verified from '../assets/logo/verified.png'
import price from '../assets/logo/price.png'
import support from '../assets/logo/support.png'
import fast from '../assets/logo/fast.png'

const reasons = [
  {
    id: 1,
    title: "Verified Listings",
    description: "All our listings are verified for authenticity to ensure trust.",
    icon: verified,
  },
  {
    id: 2,
    title: "Best Market Prices",
    description: "Get the best deals and the most competitive prices in the market.",
    icon: price,
  },
  {
    id: 3,
    title: "Inspection & Support",
    description: "We offer vehicle inspection and post-purchase support.",
    icon: support,
  },
  {
    id: 4,
    title: "Fast & Secure Deals",
    description: "Close deals quickly and securely with our trusted platform.",
    icon: fast,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#dad7cd] my-20 mx-6 py-8 rounded-lg" id="whyChooseUs">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">🔑 Why Choose Us ?</h2>
        <p className="text-center text-gray-600 mb-10">Experience quality service, expert guidance, and a hassle-free car shopping journey</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-orange-100 hover:bg-orange-200 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
