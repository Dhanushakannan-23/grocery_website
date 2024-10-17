// import React from 'react';
// import freshjuice from '../assets/images/fresh juice.png';
// import apple from '../assets/images/apple.png'
// import banana from '../assets/images/banana.png'
// import pineapple from '../assets/images/pineapple.png'
// import orange from '../assets/images/orange.png'
// import tomato from '../assets/images/tomato.png'
// import spices from '../assets/images/spices.png';
// import onion from '../assets/images/onion.png'


// const featuresData = [
//     {
//         id: 1,
//         image: freshjuice,
//         title: 'Fresh Juice',
//         subtitle: 'Fresh fruits fresh juice',
//     },
//     {
//         id: 2,
//         image: apple,
//         title: 'Apple',
//         subtitle: 'Crispy and juicy apples',
//     },
//     {
//         id: 3,
//         image: banana,
//         title: 'Banana',
//         subtitle: 'Sweet and ripe bananas',
//     },
//     {
//         id: 4,
//         image: pineapple,
//         title: 'Pineapple',
//         subtitle: 'Tropical and delicious pineapples',
//     },
//     {
//         id: 5,
//         image: orange,
//         title: 'Orange',
//         subtitle: 'Fresh and tangy oranges',
//     },
//     {
//         id: 6,
//         image: tomato,
//         title: 'Tomato',
//         subtitle: 'Fresh and juicy tomatoes',
//     },
//     {
//         id: 7,
//         image: spices,
//         title: 'Spices',
//         subtitle: 'A variety of spices for your dishes',
//     },
//     {
//         id: 8,
//         image: onion,
//         title: 'Onion',
//         subtitle: 'Fresh and flavorful onions',
//     },
  
// ];
// function Features() {
//     return (
//         <div className='bg-white text-orange-400 w-full  border-l-8 border-r-8 border-orange-500 h-screen flex items-center' id='features'>
//             <div className="flex-grow flex items-center justify-center text-center mt-52 ">
//                 {/* Display content for Free Movies & TV */}
//                 <div>
//                     <h1 className="text-2xl md:text-4xl text-orange-400 font-bold">
//                         Fresh and 
//                         <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500'> Tasty</span>
//                     </h1>
//                     <p className="text-black text-center text-lg mt-4 ">
//                         Grocery shopping: the happiest part of the week!
//                     </p>
//                     <div className="py-10 px-5">
//                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
//                             {featuresData.map(feature => (
//                                 <div key={feature.id} className="bg-white text-black rounded-lg p-5">
//                                     <img src={feature.image} alt={feature.title} className="w-52 h-44 rounded-t-lg" />
//                                     <h2 className="text-xl font-semibold mt-3 text-orange-500">{feature.title}</h2>
//                                     <p className="text-sm mt-1">{feature.subtitle}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Features;



import React from 'react';
import freshjuice from '../assets/images/fresh juice.png';
import apple from '../assets/images/apple.png';
import banana from '../assets/images/banana.png';
import pineapple from '../assets/images/pineapple.png';
import orange from '../assets/images/orange.png';
import tomato from '../assets/images/tomato.png';
import spices from '../assets/images/spices.png';
import onion from '../assets/images/onion.png';

const featuresData = [
    {
        id: 1,
        image: freshjuice,
        title: 'Fresh Juice',
        subtitle: 'Fresh fruits fresh juice',
    },
    {
        id: 2,
        image: apple,
        title: 'Apple',
        subtitle: 'Crispy and juicy apples',
    },
    {
        id: 3,
        image: banana,
        title: 'Banana',
        subtitle: 'Sweet and ripe bananas',
    },
    {
        id: 4,
        image: pineapple,
        title: 'Pineapple',
        subtitle: 'Tropical and delicious pineapples',
    },
    {
        id: 5,
        image: orange,
        title: 'Orange',
        subtitle: 'Fresh and tangy oranges',
    },
    {
        id: 6,
        image: tomato,
        title: 'Tomato',
        subtitle: 'Fresh and juicy tomatoes',
    },
    {
        id: 7,
        image: spices,
        title: 'Spices',
        subtitle: 'A variety of spices for your dishes',
    },
    {
        id: 8,
        image: onion,
        title: 'Onion',
        subtitle: 'Fresh and flavorful onions',
    },
];

function Features() {
    return (
        <div className='bg-white text-orange-400 w-full border-l-8 border-r-8 border-orange-500 flex items-center py-12' id='features'>
            <div className="flex-grow flex items-center justify-center text-center">
                {/* Display content */}
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-orange-400 font-bold">
                        Fresh and 
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500'> Tasty</span>
                    </h1>
                    <p className="text-black text-center text-sm md:text-lg lg:text-xl mt-4">
                        Grocery shopping: the happiest part of the week!
                    </p>
                    <div className="py-10 px-5">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
                            {featuresData.map(feature => (
                                <div key={feature.id} className="bg-white text-black rounded-lg p-3 sm:p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img src={feature.image} alt={feature.title} className="w-36 h-32 md:w-44 md:h-40 lg:w-52 lg:h-44 rounded-t-lg mx-auto" />
                                    <h2 className="text-lg md:text-xl font-semibold mt-3 text-orange-500">{feature.title}</h2>
                                    <p className="text-sm mt-1">{feature.subtitle}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;