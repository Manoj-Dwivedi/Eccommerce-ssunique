import React from 'react'
import Footer from './Footer'
import { IoStarOutline } from "react-icons/io5";
import Mycontext from './Mycontext';
import { useContext } from 'react';



function Daddy() {
  const { WhatisDaddysRoad, advantageofdaddysroad } = useContext(Mycontext);

  return (
    <>
      <div className='container m-auto w-[80%]'>
        <h2 className=' text-2xl font-bold opacity-70 py-4 text-blue-900 '>Daddys Road Documentation</h2>
        <h2 className='text-center text-2xl py-4 text-blue-900 font-bold '>What is Daddy’s Road?</h2>
        <p>DaddysRoad is a vehicle safety and issue reporting app that allows users to contact vehicle owners by entering their license plate number or scanning a QR code decal, enabling quick communication for issues like parking problems, threats, or accidents.</p>
        <div>
          <p className='py-2'> Key Features</p>

          {WhatisDaddysRoad.map((item, index) => <p className='text-sm  py-2' key={index}><span className='opacity-100'><IoStarOutline className='inline-block text-green-900 text-lg mt-[-5px] opacity-100' /></span>{item}</p>)}
        </div>

        <div className='mb-8'>
          <h2 className='text-center text-2xl text-blue-900 font-bold capitalize py-8'>advantage of daddy's road</h2>

          {advantageofdaddysroad.map((item, index) => <p className='text-sm  py-2' key={index}><span className='opacity-100'><IoStarOutline className='inline-block text-green-900 text-lg mt-[-5px] opacity-100' /></span>{item}</p>)}
        </div>


      </div>


      <Footer />
    </>
  )
}

export default Daddy