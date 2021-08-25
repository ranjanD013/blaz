//import React from 'react'
import React, { useState } from 'react';

const Banner = () => {

  return (
    <header>
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