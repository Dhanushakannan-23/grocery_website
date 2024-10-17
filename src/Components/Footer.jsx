// import React from 'react';
// import footerimage from '../assets/images/footerimg4.jpg';

// function Footer() {


//   return (
//     <div className="relative border-l-8 border-r-8 border-orange-500">
//       <img src={footerimage} alt="" className="w-full h-56" />
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
//         <h1 className="text-4xl font-bold mb-4">Download the app...</h1>
//         <button
//           className="bg-black text-white font-semibold py-2 px-4 rounded"
//         >
//           Download on the App Store
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import React from 'react';
import footerimage from '../assets/images/footerimg4.jpg';

function Footer() {
  return (
    <div className="relative border-l-8 border-r-8 border-orange-500">
      <img src={footerimage} alt="" className="w-full h-48 sm:h-56 lg:h-64 object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">
          Download the app...
        </h1>
        <button
          className="bg-black text-white font-semibold py-2 px-4 rounded mt-2 hover:bg-gray-800 transition duration-300"
        >
          Download on the App Store
        </button>
      </div>
    </div>
  );
}

export default Footer;