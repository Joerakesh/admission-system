"use client";

import React from "react";
import FormField from "../../components/form/FormField";
import SelectField from "../../components/form/SelectField";
import FormContainer from "../../components/form/FormContainer";
import FormTitle from "../../components/form/FormTitle";
import PrimaryButton from "../../components/form/PrimaryButton";

const ProgrammeSelection = () => {
    const handleChange = (e: React.ChangeEvent<any>) => {
        console.log(e.target.name, e.target.value);
    };

    return (
        <FormContainer>
            <FormTitle
                title="Programme Selection"
            // subtitle="Choose the program and preferences carefully."
            />

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                    label="Program Type"
                    name="programType"
                    options={["Undergraduate (UG)", "Postgraduate (PG)", "Diploma"]}
                    required
                    onChange={handleChange}
                />

                <SelectField
                    label="Course Name"
                    name="courseName"
                    options={["B.Sc Computer Science", "B.Com", "B.A English", "BCA"]}
                    required
                    onChange={handleChange}
                />

                <SelectField
                    label="Department"
                    name="department"
                    options={["Computer Science", "Commerce", "English", "Mathematics"]}
                    required
                    onChange={handleChange}
                />

                <SelectField
                    label="Shift Preference"
                    name="shift"
                    options={["Shift I (Morning)", "Shift II (Evening)"]}
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

export default ProgrammeSelection;
