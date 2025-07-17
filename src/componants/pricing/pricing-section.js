import React from "react";
import plans from "../../data/sample";

const PricingSection = () => {
    return (
        <div className="">
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
    );
};

export default PricingSection;
