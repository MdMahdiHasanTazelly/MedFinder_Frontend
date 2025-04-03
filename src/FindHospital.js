import axios from 'axios';
import './css/FindHospital.css';
import showToast from './toast/Toast';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FindDoctor() {
    const sessiontoken = localStorage.getItem('sessiontoken');
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [hospitals, setHospitals] = useState([]);

    useEffect( ()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/hospitals`)
        .then( (res)=>{
            setHospitals(res.data);
        })
        .catch( (error)=>{
            console.log(error);
        })
    }, []);

    const handleSearch = ()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/hospitals/search?query=${query}`)
        .then( (res)=>{
            setHospitals(res.data);
        })
        .catch( (error)=>{
            showToast(error.response.data.message, 'error');
            setHospitals([]);
        });
        setQuery("");
    }

    const deleteHospital = (id)=>{
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/hospitals/${id}`)
        .then( (res)=>{            
            //refreshing the page automatically
            window.location.reload();
            showToast(res.data.message, "success");
        })
        .catch( (error)=>{
            showToast(error.response.data.message, 'error');
        });
    }

    const updateHandler = async(id)=>{
        navigate(`/hospitals/${id}/update`);
    }

    return (
        <div className="hospital-search-container">
            <h2>Search for Hospitals by Name</h2>
            <input
                type="text"
                placeholder="Enter Hospital name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <div className="hospital-results">
                {hospitals.length > 0 ? (
                    hospitals.map((hospital) => (
                        <div key={hospital._id} className="hospital-card">
                            <h3>{hospital.name}</h3>
                            <p><strong>Contact:</strong> {hospital.contactNo}</p>
                            <p><strong>Location:</strong> {hospital.location.district}, {hospital.location.subDistrict}</p>
                            <p><strong>Address:</strong> {hospital.location.holdingNo}, {hospital.location.road || 'N/A'}</p>
                            <p><strong>BMDC Reg No:</strong> {hospital.hRegNo}</p>
                            {sessiontoken && 
                                <button
                                onClick={ ()=> deleteHospital(hospital._id) }
                                >Delete</button>
                            }

                            {sessiontoken &&
                                <button
                                onClick={()=> updateHandler(hospital._id)}
                                >Update</button>
                            }
                        </div>
                    ))
                ) : (
                    <p>No hospitals found</p>
                )}
            </div>
        </div>
    );
}

export default FindDoctor;