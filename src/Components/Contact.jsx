// import React from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// const Contact = () => {
//   const contactInfo = {
//     email: 'youremail@example.com',
//     phone: '+9932201444',
//     address: 'Street, City, Country',
//   };

//   return (
//     <div className='bg-white text-black py-32 border-l-8 border-r-8 border-orange-500' id='contact'>
//       <div className='container mx-auto px-8 md:px-16 lg:px-24'>
//         <h2 className='text-4xl font-bold text-center mb-12 text-black'>Connect With <span className='text-orange-500'>Me</span></h2>
//         <div className='flex flex-col md:flex-row items-center md:space-x-12'>

//           <div className='flex-1'>
//             <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-orange-400'>Let's Talk</h3>
//             <p className='mt-6'>Call me when needed.
//               <span className='text-orange-400'> I will be on time</span></p>
//             <div className='mb-4 mt-8'>
//               <FaEnvelope className='inline-block text-orange-400 mr-2' />
//               <a className='hover:underline' href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
//             </div>
//             <div className='mb-4'>
//               <FaPhone className='inline-block text-orange-400 mr-2' />
//               <span>{contactInfo.phone}</span>
//             </div>
//             <div className='mb-4'>
//               <FaMapMarkerAlt className='inline-block text-orange-400 mr-2' />
//               <span>{contactInfo.address}</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = {
    email: 'youremail@example.com',
    phone: '+9932201444',
    address: 'Street, City, Country',
  };

  return (
    <div className='bg-white text-black py-16 sm:py-24 lg:py-32 border-l-8 border-r-8 border-orange-500' id='contact'>
      <div className='container mx-auto px-6 sm:px-8 md:px-16 lg:px-24'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-black'>
          Connect With <span className='text-orange-500'>Me</span>
        </h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          {/* Contact Information Section */}
          <div className='flex-1 text-center md:text-left'>
            <h3 className='text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-orange-400'>Let's Talk</h3>
            <p className='mt-4 sm:mt-6'>
              Call me when needed.
              <span className='text-orange-400'> I will be on time</span>
            </p>
            <div className='mt-6 sm:mt-8'>
              <div className='mb-4 flex justify-center md:justify-start'>
                <FaEnvelope className='inline-block text-orange-400 mr-2' />
                <a className='hover:underline' href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
              <div className='mb-4 flex justify-center md:justify-start'>
                <FaPhone className='inline-block text-orange-400 mr-2' />
                <span>{contactInfo.phone}</span>
              </div>
              <div className='mb-4 flex justify-center md:justify-start'>
                <FaMapMarkerAlt className='inline-block text-orange-400 mr-2' />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;