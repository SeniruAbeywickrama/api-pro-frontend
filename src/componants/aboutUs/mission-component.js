// Mission section component
import {FaRocket} from "react-icons/fa";
import React from "react";

const MissionSection = () => (
    <section className="max-w-5xl mx-auto text-center mb-24">
        <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl"></div>
            <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-white/20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <FaRocket className="text-white text-2xl" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                    Our Mission
                </h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
                    We Empower Developers to Build The Future.
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                    In today's digital world, APIs are the backbone of innovation. Yet, managing
                    them has become increasingly complex. <strong className="text-blue-600">API PRO</strong> was founded on a
                    simple principle: to give developers and businesses the tools they need to
                    build, manage, and scale their APIs without the headache. We handle the
                    complexity, so you can focus on creating amazing products.
                </p>
            </div>
        </div>
    </section>
);

export default MissionSection;
