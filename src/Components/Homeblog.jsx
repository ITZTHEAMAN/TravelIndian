import React from 'react'

function Homeblog() {
  const Posts = [
    {
      id: 1,
      name: "Aman Jain",
      location: "Manali, Himachal Pradesh",
      date: "September 25, 2024",
      description: "Manali is a stunning hill station that offers breathtaking views and adventurous activities. I visited during the summer, and the weather was perfect for trekking and exploring.",
      thoughts: "If you love adventure and natural beauty, don't miss Manali! I recommend visiting in May or June for the best experience.",
      image: "https://images.unsplash.com/photo-1602570802123-88c4eec24535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxNYW5hbGl8ZW58MHx8fHwxNjcxMjk3MjU0&ixlib=rb-1.2.1&q=80&w=400",
      bimage:"https://experiencemyindia.com/wp-content/uploads/2024/09/Kullu-Manali-Blog-1-1.jpg"
    },
    {
      id: 2,
      name: "Riya Sharma",
      location: "Goa",
      date: "September 20, 2024",
      description: "Goa is famous for its beautiful beaches, vibrant nightlife, and rich culture. I spent a week exploring different beaches and enjoying water sports.",
      thoughts: "Visit Goa during the off-season (September to November) to enjoy fewer crowds and lower prices. Don't miss the sunset at Anjuna Beach!",
      image: "https://images.unsplash.com/photo-1574177034956-7e64b83c25ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHxHb2F8ZW58MHx8fHwxNjcxMjk3MjU0&ixlib=rb-1.2.1&q=80&w=400",
      bimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1ASLGkG5TlKW2COw77tRY1cNZdo07PL9uA&s"
    },
    {
      id: 3,
      name: "Rahul Verma",
      location: "Jaipur, Rajasthan",
      date: "September 18, 2024",
      description: "Jaipur, also known as the Pink City, is rich in history and architecture. I visited the Amber Fort and Hawa Mahal, both breathtaking!",
      thoughts: "Best time to visit Jaipur is from October to March. The weather is pleasant, and the festivals during this time are a bonus.",
      image: "https://images.unsplash.com/photo-1534914043461-07055732b7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHxKaWFwdXIlMjBzdHlsZXxlbnwwfHx8fDE2NzEyOTcyNTY&ixlib=rb-1.2.1&q=80&w=400",
      bimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6UsH-XXANSp5TLIQXF4iW8fGC53zyQELQYqNXn8mcsr12BhXXQgcW_WW7NTJrVrWqCuE&usqp=CAU"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      location: "Kerala",
      date: "September 15, 2024",
      description: "Kerala is known as 'God's Own Country' and offers lush greenery, backwaters, and unique culture. I enjoyed a houseboat ride in Alleppey.",
      thoughts: "Visit Kerala during the monsoon (June to September) for lush landscapes and fewer tourists. Just remember to pack an umbrella!",
      image: "https://images.unsplash.com/photo-1551963831-b3bfe2fa35e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDU0fHxLZXJhbGF8ZW58MHx8fHwxNjcxMjk3MjU0&ixlib=rb-1.2.1&q=80&w=400",
      bimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMBAaWHEQ4_qcp2tNHoGkl9ED3ASnCBLCug&s"
    },
    {
      id: 5,
      name: "Priya Desai",
      location: "Varanasi, Uttar Pradesh",
      date: "September 10, 2024",
      description: "Varanasi is one of the oldest cities in the world, known for its spiritual significance and the Ganges River. The Ganga Aarti at Dashashwamedh Ghat is mesmerizing.",
      thoughts: "Visit Varanasi during the winter (October to March) for a more enjoyable experience. Don't forget to take a boat ride at dawn!",
      image: "https://images.unsplash.com/photo-1573878483193-104b0be1c6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI4fHxWYXJhbmFzaXxlbnwwfHx8fDE2NzEyOTcyNTU&ixlib=rb-1.2.1&q=80&w=400",
      bimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqbg2AUK79vho4-Pb5ND28FcE5NJ4tAtQCQ&s"
    },
    {
      id: 6,
      name: "Nisha Mehta",
      location: "Darjeeling, West Bengal",
      date: "September 5, 2024",
      description: "Darjeeling, known for its tea plantations and stunning views of the Himalayas, is a must-visit. I took the toy train ride, which was a delightful experience.",
      thoughts: "The best time to visit is between March and June. The weather is lovely, and the tea gardens are in full bloom!",
      image: "https://images.unsplash.com/photo-1578449258772-293b5394140c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHxEYXJqZWVsaW5nfGVufDB8fHx8MTY3MTI5NzI1OQ&ixlib=rb-1.2.1&q=80&w=400",
      bimage: "https://www.alphonsostories.com/AlphonSoStoriesImages/BlogImage/Darjeeling-in-48-Hours-things-to-do-Blog-final--Augsut-2022-cover-lg.jpg"
    }]
  return (
    <div className='bg-[#ffffff] text-black p-4 pt-16 pb-10  '>
      <hr />
      <h1 className='text-2xl font-bold'>Our Latest Blog's</h1>
     <div className='flex'>
     {Posts.map((item)=>(
       <div className='w-80 h-80 bg-[#FFFFFF] rounded-xl overflow-hidden drop-shadow-2xl m-4'>
       <div className='h-4/6 overflow-hidden '><img className='w-full h-full object-cover' src={item.bimage} alt="" /></div> 
       <div className='flex flex-col items-center '> <h1 className='text-xl text-bold'>{item.name}</h1>
        <h1 className='font-bold text-mg'>{item.location}</h1>
        <h1 className='text-mg'>Post on:-{item.date}</h1>
        </div>
      </div>
     ))}
</div>
<hr />
    </div>
  )
}

export default Homeblog