import React, { useContext } from 'react';

//import link
import { Link } from 'react-router-dom';

//import icons
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'

//import components
import CartItem from '../components/CartItem';

//import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

//import cart context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SidebarContext);

  const { cart, clearcart, total, itemAmount } = useContext(CartContext);

  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-[100vh] shadow-2xl md:w-[35vw] xl:max-w-[26vw] transition-all duration-300 z-20 px-2 lg:px-[15px]`}>
    <div className='flex items-center justify-between pt-6 border-b border-[#f5e6e0]'>
      <div className='uppercase text-sm font-semibold font-secondary'>Shopping Bag (<span>{itemAmount}</span>)</div>
      {/* {icon} */}
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center'>
        <IoMdArrowForward className='text-2xl' />
      </div>
    </div>
    <div className='flex flex-col h-[70vh] lg:h-[70vh] overflow-y-auto overflow-x-hidden border-b border-[#f5e6e0]'>
      {cart.map(item => {
        return <CartItem item={item} key={item.id} />
      })}
    </div>
    <div className='flex flex-col gap-y-3 py-2'>
      <div className='flex w-full justify-between items-center'>
        {/* {Total} */}
        <div className='uppercase font-semibold font-secondary'>
          <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
        </div>
        {/* {Clear cart items} */}
        <div onClick={clearcart} className='cursor-pointer py-4 bg-[#738c92] rounded-full text-white w-10 h-10 flex justify-center items-center text-xl'>
          <FiTrash2 />
        </div>
      </div>
      <Link to={'/'} className='bg-black p-1.5 flex justify-center items-center font-secondary text-white w-full font-medium rounded-md'>View cart</Link>
      <Link to={'/'} className='bg-black p-1.5 flex justify-center items-center font-secondary text-white w-full font-medium rounded-md'>Checkout</Link>
    </div>
  </div>;
};

export default Sidebar;
