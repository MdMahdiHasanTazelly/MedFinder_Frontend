import { useState, useEffect } from "react";
import './css/FindDoctor.css';
import axios from "axios";
import showToast from "./toast/Toast";
import { useNavigate } from "react-router-dom";

function FindDoctor() {
    const [query, setQuery] = useState('');
    const [doctors, setDoctors] = useState([]);

    const navigate = useNavigate();

    //showing all the doctors info whenever users land on this page
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/doctors`)
        .then((res)=>{
            setDoctors(res.data);
        })
        .catch((error)=>{
            showToast(error.response.data.error, "error");
        })
    }, []);

    //showing doctors info based on user's query
    const handleSearch = ()=>{
        setDoctors([]);  //removing doctors array for next search
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/doctors/search?query=${query}`)
        .then( (res)=>{
            setDoctors(res.data);
        })
        .catch( (error)=>{
            showToast(error.response.data.message, 'error');
            setQuery("");
        });
        setQuery("");
    }

    return (
        <div className="doctor-search-container">
            <h2>Search Doctors</h2>
            <input 
                type="text" 
                placeholder="Search by name..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div className="doctor-list">
                {
                    doctors.length>0 ? (
                        doctors.map((doctor) => (
                            <div key={doctor._id} className="doctor-card">
                                <h3>{doctor.name}</h3>
                                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                                <p><strong>Contact:</strong> {doctor.contactNo}</p>
                                <p><strong>Education:</strong> {doctor.degree}</p>
                                <button 
                                onClick={ ()=>navigate(`/doctors/${doctor._id}`) }
                                >View Details
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No Doctor Found.</p>
                    )
                }
            </div>
        </div>
    );
}

export default FindDoctor;