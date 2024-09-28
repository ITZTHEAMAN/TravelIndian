import React from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: "Taj Mahal",
    description: "A symbol of love and a UNESCO World Heritage Site, the Taj Mahal is an exquisite mausoleum in Agra.",
    image: "https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Jaipur City",
    description: "The Pink City is known for its vibrant culture, historic forts, and beautiful palaces.",
    image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFpcHVyfGVufDB8fDB8fHww",
  },
  {
    name: "Goa Beaches",
    description: "Famous for its beautiful beaches and vibrant nightlife, Goa is a perfect destination for relaxation and fun.",
    image: "https://plus.unsplash.com/premium_photo-1671358446946-8bd43ba08a6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Kerala Backwaters",
    description: "The serene backwaters of Kerala offer a unique experience with stunning views and tranquil surroundings.",
    image: "https://plus.unsplash.com/premium_photo-1697729432049-caca66a1dab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2VyYWxhJTIwYmFja3dhdGVyfGVufDB8fDB8fHww",
  },
  {
    name: "Leh-Ladakh",
    description: "Known for its stunning landscapes and adventurous activities, Leh-Ladakh is a paradise for nature lovers.",
    image: "https://images.unsplash.com/photo-1653112122775-855a525a5846?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlaCUyMGxhZGFraHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Varanasi Ghats",
    description: "The spiritual city of Varanasi is famous for its ghats along the Ganges River and vibrant rituals.",
    image: "https://images.unsplash.com/photo-1706186924707-d2acc3bd979a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhbmFyYXNoaSUyMGdoYXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Hampi",
    description: "A UNESCO World Heritage Site, Hampi is known for its ancient temples and ruins amidst stunning landscapes.",
    image: "https://images.unsplash.com/photo-1600100397816-7f45f2638a66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbXBpfGVufDB8fDB8fHww",
  },
  {
    name: "Ranthambore National Park",
    description: "Famous for its tiger population, Ranthambore offers an exciting wildlife experience in a beautiful setting.",
    image: "https://images.unsplash.com/photo-1634319801317-86f7550c08ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbnRoYW1ib3JlJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
  },
  {
    name: "Darjeeling",
    description: "Known for its tea gardens and stunning views of the Himalayas, Darjeeling is a hill station not to be missed.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVYNxkVUx9GeUA0bQFPQgNwfzfrqvsNnoIQ&s",
  },
  {
    name: "Udaipur",
    description: "Famous for its lakes and royal palaces, Udaipur offers a romantic setting and rich cultural heritage.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBdkB1C4wXsPWar_Jh9gtlEuEB_z0zsBWXg&s"
  },
  {
    name: "Mysore Palace",
    description: "The majestic Mysore Palace is known for its stunning architecture and vibrant festivals.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAjPXJa5LD3IhnOKG_rA2HTZzYUUZLmHTSw&s",
  },
  {
    name: "Ajanta and Ellora Caves",
    description: "These ancient rock-cut caves are famous for their stunning sculptures and frescoes, showcasing India's rich history.",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/31/92/93.jpg",
  },
  {
    name: "Rishikesh",
    description: "Known as the 'Yoga Capital of the World', Rishikesh is a serene destination for yoga and spirituality.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiX7MCVF0DNFcQ_Pp-geb1uW2yfnKfDO_eVA&s",
  },
  {
    name: "Golden Temple",
    description: "The Golden Temple in Amritsar is a revered spiritual site and a stunning architectural marvel.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAnCtDPEuYQ7oXQqFDgVIcxdYxJqYZdSpKQ&s",
  },
  {
    name: "Mumbai",
    description: "Mumbai, the city of dreams, is known for its vibrant culture, iconic landmarks, and Bollywood.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5VOtMIdKbVYoLxawds-ZGKsUq1ep3JalOA&s",
  },
  {
    name: "Nashik",
    description: "Famous for its vineyards and wine production, Nashik offers a unique experience in the heart of Maharashtra.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpTsosd_EqASBDgogf200_7YfeiH95QdrsQ&s",
  },
];

const DestinationCard = ({ name, description, image }) => (
  <div className="bg-[#ffffff] w-full rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2 mb-2 h-[80px]">{description}</p>
    </div>
  <div className=' flex justify-center items-end'><button className='bg-red-400 hover:bg-red-600 mb-2 rounded-xl p-2 pl-2 pr-2'> Book Now</button></div>
  </div>
);

const DestinationComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#ffffff] text-black">
      <h2 className="text-4xl  font-bold text-center mb-8 mt-12">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationComponent;
