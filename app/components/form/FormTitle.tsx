// components/FormTitle.tsx
import React from 'react';

const FormTitle = ({ title }: { title: string }) => {
    return (
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 text-center">
            {title}
        </h2>
    );
};

export default FormTitle;
