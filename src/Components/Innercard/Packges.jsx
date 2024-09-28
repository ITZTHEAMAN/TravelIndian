import React from 'react';

const tourPackages = [
  {
    name: "Golden Triangle Tour",
    duration: "5 Days, 4 Nights",
    description: "Explore the rich history and culture of India's Golden Triangle, visiting Delhi, Agra, and Jaipur.",
    placesToVisit: [
      "Delhi - Visit historical sites such as India Gate and Red Fort.",
      "Agra - Experience the majestic Taj Mahal.",
      "Jaipur - Explore the City Palace and Hawa Mahal."
    ],
    image: "https://crystalindiaholidays.com/wp-content/uploads/2020/03/Why-Golden-Triangle-Tour-Package-is-so-much-Famous.jpg",
    priceForOne: 25000, // INR
    priceForCouple: 45000 // INR
  },
  {
    name: "Kerala Backwaters",
    duration: "4 Days, 3 Nights",
    description: "Relax and unwind in the serene backwaters of Kerala, with beautiful houseboat stays.",
    placesToVisit: [
      "Alleppey - Enjoy a backwater cruise.",
      "Kumarakom - Visit the bird sanctuary.",
      "Cochin - Explore Fort Kochi."
    ],
    image: "https://www.tourmyindia.com/states/kerala/image/backwater-and-beaches-of-kerala1.webp",
    priceForOne: 20000, 
    priceForCouple: 35000
  },
  {
    name: "Goa Beach Holiday",
    duration: "6 Days, 5 Nights",
    description: "Experience the vibrant culture, beautiful beaches, and thrilling nightlife of Goa.",
    placesToVisit: [
      "Calangute Beach - Enjoy water sports.",
      "Dudhsagar Falls - Visit the stunning waterfall.",
      "Baga Beach - Experience the nightlife."
    ],
    image: "https://www.kingsthantourism.com/uploads/packages/thumb/04-days-goa-tour-package-1590829944-9.jpg",
    priceForOne: 35000, 
    priceForCouple: 60000
  },
  {
    name: "Himachal Adventure Tour",
    duration: "7 Days, 6 Nights",
    description: "Enjoy thrilling adventures and breathtaking landscapes in Himachal Pradesh.",
    placesToVisit: [
      "Shimla - Visit the Ridge and Mall Road.",
      "Manali - Explore Solang Valley.",
      "Dharamshala - Visit McLeod Ganj."
    ],
    image: "https://i.pinimg.com/736x/84/4a/99/844a996a7c3473d4a5c056b1e0da989f.jpg",
    priceForOne: 40000, 
    priceForCouple: 70000
  },
  {
    name: "Rajasthan Heritage Tour",
    duration: "8 Days, 7 Nights",
    description: "Immerse yourself in the royal heritage of Rajasthan, visiting stunning forts and palaces.",
    placesToVisit: [
      "Jaipur - Explore Amber Fort.",
      "Udaipur - Visit City Palace.",
      "Jaisalmer - Explore Jaisalmer Fort."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDHWdrGbQ8EhArgwI34f_1ciDaseRg0U8qw&s",
    priceForOne: 50000, 
    priceForCouple: 90000
  },
  {
    name: "Andaman Island Tour",
    duration: "5 Days, 4 Nights",
    description: "Discover the pristine beauty of the Andaman Islands, perfect for a beach getaway.",
    placesToVisit: [
      "Havelock Island - Relax at Radhanagar Beach.",
      "Neil Island - Explore natural rock formations.",
      "Port Blair - Visit Cellular Jail."
    ],
    image: "https://www.emperortraveline.com/wp-content/uploads/2022/07/Andaman.jpg",
    priceForOne: 30000, 
    priceForCouple: 55000
  },
  {
    name: "Darjeeling Tea Tour",
    duration: "6 Days, 5 Nights",
    description: "Experience the charm of Darjeeling with its tea gardens and stunning views.",
    placesToVisit: [
      "Tiger Hill - Witness the sunrise over Kanchenjunga.",
      "Batasia Loop - Enjoy panoramic views.",
      "Darjeeling Himalayan Railway - Ride the toy train."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwHsSp3uSJEu94awIX6JVHQAjbi-bmqzE1RQRJYV-opQh8WvAh00gVaK15T8e1wFZYAE&usqp=CAU",
    priceForOne: 35000, 
    priceForCouple: 65000
  },
  {
    name: "Spiti Valley Tour",
    duration: "9 Days, 8 Nights",
    description: "Explore the stunning landscapes and unique culture of Spiti Valley.",
    placesToVisit: [
      "Kaza - Visit Key Monastery.",
      "Tabo - Explore Tabo Monastery.",
      "Langza - See the fossil area."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhf3mwCF9DwXhLr_51dGmdD9G-_GHA4qAVcAYsUS1ez0iGxqR2XWqei--H2Bq7WBIYiE&usqp=CAU",
    priceForOne: 60000, 
    priceForCouple: 110000
  },
  {
    name: "Agra City Tour",
    duration: "3 Days, 2 Nights",
    description: "Visit Agra's iconic landmarks, including the Taj Mahal and Agra Fort.",
    placesToVisit: [
      "Taj Mahal - Experience the beauty of this wonder.",
      "Agra Fort - Explore this historical fort.",
      "Itmad-ud-Daula's Tomb - Visit the 'Baby Taj'."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQS-0A_De2ppDVR986jnxzywSJ3pyXkml7iqKrMQ46JZ0vpCyE2WOjt9K9xcOVG2jm4I&usqp=CAU",
    priceForOne: 15000, 
    priceForCouple: 27000
  },
  {
    name: "Rishikesh Yoga Retreat",
    duration: "4 Days, 3 Nights",
    description: "Join a rejuvenating yoga retreat in the serene town of Rishikesh, known for its spiritual atmosphere.",
    placesToVisit: [
      "Ganga Aarti - Attend the evening ritual.",
      "Yoga Classes - Participate in daily sessions.",
      "Visit Ashrams - Explore local spiritual centers."
    ],
    image: "https://topyogis.com/sites/default/files/styles/event_main_picture/public/2019-09/200%20hour%20yoga%20teacher%20training%20in%20Rishikesh%20India.jpg?itok=71zIrZeF",
    priceForOne: 20000, 
    priceForCouple: 35000
  },
  {
    name: "Ladakh Adventure Tour",
    duration: "10 Days, 9 Nights",
    description: "Experience the rugged beauty of Ladakh, with stunning landscapes and rich culture.",
    placesToVisit: [
      "Leh - Visit Leh Palace.",
      "Pangong Lake - Enjoy the stunning views.",
      "Nubra Valley - Experience the sand dunes."
    ],
    image: "https://nishnaiholidays.com/wp-content/uploads/2023/08/Adventure-Activities-in-Leh-Ladakh-Trekking-Biking-and-River-Rafting.jpg",
    priceForOne: 65000, 
    priceForCouple: 120000
  },
  {
    name: "Varanasi Spiritual Tour",
    duration: "3 Days, 2 Nights",
    description: "Immerse yourself in the spiritual culture of Varanasi, one of the oldest living cities in the world.",
    placesToVisit: [
      "Ganga Ghats - Experience the morning boat ride.",
      "Kashi Vishwanath Temple - Visit the famous temple.",
      "Sarnath - Explore the historical Buddhist site."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToftLAUXf_HPQp3w6U3EJmpncQc5NUIALZbg&s",
    priceForOne: 15000, 
    priceForCouple: 27000
  }
];


const TourPackageCard = ({ name, duration, description, placesToVisit, image ,priceForOne ,priceForCouple}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2"><strong>Duration:</strong> {duration}</p>
      <p className="text-gray-600 mt-2">{description}</p>
      <h4 className="mt-4 font-semibold">Places to Visit:</h4>
      <ul className="list-disc pl-5 mt-2 h-[100px]">
        {placesToVisit.map((place, index) => (
          <li key={index} className="text-gray-600">{place}</li>
        ))}
      </ul>
      </div>
     
         
         <div className='flex items-center justify-evenly'>
          <div><h1 className='font-bold text-mg'>Single Price-₹{priceForOne}</h1><h1 className='font-bold text-mg'>Couple Price-₹{priceForCouple}</h1></div>
          <button className='bg-red-400 m-2 p-2 pl-2 pr-2 rounded-xl'>Book Tour</button>
         </div>


  </div>
);

const TourPackagesComponent = () => {
  return (
    <div className="max-w-7xl text-black  mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
      <h2 className="text-3xl font-bold text-center mt-14 mb-8">Popular Tour Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourPackages.map((packageInfo, index) => (
          <TourPackageCard key={index} {...packageInfo} />
        ))}
      </div>
    </div>
  );
};

export default TourPackagesComponent;
