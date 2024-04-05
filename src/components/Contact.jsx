import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
    <div name='contact' className='w-full h-screen bg-[#000000] justify-center items-center p-8 flex flex-col'>


      <form method='POST' action="https://getform.io/f/pboxlxra" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-gray-300'>Contact Me</p>
          <p className='text-gray-300 py-4'>Shoot me an email - xettrianush@gmail.com</p>
        </div>
        <input className='bg-[#ffffff] p-2' type="text" placeholder='Name' name='name' required/>
        <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name='email' required/>
        <textarea className='bg-[#ffffff] p-2' name="message" rows="10" placeholder='Message' required></textarea>
        <button
          className=
          'rounded-md text-white group border-2 hover:bg-white hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>
          Submit message
          <span className='group-hover:rotate-90 duration-300'>
            < HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
      </form>
      </div>
      <div className='flex justify-center items-center bg-[#000000] pb-4'>
        <li>
          <a
            className='flex justify-between items-center w-full text-white '
            href='https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit'
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li >
          <a
            className='flex justify-between items-center w-full text-white'
            href='https://github.com/dashboard'
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            className='flex justify-between items-center w-full text-white'
            href='https://accounts.google.com/AccountChooser/signinchooser?oauth=1&theme=mn&ddm=0&flowName=GlifWebSignIn&flowEntry=AccountChooser'
          >
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li>
          <a
            className='flex justify-between items-center w-full text-white'
            href='https://www.facebook.com/einherjar69/'
          >
            <FaFacebook size={30} />
          </a>
        </li>
        <li>
          <a
            className='flex justify-between items-center w-full text-white'
            href='https://www.facebook.com/einherjar69/'
          >
            <FaSquareInstagram size={30} />
          </a>
        </li>
      </div>
    </div>


  )
}

export default Contact
