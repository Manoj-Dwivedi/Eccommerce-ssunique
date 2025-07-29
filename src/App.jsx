import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Daddy from './components/Daddy'
import Nav from './components/Nav'
import Header from './components/Header'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Collection from './components/Collection'
import Dlac from './components/Dlac'
import Buy from './components/Buy'
import Mycontext from './components/Mycontext'
import { Product ,WhatisDaddysRoad,advantageofdaddysroad} from './components/product/Product'
import { useCallback, useEffect, useState } from 'react';


function App() {
  const[cartvalu,setCartvalu]=useState(0);
  const [cartnumbr,setCartNumbr]=useState(0);
  const ProductArr = Product.map((item) => Object.values(item));
  const ArrayObj = ProductArr.flat(Infinity);
  

// let data=JSON.parse(localStorage.getItem('key'))
 
  // const hendel=useCallback((num,cart)=>{
  //    // console.log(num)
  //    setCartNumbr(cart) 
  // },[])


  return (
    <>
      <Mycontext.Provider value={{ArrayObj,WhatisDaddysRoad,advantageofdaddysroad}} >
      <Header />
      <Nav value={cartvalu}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/daddy' element={<Daddy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/buy/:id' element={<Buy itemNumber={setCartvalu} />} />
        <Route path='/cart' element={<Buy  itemNumber={setCartvalu} />} />
        <Route path='/cart/:id' element={<Cart/>} />
        <Route path='/collection/:collectionName' element={<Collection />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/dlac' element={<Dlac />} />
      </Routes>
      </Mycontext.Provider>
    </>
  )
}

export default App
