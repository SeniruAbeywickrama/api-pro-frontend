import React, {useState} from "react";
import {FaCheckCircle, FaExclamationCircle} from "react-icons/fa";
import FormField from "./form-field";
import useFormValidation from "./form-validation";

// Form validation rules
const VALIDATION_RULES = {
    fullName: {
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    company: {
        maxLength: 100,
    },
    message: {
        required: true,
        minLength: 10,
        maxLength: 1000,
    },
};

const ContactFormSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const {formData, errors, touched, handleChange, handleBlur, validateForm,} = useFormValidation(
        {
            fullName: '',
            email: '',
            company: '',
            message: '',
        },
        VALIDATION_RULES
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Here you would typically send the data to your backend
            console.log('Form submitted:', formData);

            setSubmitStatus('success');
            // Reset form after successful submission
            setTimeout(() => {
                setSubmitStatus(null);
                // Reset form data
                Object.keys(formData).forEach(key => {
                    handleChange(key, '');
                });
            }, 3000);
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Send us a message
            </h2>

            {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" size={20} />
                    <p className="text-green-800 font-medium">
                        Thank you! Your message has been sent successfully.
                    </p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                    <FaExclamationCircle className="text-red-600" size={20} />
                    <p className="text-red-800 font-medium">
                        Sorry, something went wrong. Please try again.
                    </p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <FormField
                    label="Full Name"
                    name="fullName"
                    placeholder="Your full name"
                    required
                    value={formData.fullName}
                    error={errors.fullName}
                    touched={touched.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <FormField
                    label="Work Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    error={errors.email}
                    touched={touched.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <FormField
                    label="Company Name"
                    name="company"
                    placeholder="Your company (optional)"
                    value={formData.company}
                    error={errors.company}
                    touched={touched.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <FormField
                    label="Message"
                    name="message"
                    type="textarea"
                    placeholder="Tell us about your project or question..."
                    required
                    value={formData.message}
                    error={errors.message}
                    touched={touched.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                    }`}
                >
                    {isSubmitting ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            Sending...
                        </>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactFormSection;
