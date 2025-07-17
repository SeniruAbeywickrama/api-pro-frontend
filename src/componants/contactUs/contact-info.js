// Contact Info Component
import React from "react";

const ContactInfo = ({ icon: Icon, title, details, link }) => (
    <div className="group flex flex-col items-center lg:items-end text-center lg:text-right bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 px-6 py-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="flex items-center gap-4 justify-center lg:justify-end mb-2">
            <Icon size={25} className="text-blue-600" />
            <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {title}
            </h3>
        </div>
        {link ? (
            <a
                href={link}
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
                aria-label={`${title}: ${details}`}
            >
                {details}
            </a>
        ) : (
            <p className="text-gray-600 font-medium">{details}</p>
        )}
    </div>
);

export default ContactInfo;
