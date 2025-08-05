'use client'

import React from 'react';
import FormField from '../../components/form/FormField';
import DatePickerField from '../../components/form/DatePickerField';
import SelectField from '../../components/form/SelectField';

const AdmissionForm = () => {
    const handleChange = (e: React.ChangeEvent<any>) => {
        // Handle form changes here
        console.log(e.target.name, e.target.value);
    };

    return (
        <div className="min-h-screen bg-[#f4f6fc] p-8">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-8">
                <h1 className="text-2xl font-bold text-indigo-600 mb-6">Admission 2025-26</h1>
                <p className="mb-4 text-sm text-gray-600">Fields marked with (<span className="text-red-500">*</span>) are mandatory</p>

                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FormField label="Initial" name="initial" required onChange={handleChange} />
                    <FormField label="Candidate's Name" name="name" placeholder="as in 10th mark statement" required onChange={handleChange} />
                    <DatePickerField label="Date of Birth" name="dob" required onChange={handleChange} />

                    <SelectField label="Gender" name="gender" required options={['Male', 'Female', 'Other']} onChange={handleChange} />
                    <SelectField label="Nationality" name="nationality" required options={['Indian', 'Others']} onChange={handleChange} />
                    <FormField label="+2 Registration No." name="regNo" required onChange={handleChange} />

                    <SelectField label="+2 Month" name="month" required options={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} onChange={handleChange} />
                    <FormField label="+2 Year" name="year" type="number" required onChange={handleChange} />
                    <FormField label="Candidate's Email ID" name="email" type="email" required onChange={handleChange} />

                    <FormField label="Student Mobile No." name="mobile" type="tel" required onChange={handleChange} />
                    <FormField label="Create Password" name="password" type="password" required onChange={handleChange} />
                    <FormField label="Confirm Password" name="confirmPassword" type="password" required onChange={handleChange} />
                </form>

                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
                    >
                        Submit Application
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;
