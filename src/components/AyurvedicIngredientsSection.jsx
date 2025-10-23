import React from 'react'

// Import ingredient images
import amlaImage from '../assets/2d4f4e0ee8f9b6a8fd851ce2a25dd85286c9414d.png'
import rosemaryImage from '../assets/9eb00c7205a6127991ea691c4dbc02f0357fd0a0.png'
import bhringrajImage from '../assets/7d8518dd1bf9f3a4a08c9618bfda5a8e8db1c8fe.png'
import aloeVeraImage from '../assets/6ac74abc6ca69a8fd38ef1f139ab53888b375d67.png'
import methiDanaImage from '../assets/dc8e8e747b335c0d8dd38384ebc23563cc7b4908.png'
import walnutImage from '../assets/730b7ddd13402e5dfbb938a7c4e809f4b0292dd5.png'
import brahmiImage from '../assets/62b3ebc7bbf2a2e8eeaca3597fad35d5f5725aea.png'
import almondsImage from '../assets/a5d15a0b752c7fca7636710b1338752afd4a3f2b.png'
import sheaButterImage from '../assets/c63249b5b602aa34a2ab1cec28328b5f54d6ff01.png'

const AyurvedicIngredientsSection = () => {

  const ingredients = [
    {
      name: "Amla",
      description: "Amla is rich in vitamin C and phytonutrients, which improve blood circulation to the scalp.",
      image: amlaImage
    },
    {
      name: "Rosemary Extract",
      description: "Rosemary extract balances sebum and has antifungal properties to clear dandruff.",
      image: rosemaryImage
    },
    {
      name: "Bhringraj",
      description: "Bhringraj strengthens the hair shaft from root to tip. Its natural nutrients iron and magnesium promote healthy growth.",
      image: bhringrajImage
    },
    {
      name: "Aloe Vera",
      description: "Aloe Vera soothes and moisturizes the scalp, reducing irritation and promoting healthy hair growth.",
      image: aloeVeraImage
    },
    {
      name: "Methi Dana",
      description: "Methi Dana strengthens hair follicles and prevents hair breakage. Its natural nutrients iron and magnesium promote growth.",
      image: methiDanaImage
    },
    {
      name: "Walnut",
      description: "Walnuts are packed with omega-3 fatty acids, biotin, and vitamin E, which deeply nourish hair follicles.",
      image: walnutImage
    },
    {
      name: "Brahmi",
      description: "Brahmi helps clear scalp infections and dandruff buildup. Gently cleanses scalp without stripping natural oils.",
      image: brahmiImage
    },
    {
      name: "Almonds",
      description: "Almond oil penetrates deeply into the scalp, providing intense hydration and improving sebum balance.",
      image: almondsImage
    },
    {
      name: "Shea Butter",
      description: "Provides deep hydration, nourishes dry ahir, reduces frizz, and locks in natural shine..",
      image: sheaButterImage
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl ">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className=" md:mx-20 text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Crafted with Pure Ayurvedic Ingredients
          </h2>
         
        </div>

        {/* Ingredients Grid - 3 items per row */}
        <div className="md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden min-h-[240px] flex flex-col"
            >
              {/* Ingredient Image - Responsive positioning */}
              {/* Mobile: Bottom center, Desktop: Top right */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2  xs:pt-4 w-32 h-20 md:top-0 md:right-0 md:left-auto md:bottom-auto md:transform-none md:translate-x-0 md:w-32 md:h-20 overflow-hidden md:rounded-tr-2xl rounded-xl z-10">
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-full object-cover object-center pt-7 sm:pt-0"
                />
              </div>

              {/* Content - Positioned on left side */}
              <div className="p-6 pt-12 md:pt-6 flex flex-col justify-center flex-grow relative z-20">
                <div className="max-w-[220px] md:max-w-[220px]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                    {ingredient.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-16 md:mb-0">
                    {ingredient.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AyurvedicIngredientsSection