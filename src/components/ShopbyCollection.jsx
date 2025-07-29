import React from 'react'
import { useContext, useEffect, useState,memo } from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Mycontext from './Mycontext'
import { Product } from './product/Product'

function ShopbyCollection() {
  const {ArrayObj} = useContext(Mycontext)
  const [keys, setKeys] = useState([]);
  const [fill, setFill] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function
  //console.log(Data)
  const values = [];
  useEffect(() => {
    Product.forEach(user => {
      for (let key in user) {
        values.push(key);
      }
    });
    setKeys(values);
  }, [])

  useEffect(() => {
    const filtered = [];
    keys.forEach((item) => {
      const Dt = ArrayObj.find((ele) =>
        item.toLowerCase() === ele.Type.replace(/\s+/g, "").toLowerCase()
      );
      if (Dt) filtered.push(Dt);
    });

    setFill(filtered);
  }, [keys, ArrayObj]);

  const img = fill.map((ele) => ele.image[0]);

  // Function to handle navigation
  const handleCollectionClick = (collectionName) => {
    // Convert collection name to URL-friendly format
    const path = `/collection/${collectionName.toLowerCase().replace(/\s+/g, '-')}`;
    navigate(path);
  }

  return (
    <>
      <h1 className='text-center text-2xl md:text-5xl font-bold mt-8'>Shop By Collection</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 container m-auto gap-4 mb-8 p-4'>
        {keys.map((ele, index) => {
          return (
            <div 
              key={index} 
              onClick={() => handleCollectionClick(ele)}
              className='hover:bg-white hover:text-blue-700 duration-300 ease-in rounded-xl transition hover:scale-102 p-4 relative'
            >
              <div className='rounded-md cursor-pointer hover:opacity-75' style={{
                backgroundImage: `url(/image/${img[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '200px'
              }}>
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center capitalize">
                  {ele.toLowerCase()}
                </h2>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default memo(ShopbyCollection);