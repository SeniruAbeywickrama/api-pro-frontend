// src/pages/HeroSection.js (or src/components/Home.js)

import React from "react";

function SocialProof() {
    return (
        <section className="bg-gradient-to-br from-violet-200 via-blue-50 to-indigo-50 py-24 px-6 text-center relative overflow-hidden">
            {/* Background decorative elements */}
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                    Trusted by the World's Most Innovative Companies
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 text-xl font-semibold">
                    <span className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 text-gray-700 hover:text-blue-700 cursor-pointer">
                        InnovateCorp
                    </span>
                    <span className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 text-gray-700 hover:text-blue-700 cursor-pointer">
                        QuantumLeap Tech
                    </span>
                    <span className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 text-gray-700 hover:text-blue-700 cursor-pointer">
                        DataWeave Solutions
                    </span>
                    <span className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 text-gray-700 hover:text-blue-700 cursor-pointer">
                        NextGen Systems
                    </span>
                    <span className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 text-gray-700 hover:text-blue-700 cursor-pointer">
                        Apex Digital
                    </span>
                </div>
            </div>
        </section>
    );
}

export default SocialProof;
