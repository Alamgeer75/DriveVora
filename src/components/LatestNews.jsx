import React, { useState } from "react";
import latestNews from '../assets/latestNews.js'

const LatestNews = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <section className="bg-[#dad7cd] my-20 mx-6 py-8 rounded-lg" id="news">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">📰 Latest News & Updates</h2>
        <p className="text-center text-gray-600 mb-10">Stay updated with the latest automotive news, trends, and industry insights</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <div
              key={news.id}
              className="bg-orange-100 hover:bg-orange-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{news.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                <p className="text-sm text-gray-600 mb-2">{news.summary}</p>
                <button
                  className="text-orange-500 font-medium hover:underline"
                  onClick={() => setSelectedNews(news)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedNews && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                onClick={() => setSelectedNews(null)}
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold mb-2">{selectedNews.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{selectedNews.date}</p>
              <p className="text-gray-700">{selectedNews.content}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNews;
