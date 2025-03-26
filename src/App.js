import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './login.js';
import Landing from './Landing.js';
import DoctorsInfo from './DoctorsInfo.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import DoctorForm from './admin/DoctorForm.js';
import HospitalForm from './admin/HospitalForm.js';
import FindHospital from './FindHospital.js';
import FindDoctor from './FindDoctor.js';
import DoctorsDetails from './DoctorsDetails.js';

function App() {
  return (
    // <><Navbar />
    // <div className="App">
      

    //   {/* <Login/> */}
    //   {/* <Landing/> */}
    //   {/* <DoctorsInfo /> */}
    //   {/* <DoctorForm/> */}
    //   {/* <HospitalForm/> */}
    //   {/* <FindDoctor/> */}
    //   {/* <DoctorsDetails/> */}
      
    // </div>
    // <Footer/>
    // </>

    <Router>
        <Navbar/>    
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/find-hospitals' element={<FindHospital/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/find-doctors' element={<FindDoctor/>}/>
          <Route path='/add-hospital' element={<HospitalForm/>}/>
          <Route path='/add-doctor' element={<DoctorForm/>}/>
        </Routes>
         
        <Footer/>
    </Router>
    
  );
}

export default App;
