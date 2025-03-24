import React, { useState } from 'react';
import './css/HospitalForm.css';

const HospitalForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        hRegNo: '',
        name: '',
        contactNo: '',
        district: '',
        subDistrict: '',
        holdingNo: '',
        road: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="hospital-form-container">
            <h2>Register Hospital</h2>
            <form onSubmit={handleSubmit}>
                <label>Hospital Registration No:</label>
                <input type="text" name="hRegNo" value={formData.hRegNo} onChange={handleChange} required />
                
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                
                <label>Contact No:</label>
                <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
                
                <label>District:</label>
                <input type="text" name="district" value={formData.district} onChange={handleChange} required />
                
                <label>Sub-District:</label>
                <input type="text" name="subDistrict" value={formData.subDistrict} onChange={handleChange} required />
                
                <label>Holding No:</label>
                <input type="text" name="holdingNo" value={formData.holdingNo} onChange={handleChange} required />
                
                <label>Road (Optional):</label>
                <input type="text" name="road" value={formData.road} onChange={handleChange} />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HospitalForm;