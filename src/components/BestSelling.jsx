import React, { useEffect, useState ,memo} from 'react'
import { Link } from 'react-router-dom'
import { LuIndianRupee } from "react-icons/lu";
import { Product } from './product/Product'

function BestSelling() {
  const [productArr, setProductArr] = useState([])
  const [hot, setHot] = useState([]);

  useEffect(() => {
    let data = Product.map((item) => Object.values(item))
    let flat = data.flat(Infinity);
    let hotData = flat.filter((ele) => ele.deal == 'HOT');
    setProductArr(flat)
    setHot(hotData)
  }, []);

  // const cart = (e) => {
  //   console.log(e.target)
  // }

  return (
    <div className='p-8 '>
      <h1 className='text-center text-2xl md:text-5xl font-bold mt-6'> Best Selling Products </h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-18 hot-cart'>
        {hot.map((item) => <div key={item.id} className='hover:bg-white duration-300 ease-in rounded-xl transition hover:scale-102 '>
          <div className='p-4 relative'>
            <Link to={`/cart/${item.id}`}><img src={`image/${item.image[0]}`} className='size-40 hot_cart cursor-pointer' alt={item.Type} /></Link>
            <span className='absolute top-18 left-10 p-[5px] rounded-xl bg-red-700 text-xs text-amber-50'>{item.deal}</span>
            <span className='absolute top-8 left-10 p-[4px] rounded-xl bg-amber-600 text-xs text-white'>-{item.discount}%</span>
          </div>
          <div>
            <h2 className='text-sm '>{item.Name.slice(0, 25)}</h2>
            <h2 className='opacity-50'>{item.Type}</h2>
          </div>
          <div className=''>
            <span className='opacity-50 line-through'><LuIndianRupee className='inline' />{item.price}</span><strong className='text-orange-400 ml-4'><LuIndianRupee className='inline' />{Math.round(item.price - (item.price * item.discount) / 100)}.00</strong>
          </div>
          <div className='p-6'>
            <Link to={`/cart/${item.id}`} className='block bg-orange-500 p-2 text-white rounded-xl opacity-80 hover:opacity-95'>
              Cart
            </Link>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default memo(BestSelling)