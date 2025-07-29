import { useContext, useEffect, useState, memo } from 'react';
import React from 'react';
import Mycontext from './Mycontext';
import Footer from './Footer';
import { useParams } from 'react-router-dom';



function Buy({ itemNumber }) {
  const [cartItem, setCartItem] = useState([]);
  const [counts, setCounts] = useState({});
  const Data = useContext(Mycontext);
  const { id } = useParams();
  const parsId = parseInt(id);

  useEffect(() => {
    let stored = JSON.parse(localStorage.getItem("key")) || [];
    setCartItem(stored)
    // Initialize quantity map for each item
    const initialCounts = {};
    stored.forEach(item => {
      initialCounts[item.id] = 1; // default quantity is 1
    });
    setCounts(initialCounts);
  }, [])


  useEffect(() => {
    if (!Data.length || !parsId) return;

    const filteredItems = Data.filter((element) => element.id === parsId);
    const selectedItem = filteredItems[0];
    if (!selectedItem) return;

    // If already in current state, do nothing
    const alreadyInState = cartItem.find((item) => item.id === selectedItem.id);
    if (alreadyInState) return;

    let stored = JSON.parse(localStorage.getItem("key")) || [];
    const match = stored.find((ele) => ele?.id === selectedItem.id);

    if (match) {
      alert("Already in cart.");
    } else {
      stored.push(selectedItem);
      localStorage.setItem("key", JSON.stringify(stored));
      setCartItem([...stored]);
    }
    itemNumber(stored.length);
  }, []);




  const incrementCount = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }));
  };

  const decrementCount = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
  };


  const removeItem = (id) => {
    const updatedCart = cartItem.filter(item => item.id !== Number(id));
    setCartItem([...updatedCart]); // force shallow copy
    localStorage.setItem("key", JSON.stringify(updatedCart));
    const newCounts = { ...counts };
    delete newCounts[id];
    setCounts(newCounts);
    itemNumber(updatedCart.length);
  };


  const calculateTotal = () => {
    return cartItem.reduce((total, item) => {
      const price = Math.round(item.price - (item.price * item.discount) / 100); // final price after discount
      const quantity = counts[item.id] || 1;
      return total + price * quantity;
    }, 0);
  };




  return (
    <>
      <div className='text-center p-4 text-2xl'>Shopping Cart</div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 container  m-auto py-8">

        <div className="md:col-span-3 bg-blue-50 p-4">
          <div>
            <table className='w-full '>
              <thead className='border-b-1'>
                <tr className='flex w-full pb-2'>
                  <th className='flex-1'>Remove</th>
                  <th className='flex-1'>Image</th>
                  <th className='flex-1'>Product</th>
                  <th className='flex-1'>Price</th>
                  <th className='flex-1'>Quantity</th>
                  <th className='flex-1'>Subtotal</th>
                </tr>
                {/* <hr className='mt-2'/> */}
              </thead>

              <tbody>
                {cartItem.map((item) => <tr key={item.id} className='p-2 border-b-1 text-center flex'>
                  <td className='flex-1 cursor-pointer relative'><span className='absolute' onClick={() => removeItem(item.id)}>x</span></td>
                  <td className='flex-1'><img src={`/image/${item.image[0]}`} alt="" className='w-24' /></td>
                  <td className='flex-1 '>{item.Name.slice(0, 18)}..</td>
                  <td className='flex-1 '>{Math.round(item.price - (item.price * item.discount) / 100)}.00</td>
                  <td className='flex-1 '>
                    <span className='border-solid border-2 opacity-80 w-20 divide-solid divide-x-1 rounded-full flex'>
                      <input type="button" value="-" onClick={() => decrementCount(item.id)} className='hover:bg-amber-500 cursor-pointer w-8 rounded-l-full hover:text-white object-cover' />
                      <span className='w-8 text-center '>{counts[item.id] || 1}</span>
                      <input type='button' value='+' onClick={() => incrementCount(item.id)} className='hover:bg-amber-500 rounded-r-full cursor-pointer w-8 hover:text-white' />
                    </span>
                  </td>
                  <td className='flex-1 '>
                    {Math.round(item.price - (item.price * item.discount) / 100) * (counts[item.id] || 1)}.00
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>

        </div>


        <div className="md:col-span-2 bg-blue-50 p-4">
          <div className="md:col-span-2 bg-blue-50 p-4">
            <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
            <p>Total Items: {cartItem.length}</p>
            <p>Total Price: ₹{calculateTotal()}.00</p>
            <button className='mt-4 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default memo(Buy);
