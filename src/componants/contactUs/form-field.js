// Form Field Component
import {FaExclamationCircle} from "react-icons/fa";
import React from "react";

const FormField = ({label, name, type = 'text', placeholder, required = false, value, error, touched, onChange, onBlur, ...props}) => (
    <div className="space-y-2">
        <label htmlFor={name} className="block text-gray-700 font-medium">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {type === 'textarea' ? (
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                onBlur={() => onBlur(name)}
                placeholder={placeholder}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                    error && touched
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-blue-500'
                }`}
                rows={4}
                {...props}
            />
        ) : (
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                onBlur={() => onBlur(name)}
                placeholder={placeholder}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    error && touched
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-blue-500'
                }`}
                {...props}
            />
        )}
        {error && touched && (
            <p className="text-red-500 text-sm flex items-center gap-1">
                <FaExclamationCircle size={12} />
                {error}
            </p>
        )}
    </div>
);

export default FormField;
