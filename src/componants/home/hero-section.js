import React from "react";

function HeroSection() {
    return (
        <section
            className="relative bg-black text-white py-32 px-6 bg-cover bg-center"
            style={{
                backgroundImage: `url('/Assets/Images/hero-background.jpg')`
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className="text-violet-700">Effortless API Management.</span> Powerful Results.
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                    API PRO is the all-in-one platform designed to take your APIs from development to production with unparalleled speed, security, and AI-driven insights.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
                    Get Started for Free
                </button>
            </div>
        </section>
    );
}

export default HeroSection;
