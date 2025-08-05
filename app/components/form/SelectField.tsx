import React from 'react';

interface SelectFieldProps {
    label: string;
    name: string;
    required?: boolean;
    options: string[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
    label,
    name,
    required = false,
    options,
    onChange,
}) => {
    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-black mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <select
                name={name}
                required={required}
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

export default SelectField;
