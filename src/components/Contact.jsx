import React, { useState } from 'react'
import Footer from './Footer'
import { Call, Mail } from './header_component/Header_compo'
import { IoCallSharp } from "react-icons/io5";

// import { motion } from "motion/react"

function Contact() {

  const [formdata,setFormdata]=useState({
    name:'',
    email:'',
    phone:'',
    text:''
  });
 
  const hendelSubmit=(event)=>{
    event.preventDefault();
    const {name , email , phone , text}=formdata;
    const number='918669508451';
    const textdata = `Name: ${name}%0AEmail: ${email}%0Aphone: ${phone}%0Atext:${text}`;
    const whatsappURL = `https://wa.me/${number}?text=${textdata}`;
    window.open(whatsappURL, '_blank');
    setFormdata({name:'',email:'',phone:'',text:''});
  }

  const hendelChange=(event)=>{
    const {name,value}=event.target;
    setFormdata(prev=>({...prev,[name]:value}))
  }

  return (
    <>
      <div className='text-center text-3xl py-8'>Contact Us</div>
      <div className='grid  container m-auto gap-8 lg:grid-cols-2 py-12'>
        <div className='mt-8'>
          <h2 className='text-3xl md:mt-8'>SS Unique</h2>
          <p className='py-4'>Address: c/o Dr.S.S.Bajpai 27 Kholi Vikas Nagar Bilaspur(C.G.) 495001</p>
          <p className='py-4'> <IoCallSharp className='inline-block' />+91-8669508451</p>
          <p><Mail mail=' sonalbajpai89@gmail.com' /></p>
        </div>
        <div>
          <form action="#" method='post' onSubmit={hendelSubmit}>
            <div className=' p-2'>
              <h2 className='text-center  text-3xl'> Fill the form to raise query</h2>
              <div className='py-2'>
                <input type="text"
                 name="name" 
                 required id=""
                  placeholder='Enter Name' 
                  onChange={hendelChange}
                  value={formdata.name}
                  className='bg-white w-[95%] p-1 rounded-md outline-none indent-4' />
              </div>
              <div className='py-2'>
                <input type="email" 
                onChange={hendelChange}
                  value={formdata.email}
                name="email" required id="" placeholder='xyz@gmail.com' className='bg-white w-[95%] p-1 rounded-md outline-none indent-4' />
              </div>
              <div className='py-2'>
                <input type="tel"
                onChange={hendelChange}
                  value={formdata.phone}
                name="phone" id="" required placeholder='Enter Phone Number' className='bg-white w-[95%] p-1 rounded-md outline-none indent-4' />
              </div>
              <div className='py-2'>
                <textarea 
                  onChange={hendelChange}
                  value={formdata.text}
                name="text" id="" placeholder='Massage' className='bg-white w-[95%] h-[100px] p-1 rounded-md outline-none indent-4'></textarea>
              </div>
              <div className='py-2'>
                <input type="submit" name="" id="" value='Send' className='bg-blue-950 text-white w-[95%] p-1 rounded-md outline-none cursor-pointer' />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact