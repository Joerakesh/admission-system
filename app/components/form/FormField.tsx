import React from 'react';

interface FormFieldProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    name,
    type = 'text',
    placeholder,
    required = false,
    onChange,
}) => {
    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-black mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                className="w-full border text-gray-700 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
    );
};

export default FormField;
