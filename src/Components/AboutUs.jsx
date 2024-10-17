import React from 'react';
import img from '../assets/images/aboutimg.png';

function AboutUs() {
  return (
    <div className='bg-white text-orange-400 w-full border-l-8 border-r-8 border-orange-500 flex items-center py-10' id='about'>
      <div className="flex-grow flex items-center justify-center text-center md:flex-row">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img 
            src={img} 
            alt="About Us" 
            className=" rounded-lg w-1/5 md:w-11/12" 
          />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold">
            About
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500'> Us</span>
          </h1>
          <p className="mt-4 mr-11 text-lg md:text-xl lg:text-2xl text-gray-700 font-serif">
            We are dedicated to providing the freshest produce and highest quality groceries to our community. Our mission is to make healthy eating 
            accessible and enjoyable for everyone. With a wide selection of local and organic products, we believe in supporting local farmers and 
            sustainable practices. Join us on our journey towards a healthier lifestyle! 
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;