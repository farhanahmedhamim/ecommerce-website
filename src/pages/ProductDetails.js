import React, { useContext } from 'react';

import { IoMdStar } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// import useParams
import { Link, useParams } from 'react-router-dom'

//import cart context
import { CartContext } from '../contexts/CartContext';

// import product context
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {

  // get the product id from the url
  const { id } = useParams();

  const { products } = useContext(ProductContext);

  const { addToCart } = useContext(CartContext);

  //get the single product from the id
  const product = products.find(item => {
    return item.id === parseInt(id);
  })

  // if product is not found
  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>Loading...</section>
    )
  }



  // destructure product
  const { title, price, description, image, rating, category } = product;

  return (
    <section className='pt-32 pb-12 lg:py-32'>
      <div className='container mx-auto'>
        <div className='flex justify-start items-center py-5 px-3 mb-5 bg-[#f8f8f8]'>
          <Link className='text-[#777777] text-[15px] font-secondary' to={'/'}>Home</Link>
          <MdArrowRightAlt className='text-[#777777] text-[25px] mx-5' />
          <span className='text-[#777777] text-[15px] font-secondary'>{category}</span>
        </div>
        <div className='px-0 lg:px-20 xl:px-40'>
          {/* {Image and text wrap} */}
          <div className='flex flex-col lg:flex-row items-center'>
            {/* {Image} */}
            <div className='flex flex-1 justify-center w-full lg:w-1/2 items-center mb-8 lg:mb-0'>
              <img className='max-w-[200px] lg:max-w-[300px]' src={image} alt='' />
            </div>
            {/* {Text} */}
            <div className='w-full lg:w-1/2'>
              <div className='flex justify-start items-center my-4'>
                <IoMdStar className='text-[20px] text-pink-500 -mt-0.5' />
                <div className='ml-1 font-semibold font-secondary'>{rating && rating.rate} (Rating)</div>
              </div>
              <h1 className='text-[26px] font-semibold mb-2 font-secondary'>{title}</h1>
              <div className='text-xl font-medium mt-2 font-secondary'>$ {price}</div>
              <p className='text-[#777777] text-[15px] leading-7 my-5'>{description}</p>
              <div className='text-[#777777] text-[16px] font-secondary'>20 in stock</div>
              <button onClick={() => addToCart(product, product.id)} className='my-5 px-6 py-3 uppercase text-white bg-[#000] cursor-pointer border border-[#738c92] hover:text-[#738c92] hover:bg-white transition'>Add to cart</button>
              <div className='w-10 h-[1px] bg-[#777777]'></div>
              <div className='text-[#777777] text-[16px] my-5 capitalize'>category: {category}</div>
              <div className='text-[#777777] text-[16px] my-5 capitalize'>tags: {category}</div>
              <div className='w-10 h-[1px] bg-[#777777]'></div>
              <div className='flex justify-start items-center'>
                <div className='text-[#000] font-medium text-[16px] my-5 uppercase mr-2'>share:</div>
                <ul className='flex justify-start items-center gap-x-4 py-5'>
                  <li>
                    <a href='/'><FaFacebookSquare className='text-[#000] text-[17px]' /></a>
                  </li>
                  <li>
                    <a href='/'><FaTwitter className='text-[#000] text-[17px]' /></a>
                  </li>
                  <li>
                    <a href='/'><FaInstagram className='text-[#000] text-[17px]' /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProductDetails;
