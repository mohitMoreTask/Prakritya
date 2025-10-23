import React from 'react'
import threeMenImage from '../assets/6812653a0a9d254564e41b4d05cb749318daaa6a.png';

const RealResultsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Real Results, Backed by Ayurveda
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Give your hair the care they deserve
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stat 1 */}
                <div className="text-left">
                  <div className="text-5xl font-bold text-green-800 mb-2">
                    9/10
                  </div>
                  <p className="text-gray-700 font-medium">
                    Users report reduced hair fall
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="text-left">
                  <div className="text-5xl font-bold text-green-800 mb-2">
                    100%
                  </div>
                  <p className="text-gray-700 font-medium">
                    Ayurvedic and toxin-free formula
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="text-left">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-green-800">6</span>
                    <span className="text-2xl font-semibold text-gray-700 ml-2">Weeks</span>
                  </div>
                  <p className="text-gray-700 font-medium">
                    to visible results
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative order-last lg:order-last">
              <div className="relative w-full h-96 lg:h-[500px]  overflow-hidden">
                {/* Three Men Image */}
                <img 
                  src={threeMenImage} 
                  alt="Three men showcasing hair care results" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Optional: Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealResultsSection