// src/pages/AboutUs.js (or src/components/Home.js)

import React, {useEffect, useState} from "react";

function AboutUs() {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch team data from API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setTeam(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch team:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="pt-24 px-6">
            {/* Our Mission Section */}
            <section className="max-w-5xl mx-auto text-center mb-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    We Empower Developers to Build The Future.
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                    In today's digital world, APIs are the backbone of innovation. Yet, managing
                    them has become increasingly complex. <strong>API PRO</strong> was founded on a
                    simple principle: to give developers and businesses the tools they need to
                    build, manage, and scale their APIs without the headache. We handle the
                    complexity, so you can focus on creating amazing products.
                </p>
            </section>

            {/* Meet the Team Section */}
            <section className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    The Team Behind API PRO
                </h2>

                {loading ? (
                    <p className="text-lg text-gray-500">Loading team members...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                        {team.map((member) => (
                            <div
                                key={member.id}
                                className="bg-zinc-900 shadow-lg rounded-lg p-6 border border-gray-100"
                            >
                                <h3 className="text-3xl text-gray-100 font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-400 mb-1">
                                    <strong>Email:</strong> {member.email}
                                </p>
                                <p className="text-gray-500">
                                    <strong>Website:</strong>{" "}
                                    <a
                                        href={`http://${member.website}`}
                                        className="text-blue-600 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {member.website}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default AboutUs;
