import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import menu from "../assets/menu.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-transparent absolute top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        <img src={logo} alt="Crotus logo" className="h-6 w-6 mr-2" />
        <span className="text-xl font-semibold text-teal-600">crotus</span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center">
        <ul className="flex space-x-6 mr-6">
          <li><button className="text-white hover:text-gray-200">Log in</button></li>
          <li><button className="text-white hover:text-gray-200">Sign in</button></li>
        </ul>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300">
          Get started →
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src={menu} alt="Menu" className="h-6 w-6" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute bg-black top-full right-12 shadow-md rounded-3xl md:hidden">
          <nav className="flex flex-col items-center py-4">
            <ul className="flex flex-col items-center space-y-4 mb-4">
              <li><button className="text-white hover:text-gray-600">Log in</button></li>
              <li><button className="text-white hover:text-gray-600">Sign in</button></li>
            </ul>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300">
              Get started →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;