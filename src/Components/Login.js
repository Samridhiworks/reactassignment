import React, { useState } from 'react';
import separator from './separator.png';
import Google from './google.png'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';


const Login = () => {

  const [email,setEmail] =useState('')
  const [password,setPassword] = useState('')
  const[emailerror, setEmailerror] = useState('')
  const[passworderror, setPassworderror] = useState('')
  const[hide,setHide] = useState(true)
  const[isLogin,setIsLogin] =useState(localStorage.getItem('islogin') === 'true')

  const handleEmail=(e)=>{
    setEmail(e.target.value);

  }

  const handlePassword=(e)=>{
   setPassword(e.target.value);

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(!email.includes('@')){
      setEmailerror('Enter the valid email address')
      return;
    }
    else{
      setEmailerror('')
     
    }
    if(password.length < 8){
      setPassworderror('Password must be of 8 characters')
      return;
    }else{
      setPassworderror('')
     
    }

    setIsLogin(true);
      localStorage.setItem('islogin',true);
    
      
  }

  const showHide = () => {
    setHide(!hide);

    
  };
  const logout = () => {
    localStorage.removeItem("islogin");
    window.location.reload();
  };

  

return (
  <div className="login-container">
    {isLogin === true ? (
      <div className='dash-btn  '>
        <Dashboard />
        <button onClick={logout} style={{background:"transparent", color:"gray", fontSize:"18px",cursor:"pointer"}}>Log out</button>
      </div>
      
    ) : (
      <div className="login-box">
        <h1>Login to your <br /> account.</h1>
        <p>Please sign in to your account</p>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmail}
            />
            <span className='error'>{emailerror}</span>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type={hide ? 'password' : 'text'}
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            <i
              className={hide ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}
              onClick={showHide}
            ></i>
            <span className='error'>{passworderror}</span>
          </div>

          <div className="forgot-password">
            <a href="/">Forgot password?</a>
          </div>

          <button type="submit" className="btn-signin" onClick={handleSubmit}>
            Sign In
          </button>
        </form>

        <div className="social-login">
          <img src={separator} alt="separator" />
          <p>Or sign in with</p>
          <img src={separator} alt="separator" />
        </div>

        <img src={Google} alt="Google sign-in" />
        <p style={{ color: "#000" }}>
          Don't have an account?{' '}
          <Link to='/register' style={{ textDecoration: "none", color: "#FE8C00" }}>
            Register
          </Link>
        </p>
      </div>
    )}
  </div>
);
};

export default Login;
