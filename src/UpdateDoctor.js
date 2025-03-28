import axios from 'axios';
import showToast from './toast/Toast';
import './css/UpdateDoctor.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function UpdateDoctor() {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const [doctor, setDoctor] = useState({
        name: "",
        dRegNo: "",
        degree: "",
        specialization: "",
        contactNo: "",
        currentRole: ""
    });

    const handleChange = (e) => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(event)=>{
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/doctors/${id}/update`, doctor)
        .then( (res)=>{
            showToast(res.data.message, "success");
            navigate(`/doctors/${id}`);
        })
        .catch( (error)=>{
            showToast(error.response.data.error, "error");
        })
    }

    //to show current info
    useEffect( ()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/doctors/${id}`)
        .then( (res)=>{
            setDoctor(res.data);
        })
        .catch( (error)=>{
            console.log(error);
        })
    }, []);

    return (
        <div className="update-doctor-container">
            <h2>Update Doctor Information</h2>
            <form onSubmit={handleSubmit} className="update-doctor-form">
                <label>Name:</label>
                <input type="text" name="name" value={doctor.name} onChange={handleChange} required />

                <label>Registration No:</label>
                <input type="text" name="dRegNo" value={doctor.dRegNo} onChange={handleChange} required disabled />

                <label>Degree:</label>
                <input type="text" name="degree" value={doctor.degree} onChange={handleChange} required />

                <label>Specialization:</label>
                <input type="text" name="specialization" value={doctor.specialization} onChange={handleChange} required />

                <label>Current Role:</label>
                <input type="text" name="currentRole" value={doctor.currentRole} onChange={handleChange} required />

                <label>Contact No:</label>
                <input type="text" name="contactNo" value={doctor.contactNo} onChange={handleChange} required />

                <button type="submit">Update Doctor</button>
            </form>
        </div>
    );
}

export default UpdateDoctor;