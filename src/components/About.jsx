import React from 'react'
import { PiStudentBold } from "react-icons/pi";

const About = () => {
  return (

    <div name='about' className=' w-full h-screen bg-[#000000] text-[#ffffff] py-16 px-4 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <p className='text-4xl font-bold inline border-b border-gray-200'>
          ABOUT ME
        </p>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>

          </div>

        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
          <div className='sm:text-right text-4xl font-bold'>
            <p className='text-[#3de0db]'>Hi. It'me Anush.</p>
          </div>
          <div className='font-bold '>
            <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>
          </div>
        </div>
        <br></br>

        {/* ///////////////////// */}

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p className='text-[#3de0db] inline-flex'>Education &nbsp; <PiStudentBold /></p>
          </div>
          <div className='font-bold '>
            <p>Islington College
              <br></br>
              Takshashila Academy</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
