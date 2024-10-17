// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import logo from '../assets/images/logo.png'


// const Navbar = () => {
//   return (
//     <div className='bg-orange-400 border-l-8 border-r-8  border-orange-500 text-black font-bold px-8 md:px-16 lg:px-24'>
//       <div className='container py-2 flex md:justify-between justify-center items-center'>
//           {/* Logo and grocify text */}
//           <div className='flex items-center space-x-3 hidden md:inline'>
//           <img src={logo} alt="Grocify Logo" className='h-8 w-28-' /> {/* Adjust size if needed */}
//         </div>
//         <div className='space-x-6'>
//           <a href="#Home" className='hover:text-gray-400'>Home</a>
//           <a href="#about" className='hover:text-gray-400'>About</a>
//           <a href="#features" className='hover:text-gray-400'>Features</a>
//           <a href="#contact" className='hover:text-gray-400'>Contact</a>
//         </div>
//         <div className='hidden md:inline'>
//           <FontAwesomeIcon icon={faShoppingBag} size="2x" className='text-black hover:text-gray-400 cursor-pointer' />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <div className='bg-orange-400 border-l-8 border-r-8 border-orange-500 text-black font-bold px-4 md:px-8 lg:px-16'>
      <div className='container py-4 flex justify-between items-center'>
        
        {/* Logo */}
        <div className='flex items-center space-x-3'>
          <img src={logo} alt="Grocify Logo" className='hidden md:block h-10 w-28' /> {/* Hidden on mobile, visible on md+ */}
        </div>

        {/* Navigation Links */}
        <div className='flex-1 md:flex-none flex justify-center md:justify-start space-x-6 text-sm md:text-lg'>
          <a href="#Home" className='hover:text-gray-700 transition duration-300'>Home</a>
          <a href="#about" className='hover:text-gray-700 transition duration-300'>About</a>
          <a href="#features" className='hover:text-gray-700 transition duration-300'>Features</a>
          <a href="#contact" className='hover:text-gray-700 transition duration-300'>Contact</a>
        </div>

        {/* Shopping Bag Icon */}
        <div className='hidden md:flex'>
          <FontAwesomeIcon 
            icon={faShoppingBag} 
            size="2x" 
            className='text-black hover:text-gray-700 cursor-pointer transition duration-300' 
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;