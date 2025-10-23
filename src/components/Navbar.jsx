import React, { useState } from 'react';
import logoImage from '../assets/acbb16a7db7c8eecb0227ed7a1867222aa24050e.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full z-20">
      {/* Top Banner with Phone Number */}
      <div className="bg-[#074720] text-white text-center py-2">
        <p className="text-xs md:text-sm font-medium">
          Call on this number to place an order  <span className='underline'>+919810431272</span>
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-50 h-16 md:h-20 relative w-full">
        <div className=" md:mx-20 absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex gap-2 md:gap-4 items-center justify-between max-w-7xl mx-20 px-4 md:px-8 py-0 w-full">
          {/* Logo */}
          <div className="flex gap-2 md:gap-3 items-center flex-1">
            <div className="h-6 w-16 md:h-8 md:w-24">
              <img 
                alt="प्रकृत्या" 
                className="h-full w-full object-contain" 
                src={logoImage} 
              />
            </div>
          </div>

          {/* Desktop Language Toggle Buttons */}
          <div className="hidden md:flex gap-2 md:gap-3 items-center">
            <button 
              onClick={() => selectLanguage('English')}
              className={`${selectedLanguage === 'English' ? 'bg-[#074720] text-white' : 'bg-white border border-gray-300 text-gray-700 shadow-sm'} flex gap-1 md:gap-1.5 items-center justify-center overflow-hidden px-2 py-1.5 md:px-4 md:py-2.5 rounded-md md:rounded-lg transition-colors`}
            >
              <span className="px-0.5 font-semibold text-sm md:text-base leading-5 md:leading-6">
                English
              </span>
            </button>
            <button 
              onClick={() => selectLanguage('हिंदी')}
              className={`${selectedLanguage === 'हिंदी' ? 'bg-[#074720] text-white' : 'bg-white border border-gray-300 text-gray-700 shadow-sm'} flex gap-1 md:gap-1.5 items-center justify-center overflow-hidden px-2 py-1.5 md:px-4 md:py-2.5 rounded-md md:rounded-lg transition-colors`}
            >
              <span className="px-0.5 font-semibold text-sm md:text-base leading-5 md:leading-6">
                हिंदी
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden relative">
            <button
              onClick={toggleMenu}
              className="flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
              aria-label="Toggle language menu"
            >
              <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>

            {/* Mobile Language Dropdown */}
            {isMenuOpen && (
              <div className="absolute right-0 top-10 bg-white border border-gray-300 rounded-lg shadow-lg py-2 min-w-[120px] z-30">
                <button
                  onClick={() => selectLanguage('English')}
                  className={`w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${selectedLanguage === 'English' ? 'bg-emerald-800 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  English
                </button>
                <button
                  onClick={() => selectLanguage('हिंदी')}
                  className={`w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${selectedLanguage === 'हिंदी' ? 'bg-emerald-800 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  हिंदी
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-10"
            onClick={toggleMenu}
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;