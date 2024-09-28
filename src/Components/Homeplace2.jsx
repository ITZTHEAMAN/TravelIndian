import React from 'react';

const destinations = [
    {
        name: "Taj Mahal, Agra",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57E-nwOt0WtYM-aEQ6QjMpVeVUdIexGCs5w&s",
      },
      {
        name: "Jaipur, Rajasthan",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hVg2jEUdZJFIYZiabda3_Wnm2ay_fiOXKg&s",
      },
      {
        name: "Goa Beaches, Goa",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGu87q2HEi5rWhDyekReaQUko61Q8U15E8A&s",
      },
      {
        name: "Kerala Backwaters, Kerala",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Houseboats_at_Kerala_Backwaters.jpg/640px-Houseboats_at_Kerala_Backwaters.jpg",
      },
      {
        name: "Leh-Ladakh, Jammu & Kashmir",
        img: "https://travellingbee.in/wp-content/uploads/2024/04/image-12.jpeg",
      },
      {
        name: "Varanasi, Uttar Pradesh",
        img: "https://kashiyatra.in/wp-content/uploads/2023/04/ghats-of-varanasi-648x580.jpg",
      },
      {
        name: "Hampi, Karnataka",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yWBe-eNWPI-eqKxcFbJEfVVHdd71r75eGA&s",
      },
      {
        name: "Andaman and Nicobar Islands",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMQxZgMnAzw9EeN1-EshkjzMtd2crDQ9Lkw&s",
      },
      {
        name: "Ranthambore National Park, Rajasthan",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4U3AmQFRq1Q7TrYCHb3X2tP5uXv1mtphtw&s",
      },
      {
        name: "Darjeeling, West Bengal",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMMdbj6wOCXs4jtr27OOT-Bt461qhfBPTYw&s",
      }
];

const TopDestinations = () => {
  return (
    <div className='bg-[#FFFFFF] h-auto pb-12 text-black flex flex-col items-center overflow-x-hidden'>
      <h1 className='text-slate-600 text-lg'>Top Selling</h1>
      <h1 className='text-3xl font-extrabold'>Top Destinations</h1>

      {/* Horizontal Scroll Section */}
      <div className='scroll1 w-full overflow-x-auto mt-4'>
        <div className='flex flex-nowrap space-x-4 p-4'>
        
          {destinations.map((destination, index) => (
            <div key={index} className='min-w-[300px] max-w-[350px]'>
              <img
                src={destination.img}
                alt={destination.name}
                className='w-full h-[150px] object-cover rounded-lg shadow-lg'
              />
              <h2 className='text-center text-lg font-bold mt-2'>{destination.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
