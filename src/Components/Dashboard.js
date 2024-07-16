import React from 'react';
import burgerImage from './image1.png';
import success from './success.png';
import drawer from './drawer.png';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    console.log('Logout button clicked'); // Debugging line
    localStorage.removeItem('islogin');
    console.log('islogin removed from local storage'); // Debugging line
    navigate('/login');
    console.log('Navigated to login page'); // Debugging line
  };

  return (
    <div className="app">
      <div className="background-image">
        <div className="image-container">
          <img src={burgerImage} alt="Delicious Burger" />
        </div>
        <div className="content-new">
          <img src={drawer} style={{ transform: "translateY(-15px)" }} alt="Drawer" />
          <img src={success} id="success" alt="Success" />
          <h1>Login Successful</h1>
          <div className="dash-btn">
            <Link to='/trackingscreen'>
            <button>Go to Tracking Screen</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
