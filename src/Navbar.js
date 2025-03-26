import axios from 'axios';
import showToast from './toast/Toast';
import './css/Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const sessiontoken = localStorage.getItem('sessiontoken');  //getting session token from local storage

  const logoutHandler = async()=>{
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin/logout`,{
      sessiontoken
    })
    .then( (res)=>{
      localStorage.removeItem('sessiontoken'); //removing session token after logout
      showToast(res.data.message, "success");
      navigate('/');
    })
  }
  
    return ( 
        <header className="navbar">
        <div className="container">
          <a href='/'>
             <h1 className="logo">MedFinder</h1>
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="/find-doctors">Find Doctors</a></li>
              <li><a href="/find-hospitals">Find Hospitals</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            {!sessiontoken && <a href="/login" className="login-btn">Login</a> }
            
            {sessiontoken && <button onClick={logoutHandler} className="login-btn">Logout</button> }
            
          </div>
        </div>
       </header>
     );
}

export default Navbar;