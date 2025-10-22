import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const AboutHeroSection = () => {
  return (
    <div className="relative bg-white py-20 text-center overflow-hidden">
      {/* Heading & Breadcrumb */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        
        {/* Updated Breadcrumb */}
        <nav className="flex items-center justify-center text-gray-600">
          <Link 
            to="/" 
            className="flex items-center hover:text-[#9ECC66] transition-colors duration-200"
          >
            <Home className="w-4 h-4 mr-1" />
            <span className="font-medium">Home</span>
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#9ECC66] font-medium">About</span>
        </nav>
      </div>

      {/* Background Image */}
      <div className="absolute inset-x-0 bottom-0 w-full z-0">
        <img
          src="https://labartisan.net/demo/gowala/assets/css/bg-images/page-header1.jpg"
          alt="Farm background"
          className="w-full object-cover pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

export default AboutHeroSection;