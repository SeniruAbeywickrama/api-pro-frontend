import React, { useState } from 'react';
import ContactInfo from "../componants/contactUs/contact-info";
import ContactUsHeader from "../componants/contactUs/contactus-header";
import ContactFormSection from "../componants/contactUs/contact-form-section";
import ContactDetails from "../componants/contactUs/contact-details-section";

// Main ContactUs Component
const ContactUs = () => {
  return (
    <div className="pt-24 px-6 min-h-screen bg-gradient-to-br from-violet-100 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="relative z-10">
        {/* Header Section */}
        <ContactUsHeader/>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ContactFormSection/>
          {/* Contact Details */}
          <ContactDetails/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
