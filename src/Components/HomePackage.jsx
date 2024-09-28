import React from 'react'
import Packagecard from './Packagecard'
function HomePackage() {
  const tourPackages = [
    {
      name: "Golden Triangle Tour",
      photos:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSengbNvZwt-y77xxzuuBc6R8rH87bAxwyw&s',
      duration: "9 Day's",
      description: "Explore the iconic cities of Delhi, Agra, and Jaipur with our Golden Triangle Tour.",
      details: {
        itinerary: [
          { day: 1, title: "Arrival in Delhi", description: "Arrive in Delhi, explore Qutub Minar and Humayun's Tomb." },
          { day: 2, title: "Delhi City Tour", description: "Visit India Gate, Lotus Temple, and Red Fort." },
          { day: 3, title: "Delhi to Agra", description: "Transfer to Agra. Visit the Taj Mahal and Agra Fort." },
          { day: 4, title: "Agra to Jaipur", description: "Visit Fatehpur Sikri on the way to Jaipur." },
          { day: 5, title: "Jaipur Sightseeing", description: "Visit City Palace, Hawa Mahal, and Amber Fort." },
          { day: 6, title: "Jaipur Exploration", description: "Explore local markets and Jal Mahal." },
          { day: 7, title: "Departure from Jaipur", description: "Depart from Jaipur." }
        ]
      }
    },
    
    {
      name: "Leh-Ladakh Adventure",
      photos:'https://nishnaiholidays.com/wp-content/uploads/2023/08/Adventure-Activities-in-Leh-Ladakh-Trekking-Biking-and-River-Rafting.jpg',
      duration: "12 Day's",
      description: "Adventure in Leh-Ladakh, exploring rugged terrains and beautiful landscapes.",
      details: {
        itinerary: [
          { day: 1, title: "Arrival in Leh", description: "Acclimatize and rest." },
          { day: 2, title: "Leh Sightseeing", description: "Visit Leh Palace, Shanti Stupa, and local markets." },
          { day: 3, title: "Leh to Nubra Valley", description: "Drive via Khardung La Pass to Nubra Valley." },
          { day: 4, title: "Nubra Exploration", description: "Explore Diskit Monastery and sand dunes." },
          { day: 5, title: "Nubra to Pangong Lake", description: "Visit Pangong Lake and camp overnight." },
          { day: 6, title: "Pangong to Leh", description: "Return to Leh with a visit to Thiksey Monastery." },
          { day: 7, title: "Leh to Tso Moriri Lake", description: "Drive to the scenic Tso Moriri Lake." },
          { day: 8, title: "Explore Tso Moriri", description: "Explore the surroundings of Tso Moriri." },
          { day: 9, title: "Return to Leh", description: "Drive back to Leh and relax." },
          { day: 10, title: "Departure", description: "Depart from Leh." }
        ]
      }
    },
    {
      name: "Goa Beach Holiday",
      photos: 'https://4.imimg.com/data4/DD/MA/MY-14429973/goa-beach-holiday-500x500.jpg',
      duration: "4 Day's",
      description: "Relax on Goa’s famous beaches, enjoying sun, sand, and fun activities.",
      details: {
        itinerary: [
          { day: 1, title: "Arrival in Goa", description: "Visit Baga Beach in the evening." },
          { day: 2, title: "North Goa Tour", description: "Explore Anjuna, Calangute, and Candolim beaches." },
          { day: 3, title: "South Goa Tour", description: "Visit Palolem, Colva, and Benaulim beaches." },
          { day: 4, title: "Departure", description: "Relax before departure." }
        ]
      }
    },
    {
      name: "Rajasthan Royal Tour",
      photos: 'https://www.rajasthantourplanner.com/blog/wp-content/uploads/2017/07/1464182912goa13.jpg',
      duration: "6 Day's",
      description: "Discover Rajasthan’s majestic forts, palaces, and desert landscapes.",
      details: {
        itinerary: [
          { day: 1, title: "Arrival in Jaipur", description: "Visit City Palace and Hawa Mahal." },
          { day: 2, title: "Jaipur Sightseeing", description: "Amber Fort, Jal Mahal, and local markets." },
          { day: 3, title: "Jaipur to Jodhpur", description: "Transfer to Jodhpur, explore Mehrangarh Fort." },
          { day: 4, title: "Jodhpur City Tour", description: "Visit Jaswant Thada and Umaid Bhawan Palace." },
          { day: 5, title: "Jodhpur to Jaisalmer", description: "Drive to Jaisalmer, visit Jaisalmer Fort." },
          { day: 6, title: "Jaisalmer Desert Safari", description: "Camel safari in the Thar Desert." },
          { day: 7, title: "Jaisalmer to Udaipur", description: "Transfer to Udaipur, visit Lake Pichola." },
          { day: 8, title: "Udaipur Sightseeing", description: "Visit City Palace and Jag Mandir." }
        ]
      }
    },
    {
      name: "Shimla-Manali Hill Stations",
      photos: 'https://www.indiatraveltours.com/images/shimla-tour-package.jpg',
      duration: "9 Day's",
      description: "A serene getaway to the scenic hill stations of Shimla and Manali.",
      details: {
        itinerary: [
          { day: 1, title: "Arrival in Shimla", description: "Explore Mall Road and Christ Church." },
          { day: 2, title: "Shimla Sightseeing", description: "Visit Kufri, Jakhoo Temple, and Chadwick Falls." },
          { day: 3, title: "Shimla to Manali", description: "Transfer to Manali, enjoy a leisure evening." },
          { day: 4, title: "Manali Sightseeing", description: "Explore Solang Valley and Hidimba Temple." },
          { day: 5, title: "Rohtang Pass Adventure", description: "Day trip to Rohtang Pass." },
          { day: 6, title: "Departure from Manali", description: "Drive back to Chandigarh or Delhi." }
        ]
      }
    },
    
    {
      name: "Sikkim and Darjeeling",
      photos: 'https://image.kesari.in/upload/NS/rsz_loop.jpg',
      duration: "10 Day's",
      description: "Explore the serene tea gardens, monasteries, and lakes of Sikkim and Darjeeling.",
      details: {
        itinerary: [
          { day: 1, title: "Arrival in Gangtok", description: "Visit MG Marg and local markets." },
          { day: 2, title: "Tsomgo Lake & Baba Mandir", description: "Visit Tsomgo Lake and Baba Mandir." },
          { day: 3, title: "Gangtok to Pelling", description: "Visit Rumtek Monastery on the way to Pelling." },
          { day: 4, title: "Pelling Sightseeing", description: "Visit Kanchenjunga Falls and Pemayangtse Monastery." },
          { day: 5, title: "Pelling to Darjeeling", description: "Drive to Darjeeling, visit the tea gardens." },
          { day: 6, title: "Darjeeling Sightseeing", description: "Visit Tiger Hill, Ghoom Monastery, and Batasia Loop." },
          { day: 7, title: "Departure", description: "Drive to the airport for departure." }
        ]
      }
    },
    {
      name: "Assam and Meghalaya",
      photos: 'https://3.imimg.com/data3/CC/HO/MY-12303680/-fi4cifyomuo-uo84zdm1hbi-aaaaaaaaft4-p1vkcgqn9xw-s1600-assam-500x500.jpg',
      duration: "8 Day's",
      description: "A blend of nature and spirituality in the serene landscapes of Assam and Meghalaya.",
      details: {
        itinerary: [
          { day: 1, title: "Arrival in Guwahati", description: "Visit Kamakhya Temple and Brahmaputra River cruise." },
          { day: 2, title: "Guwahati to Shillong", description: "Drive to Shillong and visit Umiam Lake." },
          { day: 3, title: "Shillong to Cherrapunji", description: "Visit waterfalls and living root bridges in Cherrapunji." },
          { day: 4, title: "Cherrapunji Exploration", description: "Explore caves and Mawlynnong village." },
          { day: 5, title: "Shillong Sightseeing", description: "Visit Don Bosco Museum and local markets." },
          { day: 6, title: "Shillong to Kaziranga", description: "Drive to Kaziranga, enjoy a jungle safari." },
          { day: 7, title: "Departure", description: "Drive back to Guwahati for departure." }
        ]
      }
    },
    {
      name: "Rann of Kutch Festival",
      photos: 'https://www.gujarattourism.com/content/dam/gujrattourism/images/june/runn-utsav-banner.jpg',
      duration: "7 Day's",
      description: "Experience the vibrant Rann Utsav in the vast white deserts of Kutch.",
      details: {
        itinerary: [
          { day: 1, title: "Arrival in Bhuj", description: "Explore Bhuj city and local markets." },
          { day: 2, title: "White Rann Exploration", description: "Visit the White Rann, enjoy the sunset and Rann Utsav festivities." },
          { day: 3, title: "Cultural Program", description: "Enjoy cultural performances at the Rann Utsav." },
          { day: 4, title: "Mandvi Beach", description: "Visit Mandvi Beach and Vijay Vilas Palace." },
          { day: 5, title: "Departure", description: "Transfer to Bhuj for departure." }
        ]
      }
    },
    {
      name: "Andaman Islands",
      photos: 'https://www.traveltoindia.org/images/Andaman-tour-packages-from-Mumbai.jpg',
      duration: "10 Day's",
      description: "A tropical paradise getaway to the beautiful Andaman Islands.",
      details: {
        itinerary: [
          { day: 1, title: "Arrival in Port Blair", description: "Visit Cellular Jail and attend the Light & Sound show." },
          { day: 2, title: "Port Blair to Havelock Island", description: "Transfer to Havelock Island, enjoy Radhanagar Beach." },
          { day: 3, title: "Havelock Island Exploration", description: "Visit Elephant Beach and indulge in water sports." },
          { day: 4, title: "Havelock to Neil Island", description: "Visit Neil Island, enjoy Bharatpur Beach." },
          { day: 5, title: "Neil Island to Port Blair", description: "Return to Port Blair, enjoy leisure time." },
          { day: 6, title: "Departure", description: "Transfer to the airport for departure." }
        ]
      }
    }
  ]
  
  return (
    <div className='text-black bg-[#FFFFFF] h-auto flex flex-col items-center pt-8'>
      <h1 className='text-4xl mb-2 font-bold'>Top Selling Packages</h1>
      <div className='scroll2 w-10/12 h-auto p-4 overflow-x-auto flex flex-nowrap gap-2 '>
    {tourPackages.map((item,index)=>(<Packagecard item={item} key={index}/>))}
      </div>
    </div>
  )
}

export default HomePackage
