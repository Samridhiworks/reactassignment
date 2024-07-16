import React, { useState } from "react";
import separator from "./separator.png";
import Google from "./google.png";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const Register = () => {
  const [email, setEmail] = useState("");
  const[username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [usernameerror, setUsernameerror] = useState("");
  const [hide, setHide] = useState(true);
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("islogin") === "true"
  );

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setEmailerror("Enter the valid email address");
      return;
    } else {
      setEmailerror("");
    }
    if (password.length < 8) {
      setPassworderror("Password must be of 8 characters");
      return;
    } else {
      setPassworderror("");
    }
    if(username.includes(" ")){
        setUsernameerror("Username cannot include spaces")
    }else{
        setUsernameerror(" ")
    }

    setIsLogin(true);
    localStorage.setItem("islogin", true);
  };

  const showHide = () => {
    setHide(!hide);

    const logout = () => {
      setIsLogin(false);
      localStorage.removeItem("islogin");
    };
  };

  return (
    <div className="login-container" style={{ margin: "60px 0px" }}>
      {isLogin === true ? (
        <Dashboard />
      ) : (
        <div className="login-box">
          <h1>
            Create your new <br /> account.
          </h1>
          <p>Create an account to start looking for the food you like.</p>
          <form>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmail}
              />
              <span className="error">{emailerror}</span>
            </div>

            <div className="input-group">
              <label>User Name</label>
              <input
                type="text"
                id="username"
                placeholder="Enter Username"
                value={username}
                onChange={handleUsername}
              />
              <span className="error">{usernameerror}</span>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type={hide ? "password" : "text"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
              <i
                className={hide ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                onClick={showHide}
              ></i>
              <span className="error">{passworderror}</span>
            </div>

            <div className="check-box">
              <input type="checkbox" id="mycheckbox" />
              <p>
                I Agree with <span>Terms of Service</span>and{" "}
                <span>Privacy Policy</span>
              </p>
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
            Have an account?
            <Link to="/login" style={{ textDecoration: "none", color: "#FE8C00" }}>
              Sign In
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
