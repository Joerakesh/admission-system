'use client';

import React from 'react';
import FormContainer from '../../components/form/FormContainer';
import FormTitle from '../../components/form/FormTitle';
// import PaymentStatusCard from '../../components/admission/PaymentStatusCard';

const PaymentPage = () => {
    return (
        <FormContainer>
            <FormTitle
                title="Payment Status"
            // subtitle="Check your application payment status below."
            />
            {/* <PaymentStatusCard /> */}
        </FormContainer>
    );
};

export default PaymentPage;
