import React from "react";
import featureImage from "../assets/Feature.png"
// Replace these with your real images (public/assets or imported from src/assets)
const items = [
  {
    img: featureImage,
    title: "100% Natural & Ayurvedic",
    desc: "No parabens, sulfates, or artificial fragrances",
  },
  {
    img: featureImage,
    title: "Visible Results in 6 Weeks",
    desc: "Notice stronger, thicker hair naturally",
  },
  {
    img: featureImage,
    title: "Free Consultation",
    desc: "Talk to our experts to get a personalized hair care routine",
  },
  {
    img: featureImage,
    title: "Made with Care in India",
    desc: "Crafted with pure herbs and tested for quality",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#074720] text-white py-16 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-3xl font-bold mb-8 md:mb-12">
          Why Choose Prakrtiya?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <article key={i} className="flex flex-col">
              {/* Image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 md:h-48 object-cover block"
                />
              </div>

              {/* Copy */}
              <h3 className="mt-8 text-lg md:text-lg font-semibold text-[#FBF5F1]">
                {item.title}
              </h3>
              <p className="mt-1 text-base text-[#FBF5F1] font-normal leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
