import React, { useState } from 'react';
import heroBackground from '../assets/04c7647a5fec9cc58151817179a875770f70d469.png';
import productImage from '../assets/56e5a7609bbfca5708c7512f2e09273dfb01fa37.png';

const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleConsultation = () => {
    // Handle consultation booking logic here
    console.log('Booking consultation for:', phoneNumber);
  };

  return (
    <section className="relative w-full bg-gray-50 flex flex-col items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Content */}
      <div className="relative  z-10 flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-center pb-12 md:pb-24 pt-8 md:pt-16 px-4 md:px-0 w-full">
        <div className="flex md:mx-20 flex-col lg:flex-row gap-6 lg:gap-16 items-center justify-center max-w-7xl px-0 md:px-8 py-0 w-full">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-4 md:gap-8 items-start min-w-0 text-center lg:text-left">
            <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
              <div className="flex flex-col gap-2 md:gap-4 items-start w-full">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[72px] text-amber-50 tracking-tight w-full">
                  Regrow Stronger, Healthier Hair, Naturally
                </h1>
              </div>
              <p className="font-normal text-base md:text-lg lg:text-xl leading-6 md:leading-8 text-white w-full">
                Begin your Ayurvedic hair growth journey today.{' '}
                <br className="hidden sm:block" />
                Get a free consultation from our experts.
              </p>
            </div>

            {/* Phone Input and CTA */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-start max-w-full lg:max-w-lg w-full">
              <div className="flex-1 flex flex-col gap-2 md:gap-3 items-start min-w-0">
                <label className="text-sm md:text-base leading-5 md:leading-6 text-white w-full">
                  Enter your phone number
                </label>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4 items-stretch sm:items-start w-full">
                  <div className="flex-1 bg-white border border-gray-300 flex rounded-md md:rounded-lg min-w-0">
                    <div className="flex gap-0.5 items-center overflow-hidden pl-2.5 md:pl-3.5 pr-0 py-2 md:py-2.5">
                      <span className="font-normal text-sm md:text-base leading-5 md:leading-6 text-gray-900">
                        +91
                      </span>
                    </div>
                    <div className="flex-1 flex gap-1 md:gap-2 items-center min-w-0 pl-1 md:pl-2 pr-2.5 md:pr-3.5 py-2 md:py-2.5">
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="1234567890"
                        className="flex-1 font-normal text-sm md:text-base leading-5 md:leading-6 text-gray-500 bg-transparent border-none outline-none min-w-0"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleConsultation}
                    className="bg-[#AFD455]  border-opacity-12 flex gap-1 md:gap-1.5 items-center justify-center overflow-hidden px-3 py-2 md:px-4 md:py-3 rounded-md md:rounded-lg text-gray-900 font-medium text-sm md:text-base leading-5 md:leading-6 hover:bg-lime-500 transition-colors whitespace-nowrap"
                  >
                    <span className="block sm:hidden">Book a Consultation</span>
                    <span className="hidden sm:block">Book a Consultation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="w-full lg:flex-1 h-56 sm:h-64 md:h-80 lg:h-[530px] min-w-0 relative order-last lg:order-last px-4 lg:px-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                alt="Ayurvedic Hair Care Products"
                className="w-full h-full object-contain drop-shadow-lg"
                src={productImage}
              />
            </div>
            {/* Mobile Image Enhancement */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 lg:hidden pointer-events-none rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;