import React from 'react'
import Footer from './Footer'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";

function About() {
  return (
    <>
      <div className='container m-auto w-[80%]'>
        <h2 className=' text-3xl mt-8 text-blue-500'>About Us</h2>
      </div>
      <div className='text-center py-4'>
        <h2 className='text-2xl'>About SS Unique</h2>
      </div>
      <div className='container m-auto w-[80%] mb-8'>
        <p className='text-sm leading-6 opacity-75 py-2'>
          We are a product based company Provide different products like dcal water softner , Daddy’s Road , Mnflynil , Mn Gas Safety Hose Pipe we are committed to enhancing everyday living through high-quality, innovative, and reliable products. As a product-based company, we focus on developing and delivering solutions that cater to a wide range of needs, ensuring convenience, safety, and efficiency for our customers
        </p>
        <p className='text-sm leading-6 opacity-75 py-2'>
          With A commitment to innovation and quality, we strive to provide products that improve daily experiences. Customer satisfaction and trust are at the core of everything we do, and we continuously work towards bringing the best solutions to market.
        </p>
        <p className='text-sm leading-6 opacity-75 py-2'><FaLongArrowAltRight className='inline-block text-green-600 ' />Dcal Water Softener - Advanced water softening technology to protect appliances, enhance water quality, and promote healthier living.</p>
        <p className='text-sm leading-6 opacity-75 py-2'><FaLongArrowAltRight className='inline-block text-green-600 ' />Daddy’s Road - A cutting-edge vehicle tracking and safety solution that ensures security and real-time monitoring.</p>
        <p className='text-sm leading-6 opacity-75 py-2'><FaLongArrowAltRight className='inline-block text-green-600 ' />Mnflynil - A high-performance product designed with precision and reliability in mind, Mnflynil meets industry standards to provide optimal efficiency in its category.</p>
        <p className='text-sm leading-6 opacity-75 py-2'><FaLongArrowAltRight className='inline-block text-green-600 ' />MN Gas Safety Hose Pipe - Safety in the kitchen and industrial environments is crucial. Our MN Gas Safety Hose Pipe is engineered with top-grade materials to provide durability, flexibility, and leak-proof performance, ensuring a safe and hassle-free cooking or operational experience.</p>
        <p className='text-sm leading-6 opacity-75 py-2'><FaLongArrowAltRight className='inline-block text-green-600 ' />Tyre Sealant Anti-Puncture Solution – An advanced formula that prevents and instantly seals punctures, ensuring a smooth and worry-free ride.</p>
      </div>
      <div className='container m-auto w-[80%]'>
        <h2 className='text-center text-3xl p-4'>why Choose us</h2>
        <div className='grid md:grid-cols-2 gap-12 py-4'>
          <div>
            <img src="image/about_choose.jpg" alt="about_image" className='rounded-xl' />
          </div>
          <div className='bg-white rounded-xl p-4 opacity-55'>
            <h4>we believe in creating smarter, safer, and more efficient solutions for homes and businesses. We are proud to serve our customers with products that make life easier and better.</h4>
            <p className='py-3 text-sm'><FaRegArrowAltCircleRight className='inline-block text-green-600 ' />Quality Assurance: We ensure that every product meets stringent quality standards before reaching our customers.</p>
            <p className='py-3 text-sm'><FaRegArrowAltCircleRight className='inline-block text-green-600 ' />Innovation-Driven: Our team continuously researches and develops new solutions to enhance product performance.</p>
            <p className='py-3 text-sm'><FaRegArrowAltCircleRight className='inline-block text-green-600 ' />Customer Satisfaction: We prioritize our customers' needs and provide excellent support and service.</p>
            <p className='py-3 text-sm'><FaRegArrowAltCircleRight className='inline-block text-green-600 ' />
              Safety First: Whether it’s water, vehicle tracking, or gas safety, our products are designed with safety and reliability in mind.</p>
            <p className='py-3 text-sm'><FaRegArrowAltCircleRight className='inline-block text-green-600 ' />
              Advanced water softening technology to protect appliances, enhance water quality, and promote healthier living.</p>
          </div>
        </div>
        <div className='capitalize '>
          <h2 className='text-center text-3xl py-4 text-blue-950'>Our Mission</h2>
          <h3 className='opacity-60'>our mission is to enhance the quality of life through innovative and reliable products that ensure safety, efficiency, and convenience. We are committed to:</h3>

          <p className='text-sm  py-2'><span className='opacity-100'><IoStarOutline className='inline-block text-green-900 text-lg mt-[-5px] opacity-100' /></span>Delivering high-quality products that prioritize safety and durability and Adopting strict quality control measures to guarantee the best performance and reliability.</p>
          <p className='text-sm  py-2'><span className='opacity-100'><IoStarOutline className='inline-block text-green-900 text-lg mt-[-5px] opacity-100' /></span>
            Offering excellent customer service, after-sales support, and a seamless user experience</p>
          <p className='text-sm  py-2 mb-8'><span className='opacity-100'><IoStarOutline className='inline-block text-green-900 text-md mt-[-5px] opacity-100' /></span>
            Strengthening our market presence by reaching more customers in country.Expanding our product line with innovative solutions that meet evolving market needs.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About