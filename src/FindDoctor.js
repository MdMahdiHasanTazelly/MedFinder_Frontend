import { useState } from "react";
import './css/FindDoctor.css';

function FindDoctor() {
    const [query, setQuery] = useState('');
    const [doctors, setDoctors] = useState([]);

    const handleSearch = ()=>{
        console.log("Search button kis clicked.");
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
                                <button >View Details</button>
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