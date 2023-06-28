import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer  id='servicee'>
        <div className="text">
          <h2>ABOUT ROSA</h2>
          <div><i className="fas fa-asterisk"></i></div>
          <p>ROSA is an enchanting and easy-to-use parallax Restaurant WordPress theme that allows you to tell your story in a dynamic, narrative and enjoyable way, making it perfect for restaurants, bakeries, bars or coffee shops.</p>
        </div>
        <div className="contact-container">
          <div className="social-media">
            <h3>Follow Along</h3>
            <div className="links">
  <Link to="#"><i className="fab fa-twitter"></i></Link>
  <Link to="#"><i className="fab fa-facebook-square"></i></Link>
  <Link to="#"><i className="fab fa-pinterest"></i></Link>
  <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
</div>

          </div>
          <div className="newsletter">
            <h3>Newsletter</h3>
            <form method="post">
  <input type="email" name="email" placeholder="Type Your Email" />
  <i className="fas fa-envelope"></i>
</form>

          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
