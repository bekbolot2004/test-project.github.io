import React from 'react'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import img7 from './assets/7.png'
import img8 from './assets/8.png'
import img9 from './assets/9.png'

const WhatSayStudentsAbout = () => {
  return (
    <div className='relative'>
        <div className='container mx-auto mt-28 mb-18'>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-[46px] text-center text-[#333333]'>176,405 success stories</h1>
                <p className='text-[#333333] font-normal text-lg text-center mt-[22px] max-w-[770px]'>Sacrill constantly doing student feedback loops to ensure that our products not only enjoyable to get through, but transform the life of our learners and help to get the bright future.</p>
            </div>
        </div>
        {/* <div className='inline justify-between'>
            {[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10].map((item) =>
                <div className='w-[160px] h-[260px] bg-center bg-cover' style={{background : `url(${item})`}}>
                </div>
            )}
        </div> */}
        <dov className='overflow-hidden w-full'>
            <div className=' flex justify-between mt-[60px]'>
                {[img1,img2,img3,img4,img5,img6,img7,img8,img9].map((item) => 
                    <div className='h-[250px] w-[160px] bg-black mx-[5px] rounded-xl bg-cover bg-center bg-no-repeat' style={{background: `url(${item})`}}>
                    
                    </div>
                )}
            </div>
        </dov>
    </div>
  )
}

export default WhatSayStudentsAbout