import React, { useState } from 'react';
import '../css/DoctorForm.css';
import axios from 'axios';
import showToast from '../toast/Toast';
import { useNavigate } from 'react-router-dom';

const DoctorForm = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        dRegNo: '',
        degree: '',
        specialization: '',
        contactNo: '',
        currentRole: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/doctors`, formData)
        .then( (res)=>{
            showToast(res.data.message, "success");
            navigate("/find-doctors");
        })
        .catch( (error)=>{
            showToast(error.response.data.error, "error");
            navigate('/add-doctor');
        });

       setFormData({
        name: '',
        dRegNo: '',
        degree: '',
        specialization: '',
        contactNo: '',
        currentRole: "",
    });

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

                    <label>Current Role:</label>
                    <input type="text" name="currentRole" value={formData.currentRole} onChange={handleChange} required />
                
                    <label>Contact No:</label>
                    <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
             
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DoctorForm;