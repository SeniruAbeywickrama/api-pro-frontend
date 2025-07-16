// src/pages/Home.js (or src/components/ContactUs.js)
import { HiHomeModern } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

import React from "react";

function ContactUs() {
    return (
        <div className="pt-24 bg-slate-50 min-h-screen">
            {/* Title & Subheading */}
            <section className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
                <p className="text-lg text-gray-600">
                    Have a technical question, a sales inquiry, or just want to chat? We'd love to hear from you.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Form */}
                <form className="bg-gray-100 p-8 rounded-lg shadow space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Work Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Company Name <span className="text-gray-400">(Optional)</span></label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Company"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Message</label>
                        <textarea
                            className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your message here..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Details */}
                <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right space-y-8">
                    {/* Office */}
                    <div>
                        <div className="flex items-center gap-4 justify-center lg:justify-end">
                            <HiHomeModern size={25} />
                            <h3 className="text-xl font-semibold">Our Office</h3>
                        </div>
                        <p className="text-gray-600 mt-2">
                            123 Tech Avenue, Innovation City,<br />
                            Connectiville 45678
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <div className="flex items-center gap-4 justify-center lg:justify-end">
                            <MdEmail size={25} />
                            <h3 className="text-xl font-semibold">Email Us</h3>
                        </div>
                        <p className="text-blue-600 mt-2">hello@apipro.com</p>
                    </div>

                    {/* Phone */}
                    <div>
                        <div className="flex items-center gap-4 justify-center lg:justify-end">
                            <BiSolidPhoneCall size={25} />
                            <h3 className="text-xl font-semibold">Call Us</h3>
                        </div>
                        <p className="text-gray-700 mt-2">+1 (555) 123-4567</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
