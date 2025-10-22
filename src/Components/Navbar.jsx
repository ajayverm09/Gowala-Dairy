import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Search = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const ShoppingBag = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
);

const Menu = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact Us', path: '/contact' },
];

const Logo = () => (
  <Link to="/" className="cursor-pointer">
    <img
      src="https://labartisan.net/demo/gowala/assets/images/logo/01.png"
      alt="Gowala Dairy Farm Logo"
      className="h-16 w-auto object-contain transition-opacity duration-300 hover:opacity-90"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/100x64/22c55e/ffffff?text=Gowala";
        e.target.className += " p-2 border border-green-700 rounded-lg";
      }}
    />
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white font-inter">
      {/* Main Header Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Section: Logo */}
        <Logo />

        {/* Center Section: Navigation Links (Desktop) */}
        <nav className="hidden md:flex flex-grow justify-center space-x-8 lg:space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg font-medium transition duration-150 ease-in-out py-2 rounded-md ${
                location.pathname === item.path 
                  ? 'text-[#7CBA30]' 
                  : 'text-gray-700 hover:text-[#7CBA30]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Utility Icons and Mobile Toggle */}
        <div className="flex items-center space-x-4">
          {/* Get in Touch Button (Desktop) */}
          <button className="hidden md:block bg-[#7CBA30] text-white px-5 py-2 rounded-full border-2 border-[#7CBA30] font-medium hover:bg-white hover:text-[#7CBA30] transition-colors duration-300">
            Get in Touch
          </button>
          
          {/* Mobile Menu Button (Hamburger) */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden text-gray-700 hover:text-[#7CBA30] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-2 border-t border-gray-100">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path 
                  ? 'bg-green-50 text-[#7CBA30]' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-[#7CBA30]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {/* Get in Touch Button (Mobile) */}
          <button className="w-full bg-[#7CBA30] text-white px-5 py-2 rounded-full border border-[#7CBA30] font-medium hover:bg-white hover:text-[#7CBA30] transition-colors duration-300 mt-2">
            Get in Touch
          </button>
        </div>
      </div> 
    </header>
  );
};

export default Navbar;