import React from 'react';
import burgerImage from './image1.png'
import progress from './progress.png'
import { Link } from 'react-router-dom';


const Home3 = () => {
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
            <div className='bar1-new' ></div>
            <div className='bar2-new' style={{background:"#c2c2c2"}} ></div>
            <div className='bar3' style={{background:"#fff"}}></div>
          </div>
          <div className='progress-img'>
            <Link to='/login'>
            <img src={progress} style={{cursor:"pointer"}}/>
            </Link>
          </div>
          {/* <div className="navigation">
            <button className="skip-button">Skip</button>
            <button className="next-button">Next<i class="fa-solid fa-arrow-right"></i></button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home3;
