'use client';

import React from 'react';
import FormContainer from '../../components/form/FormContainer';
import FormTitle from '../../components/form/FormTitle';
// import InstructionsCard from '../../components/admission/InstructionsCard';
import PrimaryButton from '../../components/form/PrimaryButton';

const InstructionPage = () => {
    const handleConfirm = () => {
        alert('Form submitted successfully!');
        // You can route to a success page here
    };

    return (
        <FormContainer>
            <FormTitle
                title="Instructions"
            // subtitle="Please read and follow the instructions carefully."
            />
            {/* <InstructionsCard /> */}
            <div className="mt-8 flex justify-end">
                <PrimaryButton text="Confirm Submission" onClick={handleConfirm} />
            </div>
        </FormContainer>
    );
};

export default InstructionPage;
