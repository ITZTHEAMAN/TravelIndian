import React from 'react';

const blogPosts = [
  {
    id: 1,
    name: "Aman Jain",
    location: "Manali, Himachal Pradesh",
    date: "September 25, 2024",
    description: "Manali is a stunning hill station that offers breathtaking views and adventurous activities. I visited during the summer, and the weather was perfect for trekking and exploring.",
    thoughts: "If you love adventure and natural beauty, don't miss Manali! I recommend visiting in May or June for the best experience.",
    image: "https://www.hlimg.com/images/deals/360X230/deals_201807161531727098-0.jpg?w=400&dpr=2.6",
  },
  {
    id: 2,
    name: "Riya Sharma",
    location: "Goa",
    date: "September 20, 2024",
    description: "Goa is famous for its beautiful beaches, vibrant nightlife, and rich culture. I spent a week exploring different beaches and enjoying water sports.",
    thoughts: "Visit Goa during the off-season (September to November) to enjoy fewer crowds and lower prices. Don't miss the sunset at Anjuna Beach!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBU1Huq7b9YDigalgTEHRDygBMWPpFCh7ljsIBihhyz5MvbTciv72D2ZXa0RA3xne30r4&usqp=CAU",
  },
  {
    id: 3,
    name: "Rahul Verma",
    location: "Jaipur, Rajasthan",
    date: "September 18, 2024",
    description: "Jaipur, also known as the Pink City, is rich in history and architecture. I visited the Amber Fort and Hawa Mahal, both breathtaking!",
    thoughts: "Best time to visit Jaipur is from October to March. The weather is pleasant, and the festivals during this time are a bonus.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOWSdUYQ1lHZG-pKuxgMfLfLfuQObPriErA&s",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    location: "Kerala",
    date: "September 15, 2024",
    description: "Kerala is known as 'God's Own Country' and offers lush greenery, backwaters, and unique culture. I enjoyed a houseboat ride in Alleppey.",
    thoughts: "Visit Kerala during the monsoon (June to September) for lush landscapes and fewer tourists. Just remember to pack an umbrella!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMBAaWHEQ4_qcp2tNHoGkl9ED3ASnCBLCug&s",
  },
  {
    id: 5,
    name: "Priya Desai",
    location: "Varanasi, Uttar Pradesh",
    date: "September 10, 2024",
    description: "Varanasi is one of the oldest cities in the world, known for its spiritual significance and the Ganges River. The Ganga Aarti at Dashashwamedh Ghat is mesmerizing.",
    thoughts: "Visit Varanasi during the winter (October to March) for a more enjoyable experience. Don't forget to take a boat ride at dawn!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa93u4vA7QYNbjgmCBztUuWVcpJ1GyO4ffsQ&s",
  },
  {
    id: 6,
    name: "Nisha Mehta",
    location: "Darjeeling, West Bengal",
    date: "September 5, 2024",
    description: "Darjeeling, known for its tea plantations and stunning views of the Himalayas, is a must-visit. I took the toy train ride, which was a delightful experience.",
    thoughts: "The best time to visit is between March and June. The weather is lovely, and the tea gardens are in full bloom!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy29xoG3LjzPRmMX-Jmx5Is5Tka02iVdyXFA&s",
  },
  {
    id: 7,
    name: "Vikram Singh",
    location: "Rishikesh, Uttarakhand",
    date: "August 30, 2024",
    description: "Rishikesh is a paradise for adventure lovers. I tried river rafting, and it was exhilarating! The scenery is just breathtaking.",
    thoughts: "The best time to visit is from September to November when the weather is pleasant. Don't miss the yoga sessions by the Ganges!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaAylC3nhIzsJcrvcVinOZnt8IiQo8h5okw&s",
  },
  {
    id: 8,
    name: "Kavita Rao",
    location: "Agra, Uttar Pradesh",
    date: "August 25, 2024",
    description: "Agra is home to the iconic Taj Mahal, which left me speechless. The intricate architecture is truly a sight to behold.",
    thoughts: "Visit during sunrise to see the Taj Mahal bathed in soft light. It's less crowded and a magical experience!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhD3UCOAOHwYcWyqgFlDD5MczR4GOQ4DUfg&s",
  },
  {
    id: 9,
    name: "Arjun Kumar",
    location: "Mumbai, Maharashtra",
    date: "August 20, 2024",
    description: "Mumbai, the city that never sleeps, has so much to offer! I explored Marine Drive, Gateway of India, and enjoyed the street food.",
    thoughts: "Visit during winter (November to February) for the best weather. Don't miss the local food stalls in Juhu!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVQpec143ye7I4pi2uZF9l5p9dvbCHOlJxg&s",
  },
  {
    id: 10,
    name: "Simran Khanna",
    location: "Kolkata, West Bengal",
    date: "August 15, 2024",
    description: "Kolkata, known for its culture and history, is a city full of life. I visited Victoria Memorial and enjoyed the local sweets.",
    thoughts: "The best time to visit is from October to March. The Durga Puja festival is a must-experience if you're around!",
    image: "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/600x400-5-300x200.jpg",
  },
  {
    id: 11,
    name: "Deepak Sharma",
    location: "Ladakh",
    date: "August 10, 2024",
    description: "Ladakh is a breathtaking destination with stunning landscapes. I visited Pangong Lake and Nubra Valley, both are incredible!",
    thoughts: "Best time to visit is from May to September when the weather is milder. Make sure to acclimatize before exploring!",
    image: "https://seoimgak.mmtcdn.com/blog/sites/default/files/HI1_6.jpg",
  },
  {
    id: 12,
    name: "Neha Rani",
    location: "Nashik, Maharashtra",
    date: "August 5, 2024",
    description: "Nashik is known for its vineyards and wine culture. I enjoyed wine tasting and exploring the scenic vineyards.",
    thoughts: "Visit during the grape harvest season (January to March) for a unique experience. The weather is also pleasant!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKY7mKPqRiV3xNrEBvN-rgxwesSuJ9BBNc0A&s",
  },
  {
    id: 13,
    name: "Vani Ahuja",
    location: "Pondicherry",
    date: "August 1, 2024",
    description: "Pondicherry, with its French colonial architecture and serene beaches, is a perfect getaway. I loved the peaceful vibe of Auroville.",
    thoughts: "Visit in winter (November to February) when the weather is cool and pleasant. Don’t miss the local cafés!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49lSEDXxSsy_CLOMvzKDrE7iz4EsX0rZDP7yOaVZFQ8WIH_QhrPr1Xqqy_mStvy3SF_8&usqp=CAU",
  },
  {
    id: 14,
    name: "Rajesh Kumar",
    location: "Chennai, Tamil Nadu",
    date: "July 28, 2024",
    description: "Chennai is a city rich in culture and history. I visited Marina Beach and tasted the delicious South Indian cuisine.",
    thoughts: "Visit during the winter months (December to February) for cooler weather. Don't miss the local food joints!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReb7JPwXf-WTqjM5tslSVRqrELGLFAwYu6iQ&s",
  },
  {
    id: 15,
    name: "Meera Nair",
    location: "Hyderabad, Telangana",
    date: "July 25, 2024",
    description: "Hyderabad, known for its rich history and food, was a delight. I visited the Charminar and indulged in Hyderabadi biryani.",
    thoughts: "The best time to visit is from October to March. Don't miss the evening street food at the Laad Bazaar!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHISzPnJPVjjLCbcn2v3JpAdnI_bjZp66R5A&s",
  },
];

const BlogCard = ({ name, location, date, description, thoughts, image }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={location} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-xl">{name}</h3>
      <p className="text-gray-700">{location} - <span className="text-gray-500">{date}</span></p>
      <p className="mt-2 text-gray-800">{description}</p>
      <p className="mt-2 italic text-gray-500">"{thoughts}"</p>
    </div>
  </div>
);

const BlogComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-black">
      <h2 className="text-4xl font-bold text-center mb-8 pt-[100px]">Travel Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
