import './css/DoctorsInfo.css';

function DoctorsInfo() {
  return (
    <div className="container">
 

        <div className="profile-section">
            {/* <div className="profile-image">
                <img src="doctor-placeholder.png" alt="Doctor" />
            </div> */}
            <div className="profile-info">
                <h2>Prof. Dr. Md. Siddiqur Rahman</h2>
                <p><strong>Credentials:</strong> MBBS, DDV (BSMMU)</p>
                <p><strong>Specialization:</strong> Dermatologist</p>
                <p><strong>Experience:</strong> 30 Years of Experience Overall</p>
                <p><strong>BMDC Reg:</strong> #000001</p>
            </div>


            <div className="work-education">
                <h3>Work Experience & Education</h3>
                <p><strong>Work Experience:</strong> Consultant at Evercare Hospital</p>
                <p><strong>Education:</strong></p>
                <ul>
                    <li>MBBS - Bachelor of Medicine and Bachelor of Surgery</li>
                    <li>DDV (BSMMU) - Diploma in Dermatology & Venereology</li>
                </ul>
           </div>


        </div>


        <div className="hospital-list">
            <h3>Hospitals & Diagnostic Centers</h3>
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