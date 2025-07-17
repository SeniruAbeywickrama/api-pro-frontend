// src/pages/AboutUs.js (or src/components/Home.js)

import React, { useEffect, useState } from 'react';
import { FaUsers, FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';

// Team member interface for better type safety
const TeamMember = ({ member }) => (
  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-white/20 relative overflow-hidden">
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

// Loading skeleton component
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

// Error component
const ErrorMessage = ({ message, onRetry }) => (
  <div className="text-center py-12">
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
      <FaHeart className="text-red-500 text-2xl" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">Oops! Something went wrong</h3>
    <p className="text-gray-600 mb-6">{message}</p>
    <button
      onClick={onRetry}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-semibold"
    >
      Try Again
    </button>
  </div>
);

// Mission section component
const MissionSection = () => (
  <section className="max-w-5xl mx-auto text-center mb-24">
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl"></div>
      <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-white/20">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
          <FaRocket className="text-white text-2xl" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
          Our Mission
        </h2>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          We Empower Developers to Build The Future.
        </h3>
        
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          In today's digital world, APIs are the backbone of innovation. Yet, managing
          them has become increasingly complex. <strong className="text-blue-600">API PRO</strong> was founded on a
          simple principle: to give developers and businesses the tools they need to
          build, manage, and scale their APIs without the headache. We handle the
          complexity, so you can focus on creating amazing products.
        </p>
      </div>
    </div>
  </section>
);

// Main AboutUs component
const AboutUs = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTeam = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch team data');
      }
      
      const data = await response.json();
      setTeam(data);
    } catch (err) {
      console.error('Failed to fetch team:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div className="pt-24 px-6 bg-gradient-to-br from-violet-100 via-blue-50 to-indigo-50 min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-blue-600/5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Mission Section */}
        <MissionSection />

        {/* Team Section */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <FaUsers className="text-white text-2xl" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
              The Team Behind API PRO
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the passionate individuals who are building the future of API management
            </p>
          </div>

          {loading ? (
            <LoadingSkeleton />
          ) : error ? (
            <ErrorMessage message={error} onRetry={fetchTeam} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
