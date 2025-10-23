import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // icon library

// const ChevronUp=<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
//   <path d="M13 7L7 1L1 7" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>



// const ChevronDown=
// <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
//   <path d="M1 1L7 7L13 1" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

const faqs = [
  {
    question: "How soon will I see results?",
    answer:
      "You'll start noticing visible difference in about 6 weeks of consistent use.",
  },
  {
    question: "Is it safe for all hair types?",
    answer:
      "Yes, our formula is designed to be gentle and effective for all hair types.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "No known side effects have been reported. Our products use safe, natural ingredients.",
  },
  {
    question: "Can I buy individual products?",
    answer:
      "Yes, each product is available individually as well as in complete care kits.",
  },
  {
    question: "How will I get my product?",
    answer:
      "Your order will be shipped directly to your address within 3–5 business days.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-4 md:px-28 py-16 lg:px-28 text-[#181D27]">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-3xl font-bold  text-center mb-16">
          Frequently Asked Questions
        </h2>

        {/* FAQ list */}
        <div className="">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl  font-medium text-[#181D27]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-1 text-[#535862] text-base font-normal">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
