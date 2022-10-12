import React from 'react'
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'

const SkillsSection = () => {


    const category = [
        {
            id:1,
            title: 'Body health',
            img:img1 ,
        },
        {
            id:2,
            title: 'Emotional well-being',
            img: img2,
        },
        {
            id:3,
            title: 'Relationship',
            img: img3,
        },
        {
            id:4,
            title: 'Self-realization',
            img: img4,
        },
        {
            id:5,
            title: 'Dancing',
            img: img5,
        },
        {
            id:6,
            title: 'Massage and body therapy',
            img: img6,
        },
    ]

  return (
    <div className='container mx-auto mt-28'>
        <h1 className='font-bold text-5xl font-[#333333]'>Invest In Your Skills</h1>
        <div className='font-[#333333] text-xl font-light max-w-[730px]'>
            <p className='mt-8'>That's right, self-development. When you develop, everything around you grows with you: your career, your quality of life, and your ability to control your own destiny.</p>
            <p className='mt-8'>Gaining new skills and knowledge with courses is a great modern form of education. Apply your new skills on a daily basis and improve your life quality!</p>
        </div>
        <div className='flex justify-between mt-16'>
            {category && category.map((item) => 
                <div className=''>
                    <img src={item.img} alt='photo1'/>
                    <p className='mt-4 font-normal'>{item.title}</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default SkillsSection