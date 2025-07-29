import React,{memo} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import {Facebook,Twitter,Instagram} from './header_component/Header_compo'

function Footer() {
    
    let logostyle = {
        width: '80px',
        height: '95px',
        marginLeft:'31%'
    }
  return (
    <div className='bg-black text-white'>
        <div className='w-[95%] m-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  p-6'>
             <div className='  '>
                <h1 className='p-8'>
                    <Link to='' className='block'><img style={logostyle}  src={logo} alt="logo" /></Link>
                </h1>
                <div className='flex justify-center gap-6 '>
                    <Facebook />
                     <Twitter />
                    <Instagram />
                </div>
            </div>
             <div className=' '>
                <h2 className='font-bold text-xl'>Useful Links</h2>
                <ul className='mt-6'>
                    <li className='my-2 text-sm '>
                        <Link to='/' className=' opacity-75 hover:opacity-100'>Home</Link>
                    </li>
                    <li className='my-2 text-sm'>
                        <Link to='/about' className=' opacity-75 hover:opacity-100'>About us</Link>
                    </li>
                    <li className='my-2 text-sm'>
                        <Link to='/contact' className=' opacity-75 hover:opacity-100' >Contact Us</Link>
                    </li>
                </ul>
            </div>
             <div className=' '>
                <h2 className='font-bold text-xl'>Our Products</h2>
                <ul className='mt-6'>
                    <li className='my-2 text-sm'>
                        <Link className=' opacity-75 hover:opacity-100' to=''>D'CAL Water Softner</Link>
                    </li>
                    <li className='my-2 text-sm'>
                        <Link className=' opacity-75 hover:opacity-100' to=''>Daddy's Road </Link>
                    </li>
                    <li className='my-2 text-sm'>
                        <Link className=' opacity-75 hover:opacity-100' to=''>MNFLYNIL</Link>
                    </li>
                    <li className='my-2 text-sm'>
                        <Link className=' opacity-75 hover:opacity-100' to=''>MN Safety Hose Pipe</Link>
                    </li>
                    <li className='my-2 text-sm'>
                        <Link className=' opacity-75 hover:opacity-100' to=''>TIT Tyre Sealant</Link>
                    </li>
                    <li className='my-2 text-sm'>
                        <Link className=' opacity-75 hover:opacity-100' to=''>Shop by Collection</Link>
                    </li>
                </ul>
            </div>
             <div className='  '>
                <h2 className='font-bold text-xl'>Reach us</h2>
                <ul className='mt-6'>
                    <li className='my-2 text-sm opacity-75 hover:opacity-100 cursor-pointer'>
                        Address: c/o Dr.S.S.Bajpai 27 Kholi Vikas  Nagar Bilaspur(C.G.) 495001
                    </li>
                    <li className='my-2 text-sm opacity-75 hover:opacity-100 cursor-pointer'>
                        Email: sonalbajpai89@gmail.com
                    </li>
                    <li className='my-2 text-sm opacity-75 hover:opacity-100 cursor-pointer'>
                        Phone: +91-8669508451
                    </li>
                    
                </ul>
             </div>
        </div>
    </div>
  )
}

export default memo(Footer);