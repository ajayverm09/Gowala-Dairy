import React from "react";

export default function FeaturedRecipe() {
  return (
    <div className="relative md:min-h-[80vh] bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://labartisan.net/demo/gowala/assets/css/bg-images/05.jpg')" }}
      ></div>

      {/* Overlay Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center">
        {/* Left Image Circle */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
            <img
              src="https://labartisan.net/demo/gowala/assets/images/featured/01.png"
              alt="Ice Cream"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold text-[#5D9913] mb-2">
            Featured Recipe
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The Only Ice Cream Recipe You'll Ever Need
          </h3>
          <p className="text-gray-700 mb-6">
            Conveniently innovate user-centric benefits with installed base
            testing procedures. Authoritatively unleash before progressive
            architectures rapidly build clicks-and-mortar testing procedures
            without installed manufactured products distinctively.
          </p>
          <button className="bg-[#5D9913] border border-[#5D9913] hover:bg-white hover:text-[#5D9913] text-white font-bold py-2 px-6 rounded-full transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}