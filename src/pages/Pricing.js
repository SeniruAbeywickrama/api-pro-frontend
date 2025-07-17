// src/pages/Pricing.js (or src/components/Home.js)

import React from "react";
import PricingSection from "../componants/pricing/pricing-section";
import DetailsSection from "../componants/pricing/details-section";


function Pricing() {
  return (
    <div className="pt-24 px-6 text-center min-h-screen bg-gradient-to-br from-violet-100 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="relative z-10">
        {/* Title Section*/}
        <DetailsSection/>
        {/* Pricing Cards */}
        <PricingSection/>
      </div>
    </div>
  );
}

export default Pricing;
