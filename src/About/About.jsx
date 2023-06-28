import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section  className='aboutsec' id='aboutt'>
      <div className="about-us">
        <div className="text">
          <h2>Discover</h2>
          <h3>Our Story</h3>
          <div>
            <i className="fas fa-asterisk"></i>
          </div>
          <p>
            Rosa is a restaurant, bar and coffee roastery located on a busy
            corner site in Farringdon’s Exmouth Market. With glazed frontage on
            two sides of the building, overlooking the market and a bustling
            London intersection.
          </p>
          <div>
            <Link className="a-CTA" to="#">
              About Us
            </Link>
          </div>
        </div>
        <div className="image-container">
          <div className="image image1">
            <img src="img/vertical-photo-1.jpg" alt="Food" />
          </div>
          <div className="image image2">
            <img src="img/vertical-photo-2.jpg" alt="Food" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
