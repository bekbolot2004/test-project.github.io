import React from 'react'
import People1 from './assets/people1.png'
import star from './assets/Icon.svg'
// import starDark from './assets/Icon2.svg'
import doubleQuotes from './assets/Vector.svg'

const Reviews = () => {

  const reviewsObj = [
    {id:1,
      name:'Davide Barnes',
      title: "A wonderful, healthy pastime! Great, exciting and giving hope for a full perception of the world in its best light! Developing motor skills-we develop acute and quick problem solving! Great! Thanks!",
      profession:'Novice disco dancer',
      login:'@dBarnes',
      date: '7 March 2022',
      img: People1,
      star: 3
    },

    {id:2,
      name:'Davide Barnes',
      title: "A wonderful, healthy pastime! Great, exciting and giving hope for a full perception of the world in its best light! Developing motor skills-we develop acute and quick problem solving! Great! Thanks!",
      profession:'Novice disco dancer',
      login:'@dBarnes',
      date: '7 March 2022',
      img: People1,
      star: 3
    },
    {id:3,
      name:'Davide Barnes',
      title: "A wonderful, healthy pastime! Great, exciting and giving hope for a full perception of the world in its best light! Developing motor skills-we develop acute and quick problem solving! Great! Thanks!",
      profession:'Novice disco dancer',
      login:'@dBarnes',
      date: '7 March 2022',
      img: People1,
      star: 3
    },

    {id:4,
      name:'Davide Barnes',
      title: "A wonderful, healthy pastime! Great, exciting and giving hope for a full perception of the world in its best light! Developing motor skills-we develop acute and quick problem solving! Great! Thanks!",
      profession:'Novice disco dancer',
      login:'@dBarnes',
      date: '7 March 2022',
      img: People1,
      star: 3
    },
  ]


  return (
    <div className='container mx-auto my-28'>
      <h1 className='font-bold text-[46px] text-center text-[#333333]'>Student reviews about our courses</h1>
      <p className='text-[#333333] font-light text-lg text-center mt-[22px]'>All our students are delighted with the results and the work of online trainers</p>
      <div className='grid grid-cols-1 gap-4 mt-14 md:grid-cols-2'>
          {reviewsObj && reviewsObj.map((item) => 
            <div className='border border-[#E5E5E5] p-10 rounded-xl relative'>
              <div className='absolute top-5 right-5 opacity-10'><img src={doubleQuotes} alt='photo1'/></div>
              <div className='flex gap-[2px]'>
                <img src={star} alt='photo1'/>
                <img src={star} alt='photo1'/>
                <img src={star} alt='photo1'/>
                <img src={star} alt='photo1'/>
                <img src={star} alt='photo1'/>
              </div>
              <div className='flex text-base mt-2.5'>
                <div >{item.login}</div>
                <div className='text-[#808080] ml-1'>{item.date}</div>
              </div>
              <p className='mt-5'>{item.title}</p>
              <div className='flex items-center mt-[30px]'>
                <div>
                  <img src={item.img} alt='photo1' />
                </div>
                <div className='ml-5 gap-[10px]'>
                  <div className='text-[#333333] text-semibold text-xl'>{item.name}</div>
                  <div className='text-[#333333] font-basic'>{item.profession}</div>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Reviews