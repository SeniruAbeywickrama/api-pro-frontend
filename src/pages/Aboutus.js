// src/pages/AboutUs.js (or src/components/Home.js)

import React, { useEffect, useState } from 'react';
import { FaUsers, FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';
import LoadingSkeleton from "../componants/aboutUs/loading-skeleton";
import TeamMember from "../componants/aboutUs/team-member";
import ErrorMessage from "../componants/aboutUs/error-component";
import MissionSection from "../componants/aboutUs/mission-component";


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
