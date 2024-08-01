/* eslint-disable no-unused-vars */
import React from 'react';
import './Loginsignup.css';
import { Link } from 'react-router-dom';
import login_pic from '../../assets/images/login.jpeg';
import user_icon from '../../assets/images/name-icon.png';
import email_icon from '../../assets/images/email-icon.png';
import password_icon from '../../assets/images/password-icon.png';

export const Loginsignup = () => {
  return (
    <>
    
     
    <header>
      <div className="back"></div>
      <div className="logo"></div>
    </header>

    <div className='container'>
       <div className="main">
        {/*image */}
         <div className="image">
           <img src={login_pic} alt="register" className='login_img' />
          
         </div>
        {/*main content*/}
         <div className="content">
         <div className="header">
           <button >Login</button>
           <button >Register</button>
         </div>
          <div className="underline"></div>

          <div className="text">Create Your Account</div>
          <div className="register-content">
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text"  placeholder="Enter your name" />
            </div>
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email"  placeholder="Enter your email" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password"  placeholder="Enter your password"/>
            </div>
          </div>
          <p className="forgot-password">
              <Link to="/Forgot-password">Forgot your password?</Link>
            </p>
        
          <div className="submit-container">
            <div className="submit">Register</div>
          </div>
           </div>

          
       </div>      
       </div>
      
    </div>
    </>
    
  )
}
