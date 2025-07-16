// src/pages/Home.js (or src/components/Home.js)

import React from "react";
import HeroSection from "../componants/home/hero-section";
import SocialProofSection from "../componants/home/social-proof-seciton";
import FeaturesSection from "../componants/home/features-section";

function Home() {
    return (
        <div className="pt-20 scroll-smooth">
            {/* Hero Section */}
            <HeroSection/>

            {/* Features Section */}
            <FeaturesSection/>

            {/* Social Proof Section */}
            <SocialProofSection/>

        </div>
    );
}

export default Home;
