import React from 'react';

// import Link
import { Link } from 'react-router-dom';

// import icons
import { BsCart, BsEyeFill } from 'react-icons/bs';
import { IoMdStar } from "react-icons/io";

//import cart context
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

const Product = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  //destructure product
  const { id, image, category, title, price, rating } = product;

  return (
    <div>
      <div className='border border-[#e6e6e6] h-[300px] relative overflow-hidden group transition mb-2'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* {image} */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt='' />
          </div>
        </div>
        {/* {buttons} */}
        <div className='absolute top-4 -right-11 group-hover:right-4 p-2 flex flex-col items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-10 h-10 bg-[#738c92]'>
              <BsCart className='text-xl' />
            </div>
          </button>
          <Link className='flex justify-center items-center bg-white w-10 h-10 text-primary drop-shadow-xl' to={`/product/${id}`}><BsEyeFill /></Link>
        </div>
      </div>
      {/* {category & title & price} */}
      <div>
        <div className='text-[#777777] text-[14px] capitalize font-secondary'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold my-2 hover:underline line-clamp-1 font-secondary'>{title}</h2>
        </Link>

        <div className='flex justify-between items-center'>
          <div className='font-semibold font-secondary'>$ {price}</div>
          <div className='flex justify-center items-center'>
            <IoMdStar className='text-[20px] text-pink-500 -mt-0.5' />
            <div className='ml-1 font-semibold font-secondary'>{rating && rating.rate}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Product;
