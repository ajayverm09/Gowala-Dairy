import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-2 md:py-24 px-6"
      style={{
        backgroundImage:
          'url("https://labartisan.net/demo/gowala/assets/images/banner/05.jpg")',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-start">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 max-w-xl text-left">
          <div className="max-w-md w-full">
            <img
              src="https://labartisan.net/demo/gowala/assets/images/banner/content/01.png"
              alt="Gowala Cow"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-2xl mt-2 text-[#7EBC32] mb-2">
            Fresh & Healthy Milk For Your Family
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Dynamically Supply Web-Enabled Portals For High Standards Income And
            Business Completely Productivate Optimal Sources Rather Than
            Strategic.
          </p>
          <button className="bg-[#7EBC32] text-white px-6 py-3 rounded-full text-lg font-semibold hover:text-[#7EBC32] border-2 border-[#7EBC32] hover:bg-white transition">
            View Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
