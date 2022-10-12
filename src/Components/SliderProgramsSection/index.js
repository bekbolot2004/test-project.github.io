import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
// import img5 from './assets/5.png'
import React from "react";
// Import Swiper React components
// Import Swiper styles
import Slider from "react-slick";



// import required modules
// import { Pagination, Navigation } from "swiper";
// import { title } from 'process'



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "white",
      height: '96px',
      width: '96px',
      borderRadius: '100%',
      position: 'absolute', 
      left: '110px',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #333333',
      top: '120%' }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-black">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
    

  );
}

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "white",
        height: '96px',
        width: '96px',
        borderRadius: '100%',
        position: 'absolute', 
        left: '0',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #333333',
        top: '120%' }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-black">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>

      </div>
    );
  }

const SliderProgramsSection = () => {

  const listPrograms = [
    {
      id:1,
      title: "El masaje es como una danza de amor",
      author: 'Zinovieva Irina',
      img:img1,
    },
    {
      id:2,
      title: 'Corrección de la postura en casa "Royal Stan"',
      author: 'Venera Pratova',
      img:img2,
    },
    {
      id:3,
      title: 'Curso en línea para mujeres "Lo que un hombre real…"',
      author: 'Alex Polyakov',
      img:img3,
    },
    {
      id:4,
      title: "Cómo Balancear los Chakras y mejorar la vida",
      author: 'Ernesto Giombini',
      img:img4,
    },
    {
      id:5,
      title: "Biohacking cerebral: cómo volverse más inteligente…",
      author: 'Victoria Zimenkova',
      img:img2,
    },
    {
      id:1,
      title: "El masaje es como una danza de amor",
      author: 'Zinovieva Irina',
      img:img1,
    },
    {
      id:2,
      title: 'Corrección de la postura en casa "Royal Stan"',
      author: 'Venera Pratova',
      img:img2,
    },
    {
      id:3,
      title: 'Curso en línea para mujeres "Lo que un hombre real…"',
      author: 'Alex Polyakov',
      img:img3,
    },
    {
      id:4,
      title: "Cómo Balancear los Chakras y mejorar la vida",
      author: 'Ernesto Giombini',
      img:img4,
    },
    {
      id:5,
      title: "Biohacking cerebral: cómo volverse más inteligente…",
      author: 'Victoria Zimenkova',
      img:img2,
    }
  ]

  var settings = {
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    
    <>
    <div className='container mx-auto mt-28 pb-28'>
        <h1 className='font-bold text-5xl font-[#333333] max-w-[700px]'>Best-Selling Programs are Included in Membership</h1>
        <div className='flex justify-between mt-16'>
        {/* <Slider {...settings}>
          {['231','123,','231','123,','231','123,','231','123,'].map((item) => 
          <div className="bg-black h-1.5 w-10">
            <img src={img1} />
          </div>
          )}
        </Slider> */}
        <div className='w-full'>
          <Slider {...settings}>
        {listPrograms && listPrograms.map((item) => 
              <div className='w-[320px] flex flex-col mr-3'>
                <img src={item.img} className='w-[320px] h-[180px] object-cover' alt='photo1' />
                <h4 className='mt-5 font-bold text-xl'>{item.title}</h4>
                <p className='mt-2 text-base font-normal'>{item.author}</p>
              </div>
          )}
        </Slider>
        </div>
      </div>
    </div>
    </>
  )
}

export default SliderProgramsSection