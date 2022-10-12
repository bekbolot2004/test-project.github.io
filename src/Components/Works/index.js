import React, { useState } from 'react'
import bg1 from './assets/1.png'
import bg2 from './assets/2.png'
import bg3 from './assets/3.png'
import img from './assets/img.png'
import star from './assets/Icon.svg'
import starDark from './assets/Icon2.svg'

const Works = () => {

    const worksObj = [
        {
            id:1,
            bg: bg1,
            heading: 'Learn',
            subheading: 'Level up your life with the world’s best trainers & programs.',
            name: 'Helen Williams',
            img: img,
            profession: 'Bank employee',
            title: 'I’m participating on multiple Sacrill programs and integrated it easily into my daily routine. It completely fall into my squedule. I feel pumped up and limitless now!',
            rating: 5,
        },
        {
            id:2,
            bg: bg2,
            heading: 'Learn',
            subheading: 'Level up your life with the world’s best trainers & programs.',
            name: 'Helen Williams',
            img: img,
            profession: 'Bank employee',
            title: 'I’m participating on multiple Sacrill programs and integrated it easily into my daily routine. It completely fall into my squedule. I feel pumped up and limitless now!',
            rating: 5,
        },
        {
            id:3,
            bg: bg3,
            heading: 'Learn',
            subheading: 'Level up your life with the world’s best trainers & programs.',
            name: 'Helen Williams',
            img: img,
            profession: 'Bank employee',
            title: 'I’m participating on multiple Sacrill programs and integrated it easily into my daily routine. It completely fall into my squedule. I feel pumped up and limitless now!',
            rating: 5,
        },
    ]


  return (
    <div className='container mx-auto my-28'>
      <h1 className='font-bold text-[46px] text-center text-[#333333]'>How Sacrill Works</h1>
      <div className='flex justify-between items-center mt-[60px]'>
          {/* {reviewsObj && reviewsObj.map((item) => 
            <div className='border border-[#E5E5E5] p-10 rounded-xl relative'>
              <div className='absolute top-5 right-5 opacity-10'><img src={doubleQuotes} /></div>
              <div className='flex gap-[2px]'>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
              <div className='flex text-base mt-2.5'>
                <div >{item.login}</div>
                <div className='text-[#808080] ml-1'>{item.date}</div>
              </div>
              <p className='mt-5'>{item.title}</p>
              <div className='flex items-center mt-[30px]'>
                <div>
                  <img src={item.img} alt="photo" />
                </div>
                <div className='ml-5 gap-[10px]'>
                  <div className='text-[#333333] text-semibold text-xl'>{item.name}</div>
                  <div className='text-[#333333] font-basic'>{item.profession}</div>
                </div>
              </div>
            </div>
          )} */}
          {worksObj && worksObj.map((item) =>
            <div className=' rounded-xl border border-[#E5E5E5] overflow-hidden md:w-[360px]'>
                <div className='bg-[#E5E5E5] relative'>
                    <div className='relative bg-center h-[220px] bg-no-repeat bg-cover' style={{background: `url(${item.bg})`}}>
                        <div className='absolute top-[20px] left-[20px]  h-[36px] w-[36px] bg-white rounded-full flex items-center justify-center bg-opacity-[0.5]'>{item.id}</div>
                    </div>
                    <div className='relative'>
                        <div className='bg'/>
                    </div>
                    <div className='p-[30px] text-[#333333]'>
                        <h2 className='text-[28px]'>{item.heading}</h2>
                        <p className='text-[20px]'>{item.subheading}</p>
                    </div>
                </div>
                <div className='p-[30px]'>
                    <div className='flex items-center'>
                        <div>
                        <img src={item.img} alt="photo" />
                        </div>
                        <div className='ml-5 gap-[10px]'>
                        <div className='text-[#333333] text-semibold text-xl'>{item.name}</div>
                        <div className='text-[#333333] font-basic opacity-50'>{item.profession}</div>
                        </div>
                    </div>
                    <p className='mt-[20px]'>{item.title}</p>
                    <div className='flex gap-[2px] mt-[50px]'>
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default Works