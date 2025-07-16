// src/pages/Home.js (or src/components/Home.js)

import React from "react";

function Home() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
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
                        Effortless API Management. Powerful Results.
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        API PRO is the all-in-one platform designed to take your APIs from development to production with unparalleled speed, security, and AI-driven insights.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-full transition duration-300">
                        Get Started for Free
                    </button>
                </div>
            </section>



            {/* Features Section */}
            <section className="bg-white py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Everything You Need in One Platform
                </h2>

                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Feature 1 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-gray-200">
                        <h3 className="text-xl font-semibold mb-3">AI-Powered Analytics</h3>
                        <p>
                            Go beyond basic metrics. Understand your API usage with intelligent, real-time insights and predictive analytics to stay ahead of demand.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-gray-200">
                        <h3 className="text-xl font-semibold mb-3">Bank-Grade Security</h3>
                        <p>
                            Protect your endpoints with OAuth 2.0, API key management, and automated threat detection. Your data's integrity is our top priority.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-gray-200">
                        <h3 className="text-xl font-semibold mb-3">Superior Developer Experience</h3>
                        <p>
                            With auto-generated documentation and a seamless CLI, we make building and integrating APIs a joy, not a chore. Cut your development time in half.
                        </p>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
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
        </div>
    );
}

export default Home;
