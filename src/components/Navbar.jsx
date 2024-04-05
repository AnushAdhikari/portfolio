import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import React, { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaAddressBook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Lottie from "lottie-react"
import animationData from "../assets/cutegirl.json"


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#000000] border-2 border-[#161616] text-gray-300'>

      <div>
        {/* <img className='rounded-full' src={Logo} alt='Logo Image' style={{ width: '50px' }} /> */}
        <Lottie animationData={animationData} className='rounded-full' style={{ width: '80px' }} />
      </div>

      {/* MAIN MENU */}
      <ul className='hidden md:flex text-2xl'>
        <li>
          <Link to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>Skills</Link>
        </li>
        {/* <li>
              <Link to='/' smooth={true} duration={500}>Work</Link>
            </li> */}
        <li>
          <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>


      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBarsStaggered size={25} /> : <FaTimes size={25} />}
      </div>

      {/* mobilemenu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center right-'}>
        <li className='py-6 text-4xl border-b border-gray-600'> <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link> </li>
        <li className='py-6 text-4xl border-b border-gray-600'> <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link> </li>
        <li className='py-6 text-4xl border-b border-gray-600'> <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link> </li>
        {/* <li className='py-6 text-4xl'> <Link to='home' smooth={true} duration={500}>Work</Link> </li> */}
        <li className='py-6 text-4xl border-b border-gray-600'> <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link> </li>
      </ul>

      {/* social icons */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
        <ul>
          <li className='rounded-r-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2d49ff]'>
            <a
              className='flex justify-between items-center w-full text-white '
              href='https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='rounded-r-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#212122]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://github.com/dashboard'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='rounded-r-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#41bca1]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://accounts.google.com/AccountChooser/signinchooser?oauth=1&theme=mn&ddm=0&flowName=GlifWebSignIn&flowEntry=AccountChooser'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='rounded-r-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://app.luminpdf.com/viewer/660704069eb80b93cf2dfdd3'
            >
              Resume <FaAddressBook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar
