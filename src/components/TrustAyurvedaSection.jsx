import React from 'react';
import videoSrc from '../assets/4993658_Empty_Beauty_1280x720.mp4';

const TrustAyurvedaSection = () => {
  const handleBookConsultation = () => {
    // Handle consultation booking logic
    console.log('Booking consultation...');
  };

  const handleVideoError = (e) => {
    console.log('Video file not found - using gradient background fallback');
    // Hide video element if video fails to load, fallback background will show
    e.target.style.display = 'none';
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
  };

  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] bg-gray-900 overflow-hidden">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0">
        {/* Gradient background as fallback while video loads or if video fails */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900"></div>
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
          style={{ display: 'block' }}
          src={videoSrc}
        >
          {/* Fallback message */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900"></div>
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-start h-full min-h-[400px] md:min-h-[500px] px-4 md:px-8 lg:px-20">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Trust Ayurveda.
              <br />
              Trust Prakritya.
            </h2>
            
            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-lg">
              Ayurveda has 15+ years. Prakritya delivers them with care. Start your journey towards stronger, fuller, healthier hair naturally.
            </p>
            
            {/* CTA Button */}
            <div className="pt-4 md:pt-6">
              <button
                onClick={handleBookConsultation}
                className="bg-[#AFD455] hover:bg-lime-500 text-gray-900 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAyurvedaSection;