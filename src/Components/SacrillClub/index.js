import React from 'react'
import star from './assets/Icon.svg'
import img1 from './assets/Ellipse 1.png'
import img2 from './assets/Ellipse 2.png'
import img3 from './assets/Ellipse 3.png'
import img4 from './assets/Ellipse 4.png'
import bgElement1 from './assets/Ellipse 17.png'
import bgElement2 from './assets/Ellipse 15.png'
import bgElement3 from './assets/Ellipse 14.png'
import bgElement4 from './assets/Ellipse 16.png'

const SacrillClub = () => {
  return (
    <div className='relative container mx-auto my-28'>
      <div className='flex justify-center'>
        <div className='bg-[#F5F5F5] flex items-center gap-5 px-5 py-2.5 pr-0 rounded-xl justify-center'>
          <div className='flex gap-[2px]'>
            <img src={star} className='h-4 w-4' />
            <img src={star} className='h-4 w-4' />
            <img src={star} className='h-4 w-4' />
            <img src={star} className='h-4 w-4' />
            <img src={star} className='h-4 w-4' />
          </div>
          <div>
            <p className='font-light'>Rating <span className='font-bold'>4.7</span> / <span className='font-bold'>321</span> reviews</p>
          </div>
          <div className='flex'>
            <div className='h-[36px] w-[36px] rounded-full text-white text-[10px] font-bold border-2 border-white'><img src={img1}/></div>
            <div className='h-[36px] w-[36px] rounded-full text-white text-[10px] font-bold border-2 border-white -translate-x-2.5'><img src={img2}/></div>
            <div className='h-[36px] w-[36px] rounded-full text-white text-[10px] font-bold border-2 border-white -translate-x-5'><img src={img3}/></div>
            <div className='h-[36px] w-[36px] rounded-full text-white text-[10px] font-bold border-2 border-white -translate-x-7'><img src={img4}/></div>
            <div className='h-[36px] w-[36px] rounded-full bg-[#333333] flex items-center justify-center text-white text-[10px] font-bold border-2 border-white -translate-x-10'>317+</div>
          </div>
        </div>
      </div>
      <div className='flex items-center flex-col mt-10'>
        <h1 className='max-w-[600px] text-[#333333] text-[46px]  text-center font-bold'>Become The Best Version Of Yourself With Sacrill Club</h1>
        <p className='max-w-[760px] text-[#333333] text-center text-[19px] mt-[30px]'>Sacrill subscription gives you courses to daily improve your relationships, self-realization, health and emotional well-being. And all this at an incredibly low price.</p>
        <h3 className='max-w-[760px] text-[#333333] text-center font-bold text-[28px] mt-[40px]'>Sacrill is a powerful investment in your self-development</h3>
        <button className='bg-[#73C371] text-white font-bold text-xl py-7 px-[60px] rounded-full mt-10'>Try Sacrill club for 14 days</button>
        <p className='text underline text-base mt-5'>I only want to study the course I bought on previous step</p>
      </div>
      <div className='absolute top-[80px] -left-[95px] h-[260px] w-[260px] bg-cover bg-center bg-black rounded-full' > <img src={bgElement1} /> </div>
      <div className='absolute top-[470px] left-[100xpx] h-[160px] w-[160px] bg-cover bg-center bg-black rounded-full' > <img src={bgElement2} /> </div>
      <div className='absolute top-[30px] -right-[40px] h-[160px] w-[160px] bg-cover bg-center bg-black rounded-full' > <img src={bgElement3} /> </div>
      <div className='absolute top-[355px] -right-[20px] h-[220px] w-[220px] bg-cover bg-center bg-black rounded-full' > <img src={bgElement4} /> </div>
    </div>
  )
}

export default SacrillClub