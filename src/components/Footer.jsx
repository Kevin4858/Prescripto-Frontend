import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left Section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        {/* Center Section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <NavLink to='/' className='hover:text-black'>
              <li>Home</li>
            </NavLink>

            <NavLink to='/about' className='hover:text-black'>
              <li>About us</li>
            </NavLink>

            <NavLink to='/contact' className='hover:text-black'>
              <li>Contact us</li>
            </NavLink>

            <NavLink to='/' className='hover:text-black'>
              <li>Privacy policy</li>
            </NavLink>

          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-123-456-7890</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright Text */}
      <div className='text-gray-600'>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2026 Company - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
