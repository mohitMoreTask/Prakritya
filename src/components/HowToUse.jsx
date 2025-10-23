// import React, { useRef } from "react";
// import Card from "../assets/Card.png";
// const steps = [
//   {
//     img: Card,
//     title: "Oil Massage (3x a week)",
//     desc:
//       "Apply the Hair Oil to your scalp and massage gently for 10–15 minutes. Leave overnight.",
//   },
//   {
//     img: Card,
//     title: "Cleanse",
//     desc: "Wash off with the Ayurvedic Shampoo.",
//   },
//   {
//     img: Card,
//     title: "Condition",
//     desc:
//       "Use the Conditioner after every wash for smooth, manageable hair.",
//   },
//   {
//     img: Card,
//     title: "Nourish",
//     desc:
//       "Take 2 capsules daily after meals to support healthy hair growth.",
//   },
// ];

// const ArrowLeft = ({ className }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );
// const ArrowRight = ({ className }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

// const HowToUse = () => {
//   const scrollerRef = useRef(null);

//   const scrollByCards = (dir = 1) => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     const card = el.querySelector("[data-card]");
//     const amount = card ? card.getBoundingClientRect().width + 24 : 320;
//     el.scrollBy({ left: dir * amount, behavior: "smooth" });
//   };

//   return (
//     <section className="bg-white py-10 md:py-14">
//       <div className="max-w-7xl mx-auto px-5 md:px-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-16 md:mb-16">
//           <h2 className="text-4xl md:text-xl font-bold text-[#181D27]">
//             How to Use the Products
//           </h2>
//           <div className="hidden sm:flex items-center gap-3">
//             <button
//               aria-label="Previous"
//               onClick={() => scrollByCards(-1)}
//               className="h-9 w-9 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
//             >
//               <ArrowLeft className="h-5 w-5 text-gray-700" />
//             </button>
//             <button
//               aria-label="Next"
//               onClick={() => scrollByCards(1)}
//               className="h-9 w-9 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
//             >
//               <ArrowRight className="h-5 w-5 text-gray-700" />
//             </button>
//           </div>
//         </div>

//         {/* Horizontal grid/scroller */}
//         <div
//           ref={scrollerRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
//         >
//           {steps.map((s, i) => (
//             <article
//               key={i}
//               data-card
//               className="min-w-[240px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px] snap-start"
//             >
//               {/* Image */}
//               <div className="rounded-xl overflow-hidden shadow-sm border border-black/5">
//                 <img
//                   src={s.img}
//                   alt={s.title}
//                   className=" w-full object-cover block"
//                 />
//               </div>

          
//             </article>
//           ))}
//         </div>

//         {/* Pro Tip */}
//         <p className="mt-6 text-xl text-center text-[#535862]">
//           <span className="font-semibold">Pro Tip:</span>{" "}
//           Stay consistent for 6 weeks to start seeing visible difference in
//           volume and strength.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HowToUse;



import React, { useRef } from "react";
import Card from "../assets/Card.png";

const steps = [
  {
    img: Card,
    title: "Oil Massage (3x a week)",
    desc:
      "Apply the Hair Oil to your scalp and massage gently for 10–15 minutes. Leave overnight.",
  },
  {
    img: Card,
    title: "Cleanse",
    desc: "Wash off with the Ayurvedic Shampoo.",
  },
  {
    img: Card,
    title: "Condition",
    desc: "Use the Conditioner after every wash for smooth, manageable hair.",
  },
  {
    img: Card,
    title: "Nourish",
    desc:
      "Take 2 capsules daily after meals to support healthy hair growth.",
  },
];

const ArrowLeft = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M15 6l-6 6 6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M9 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HowToUse = () => {
  const scrollerRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const amount = card ? card.getBoundingClientRect().width + 24 : 320;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#181D27]">
            How to Use the Products
          </h2>

          {/* Arrows (visible on desktop, hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => scrollByCards(-1)}
              className="h-9 w-9 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollByCards(1)}
              className="h-9 w-9 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll section */}
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
        >
          {steps.map((s, i) => (
            <article
              key={i}
              data-card
              className="min-w-[240px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px] snap-start"
            >
              <div className="rounded-xl overflow-hidden shadow-sm border border-black/5">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full object-cover block"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Arrows at bottom (visible only on mobile) */}
        <div className="flex sm:hidden  gap-4 mt-8">
          <button
            aria-label="Previous"
            onClick={() => scrollByCards(-1)}
            className="h-10 w-10 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
          >
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollByCards(1)}
            className="h-10 w-10 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
          >
            <ArrowRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Pro Tip */}
        <p className="mt-8 text-sm md:text-base text-center text-[#535862]">
          <span className="font-semibold">Pro Tip:</span>{" "}
          Stay consistent for 6 weeks to start seeing visible difference in
          volume and strength.
        </p>
      </div>
    </section>
  );
};

export default HowToUse;
