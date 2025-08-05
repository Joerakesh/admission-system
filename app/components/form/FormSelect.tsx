import React from "react";

interface FormSelectProps {
    label: string;
    name: string;
    options: string[];
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormSelect: React.FC<FormSelectProps> = ({
    label,
    name,
    options,
    required = false,
    value,
    onChange,
}) => {
    return (
        <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-black mb-1">
                {label} {required && "*"}
            </label>
            <select
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                className="w-full border text-gray-700 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <option value="">Select {label}</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FormSelect;