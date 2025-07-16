// src/pages/HeroSection.js (or src/components/Home.js)

import React from "react";

function FeatureSection() {
    return (
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

    );
}

export default FeatureSection;
