import './css/FindHospital.css';
import React, { useState } from 'react';


function FindDoctor() {
    const [query, setQuery] = useState('');
    const [hospitals, setHospitals] = useState([]);

    const handleSearch = ()=>{
        console.log("Searching hospital by name.");
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