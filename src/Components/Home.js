import React from 'react';
import burgerImage from './image1.png'

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="app">
      <div className="background-image">
      <div className="image-container">
        <img src={burgerImage} alt="Delicious Burger" />
      </div>
        <div className="content">
          <h1>We serve <br/> incomparable <br/> delicacies</h1>
          <p>All the best restaurants with their top menu waiting for you, they can’t wait for your order!!</p>

          <div className='bars'>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>
          <div className="navigation">
            <button className="skip-button">Skip</button>
            <button className="next-button" ><Link to="/home2" style={{textDecoration:"none",color:"#ffff"}} >Next<i class="fa-solid fa-arrow-right"></i></Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
