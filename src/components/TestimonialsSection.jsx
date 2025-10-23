import user1 from "../assets/user1.png"; // make sure path is correct


const testimonials = [
    {
        img: user1,
        quote: "My hair fall reduced in just one month!",
        author: "Ritika S., Jaipur",
    },
    {
        img: user1,

        quote: "Feels completely natural and soothing, my hair feels alive again.",
        author: "Rohit, Delhi",
    },
    {
        img: user1,

        quote:
            "The consultation helped me understand how to use the products properly. Great experience!",
        author: "Sandeep K., Lucknow",
    },
    {
        img: user1,
        quote:
            "I could actually see less hair on my comb after about 3–4 weeks. It's not magic, but definitely the best I’ve used so far.",
        author: "Shreya, Bikaner",
    },
    {
        img: user1,
        quote:
            "I had a lot of hair breakage from the middle. The expert suggested I take the capsules too, and that combination really helped!",
        author: "Sanjay V., Kolkata",
    },
    {
        img: user1,
        quote:
            "I wasn’t expecting new hair growth at my age, but it genuinely worked. The bald patch on the crown looks lighter now.",
        author: "Sandeep K., Lucknow",
    },
];

const TestimonialsSection = () => {
    return (
        <section className=" py-16 px-4 md:px-28 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Section title */}
                <h2 className="text-center text-4xl md:text-3xl font-bold text-[#181D27] mb-16">
                    What Our Users Say
                </h2>

                {/* Grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#F9F6F1] rounded-xl shadow-sm"
                        >
                            {/* Combined Image */}
                            <img
                                src={item.img}
                                alt={`User testimonial ${idx + 1}`}
                                className="rounded-t-xl object-cover w-full h-[180px]"
                            />

                            {/* Quote */}
                            <div className="outer-section bg-[#F9F6F1]" >
                                <div className="inner-container  py-3 px-6 my-12 gap-3">
                                    <p className="text-base text-[#181D27] font-medium leading-snug mb-2">
                                        “{item.quote}”
                                    </p>

                                    {/* Author */}
                                    <p className="text-base text-[#181D27] font-medium mt-auto">
                                        — {item.author}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
