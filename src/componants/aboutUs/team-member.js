import React from "react";
import AboutUs from "../../pages/Aboutus";

const TeamMember = ({ member }) => (
    <div className="group bg-white/80 py-4 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-white/20 relative overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>

        {/* Avatar placeholder */}
        <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
      <span className="text-white text-2xl font-bold">
        {member.name.charAt(0).toUpperCase()}
      </span>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                {member.name}
            </h3>
            <p className="text-gray-600 mb-3 text-sm">
                <span className="font-semibold">Email:</span> {member.email}
            </p>
            <p className="text-gray-600 text-sm">
                <span className="font-semibold">Website:</span>{' '}
                <a
                    href={`http://${member.website}`}
                    className="text-blue-600 hover:text-blue-700 underline transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${member.name}'s website`}
                >
                    {member.website}
                </a>
            </p>
        </div>
    </div>
);

export default TeamMember;
