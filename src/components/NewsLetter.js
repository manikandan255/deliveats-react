import React from 'react'
import { FaMailBulk, FaPhoneSquare } from 'react-icons/fa'

const NewsLetter = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#24262b]'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>

                <h1>Need advice on how to improve your flow?</h1>
                <p>Sign Up to join our newsletter and stay up to date.</p>
                <div className='mt-5  hover:text-blue-600'>
                <h1><FaPhoneSquare size={20} /></h1>
                <h1 className='ml-6 -mt-5'><a href="tel:+91 735850 1827">+91 73585 01827</a></h1>
                </div>
                <div className='mt-4  hover:text-blue-600'>
                <h1><FaMailBulk size={20} /></h1>
                <h1 className='ml-7 -mt-5'><a href="mailto:manikandan.k1207@gmail.com">manikandan.k1207@gmail.com</a></h1>
                </div>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="email" className='p-3 flex w-full rounded-md text-black' placeholder='email' required/>
                    <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 border-none'>Notify me</button>
                </div>
                <p>we are concerned about the security of your data, Read {""}
                <span className='text-[#00df9a]'>Privacy Policy</span>
                </p>
            </div>
            <hr className='my-8 bg-gray-700 border-1 gark:bg-gray-700' />
        </div>
    </div>
  )
}

export default NewsLetter