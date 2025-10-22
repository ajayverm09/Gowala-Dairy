import React from "react";

const AchievementSection = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 md:px-20 bg-gray-100">
      {/* Left Side */}
      <div className="w-full lg:w-2/3 p-4 sm:p-6 lg:p-8">
        <img 
          src="https://labartisan.net/demo/gowala/assets/images//histori/01.jpg" 
          alt="Farm with cows" 
          className="w-full h-auto mb-6 rounded-lg shadow-md" 
        />
        <div className="flex flex-col sm:flex-row items-start">
          <div className="mr-0 sm:mr-4 text-center mb-4 sm:mb-0">
            <p className="text-lg sm:text-xl">Since</p>
            <p className="text-4xl sm:text-5xl font-bold">1985</p>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">
            Continually productize compelling quality elated them setting up to website
            with all them imperdiet molestie continually productize compelling quality
            for packedq for packed with all elated themes setting up to website and
            creating pages compelling quality for packed with all elated themes setting
            up to website.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/3 bg-[#5D9913] text-white p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Achievement</h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img 
                src="https://labartisan.net/demo/gowala/assets/images/histori/achievement/01.png" 
                alt="Customers" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain" 
              />
            </div>
            <p className="text-xl sm:text-2xl font-bold">6,200+</p>
            <p className="text-sm sm:text-base">Customers</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img 
                src="https://labartisan.net/demo/gowala/assets/images/histori/achievement/02.png" 
                alt="Award Won" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain" 
              />
            </div>
            <p className="text-xl sm:text-2xl font-bold">400+</p>
            <p className="text-sm sm:text-base">Award Won</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img 
                src="https://labartisan.net/demo/gowala/assets/images/histori/achievement/03.png" 
                alt="Volunteer" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain" 
              />
            </div>
            <p className="text-xl sm:text-2xl font-bold">500+</p>
            <p className="text-sm sm:text-base">Volunteer</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img 
                src="https://labartisan.net/demo/gowala/assets/images/histori/achievement/04.png" 
                alt="Cow" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain" 
              />
            </div>
            <p className="text-xl sm:text-2xl font-bold">400+</p>
            <p className="text-sm sm:text-base">Cow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;