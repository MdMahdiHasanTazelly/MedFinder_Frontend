import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './login.js';
import Landing from './Landing.js';
import DoctorsInfo from './DoctorsInfo.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import DoctorForm from './DoctorForm.js';
import HospitalForm from './HospitalForm.js';
import FindHospital from './FindHospital.js';
import FindDoctor from './FindDoctor.js';

function App() {
  return (
    // <><Navbar />
    // <div className="App">
      

    //   {/* <Login/> */}
    //   {/* <Landing/> */}
    //   {/* <DoctorsInfo /> */}
    //   {/* <DoctorForm/> */}
    //   {/* <HospitalForm/> */}
    //   <FindDoctor/>
      
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
        </Routes>
        
        <Footer/>
    </Router>
    
  );
}

export default App;
