import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-white'>Deliv<span className='text-orange-500'>Eats</span></h1>
                <p>
                Deliveats: Taste Tamil Nadu's best via a user-friendly food delivery app. Explore diverse local eateries, order seamlessly, and track in real-time. Secure payments and occasional deals enhance the experience, making Deliveats your go-to for Tamil Nadu's flavors. Satisfy cravings conveniently with Deliveats
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-[#9b9b9b] underline'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>About</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Careers</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Team</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Sitemap</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b] underline'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>India</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>New York</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>USA</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b] underline'>Contact us</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Help</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Support</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Partner</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Ride</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b] underline'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Terms</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Conditions</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Cookie policy</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-white'>Privacy policy</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer