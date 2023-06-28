import React, { useState } from 'react';
import './Content.css';
import { Link } from 'react-router-dom';

const Content = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUp = () => {
    setIsSignUpActive(true);
  };

  const handleSignIn = () => {
    setIsSignUpActive(false);
  };

  return (
    <section className='contact-page'>
      
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <Link to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
              <Link to="#" className="social"><i className="fab fa-google-plus-g"></i></Link>
              <Link to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <Link to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
              <Link to="#" className="social"><i className="fab fa-google-plus-g"></i></Link>
              <Link to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="#">Forgot your password?</Link>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <p>To keep connected with us, please login</p>
              <button className="ghost" onClick={handleSignIn}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details </p>
              <button className="ghost" onClick={handleSignUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default Content;
