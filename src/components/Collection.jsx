import { Link, useParams } from 'react-router-dom';
import { HiArrowSmLeft } from "react-icons/hi";
import { LuIndianRupee } from "react-icons/lu";
import { useContext, useEffect, useState ,memo} from 'react';
import Footer from './Footer'
import Mycontext from './Mycontext';
function Collection() {
  const [collection, setCollection] = useState([])
  const {ArrayObj} = useContext(Mycontext)
  const { collectionName } = useParams();
  // Now you can use collectionName to filter and display the relevant products
  useEffect(() => {
    const filterCollection = ArrayObj.filter((ele) => collectionName == ele.Type.replace(/\s+/g, "").toLowerCase())
    setCollection(filterCollection)
  }, [])
  //console.log(collection)
  return (
    <>
      <div className='bg-teal-600 text-white text-2xl w-[100%] h-[200px] relative'>
        <h1 className=' ml-8 absolute  bottom-[80px]'>
          <Link to='/home'><HiArrowSmLeft className='inline-block' /></Link>
          {collectionName}
        </h1>
      </div>
      <div className='grid xm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 p-8 container m-auto gap-6'>
        {collection.map((item) => <div key={item.id} className='p-4 bg-white duration-300 ease-in rounded-xl transition hover:scale-102'>
          <div className='relative'>
            <img src={`/image/${item.image[0]}`} alt={item.Name} style={{
              width: '250px',
              height: '250px'
            }} />
            <span className='absolute top-2 left-2 text-white bg-amber-600 rounded-2xl p-1'>-{item.discount}%</span>
          </div>
          <h2 className='capitalize text-sm font-semibold mt-2'>{item.Name.slice(0, 25).toLowerCase()}</h2>
          <h3 className='text-xs opacity-75 mt-2'>{item.Type}</h3>
          <h2 className='mt-2 '>
            <span className='line-through opacity-35'><LuIndianRupee className='inline' />{item.price}</span>
            <span className='text-orange-400 ml-4 opacity-100'><LuIndianRupee className='inline-block' />{Math.round(item.price - (item.price * item.discount) / 100)}.00</span>
          </h2>
          <div className='p-6'>
            <Link to={`/cart/${item.id}`} className='block text-center bg-orange-500 p-2 text-white rounded-xl opacity-80 hover:opacity-95'>
              Cart
            </Link>
          </div>
        </div>)}
      </div>
      <Footer />
    </>
  );
}
export default memo(Collection);