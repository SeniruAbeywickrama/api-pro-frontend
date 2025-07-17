import React from "react";

const ContactUsHeader = () => {
    return (
        <section className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Get In Touch
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
                Have a technical question, a sales inquiry, or just want to chat?
                We'd love to hear from you.
            </p>
        </section>
    );
};

export default ContactUsHeader;
