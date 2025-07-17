import React from "react";

const LeftSection = () => {
    return (
        <aside className="md:col-span-1 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
            {/* Getting Started */}
            <div className="mb-6">
                <h2 className="text-xs text-gray-500 font-semibold mb-2 tracking-widest">GETTING STARTED</h2>
                <ul className="space-y-2">
                    <li>
                        <a
                            href="#"
                            className="text-blue-600 hover:underline font-medium transition-colors duration-200"
                        >
                            Authentication
                        </a>
                    </li>
                </ul>
            </div>

            {/* Core Resources */}
            <div>
                <h2 className="text-xs text-gray-500 font-semibold mb-2 tracking-widest">CORE RESOURCES</h2>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="text-blue-700 font-semibold bg-blue-100 rounded px-2 py-1 block shadow-sm">
                            GET /users
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            POST /users
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            GET /analytics
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            GET /logs
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default LeftSection;
