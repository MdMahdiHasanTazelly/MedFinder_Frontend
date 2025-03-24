import React, { useState } from 'react';
import './css/DoctorForm.css';

const DoctorForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        dRegNo: '',
        degree: '',
        specialization: '',
        contactNo: '',
        hospitals: []
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="doctor-form-container">
            <h2>Register Doctor</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                
                <label>Registration No:</label>
                <input type="text" name="dRegNo" value={formData.dRegNo} onChange={handleChange} required />
                
                <label>Degree:</label>
                <input type="text" name="degree" value={formData.degree} onChange={handleChange} required />
                
                <label>Specialization:</label>
                <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required />
                
                <label>Contact No:</label>
                <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DoctorForm;