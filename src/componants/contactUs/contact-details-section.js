import React from "react";
import {HiHomeModern} from "react-icons/hi2";
import {MdEmail} from "react-icons/md";
import {BiSolidPhoneCall} from "react-icons/bi";
import ContactInfo from "./contact-info";

// Contact information constants
const CONTACT_INFO = {
    office: {
        icon: HiHomeModern,
        title: 'Our Office',
        details: '123 Tech Avenue, Innovation City, Connectiville 45678',
    },
    email: {
        icon: MdEmail,
        title: 'Email Us',
        details: 'hello@apipro.com',
        link: 'mailto:hello@apipro.com',
    },
    phone: {
        icon: BiSolidPhoneCall,
        title: 'Call Us',
        details: '+1 (555) 123-4567',
        link: 'tel:+15551234567',
    },
};

const ContactDetails = () => {
    return (
        <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center lg:text-right bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Contact Information
            </h2>

            {Object.entries(CONTACT_INFO).map(([key, info]) => (
                <ContactInfo key={key} {...info} />
            ))}
        </div>
    );
};

export default ContactDetails;
