'use client';

import React from 'react';
import FormField from '../../components/form/FormField';
import SelectField from '../../components/form/SelectField';
import DatePickerField from '../../components/form/DatePickerField';
import FormContainer from '../../components/form/FormContainer';
import FormTitle from '../../components/form/FormTitle';
import PrimaryButton from '../../components/form/PrimaryButton';

const AcademicDetails = () => {
    const handleChange = (e: React.ChangeEvent<any>) => {
        console.log(e.target.name, e.target.value);
    };

    return (
        <FormContainer>
            <FormTitle
                title="Academic Details"
            // subtitle="Fill in your previous academic records accurately."
            />

            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormField
                    label="School Name"
                    name="schoolName"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="School Address"
                    name="schoolAddress"
                    required
                    onChange={handleChange}
                />
                <SelectField
                    label="Board of Study"
                    name="board"
                    required
                    options={['State Board', 'CBSE', 'ICSE', 'Others']}
                    onChange={handleChange}
                />

                <FormField
                    label="Medium of Instruction"
                    name="medium"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Total Marks"
                    name="totalMarks"
                    type="number"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Marks Obtained"
                    name="marksObtained"
                    type="number"
                    required
                    onChange={handleChange}
                />

                <FormField
                    label="Percentage"
                    name="percentage"
                    type="number"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Group Studied"
                    name="group"
                    placeholder="e.g., Bio-Maths, CS, Commerce"
                    required
                    onChange={handleChange}
                />
                <DatePickerField
                    label="Date of Passing"
                    name="passingDate"
                    required
                    onChange={handleChange}
                />
            </form>

            <div className="mt-8 flex justify-end">
                <div className="w-full md:w-auto">
                    <PrimaryButton text="Save and Continue" />
                </div>
            </div>
        </FormContainer>
    );
};

export default AcademicDetails;
