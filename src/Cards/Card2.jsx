// src/BusinessCard.js
import React from 'react';
import img1 from '../assets/img1.png'

const Card2 = () => {
  return (
    <div className="max-w-sm  bg-white shadow-lg rounded-lg overflow-hidden mx-8">
      <div className="relative">
        <img
          className="w-full"
          src={img1} // Replace with actual image path
          alt="Profile"
        />
        <div className="absolute bottom-0 left-0 w-full  text-white p-4">
            <div className='bg-opacity-50 bg-black w-fit p-4'>

          <h2 className="text-xl font-bold">Helen Wilson</h2>
          <p className="text-sm">Marketing Manager</p>
          <p className="text-xs mt-2">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
          </p>
          </div>

        </div>
      </div>
      <div className="bg-green-700  text-white p-8">
        <div className="flex items-center mb-2">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V10z" />
          </svg>
          <span>+91 7846589803</span>
        </div>
        <div className="flex items-center mb-2">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h4m0 0l-8-8m8 8l-8 8m0-8H4" />
          </svg>
          <span>helen@nextsolution.com</span>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c0 2-4 6-4 6s4 4 4 6m0-12v.01M4 4h16v16H4V4z" />
          </svg>
          <span>nextsolution.com</span>
        </div>
      </div>
    </div>
  );
}

export default Card2;
