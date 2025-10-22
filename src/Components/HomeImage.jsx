import React, { useState } from "react";

const images = [
  "https://labartisan.net/demo/gowala/assets/images/portfolio/29.jpg",
  "https://labartisan.net/demo/gowala/assets/images/portfolio/30.jpg",
  "https://labartisan.net/demo/gowala/assets/images/portfolio/31.jpg",
  "https://labartisan.net/demo/gowala/assets/images/portfolio/32.jpg",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              alt={`Cow ${idx + 1}`}
              className="w-full md:h-96 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/60 to-sky-800/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={() => setSelectedImg(img)}
                className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-200"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
            <img
              src={selectedImg}
              alt="Selected Cow"
              className="w-full md:h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
