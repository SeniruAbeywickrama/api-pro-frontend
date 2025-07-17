// Team Section component
import React, {useEffect, useState} from "react";
import {FaUsers} from "react-icons/fa";
import LoadingSkeleton from "./loading-skeleton";
import ErrorMessage from "./error-component";
import TeamMember from "./team-member";

const TeamSection = () => {
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
        <div>
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

    )
};

export default TeamSection;
