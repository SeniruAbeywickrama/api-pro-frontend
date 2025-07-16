// src/pages/Pricing.js (or src/components/Home.js)

import React from "react";

function Pricing() {
    return (
        <div className="pt-24 px-6 text-center bg-white min-h-screen">
            {/* Title */}
            <section className="max-w-4xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Simple, Transparent Pricing for Teams of All Sizes
                </h2>
                <p className="text-lg text-gray-600">
                    Start for free and scale as you go. No hidden fees, ever.
                </p>
            </section>

            {/* Pricing Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Starter Plan */}
                <div className="border rounded-lg shadow hover:shadow-xl p-8 transition duration-300">
                    <h3 className="text-2xl font-bold mb-2 text-black">Starter</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-6">$0 <span className="text-base font-normal">/ month</span></p>
                    <ul className="text-gray-700 text-left space-y-2 mb-6">
                        <li><span className="text-green-600 mr-4">✔</span> 1 Project</li>
                        <li><span className="text-green-600 mr-4">✔</span> 10,000 API Calls/mo</li>
                        <li><span className="text-green-600 mr-4">✔</span> Basic Analytics</li>
                        <li><span className="text-green-600 mr-4">✔</span> Community Support</li>
                    </ul>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                        Start for Free
                    </button>
                </div>

                {/* Pro Plan (Most Popular) */}
                <div className="border-2 border-blue-600 rounded-lg shadow-2xl p-8 transition duration-300 relative bg-blue-50">
                    {/* Popular Badge */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-black">Pro</h3>
                    <p className="text-3xl font-bold text-blue-700 mb-6">$49 <span className="text-base font-normal">/ month</span></p>
                    <ul className="text-gray-800 text-left space-y-2 mb-6">
                        <li><span className="text-green-600 mr-4">✔</span> 10 Projects</li>
                        <li><span className="text-green-600 mr-4">✔</span> 1 Million API Calls/mo</li>
                        <li><span className="text-green-600 mr-4">✔</span> AI-Powered Analytics</li>
                        <li><span className="text-green-600 mr-4">✔</span> Advanced Security</li>
                        <li><span className="text-green-600 mr-4">✔</span> Email Support</li>
                    </ul>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full">
                        Choose Pro
                    </button>
                </div>

                {/* Enterprise Plan */}
                <div className="border rounded-lg shadow hover:shadow-xl p-8 transition duration-300">
                    <h3 className="text-2xl font-bold mb-2 text-black">Enterprise</h3>
                    <p className="text-3xl font-bold text-gray-800 mb-6">Let’s Talk</p>
                    <ul className="text-gray-700 text-left space-y-2 mb-6">
                        <li><span className="text-green-600 mr-4">✔</span> Unlimited Projects</li>
                        <li><span className="text-green-600 mr-4">✔</span> Custom API Call Volume</li>
                        <li><span className="text-green-600 mr-4">✔</span> On-Premise Deployment</li>
                        <li><span className="text-green-600 mr-4">✔</span> Security Audits</li>
                        <li><span className="text-green-600 mr-4">✔</span> Dedicated 24/7 Support</li>
                    </ul>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full">
                        Contact Sales
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Pricing;
