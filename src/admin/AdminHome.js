import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from '../Footer';
import AdminNav from './AdminNav';

function AdminHome() {
    return ( 
      <Router>
        <AdminNav/>
        <Routes>
            <Route/>
        </Routes>
        <Footer/>
      </Router>
     );
}

export default AdminHome;