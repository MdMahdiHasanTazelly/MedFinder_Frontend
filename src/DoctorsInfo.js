import { useState, useEffect } from 'react';
import './css/DoctorsInfo.css';
import './css/AddHospitalOver.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import showToast from './toast/Toast';


function DoctorsInfo() {
    const sessiontoken = localStorage.getItem('sessiontoken');
    const navigate = useNavigate();
    const { id } = useParams();
    const [showPopup, setShowPopup] = useState(false); 
    const [regNo, setRegNo] = useState(""); 
    const [days, setDays] = useState('');
    const [time, setTime] = useState('');
    const [dHospitals, setDHospitals] = useState([]);
    const [doctor, setDoctor] = useState({
        name: "",
        dRegNo: "",
        degree: "",
        specialization: "",
        contactNo: "",
        hospitals: [],
    });


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
        setDays(days);
        setTime(time);

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/doctors/addHReg/${id}`,{regNo, days, time})
        .then( (res)=>{
            navigate(`/doctors/${id}`);
            showToast(res.data.message, "success");
            window.location.reload(); //refreshes after adding hRegNo automatically
            setRegNo("");
            setDays("");
            setTime("");
        })
        .catch( (error)=>{
            //navigate(`/doctors/${id}`);
            showToast(error.response.data.error, "error");
            setRegNo("");
            setDays("");
            setTime("");
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

    const chamberDeleteHandler = async(hRegNo)=>{
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/doctors/${id}/hospital-detail/${hRegNo}`)
        .then( (res)=>{
            showToast(res.data.message, "success");
            navigate(`/doctors/${id}`);
            //refreshing the page automatically
            window.location.reload();
        })
        .catch( (error)=>{
            showToast(error.response.data.error, "error");
        })
    }

    const updateHandler = async()=>{
        navigate(`/doctors/${id}/update`);
    }

    //to show the doctors details whenever user land on this page
    useEffect( ()=>{
        //getting dcotor informations
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/doctors/${id}`)
        .then( (res)=>{
            setDoctor(res.data);
        })
        .catch( (error)=>{
            console.log(error)
           showToast(error.response.data.error, "error");
        });

        //getting hospitals where a doctor visits
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/doctors/${id}/hospital-detail`)
        .then( (res)=>{
            setDHospitals(res.data);
        })
        .catch( (error)=>{
            console.log(error)
            showToast(error.response.data.error, "error");
        })
    },[]);



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

                {sessiontoken && <button onClick={updateHandler} >Update</button> }
                {sessiontoken && <button onClick={ deletehandler }>Delete</button> }
            </div>


            <div className="work-education">
                <h3>Experience & Education</h3>
                <p><strong>Current Role:</strong> {doctor.currentRole} </p>
                <p><strong>Education:</strong></p>
                <ul>
                    <li>{doctor.degree}</li>
                </ul>
                
           </div>

        </div>


        <div className="hospital-list">
            <h3>Hospitals & Diagnostic Centers</h3>

            {sessiontoken && <button onClick={openPopup}>Add Hospital</button> }

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
                            <input 
                                type="text" 
                                placeholder="Enter Days. e.g. Sunday, Monday" 
                                value={days} 
                                onChange={(e) => setDays(e.target.value)}
                                required
                            />
                            <input 
                                type="text" 
                                placeholder="Enter Time. e.g. 0:00 AM - 0:00 PM" 
                                value={time} 
                                onChange={(e) => setTime(e.target.value)}
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

            {
                dHospitals.length>0 ? (
                    dHospitals.map( (hospital)=>(
                        <div className="hospital">
                            <h4>{hospital.name}</h4>
                            <p><strong>Days:</strong> {hospital.days}</p>
                            <p><strong>Time:</strong> {hospital.time}</p>
                            <p><strong>Contact:</strong> {hospital.contact}</p>
                            {sessiontoken &&
                                <button
                                onClick={ ()=> chamberDeleteHandler(hospital.hRegNo)}
                                >Delete</button>
                            }
                        </div>
                    ))
                ) : (
                    <p>No Hospital Found!</p>
                )
            }

        </div>

    </div>
);
}

export default DoctorsInfo;