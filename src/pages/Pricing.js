// src/pages/Pricing.js (or src/components/Home.js)

import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    priceNote: "/ month",
    features: [
      "1 Project",
      "10,000 API Calls/mo",
      "Basic Analytics",
      "Community Support",
    ],
    button: "Start for Free",
    buttonClass: "bg-blue-600 hover:bg-blue-700",
    cardClass: "",
    priceColor: "text-blue-600",
    featureColor: "text-gray-700",
    border: "border border-white/20",
    shadow: "shadow-lg hover:shadow-2xl",
  },
  {
    name: "Pro",
    price: "$49",
    priceNote: "/ month",
    features: [
      "10 Projects",
      "1 Million API Calls/mo",
      "AI-Powered Analytics",
      "Advanced Security",
      "Email Support",
    ],
    button: "Choose Pro",
    buttonClass: "bg-blue-700 hover:bg-blue-800",
    cardClass: "bg-blue-50 border-2 border-blue-600 scale-105 z-10 relative",
    priceColor: "text-blue-700",
    featureColor: "text-gray-800",
    border: "border-2 border-blue-600",
    shadow: "shadow-2xl",
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Let’s Talk",
    priceNote: "",
    features: [
      "Unlimited Projects",
      "Custom API Call Volume",
      "On-Premise Deployment",
      "Security Audits",
      "Dedicated 24/7 Support",
    ],
    button: "Contact Sales",
    buttonClass: "bg-gray-800 hover:bg-gray-900",
    cardClass: "",
    priceColor: "text-gray-800",
    featureColor: "text-gray-700",
    border: "border border-white/20",
    shadow: "shadow-lg hover:shadow-2xl",
  },
];

function Pricing() {
  return (
    <div className="pt-24 px-6 text-center min-h-screen bg-gradient-to-br from-violet-100 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="relative z-10">
        {/* Title */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Simple, Transparent Pricing for Teams of All Sizes
          </h2>
          <p className="text-lg text-gray-600">
            Start for free and scale as you go. No hidden fees, ever.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`group ${plan.cardClass} ${plan.border} ${plan.shadow} bg-white/80 backdrop-blur-sm p-10 rounded-2xl transition-all duration-500 ease-out relative`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
              {/* Badge for Pro plan */}
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-semibold px-5 py-1 rounded-full shadow-lg z-30">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                {plan.name}
              </h3>
              <p className={`text-3xl font-bold mb-6 ${plan.priceColor}`}>
                {plan.price} {plan.priceNote && <span className="text-base font-normal">{plan.priceNote}</span>}
              </p>
              <ul className={`${plan.featureColor} text-left space-y-2 mb-8 font-medium`}>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-600 mr-3 text-lg">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full ${plan.buttonClass} text-white px-6 py-3 rounded-full font-semibold shadow transition-all duration-300 group-hover:scale-105`}
              >
                {plan.button}
              </button>
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Pricing;
