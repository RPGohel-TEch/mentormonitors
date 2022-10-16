import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="Signup">
      <div className="header-part-of-signup">
        <div className="container">
          <div className="logo-and-nav">
            <div className="header-logo">
              <Link to="/" className="cmn-link Logo-signup header-links">
                Mentor Moniter
              </Link>
            </div>
            <div className="header-navigation">
              <Link to="/signup" className="cmn-link signup-link header-links">
                Sign up
              </Link>
              <Link to="/login" className="cmn-link login-link header-links">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="signup-form-area">
        <div className="signup-head">Log in</div>
        <form action="">
          <div className="email-signup-area">
            <label htmlFor="signup-email" className="email-signup">
              Email:
            </label>
            <input
              type="text"
              id="signup-email"
              className="email-signup-input"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="email-signup-area">
            <label htmlFor="signup-email" className="email-signup">
              Password:
            </label>
            <input
              type="password"
              id="signup-email"
              className="email-signup-input"
              placeholder="********"
            />
            <div className="forgot-password">
              Forgot password?
            </div>
            <div className="eye" id="eye-password-in-signup">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
              </svg>
            </div>
          </div>
        
          <div className="signup-btn-section"> Log in</div>
        </form>

        <div className="go-to-login">
          Not registered? go to{" "}
          <Link to="/signup" className="cmn-link ">
            signup page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login