import { ShoppingCartIcon, StarIcon } from '@heroicons/react/solid';
import React from 'react'
import image1 from '../images/shoe1.png';
import image2 from '../images/shoe2.png';
import image3 from '../images/shoe3.png';
import image4 from '../images/shoe4.png';

const Content = () => {
    return (
        <div className='p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            
            <div className='p-4 rounded-lg m-2 '>
                <img src={image1} alt='converse' className='  w-full cursor-pointer' />
                <p className='mt-1 text-center text-sm text-gray-800'>Converse</p>
                <p className='mt-1 text-center text-sm text-gray-800 font-bold'>Converse X-95 Spl Emerko Edition</p>
                <p className='mt-1 text-center text-sm text-gray-800'>₹ 4,499</p>
                <div className='flex justify-between mt-4 space-x-4 relative bottom-0'>
                <StarIcon className='w-7 h-7 text-gray-300 cursor-pointer transition duration-75 transform hover:scale-125 hover:text-yellow-500' />
                <button className='text-sm rounded-full w-full md:w-1/2 lg:w-1/4 bg-green-500 text-white font-semibold  transition duration-75 transform hover:scale-110 hover:border-green-500 hover:text-gray-800 '>Buy Now</button>
                <ShoppingCartIcon className='w-7 h-7 text-gray-700 cursor-pointer transition duration-75 transform hover:scale-125 hover:text-gray-800' />
                </div>

            </div>
            <div className='p-4 rounded-lg m-2 '>
                <img src={image1} alt='converse' className=' w-full cursor-pointer ' />
                <p className='mt-1 text-center text-sm text-gray-800'>Converse</p>
                <p className='mt-1 text-center text-sm text-gray-800 font-bold'>Converse X-95 Spl Emerko Edition</p>
                <p className='mt-1 text-center text-sm text-gray-800'>₹ 4,499</p>
                <div className='flex justify-between mt-4 space-x-4 relative bottom-0'>
                <StarIcon className='w-7 h-7 text-gray-300 cursor-pointer transition duration-75 transform hover:scale-125 hover:text-yellow-500' />
                <button className='text-sm rounded-full w-full md:w-1/2 lg:w-1/4 bg-green-500 text-white font-semibold  transition duration-75 transform hover:scale-110 hover:border-green-500 hover:text-gray-800'>Buy Now</button>
                <ShoppingCartIcon className='w-7 h-7 text-gray-700 cursor-pointer transition duration-75 transform hover:scale-125 hover:text-gray-800' />
                </div>
                
                
            </div>
            <div className='p-4 rounded-lg m-2 '>
                <img src={image1} alt='converse' className='w-full cursor-pointer' />
                <p className='mt-1 text-center text-sm text-gray-800'>Converse</p>
                <p className='mt-1 text-center text-sm text-gray-800 font-bold'>Converse X-95 Spl Emerko Edition</p>
                <p className='mt-1 text-center text-sm text-gray-800'>₹ 4,499</p>
                <div className='flex justify-between mt-4 space-x-4 relative bottom-0'>
                <StarIcon className='w-7 h-7 text-gray-300 cursor-pointer transition duration-75 transform hover:scale-125 hover:text-yellow-500' />
                <button className='text-sm rounded-full w-full md:w-1/2 lg:w-1/4 bg-green-500 text-white font-semibold  transition duration-75 transform hover:scale-110 hover:border-green-500  hover:text-gray-800'>Buy Now</button>
                <ShoppingCartIcon className='w-7 h-7 text-gray-700 cursor-pointer transition duration-75 transform hover:scale-125 hover:text-gray-800' />
                </div>
            </div>
            <div className='p-4 rounded-lg m-2 '>
                <img src={image1} alt='converse' className='w-full cursor-pointer' />
                <p className='mt-1 text-center text-sm text-gray-800'>Converse</p>
                <p className='mt-1 text-center text-sm text-gray-800 font-bold'>Converse X-95 Spl Emerko Edition</p>
                <p className='mt-1 text-center text-sm text-gray-800'>₹ 4,499</p>
                <div className='flex justify-between mt-4 space-x-4  bottom-0'>
                <StarIcon className='w-7 h-7 text-gray-300 cursor-pointer transition duration-75 transform hover:scale-125 hover:text-yellow-500' />
                <button className='text-sm rounded-full w-full md:w-1/2 lg:w-1/4 bg-green-500 text-white font-semibold  transition duration-75 transform hover:scale-110 hover:border-green-500 hover:text-gray-800'>Buy Now</button>
                <ShoppingCartIcon className='w-7 h-7 text-gray-700 cursor-pointer transition duration-75 transform hover:scale-125 hover:text-gray-800' />
                </div>
            </div>
        </div>
    )
}

export default Content
