// Loading skeleton component
import React from "react";

const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 animate-pulse">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-300"></div>
                <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded"></div>
                </div>
            </div>
        ))}
    </div>
);


export default LoadingSkeleton;
