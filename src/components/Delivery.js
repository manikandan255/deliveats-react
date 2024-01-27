import React from 'react'
import deliveryImg from '../assets/delivery.png';

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='mx-auto grid md:grid-cols-2 w-auto max-w-[1240px]'>
            <img src={deliveryImg} alt="image" className='w-[550px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-extrabold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitlesss Convenience on-demand</h1>
                <p>
                  At Deliveats, we're passionate about bringing you the best culinary delights right to your doorstep. Our mission is to provide you with a seamless and delectable food delivery experience that tantalizes your taste buds and satisfies your cravings.From your favorite local restaurants to exotic international cuisines, Deliveats has it all. Explore our extensive menu selection, place your order with a few clicks, and let our dedicated delivery team take care of the rest. We ensure your food arrives hot, fresh, and on time, every time. Join the Deliveats community today and experience the convenience and joy of food delivery like never before. Whether you're dining solo, with family, or hosting a special occasion, we've got you covered. Your satisfaction is our priority, and we can't wait to serve you.<br />Deliveats - Where Flavor Meets Convenience. Order now and savor the moment!"
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery