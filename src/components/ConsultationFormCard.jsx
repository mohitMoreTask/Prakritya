import React, { useState } from "react";
import formlogo from "../assets/formlogo.png"; // make sure path is correct

const ConsultationFormCard = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState({ error: "", success: "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ error: "", success: "" });

        // Simple validation (accepts +91 1234567890 style or 10–15 digits)
        const phoneOk = /^\+?\d[\d\s-]{9,14}$/.test(phone.trim());
        if (name.trim().length < 2) {
            return setStatus({ error: "Please enter your full name.", success: "" });
        }
        if (!phoneOk) {
            return setStatus({ error: "Please enter a valid phone number.", success: "" });
        }

        try {
            setLoading(true);
            // Pass values up if a handler is provided
            if (typeof onSubmit === "function") {
                await onSubmit({ name: name.trim(), phone: phone.trim() });
            }
            setStatus({ error: "", success: "Thanks! We'll call you shortly." });
            setName("");
            setPhone("");
        } catch (err) {
            setStatus({ error: "Something went wrong. Please try again.", success: "" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-[#F9F6F1] py-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-3xl font-bold text-[#181D27]">
                    Get Personalized Ayurvedic Hair Solution
                </h2>

                {/* Card */}
                <div className="mt-16 mx-auto max-w-lg rounded-xl shadow-md border border-black/5 bg-white">
                    <form onSubmit={handleSubmit} className="p-8 md:p-8 rounded-lg">
                        {/* Brand line */}
                        <div className="">
                            <img
                                src={formlogo}
                                alt="Prakritya Logo"
                                className="items-center mx-auto"
                            />



                        </div>


                        <h3 className="mt-5 text-2xl font-semibold text-[#181D27] leading-snug">
                            Start Your Hair Growth
                            <br /> Journey Today
                        </h3>

                        <p className="mt-2 text-sm text-[#535862]">
                            Fill out the form below &amp; our Ayurvedic expert will call you for
                            a free personalized consultation.
                        </p>

                        {/* Name */}
                        <label className="block text-left mt-6 text-sm font-medium text-[#414651]">
                            Full name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="mt-2 w-full rounded-lg border border-[#D5D7DA] px-4 py-3 text-sm outline-none "
                        />

                        {/* Phone */}
                        <label className="block text-left mt-4 text-sm font-medium text-[#414651]">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 1234567890"
                            className="mt-2 w-full rounded-lg border border-[#D5D7DA] px-4 py-3 text-sm outline-none "
                        />

                        {/* Messages */}
                        {status.error ? (
                            <div className="mt-3 text-left text-xs text-red-600">{status.error}</div>
                        ) : null}
                        {status.success ? (
                            <div className="mt-3 text-left text-xs text-green-700">{status.success}</div>
                        ) : null}

                        {/* CTA */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-6 w-full  bg-[#074720] text-white py-2.5 px-3.5 rounded-lg text-base font-medium hover:brightness-110 active:brightness-95 disabled:opacity-70"
                        >
                            {loading ? "Booking..." : "Book a Consultation"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ConsultationFormCard;
