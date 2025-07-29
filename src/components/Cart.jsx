import React, { useEffect, useState,memo } from 'react';
import Footer from './Footer';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Product } from './product/Product';
import { CiDiscount1 } from "react-icons/ci";
import { LuIndianRupee } from "react-icons/lu";

function Cart() {
  const [cart, setCart] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  //console.log(cartvalu,setCartVal)
  useEffect(() => {
    // Flatten the Product array and find the matching product
    const productList = Product.flatMap(category => Object.values(category));
    const product = productList.flat(Infinity);
    const cartProduct = product.find(product => product.id === parseInt(id));
    
    if (cartProduct) {
      setCurrentProduct(cartProduct);
      const related = product.filter((ele) => ele.Type === cartProduct.Type);
      const filteredRelated = related.slice(0, 4).filter(item => item.id !== cartProduct.id);
      setRelatedProducts(filteredRelated);
      window.scrollTo(0, 0);
    }

    
  }, [id]);

  useEffect(()=>{
    const imgList = document.querySelectorAll('.small-img');
    imgList.forEach(function(item,index){
      item.onmouseenter=function(){
        big_img.src=this.src;
      }
    })
  })

  const handleRelatedProductClick = (productId) => {
    navigate(`/cart/${productId}`, { replace: true });
    window.scrollTo(0, 0); // Optional: Scroll to top for better UX
  };

  if (!currentProduct) return <div>Loading...</div>;

  return (
    <>
      <div className='bg-white'>
        <div key={currentProduct.id} className='flex flex-col md:flex-row gap-8 container m-auto py-8 '>
          <div className='basis-[10%] gap-y-[100px]'>
            {currentProduct.image.map((img, index) => (
              <div key={index} className='py-2 justify-items-center '>
                <img 
                  src={`/image/${img}`} 
                  alt={`image-${index}`} 
                  style={{ width: '80%', boxShadow: '1px 1px 3px 1px #80808040' }} 
                  className='rounded-xl small-img cursor-pointer' />
              </div>
            ))}
          </div>
          <div className='basis-[40%] relative'>
            <img 
              src={`/image/${currentProduct.image[0]}`} 
              alt="" 
              className='rounded-xl ' 
              style={{ height: '90%', boxShadow: '1px 1px 3px 1px #80808040' }} 
              id='big_img' 
            />
            {currentProduct.deal && (
              <span className='absolute top-18 right-20 p-[5px] rounded-xl bg-red-700 text-xs text-amber-50'>
                {currentProduct.deal}
              </span>
            )}
            <span className='absolute top-8 right-20 p-[4px] rounded-xl bg-amber-600 text-xs text-white'>
              -{currentProduct.discount}%
            </span>
          </div>
          <div className='basis-[50%]'>
            <h2>{currentProduct.Name}</h2>
            <h1 className='my-4'>
              <span className='font-extrabold text-md'>SKU : </span>
              <span className='opacity-50'>MG-2</span>
            </h1>
            <div className='bg-gray-200 p-2 rounded-md flex'>
              <div className='w-[20%] text-center'>
                <CiDiscount1 className='text-6xl my-6 ml-6 text-amber-600' />
              </div>
              <div className='w-[80%]'>
                <p className='font-bold text-mg mt-4'>Exclusive Savings Event</p>
                <p className='opacity-40 mt-4'>Hurry and get discounts up to 20% Use Code <strong className='opacity-100 inline-block underline cursor-pointer'> FLAT20</strong></p>
              </div>
            </div>
            <div>
              <p className='opacity-50 mt-8 text-sm'>{currentProduct.content}</p>
            </div>
            <div className='mt-6 text-2xl'>
              <span className='opacity-45 line-through'><LuIndianRupee className='inline-block' />{currentProduct.price}</span>
              <span className='text-orange-400 ml-4'><LuIndianRupee className='inline-block' />{Math.round(currentProduct.price - (currentProduct.price * currentProduct.discount) / 100)}.00</span>
            </div>
            <div className='mt-20'>
              <div className='flex flex-row'>
                <span className='border-solid border-2 opacity-80 w-20 divide-solid divide-x-1 rounded-full flex  '>
                  <input type="button" value="-" onClick={() => setCart(cart - 1)} className='hover:bg-amber-500 cursor-pointer w-8 rounded-l-full hover:text-white object-cover' />
                  <span className='w-8 text-center '>{cart >= 1 ? cart : setCart(1)}</span>
                  <input type='button' value='+' onClick={() => setCart(cart + 1)} className='hover:bg-amber-500 rounded-r-full cursor-pointer w-8 hover:text-white' />
                </span>
                <span className='ml-8 basis-[45] bg-amber-600 pl-12 pr-12 rounded-full text-sm text-white opacity-75 hover:opacity-100 '><Link to={`/buy/${currentProduct.id}`}  className='block p-1'>Add To Cart</Link></span>
                <span className='ml-8 basis-[45] bg-black pl-12 pr-12 rounded-full text-sm text-white opacity-75 hover:opacity-100'><Link to={`/buy/${currentProduct.id}`} className='block p-1'>Buy Now</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your existing code... */}

      <h2 className='text-4xl font-bold p-4 text-amber-600 text-shadow-lg/30'>Related Products</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container m-auto py-20 hot-cart'>
        {relatedProducts.map((item) => (
          <div key={item.id} className='hover:bg-white duration-300 ease-in rounded-xl transition hover:scale-102'>
            <div className='p-4 relative'>
              <button onClick={() => handleRelatedProductClick(item.id)}>
                <img 
                  src={`/image/${item.image[0]}`} 
                  className='size-40 hot_cart cursor-pointer' 
                  alt={item.Type} 
                />
              </button>
              {item.deal && (
                <span className={`absolute top-18 left-10 p-[5px] rounded-xl bg-red-700 text-xs text-amber-50`}>
                  {item.deal}
                </span>
              )}
              <span className='absolute top-8 left-10 p-[4px] rounded-xl bg-amber-600 text-xs text-white'>
                -{item.discount}%
              </span>
            </div>
            <div>
              <h2 className='text-sm '>{item.Name.slice(0, 25)}</h2>
              <h2 className='opacity-50'>{item.Type}</h2>
            </div>
            <div className=''>
              <span className='opacity-50 line-through'><LuIndianRupee className='inline' />{item.price}</span>
              <strong className='text-orange-400 ml-4'><LuIndianRupee className='inline' />{Math.round(item.price - (item.price * item.discount) / 100)}.00</strong>
            </div>
            <div className='p-6'>
              <button 
                onClick={() => handleRelatedProductClick(item.id)}
                className='block bg-orange-500 p-2 text-white rounded-xl opacity-80 hover:opacity-95 w-full'
              >
                Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='container m-auto '>
        <h2 className='text-md p-2'>
          Online store with a wide selection of handmade products
        </h2>
        <p className='text-xs mt-2 p-2 leading-[22px]'>In our online store, you'll find a wide variety of handmade products. We offer a diverse selection of natural and beautiful handcrafted items made with modern and artistic materials. Each piece is lovingly crafted not only to decorate your home but also to add a unique touch to your life. Join us in celebrating artistry and craftsmanship and bring the joy of creativity into your home.</p>

        <h2 className='text-md p-2 '>
          The Art of Handmade Production: Tradition, Skill, and Creativity
        </h2>

        <p className='text-xs mt-2 p-2 leading-[22px] mb-2'>
          The art of manufacturing handmade products is a craft that has been passed down through generations, embodying skill, creativity, and tradition. Each handmade item is meticulously crafted by skilled artisans who infuse their passion and expertise into every step of the process. From selecting the finest materials to shaping, assembling, and finishing, the manufacturing of handmade products is a labor of love that results in unique and authentic creations. This age-old practice not only preserves cultural heritage but also celebrates individuality and craftsmanship, offering consumers products that are imbued with soul and character.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default memo(Cart);