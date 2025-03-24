import './css/Navbar.css';

function Navbar() {
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
            <a href="/login" className="login-btn">Login</a>
          </div>
        </div>
       </header>
     );
}

export default Navbar;