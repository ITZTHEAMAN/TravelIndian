import React from 'react';

const specialPackages = [
  {
    name: "Honeymoon in Maldives",
    duration: "6 Days, 5 Nights",
    description: "A romantic getaway to the beautiful Maldives, with private beach dinners and spa treatments.",
    placesToVisit: [
      "Malé - Explore the capital city.",
      "Baa Atoll - Enjoy water activities.",
      "Dhigurah - Relax on the stunning beaches."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS336NvAjMC9zS1gr8HRez22mEx8JdvxZGuWQ&s",
    couplePrice: 15000, // Price for couples
  },
  {
    name: "Family Adventure in Dubai",
    duration: "5 Days, 4 Nights",
    description: "An exciting family trip to Dubai, featuring theme parks, desert safaris, and cultural experiences.",
    placesToVisit: [
      "Burj Khalifa - Visit the tallest building.",
      "Desert Safari - Enjoy dune bashing.",
      "Dubai Aquarium - Explore marine life."
    ],
    image: "https://platinumlist.net/guide/wp-content/uploads/2022/12/what-to-do-with-kids-dubai-scaled.jpg",
    couplePrice: 12000, // Price for couples
  },
  {
    name: "Couple Getaway in Goa",
    duration: "4 Days, 3 Nights",
    description: "Enjoy a romantic beach holiday in Goa, with sunsets and candlelight dinners.",
    placesToVisit: [
      "Anjuna Beach - Relax and unwind.",
      "Dudhsagar Falls - Take a scenic trip.",
      "Fort Aguada - Visit the historical fort."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYfeQKjdidw9HIfkaAbrx4XN4C8J-z0BnYA&s",
    couplePrice: 8000, // Price for couples
  },
  {
    name: "Special Night in Udaipur",
    duration: "3 Days, 2 Nights",
    description: "A luxurious night in the City of Lakes, including boat rides and heritage dinners.",
    placesToVisit: [
      "Lake Pichola - Enjoy a romantic boat ride.",
      "City Palace - Explore the majestic palace.",
      "Bagore Ki Haveli - Witness a cultural show."
    ],
    image: "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2020/08/Ambrai-Restaurant-Udaipur.jpg",
    couplePrice: 9000, // Price for couples
  },
  {
    name: "Birthday Bash in Beach",
    duration: "5 Days, 4 Nights",
    description: "Celebrate your special day in Singapore with theme parks, shopping, and gourmet dining.",
    placesToVisit: [
      "Universal Studios - Enjoy thrilling rides.",
      "Marina Bay Sands - Visit the iconic hotel.",
      "Gardens by the Bay - Explore beautiful gardens."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXgMxvhvTYEO10UWtjjpTLoSPGjvpZHFKzQ&s",
    couplePrice: 10600, // Price for couples
  },
  {
    name: "Family Trip to Andaman",
    duration: "6 Days, 5 Nights",
    description: "Create memories with your family in the beautiful Andaman Islands with island hopping and snorkeling.",
    placesToVisit: [
      "Havelock Island - Relax on the beaches.",
      "Neil Island - Enjoy the coral reefs.",
      "Port Blair - Visit Cellular Jail."
    ],
    image: "https://www.dreamzyatra.com/andaman-tour-packages/images/4-nights-5-days-family-package.jpg",
    couplePrice: 14000, // Price for couples
  },
  {
    name: "Couple Retreat in Shimla",
    duration: "4 Days, 3 Nights",
    description: "Escape to the hills for a romantic retreat in Shimla, with scenic views and cozy accommodations.",
    placesToVisit: [
      "Mall Road - Explore the local shops.",
      "Kufri - Enjoy outdoor activities.",
      "Jakhoo Temple - Visit the famous temple."
    ],
    image: "https://www.honeymoonpackagesmanali.org/uploads/8/2/6/1/8261259/honeymoon-suite-room-shimla.jpg",
    couplePrice: 8500, // Price for couples
  },
  {
    name: "Adventure Family Trip to Manali",
    duration: "7 Days, 6 Nights",
    description: "Experience the adventure of a lifetime with your family in Manali, including skiing and paragliding.",
    placesToVisit: [
      "Solang Valley - Enjoy adventure sports.",
      "Rohtang Pass - Visit the snow-covered pass.",
      "Manali Mall Road - Explore local markets."
    ],
    image: "https://manalitourplanner.com/wp-content/uploads/2023/11/Manali-Family-Tour-Packages-2.jpg",
    couplePrice: 3350, // Price for couples
  },
  {
    name: "Romantic Getaway to Ooty",
    duration: "5 Days, 4 Nights",
    description: "Escape to the hills of Ooty with your partner for a romantic experience amid beautiful gardens.",
    placesToVisit: [
      "Ooty Lake - Enjoy boating.",
      "Botanical Gardens - Explore the gardens.",
      "Doddabetta Peak - Enjoy panoramic views."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOQoixZ5LetQCvt1Qhi599Hpem_IS8ldfAX6pw8weNulsp0bVaj4Vaa5AhszcthyTJ7Q&usqp=CAU",
    couplePrice: 9950, // Price for couples
  },
  {
    name: "Birthday Celebration in Jaipur",
    duration: "4 Days, 3 Nights",
    description: "Celebrate your birthday in the royal city of Jaipur with heritage experiences and delicious food.",
    placesToVisit: [
      "Hawa Mahal - Visit the iconic palace.",
      "Amber Fort - Explore the historical fort.",
      "Jal Mahal - Enjoy the picturesque lake."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTks8f4x7YWF2XrUwQtsdwXLVOGDgi-chLGcA&s",
    couplePrice: 11550, // Price for couples
  }
];

const SpecialPackageCard = ({ name, duration, description, placesToVisit, image,couplePrice }) => (
  <div className="bg-white ml-[80px] w-[360px] rounded-lg shadow-md overflow-hidden text-black">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2"><strong>Duration:</strong> {duration}</p>
      <p className="text-gray-600 mt-2">{description}</p>
      <h4 className="mt-4 font-semibold">Places to Visit:</h4>
      <ul className="list-disc pl-5 mt-2">
        {placesToVisit.map((place, index) => (
          <li key={index} className="text-gray-600">{place}</li>
        ))}
      </ul>
    </div>
    <div className='flex items-center justify-evenly'>
          <div><h1 className='font-bold text-xl'>Price-₹{couplePrice}</h1></div>
          <button className='bg-red-400 m-2 p-2 pl-2 pr-2 rounded-xl'>Book Tour</button>
         </div>

  </div>
);

const SpecialPackagesComponent = () => {
  return (
    <div className="max-w-7xl flex flex-col items-center justify-center pt-[100px] mx-ly Adventure in Dubai Duration: 5 Days, 4 Nightsauto px-4 sm:px-6 lg:px-8 py-10 ">
      <h2 className="text-4xl text-black font-bold text-center pl-8 mb-8">Special Tour Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex items-center justify-center">
        {specialPackages.map((packageInfo, index) => (
          <SpecialPackageCard key={index} {...packageInfo} />
        ))}
      </div>
    </div>
  );
};

export default SpecialPackagesComponent;
