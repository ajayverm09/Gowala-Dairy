import React, { useState } from "react";

const GowalaSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-stretch w-full md:max-h-[80vh]">
        {/* Left - Image */}
        <div className="w-full lg:w-1/2 group relative">
          <img
            src="https://labartisan.net/demo/gowala/assets/images/portfolio/31.jpg"
            alt="Gowala Farm"
            className="w-full h-full object-cover"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="bg-white bg-opacity-75 group-hover:bg-red-700 p-4 rounded-full shadow-lg focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 group-hover:text-white text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14.752 11.168l-4.586-2.61A1 1 0 009 9.388v5.223a1 1 0 001.166.98l4.586-1.557a1 1 0 000-1.866z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right - Content with background image */}
        <div
          className="w-full lg:w-1/2 bg-cover bg-center bg-no-repeat p-10 flex flex-col justify-center"
          style={{
            backgroundImage:
              "url('https://labartisan.net/demo/gowala/assets/images/about/03.jpg')",
          }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-lime-700 mb-4">
            Welcome To Our Gowala Farm
          </h2>
          <p className="text-gray-700 mb-8">
            Continually productize compelling quality for packed with all elated
            themes Setting up to website and creating marke Poston
          </p>

          {/* Features */}
          <div className="space-y-6">
            {[
              { number: "01", title: "20 Years of Experience" },
              { number: "02", title: "Natural & Organic" },
              { number: "03", title: "Modern Technique" },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-lime-500 text-white font-bold rounded-full">
                  {item.number}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm">
                    Marke Poston Bestng Practices Chain Through <br />
                    Practices eractive Fashion
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-3xl mx-4 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/fEErySYqItI?autoplay=1"
              title="Gowala Farm Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black/5 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setIsVideoOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GowalaSection;
