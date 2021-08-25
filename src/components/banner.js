//import React from 'react'
import React, { useState } from 'react';
const Banner = () => {
  // set a variable 'responsive' to false. Update it using 'setResponsive'
  const [responsive, setResponsive] = useState(false);

  const toggleResponsive = () => {
    //take current value of responsive and flip it
    setResponsive(prev => !prev);
  }




    return(
        
<header>
    <div className="top">
      <div className="logo"><a href="#"> Blaz</a></div>
      {/* <div className="topnav" id="myTopnav"> */}
      <div className={responsive ? 'topnav responsive' : 'topnav'}>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        {/* </div><a href="javascript:void(0);" className="icon" onclick="myFunction()"> */}
        <a className='icon' onClick={toggleResponsive}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
    <div className="banner_sec">
      <h1>Awesome Free PSD template & Resources</h1>
      <a href="https://blazrobar.com" target="_blank">www.BlazRobar.com
        <span className="text-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-chevron-right"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </span>
      </a>
    </div>
  </header>
    );
}

export default Banner