import React from "react";

interface FormInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
    value,
    onChange,
}) => {
    return (
        <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-black mb-1">
                {label} {required && "*"}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className="w-full border text-gray-700 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
    );
};

export default FormInput;
