import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#dad7cd] my-20 mx-6 py-8 rounded-lg" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">📞 Get in Touch</h2>
        <p className="text-center text-gray-600 mb-10">Have questions or want to work with us? Send us a message!</p>

        <form className="bg-orange-100 hover:bg-orange-200 rounded-2xl p-6 space-y-6 shadow-md overflow-hidden hover:shadow-xl transition">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              placeholder="Your message..."
              rows="4"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
