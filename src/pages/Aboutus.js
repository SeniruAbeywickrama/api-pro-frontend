// src/pages/AboutUs.js (or src/components/Home.js)

import React from 'react';
import MissionSection from "../componants/aboutUs/mission-component";
import TeamSection from "../componants/aboutUs/team-section";


// Main AboutUs component
const AboutUs = () => {
  return (
    <div className="pt-24 px-6 bg-gradient-to-br from-violet-100 via-blue-50 to-indigo-50 min-h-screen relative overflow-hidden">
      
      <div className="relative z-10">
          {/* Mission Section */}
          <MissionSection />
          {/* Team Section */}
          <TeamSection/>
      </div>
    </div>
  );
};

export default AboutUs;
