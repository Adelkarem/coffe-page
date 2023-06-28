import React from 'react';
import './FullMenu.css';
import { Link } from 'react-router-dom';

const FullMenu = () => {
  return (
    <>
     <div  className="menu" id='fulshop'>
      <div className="box-model">
        <i className="fas fa-times fa-2x close"></i>
        <div className="arrow">
          <div className="arrow arrow-right"></div>
          <div className="arrow arrow-left"></div>
        </div>
        <div className="box-image-container">
          {/* <div className="box-image">
            <img src="" alt="Food" />
          </div> */}
        </div>
      </div>
      <div className="menu-image-container">
        <div className="image active">
          <img src="img/big-menu-thumb-1.jpg" alt="Food" />
        </div>
        <div className="image">
          <img src="img/big-menu-thumb-2.jpg" alt="Food" />
        </div>
        <div className="image">
          <img src="img/big-menu-thumb-4.jpg" alt="Food" />
        </div>
        <div className="image">
          <img src="img/big-menu-thumb-6.jpg" alt="Food" />
        </div>
      </div>
      <div className="text">
        <h2>Discover</h2>
        <h3>Menu</h3>
        <div>
          <i className="fas fa-asterisk"></i>
        </div>
        <p>
          For those with pure food indulgence in mind, come next door and sate your desires with our ever-changing internationally and seasonally inspired small plates. We love food, lots of different food, just like you.
        </p>
        <div>
          <Link className="a-CTA" to="#">
            View The Full Menu
          </Link>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default FullMenu;
