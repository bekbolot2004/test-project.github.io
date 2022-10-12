import React from 'react'
import emoji from './assets/emoji.png'

const StepSection = () => {
  return (
   <div className='container mx-auto px-1'>
        <p className='flex justify-center mt-12 font-light'>Go through all the steps to get access and start Sacrill programs</p>
        <div className='relative w-full h-6 mt-8'>
            <div className='relative w-full h-6 rounded-full mt-4 opacity-40' style={{background: 'linear-gradient(297.23deg, #A0FFB5 -12.98%, #BEC1C0 115.22%), linear-gradient(90.38deg, #F6F9DB 0.04%, #F6F9DB 0.05%, #D9F9E8 99.39%)'}}></div>
            <div className='absolute top-0 left-0 w-4/5 h-6 rounded-full ' style={{background: 'linear-gradient(297.23deg, #A0FFB5 -12.98%, #BEC1C0 115.22%), linear-gradient(51.51deg, #9AEABF 0%, #EAF6A3 100%)'}}>
                <div className='absolute -top-2/4 left-[98%] flex justify-center items-center h-12 w-12 bg-white rounded-full border-2 border-[#9AEABF] text-sm font-medium'>90%</div>
            </div>
        </div>
        <div className='flex justify-center items-center flex-col container md-auto relative'>
            <h1 className='font-bold text-6xl text-center mt-16'><span className='text-[#FF3A44]'>Wait! You're Almost There!</span> <br/> Just One More Step To Go</h1>
            <p className='mt-8 font-sm font-light text-center max-w-2xl'>You'll need to go through all the registration steps to gain access to our education platform, and then you can start learning. We have something special for you today.</p>
            <div className='absolute top-5  flex justify-center items-center'><img src={emoji} alt='photo1'/></div>
        </div>
   </div>
  )
}

export default StepSection