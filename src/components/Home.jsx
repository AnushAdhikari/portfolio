import React from 'react'
import profile from '../assets/profile.jpg'
import { HiArrowNarrowRight } from 'react-icons/hi'
// import Lottie from "lottie-react";
// import animationData1 from "../assets/naruto.json"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import {Link} from 'react-scroll'

const Home = () => {

  // FOR LOOP
  const [text] = useTypewriter({
    words: ['Developer', 'Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  // ----------------------------------------

  return (
    <div name='home' className='w-full h-screen bg-[#000000] flex sm:flex-row flex-col'>
      <div className='max-w-2/5 mx-auto px-8 flex flex-col justify-center h-full'>
        <h2 className='text-[#00df9a] text-2xl font-bold'>Hi</h2>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff] font-sans'>
          I'm Anush Adhikari,
        </h1>
        {/* LOOP */}
        <h2 className='flex text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          a web&nbsp;
          <span className='flex text-4xl sm:text-7xl font-bold text-[#00df9a]'> {text} </span>
          <Cursor />
          {/* <div>
                <Lottie animationData={animationData1} className='rounded-full flex' style={{ width: '80px' }}/>
              </div> */}
        </h2>

        {/* LOOP END */}

        <p className='text-[#ffffff] py-4 max-w-[700px] md:text-2xl font-mono'>
          I’m a web developer specializing in building and designing
          exceptional digital experiences. Currently, I’m focused on
          building responsive web applications.
        </p>
        <div>
          <button className=' rounded-md text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#dedede] hover:border-white hover:text-black'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>

          </button>
        </div>
      </div>
      {/* <div className='max-w-1/4 hidden lg:block mt-28 mr-2'>
        <Lottie animationData={animationData1} />
      </div> */}
            <div className='my-auto mr-2 hidden lg:flex flex-col'>
        <img className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-full mt-28' src={profile} alt='profile'/>

      </div>
    </div>
  );
}

export default Home
