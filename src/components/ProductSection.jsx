import React from 'react';

// Import product images
const productImage1 = '/src/assets/18448a8853ffe6bd7db128f85a669cc36c2fce7b.png';
const productImage2 = '/src/assets/d4f9d7594b36a5f7b678518d6df5059adb905a28.png';
const productImage3 = '/src/assets/ae79ce6b046e3c2bc83ff542c553db10af54629a.png';
const productImage4 = '/src/assets/3a030033e12bc6bcf63ecf66d1dad867faef3517.png';
const productImage5 = '/src/assets/06a95442231f12f37f4724880158e07e52854e8f.png';

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: 'Hair Oil',
      image: productImage1,
      benefits: [
        'Strengthens roots',
        'Promotes hair growth',
        'Reduces split ends'
      ]
    },
    {
      id: 2,
      name: 'Hair Shampoo',
      image: productImage2,
      benefits: [
        'Gently cleanses scalp',
        'Promotes hair growth',
        'Removes dandruff and buildup'
      ]
    },
    {
      id: 3,
      name: 'Hair Conditioner',
      image: productImage3,
      benefits: [
        'Strengthens hair strands',
        'Prevents frizz and dryness',
        'Restores softness and shine'
      ]
    },
    {
      id: 4,
      name: 'Hair Capsules',
      image: productImage4,
      benefits: [
        'Improves hair quality & growth',
        'Reduces hair loss',
        'Prevent premature graying'
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-5 tracking-tight leading-tight">
            Prakrtiya's Hair Fall Solution Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-8">
            Our range combines the best of Ayurveda to target
            <br />
            hair loss from inside and outside.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="md:mx-20">
          {/* Mobile Horizontal Scroll */}
          <div className="flex overflow-x-auto gap-6 pb-4 md:hidden scrollbar-hide snap-x snap-mandatory">
            {products.map((product) => (
              <div key={product.id} className="relative group flex-shrink-0 w-80 snap-center">
                {/* Product Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  {/* Product Image */}
                  <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                    
                    {/* Product Name Badge */}
                    <div className="absolute top-4 left-4 bg-green-800/50 backdrop-blur-md text-white px-3 py-2 rounded-xl border border-white/30">
                      <span className="font-semibold text-base">
                        {product.name}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 bg-[#f9f6f1]">
                    {/* Benefits List */}
                    <div className="space-y-3 mb-6">
                      {product.benefits.map((benefit, index) => (
                        <div key={index}>
                          <p className="text-gray-600 text-lg leading-7">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full h-11 bg-[#074720] text-white px-4 rounded-lg font-medium text-base hover:bg-green-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm flex items-center justify-center">
                      Request a Call Back
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                {/* Product Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  {/* Product Image */}
                  <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                    
                    {/* Product Name Badge */}
                    <div className="absolute top-4 left-4 bg-green-800/50 backdrop-blur-md text-white px-3 py-2 rounded-xl border border-white/30">
                      <span className="font-semibold text-base">
                        {product.name}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 bg-[#f9f6f1]">
                    {/* Benefits List */}
                    <div className="space-y-3 mb-6">
                      {product.benefits.map((benefit, index) => (
                        <div key={index}>
                          <p className="text-gray-600 text-lg leading-7">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full h-11 bg-[#074720] text-white px-4 rounded-lg font-medium text-base hover:bg-green-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm flex items-center justify-center">
                      Request a Call Back
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
