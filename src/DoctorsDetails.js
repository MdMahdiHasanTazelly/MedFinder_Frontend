import { useState } from 'react';
import './css/DoctorsDetails.css';

function DoctorsDetails() {
    const [doctor, setDoctor] = useState({});
    const [hRegNo, setHRegNo] = useState("");

    const handleDelete = () => {}
    const handleUpdate = () => {}
    const handleAddHospital = () => {}


    return (
        <div className="doctor-container">
            <h2>{doctor.name}</h2>
            <p><strong>Reg No:</strong> {doctor.dRegNo}</p>
            <p><strong>Degree:</strong> {doctor.degree}</p>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Contact:</strong> {doctor.contactNo}</p>
            <h3>Hospitals</h3>
            <ul>
                {/* {doctor.hospitals.map((hospital, index) => (
                    <li key={index}>{hospital.name}</li>
                ))} */}
            </ul>
            <div className="hospital-form">
                <input 
                    type="text" 
                    value={hRegNo} 
                    onChange={(e) => setHRegNo(e.target.value)} 
                    placeholder="Enter Hospital Reg No" 
                />
                <button onClick={handleAddHospital}>Add Hospital</button>
            </div>
            <div className="buttons">
                <button className="update" onClick={handleUpdate}>Update</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default DoctorsDetails;