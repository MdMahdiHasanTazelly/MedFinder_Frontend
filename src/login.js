import './css/login.css';
import showToast from './toast/Toast';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");

  const loginHandler = (event)=>{
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin/login`,{
      email,
      password
    })
    .then( (res)=>{

     localStorage.setItem('sessiontoken', res.data.sessiontoken);   //setting session token into local storage

     showToast(res.data.message, "success");
     navigate('/');
    })
    .catch( (error)=>{
      console.log(error.response.data.error);
      showToast(error.response.data.error, "error");
      navigate('/login');
    });

    event.preventDefault();
    setEmail('');
    setPassword("");
  }
  

  return (
    <div className="app">

      <main className="main-content">
        <div className="background-pattern"></div>

        <div className="login-container">
          <h1 className="login-title">Login to Your Account</h1>

          <form className="login-form" onSubmit={loginHandler}> 
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form-input"
                value={email}
                onChange={(e)=> setEmail(e.target.value) }
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="form-input"
                value={password}
                onChange={ (e)=> setPassword(e.target.value) }
              />
            </div>

            <button type="submit" className="login-button"            >
              Login
            </button>
          </form>

          <div className="register-link">
            Login is only for Admin Panel
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
