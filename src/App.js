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
import UpdateDoctor from './UpdateDoctor.js';
import UpdateHospital from './UpdateHospital.js';


function App() {
  return (
   
   
    // <div className="App">
    //    <Navbar />
    //   {/* <Login/> */}
    //   {/* <Landing/> */}
    //   {/* <DoctorsInfo /> */}
    //   {/* <DoctorForm/> */}
    //   {/* <HospitalForm/> */}
    //   {/* <FindDoctor/> */}
    //   <UpdateDoctor/>
    //   <Footer/>
    // </div>
    

    <Router>
        <Navbar/>    
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/add-doctor' element={<DoctorForm/>}/>
          <Route path='/doctors/:id' element={<DoctorsInfo/>}/>
          <Route path="/doctors/:id/update" element={<UpdateDoctor/>}/>
          <Route path='/find-doctors' element={<FindDoctor/>}/>

          <Route path='/find-hospitals' element={<FindHospital/>}/>
          <Route path='/add-hospital' element={<HospitalForm/>}/>
          <Route path='/hospitals/:id/update' element={<UpdateHospital/>}/>
          
        </Routes>
         
        <Footer/>
    </Router>
    
  );
}

export default App;
