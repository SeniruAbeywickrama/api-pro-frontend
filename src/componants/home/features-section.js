// src/pages/HeroSection.js (or src/components/Home.js)

import React from "react";
import { FaBrain, FaShieldAlt, FaCode } from "react-icons/fa";

function FeatureSection() {
    const features = [
        {
            icon: FaBrain,
            title: "AI-Powered Analytics",
            description: "Go beyond basic metrics. Understand your API usage with intelligent, real-time insights and predictive analytics to stay ahead of demand.",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: FaShieldAlt,
            title: "Bank-Grade Security",
            description: "Protect your endpoints with OAuth 2.0, API key management, and automated threat detection. Your data's integrity is our top priority.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: FaCode,
            title: "Superior Developer Experience",
            description: "With auto-generated documentation and a seamless CLI, we make building and integrating APIs a joy, not a chore. Cut your development time in half.",
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <section className="bg-gradient-to-br from-violet-100 via-blue-50 to-indigo-50 py-24 px-6 text-center relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-gray-900 via-violet-900 to-blue-900 bg-clip-text text-transparent">
                    Everything You Need in One Platform
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div 
                                key={index}
                                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-3 border border-white/20 relative overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                                
                                {/* Icon with gradient background */}
                                <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                                    <IconComponent className="text-white text-2xl" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Subtle border glow on hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
