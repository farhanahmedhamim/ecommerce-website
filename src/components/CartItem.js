//import link
import { Link } from 'react-router-dom';

//import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'

//import cart context
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react';

const CartItem = ({ item }) => {

  const { removeFromCart, increaseAmount, decreateAmount } = useContext(CartContext);

  //destructure item
  const { id, title, image, price, amount } = item;

  return <div className='flex gap-x-4 lg:px-4 border-b border-[#f5e6e0] w-full font-light text-gray-500'>
    <div className='w-full min-h-[122px] flex items-center gap-x-4'>
      {/* {image} */}
      <Link to={`/product/${id}`}><img className='max-w-[80px] max-h-[70px] object-cover' src={image} alt='' /></Link>
      <div className='flex flex-col w-full'>
        {/* {title & icon remove} */}
        <div className='flex justify-between mb-2'>
          {/* {title} */}
          <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline line-clamp-1 font-secondary'>{title}</Link>
          {/* {remove icon} */}
          <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
          </div>
        </div>
        <div className='flex gap-x-2 h-[36px] text-sm'>
          {/* {qty} */}
          <div className='flex flex-1 max-w-[100px] items-center h-full border border-[#e6e6e6] text-primary font-medium'>
            {/* {minus icon} */}
            <div onClick={() => decreateAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
              <IoMdRemove />
            </div>
            {/* {amount} */}
            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
            {/* {plus icon} */}
            <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
              <IoMdAdd />
            </div>
          </div>
          {/* {price} */}
          <div className='flex-1 flex items-center justify-around font-secondary'>$ {price}</div>
          {/* {final price} */}
          {/* {make the price at 2 decimal} */}
          <div className='flex-1 flex justify-end items-center text-primary font-medium font-secondary'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
