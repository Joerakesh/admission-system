// components/form/PrimaryButton.tsx
import React from "react";

interface PrimaryButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    text,
    onClick,
    type = "submit",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full bg-indigo-600 text-white rounded-lg py-2 mt-4 hover:bg-indigo-700 transition-all"
        >
            {text}
        </button>
    );
};

export default PrimaryButton;
