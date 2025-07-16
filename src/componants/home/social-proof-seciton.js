// src/pages/HeroSection.js (or src/components/Home.js)

import React from "react";

function SocialProof() {
    return (
        <section className="bg-gray-50 py-20 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Trusted by the World's Most Innovative Companies
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-20 text-xl font-semibold text-gray-700">
                <span>InnovateCorp</span>
                <span>QuantumLeap Tech</span>
                <span>DataWeave Solutions</span>
                <span>NextGen Systems</span>
                <span>Apex Digital</span>
            </div>
        </section>
    );
}

export default SocialProof;
