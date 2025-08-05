// components/FormContainer.tsx
import React from 'react';

const FormContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-indigo-100 px-4 py-12">
            <div className="w-full max-w-4xl bg-white shadow-xl rounded-3xl p-8 md:p-12">
                {children}
            </div>
        </div>
    );
};

export default FormContainer;
