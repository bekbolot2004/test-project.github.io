import React from 'react'
import Slider from "react-slick";
import woman from './assets/woman.png'
import arrow from './assets/arrow.svg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={'absolute -left-[50%] top-full h-[96px] w-[96px] rounded-full border border-black flex items-center justify-center cursor-pointer'}
        onClick={onClick}
      >
      <img className='rotate-180' src={arrow} />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={'absolute -left-[38%] top-full h-[96px] w-[96px] rounded-full border border-black flex items-center justify-center cursor-pointer'}
        onClick={onClick}
        >
      <img src={arrow} />
      </div>
    );
  }

const SliderBlock = () => {


    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        };
  return (
    <div className='container mx-auto my-28'>
        <div className='grid grid-cols-10 gap-[110px] text-[#333333]'>
            <div className='col-span-3'>
                <h1 className='font-bold text-[46px] text-[#333333]'>What students say about Sacrill club</h1>
            </div>
            <div className='col-span-7'>
                <Slider {...settings}>
                {[1,2,3,4,5].map((item) => 
                    <div className=' bg-[#F0F6F4] rounded-xl p-[60px]'>
                <div className='flex items-center gap-[30px]'>
                    <img src={woman} className='h-20 w-20 rounded-full' />
                    <h3 className='text-[28px]'>Linda</h3>
                </div>
                <p className='mt-[30px] text-xl font-light italic'>The subscription to Sacrill has helped me to know what I really like, what topics are close and interesting and what is not worth wasting time on. It is an unlimited opportunity to learn for a small amount of money. I have always bought different online courses, but it often happened that the topic is interesting but the expert's presentation is boring and I quickly lost interest and left the course without getting the desired result. However, I can choose which author I feel more comfortable with, which topics I want to delve into, and which ones don't suit me at all. Sacrill is a great way to find a new hobby and get better every day. I definitely recommend it to those who want to improve themselves, their lives and strive to be a well-rounded and interesting person.</p>
                </div>
                )}
                </Slider>
            </div>
            
        </div>
        
    </div>
    
  )
}

export default SliderBlock