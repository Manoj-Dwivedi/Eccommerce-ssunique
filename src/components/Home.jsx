import React from 'react'
import Slider from './Crousel/Slider'
import BestSelling from './BestSelling'
import Wellcometoss from './Wellcometoss'
import Footer from './Footer'
import ShopbyCollection from './ShopbyCollection'

function Home() {
  return (
    <>
      <Slider/>
      <ShopbyCollection/>
      <BestSelling/>
      <Wellcometoss/>
      <Footer/> 
    </>
  )
}

export default Home