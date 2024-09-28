import React from 'react'

function Placecard() {
    const data  = [
        {
          name: "Taj Mahal",
          description: "A stunning white marble mausoleum, built in the 17th century, and one of the Seven Wonders of the World.",
          image: ""
        },
        {
          name: "Jaipur City Palace",
          description: "An architectural marvel located in Jaipur, Rajasthan, showcasing a blend of Mughal and Rajasthani styles.",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Jaipur_City_Palace.jpg"
        },
        {
          name: "Kerala Backwaters",
          description: "A unique network of lagoons, lakes, rivers, and canals offering a tranquil experience with houseboat tours.",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Houseboats_at_Alleppey.jpg"
        },
        {
          name: "Varanasi Ghats",
          description: "A spiritual center on the banks of the River Ganges, known for its ghats and religious significance.",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Varanasighats.jpg"
        },
        {
          name: "Himalayan Mountains",
          description: "The majestic Himalayan range offers stunning views, trekking, and spiritual retreats.",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Kangchenjunga_from_Tiger_Hill%2C_Darjeeling.jpg"
        },
        {
          name: "Goa Beaches",
          description: "Famous for its pristine beaches, vibrant nightlife, and Portuguese heritage.",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Baga_Beach.jpg"
        },
        {
          name: "Ranthambore National Park",
          description: "A wildlife reserve in Rajasthan known for its tiger population and stunning landscapes.",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Ranthambore_National_Park.jpg"
        },
        {
          name: "Meenakshi Temple",
          description: "A historic temple in Madurai, Tamil Nadu, known for its towering gopurams and intricate sculptures.",
          image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Meenakshi_Amman_Temple_Tower.jpg"
        },
        {
          name: "Golden Temple",
          description: "A sacred Sikh shrine in Amritsar, Punjab, renowned for its stunning golden architecture and spiritual atmosphere.",
          image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Golden_Temple_Amritsar_India_July_2011.png"
        },
        {
          name: "Hawa Mahal",
          description: "The 'Palace of Winds' in Jaipur, known for its intricate façade and unique architecture.",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hawa_Mahal_2011.jpg"
        },
        {
          name: "Qutub Minar",
          description: "A historic minaret in Delhi, standing at 73 meters, symbolizing the Indo-Islamic architecture of the 12th century.",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Qutub_Minar_Top_Floor_December_2019.jpg"
        },
        {
          name: "Mysore Palace",
          description: "A grand palace in Mysore, Karnataka, famous for its Indo-Saracenic architecture and royal heritage.",
          image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Mysore_palace_main_entrance.jpg"
        },
        {
          name: "Jaisalmer Fort",
          description: "A massive fort in the heart of the Thar Desert, known for its golden sandstone architecture.",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Jaisalmer_Fort.jpg"
        },
        {
          name: "Andaman Islands",
          description: "A pristine tropical getaway, known for its beautiful beaches, crystal-clear waters, and marine life.",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Radhanagar_Beach.jpg"
        },
        {
          name: "Konark Sun Temple",
          description: "A 13th-century Sun temple in Odisha, known for its stunning stone carvings and unique chariot structure.",
          image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Konark_Sun_Temple_Front_View.jpg"
        },
        {
          name: "Ellora Caves",
          description: "An extraordinary set of rock-cut caves in Maharashtra, representing Buddhist, Hindu, and Jain architecture.",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Kailasa_Temple%2C_Cave_16_in_Ellora_Caves.jpg"
        },
        {
          name: "Dal Lake",
          description: "Located in Srinagar, Kashmir, this lake is known for its houseboats, shikaras, and picturesque surroundings.",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Dal_Lake%2C_Srinagar%2C_Kashmir.jpg"
        },
        {
          name: "Khajuraho Temples",
          description: "Famous for their erotic sculptures, these temples in Madhya Pradesh showcase exquisite craftsmanship and Indian art.",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Kandariya_Mahadeva_Temple_-_Khajuraho.jpg"
        },
        {
          name: "Leh-Ladakh",
          description: "A high-altitude desert region in the Indian Himalayas, famous for its dramatic landscapes and monasteries.",
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Leh_Ladakh.jpg"
        },
        {
          name: "Rishikesh",
          description: "Known as the 'Yoga Capital of the World', this town on the Ganges is popular for meditation, yoga, and adventure sports.",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Rishikesh%2C_Ganges_2.jpg"
        }
      ];
      
  return (
    <div className='bg-red-200 h-60 w-72 m-2 mr-2 border-2 rounded'>

       <div className=''> <img className='h-52 w-72 ' src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" alt="" /></div>
        <div className='flex items-center justify-center text-lg font-bold'><h1>Taj Mahal</h1></div>
    </div>
  )
}

export default Placecard