// src/pages/HeroSection.js (or src/components/Home.js)

import React from "react";
import { FaBolt, FaAtom, FaDatabase, FaRocket, FaCrown } from "react-icons/fa";

const companies = [
  {
    name: "InnovateCorp",
    icon: <FaBolt className="text-yellow-400 mr-2" size={25}/>,
    style: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-200"
  },
  {
    name: "QuantumLeap Tech",
    icon: <FaAtom className="text-blue-400 mr-2" size={25}/>,
    style: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-200"
  },
  {
    name: "DataWeave Solutions",
    icon: <FaDatabase className="text-green-400 mr-2" size={25}/>,
    style: "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-200"
  },
  {
    name: "NextGen Systems",
    icon: <FaRocket className="text-purple-400 mr-2" size={25}/>,
    style: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-200"
  },
  {
    name: "Apex Digital",
    icon: <FaCrown className="text-pink-400 mr-2" size={25}/>,
    style: "bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 border-pink-200"
  },
];

function SocialProof() {
    return (
        <section className="bg-gradient-to-br from-violet-100 via-blue-50 to-indigo-50 py-24 px-6 text-center relative overflow-hidden">
            {/* Background decorative elements */}
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                    Trusted by the World's Most Innovative Companies
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 text-xl font-semibold">
                  {companies.map((company) => (
                    <span
                      key={company.name}
                      className={`flex items-center px-7 py-4 ${company.style} bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border text-shadow-sm cursor-pointer select-none tracking-wide uppercase font-extrabold`}
                      style={{ letterSpacing: '0.08em', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {company.icon}
                      {company.name}
                    </span>
                  ))}
                </div>
            </div>
        </section>
    );
}

export default SocialProof;
