// import React from 'react';
// import groceryimage from '../assets/images/grocery-image.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons'; 

// function Home() {
//   return (
//     <div className='bg-orange-300 text-white w-full h-full  flex items-center border-l-8 border-r-8  border-orange-500 ' id='about'> 
//       {/* Flex container for full height and centering */}
//       <div className="flex items-center justify-between mt-24 max-w-6xl mx-auto"> 
//         {/* Flexbox for aligning items */}
//         <div className="text-left">
//           <h1 className="text-5xl font-bold mb-4 ml-4">Groceries</h1> {/* Adjust margin as needed */}
//           <h1 className="text-5xl font-bold mb-6 ml-4">delivery in 15 mins</h1>
//           <p className="text-lg ml-4">
//             Grocery offers a wide range of products, including fresh vegitables, meats, dairy, baked goods, and non-perishable items.
//           </p>
//         <div className='mt-10 ml-4 flex justify-normal'>
//         <button className='bg-gradient-to-r from-orange-500 to to-black text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Order Now</button>
//         <button className='ml-5 bg-yellow-400  text-black md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'><FontAwesomeIcon icon={faDownload} className="mr-2" />Download App</button>
//         </div>
//         </div>
//         <img src={groceryimage} alt="Grocery" className="h-96 w-96 ml-6" /> {/* Image on the right */}
//       </div>
   
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import groceryimage from '../assets/images/grocery-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'; 

function Home() {
  return (
    <div className='bg-orange-300 text-white w-full h-full flex items-center border-l-8 border-r-8 border-orange-500 py-8 md:py-0' id='about'> 
      {/* Flex container for full height and centering */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-24 max-w-6xl mx-auto px-4"> 
        {/* Flexbox for aligning items */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 md:mb-4">Groceries</h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">delivery in 15 mins</h1>
          <p className="text-base md:text-lg">
            Grocery offers a wide range of products, including fresh vegetables, meats, dairy, baked goods, and non-perishable items.
          </p>
          <div className='mt-6 md:mt-10 flex flex-col md:flex-row justify-center md:justify-normal'>
            <button className='bg-gradient-to-r from-orange-500 to-black text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mb-4 md:mb-0 md:mr-5'>
              Order Now
            </button>
            <button className='bg-yellow-400 text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download App
            </button>
          </div>
        </div>
        <img src={groceryimage} alt="Grocery" className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96" /> {/* Image on the right */}
      </div>
    </div>
  );
}

export default Home;