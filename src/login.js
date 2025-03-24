import './css/login.css';

function Login() {
  return (
    <div className="app">

      <main className="main-content">
        <div className="background-pattern"></div>

        <div className="login-container">
          <h1 className="login-title">Login to Your Account</h1>

          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="form-input"
              />
            </div>

            <button type="submit" className="login-button">
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
