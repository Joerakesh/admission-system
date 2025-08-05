"use client";

import React from "react";
import FormContainer from "../../components/form/FormContainer";
import FormTitle from "../../components/form/FormTitle";
import FormField from "../../components/form/FormField";
import PrimaryButton from "../../components/form/PrimaryButton";

const SubjectsPage = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value);
    };

    return (
        <FormContainer>
            <FormTitle
                title="Subjects & Marks"
            // subtitle="Enter the marks/grades for each subject studied."
            />

            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormField
                    label="Subject 1"
                    name="subject1"
                    placeholder="e.g., Tamil"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Marks Obtained"
                    name="marks1"
                    type="number"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Grade"
                    name="grade1"
                    placeholder="e.g., A+"
                    required
                    onChange={handleChange}
                />

                <FormField
                    label="Subject 2"
                    name="subject2"
                    placeholder="e.g., English"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Marks Obtained"
                    name="marks2"
                    type="number"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Grade"
                    name="grade2"
                    placeholder="e.g., A"
                    required
                    onChange={handleChange}
                />

                <FormField
                    label="Subject 3"
                    name="subject3"
                    placeholder="e.g., Mathematics"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Marks Obtained"
                    name="marks3"
                    type="number"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Grade"
                    name="grade3"
                    placeholder="e.g., A+"
                    required
                    onChange={handleChange}
                />

                <FormField
                    label="Subject 4"
                    name="subject4"
                    placeholder="e.g., Physics"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Marks Obtained"
                    name="marks4"
                    type="number"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Grade"
                    name="grade4"
                    placeholder="e.g., B+"
                    required
                    onChange={handleChange}
                />

                <FormField
                    label="Subject 5"
                    name="subject5"
                    placeholder="e.g., Chemistry"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Marks Obtained"
                    name="marks5"
                    type="number"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Grade"
                    name="grade5"
                    placeholder="e.g., B"
                    required
                    onChange={handleChange}
                />

                <FormField
                    label="Subject 6"
                    name="subject6"
                    placeholder="e.g., Computer Science"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Marks Obtained"
                    name="marks6"
                    type="number"
                    required
                    onChange={handleChange}
                />
                <FormField
                    label="Grade"
                    name="grade6"
                    placeholder="e.g., A"
                    required
                    onChange={handleChange}
                />
            </form>

            <div className="mt-8 flex justify-end">
                <PrimaryButton text="Save and Continue" />
            </div>
        </FormContainer>
    );
};

export default SubjectsPage;
