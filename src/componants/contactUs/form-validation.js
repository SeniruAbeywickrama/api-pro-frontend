// Custom hook for form validation
import {useState} from "react";

const useFormValidation = (initialState, validationRules) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateField = (name, value) => {
        const rules = validationRules[name];
        if (!rules) return '';

        if (rules.required && !value.trim()) {
            return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        }

        if (rules.minLength && value.length < rules.minLength) {
            return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rules.minLength} characters`;
        }

        if (rules.maxLength && value.length > rules.maxLength) {
            return `${name.charAt(0).toUpperCase() + name.slice(1)} must be less than ${rules.maxLength} characters`;
        }

        if (rules.pattern && !rules.pattern.test(value)) {
            return `Please enter a valid ${name}`;
        }

        return '';
    };

    const handleChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (name) => {
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name, formData[name]);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(validationRules).forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) newErrors[field] = error;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return {
        formData,
        errors,
        touched,
        handleChange,
        handleBlur,
        validateForm,
    };
};

export default useFormValidation;
