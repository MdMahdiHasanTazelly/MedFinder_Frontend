import axios from "axios";
import showToast from "./toast/Toast";
import  "./css/HospitalForm.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';


function UpdateHospital() {
    const { id } = useParams(); 
    const navigate = useNavigate();

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
        const newHospital = {
            hRegNo: formData.hRegNo,
            name: formData.name,
            contactNo: formData.contactNo,
            location: {
                district: formData.district,
                subDistrict: formData.subDistrict,
                holdingNo: formData.holdingNo,
                road: formData.road,
            },
        }
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/hospitals/${id}`, newHospital)
        .then( (res)=>{
            showToast(res.data.message, "success");
            navigate(`/find-hospitals`);
        })
        .catch((error)=>{
            showToast(error.response.data.error, "error");
        })
    }

    useEffect( ()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/hospitals/${id}`)
        .then( (res)=>{
            setFormData({
                hRegNo: res.data.hRegNo,
                name: res.data.name,
                contactNo: res.data.contactNo,
                district: res.data.location.district,
                subDistrict: res.data.location.subDistrict,
                holdingNo: res.data.location.holdingNo,
                road: res.data.location.road,
            });
        })
        .catch( (error)=>{
            console.log(error);
        });
    },[]);
    


    return(
    <div className="hospital-form-container">
            <h2>Update Hospital Info</h2>
            <form onSubmit={handleSubmit}>
                <label>Hospital Registration No:</label>
                <input type="text" name="hRegNo" value={formData.hRegNo} onChange={handleChange} required disabled/>
                
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
}

export default UpdateHospital;