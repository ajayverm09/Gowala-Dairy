import React from "react";

const WelcomeSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-5 md:py-16 max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Welcome to Our Gowala Dairy Farm
        </h2>
        <p className="text-gray-600 mb-6">
          Continually productize compelling quality for packed with Elated productize
          compelling quality for packed with all Elated Them Setting up to website
          and creating pages.
        </p>

        <ul className="space-y-3 text-gray-700 mb-8">
          {[
            "We are providing different services",
            "We are one of leading company",
            "Profitability is the primary goal of all business",
            "Learn how to grow your Business",
            "Professional solutions for your business",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#5D9913] text-xl mr-2">✅</span>
              {item}
            </li>
          ))}
        </ul>

        <button className="bg-[#5D9913] text-white px-8 py-3 border border-[#5D9913] rounded-full shadow-lg hover:text-[#5D9913] hover:bg-white transition-all duration-300">
          Read More
        </button>
      </div>

      {/* Image */}
      <div className="lg:w-1/2">
        <img
          src="https://labartisan.net/demo/gowala/assets/images/about/01.jpg"
          alt="Dairy Farm"
          className="rounded-xl w-full h-auto object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;