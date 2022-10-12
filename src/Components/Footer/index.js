import React from 'react'
import Logo from './assets/logo.svg'
import visa from './assets/visa.svg'
import stripe from './assets/stripe.svg'

const Footer = () => {
  return (
    <div className='container mx-auto my-28'>
        <div className='grid grid-cols-12 gap-12'>
            <div className='col-span-3'>
                <div>
                    <img src={Logo} alt='logo' className='h-10' />
                </div>
                <p className='text-[#808080] font-[16px] mt-7'>At Sacrill, expert practitioners in their fields share their expertise in online video courses at reasonable prices.</p>
                <div className='flex items-center mt-7'>
                    <img src={visa}/>
                    <img src={stripe}/>
                </div>
            </div>
            <div className='grid col-span-4 grid-cols-2'>
                <div>
                    <p className='text-[#333333] font-bold'>Collections</p>   
                    <ul className='grid gap-[10px] mt-5'>
                        {['Featured on Sacrill', 'New courses', 'High rating', "Editor's Choice"].map((item) => 
                            <li className='text-medium text-[#808080]'>{item}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <p className='text-[#333333] font-bold'>Sacrill</p> 
                    <ul className='grid gap-[10px] mt-5'>
                        {['Get access to all courses', 'Become a Sacrill Author', 'Referral program'].map((item) => 
                        <li className='text-medium text-[#808080]'>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div className=' col-span-5 flex flex-col items-end'>
                <p className='text-[#808080] font-normal font-base'>Support service</p>
                <h1 className='text-bold text-[56px]'>hello@sacrill.com</h1>
                <div className='flex  gap-[10px]'>
                    <button className='bg-[#333333] text-white rounded-[100px] py-[10px] px-[20px]'>Signing in</button>
                    <button className='text-black rounded-[100px] py-[10px] px-[20px] border border-[#E5E5E5]'>Sign In for Authors</button>
                </div>
                
            </div>
        </div>
        <div className='flex justify-between text-[#808080] mt-12'>
            <p >© 2022 Bon Digital Pte. Ltd. 68 Circular Road, #02-01, 049422, Singapore.</p>
            <ul className='grid grid-cols-3'>
                <li className='underline '>Contract Offer</li>
                <li className='underline'>Privacy Policy</li>
                <li className='underline'>User Agreement</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer