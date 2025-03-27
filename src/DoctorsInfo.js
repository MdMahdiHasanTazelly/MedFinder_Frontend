import { useState, useEffect } from 'react';
import './css/DoctorsInfo.css';
import './css/AddHospitalOver.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import showToast from './toast/Toast';


function DoctorsInfo() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [doctor, setDoctor] = useState({});
    const [showPopup, setShowPopup] = useState(false); 
    const [regNo, setRegNo] = useState(""); 


    const openPopup = () => {
        setShowPopup(true);
    };

    // Function to close popup
    const closePopup = () => {
        setShowPopup(false);
    };

    //hospital adding form handler
    const addHospital = (e) => {
        e.preventDefault();
        setRegNo(regNo);   

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/doctors/addHReg/${id}`,{regNo})
        .then( (res)=>{
            navigate(`/doctors/${id}`);
            showToast(res.data.message, "success");
            setRegNo("");
        })
        .catch( (error)=>{
            navigate(`/doctors/${id}`);
            showToast(error.response.data.error, "error");
            setRegNo("");
        });

        setShowPopup(false); // Close popup after submitting
    };

    //to delete a hospital
    const deletehandler = async()=>{
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/doctors/${id}`)
        .then( (res)=>{
            showToast(res.data.message, "success");
            navigate('/find-doctors');
        })
        .catch( (error)=>{
            showToast(error.response.data.error, "error");
        })
    }

    //to show the doctors details whenever user land on this page
    useEffect( ()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/doctors/${id}`)
        .then( (res)=>{
            setDoctor(res.data);
        })
        .catch( (error)=>{
           showToast(error.response.data.error, "error");
        });
    },[]);

    // useEffect( ()=>{
    //     console.log(regNo);
    // }, [regNo]);

  return (
    <div className="doctors-info-container">
 
        <div className="profile-section">
            <div className="profile-image">
                <img src="/images/doctor-image.png"/>
            </div>
            <div className="profile-info">
                <h2>{doctor.name}</h2>
                <p><strong>Specialization:</strong>&nbsp; {doctor.specialization}</p>
                <p><strong>BMDC Reg:</strong>&nbsp; {doctor.dRegNo}</p>

                <button >Update</button>
                <button onClick={ deletehandler }>Delete</button>
            </div>


            <div className="work-education">
                <h3>Work Experience & Education</h3>
                <p><strong>Work Experience:</strong> Consultant at Evercare Hospital</p>
                <p><strong>Education:</strong></p>
                <ul>
                    <li>{doctor.degree}</li>
                </ul>
                
           </div>

        </div>


        <div className="hospital-list">
            <h3>Hospitals & Diagnostic Centers</h3>
            <button onClick={openPopup}>Add Hospital</button>

            {showPopup && (
                <div className="overlay">
                    <div className="popup">
                        <h3>Add Hospital Registration No.</h3>
                        <form onSubmit={addHospital}>
                            <input 
                                type="text" 
                                placeholder="Enter Hospital Reg No." 
                                value={regNo} 
                                onChange={(e) => setRegNo(e.target.value)}
                                required
                            />
                            <div className="popup-buttons">
                                <button type="submit" className="submit-btn"
                                >Submit</button>

                                <button type="button" className="close-btn" onClick={closePopup}
                                >Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="hospital">
                <h4>Evercare Hospital</h4>
                <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                <p><strong>Days:</strong> Sunday, Monday, Wednesday</p>
                <p><strong>Time:</strong> 9:00 AM - 12:00 PM</p>
                <button>Contact Us</button>
            </div>
            <div className="hospital">
                <h4>Popular Diagnostic Centre Ltd., Dhaka</h4>
                <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                <p><strong>Days:</strong> Tuesday, Thursday, Saturday</p>
                <p><strong>Time:</strong> 3:00 PM - 6:00 PM</p>
                <button>Contact Us</button>
            </div>
        </div>

    </div>
);
}

export default DoctorsInfo;