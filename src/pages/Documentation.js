// src/pages/Documentation.js (or src/components/Home.js)

import React from "react";
import LeftSection from "../componants/documentation/left-section";
import RightSection from "../componants/documentation/right-section";

function Documentation() {
  return (
    <div className="pt-24 px-4 md:px-10 min-h-screen bg-gradient-to-br from-violet-100 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="relative z-10">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
          API PRO Developer Documentation
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <LeftSection/>
          {/* Main Content Area */}
          <RightSection/>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
