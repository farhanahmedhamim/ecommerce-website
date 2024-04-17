import React, { useContext, useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [mobileNav, setMobileNav] = useState(false); // Mobile nav state
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header id='home' className={`${isActive ? 'bg-[#f2ededd6] py-4' : 'bg-[#f2ededd6] py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* Logo */}
        <Link to='/'>
          <div>
            <img className='w-[40px]' src={Logo} alt='' />
          </div>
        </Link>

        <div>
          {/* Nav */}
          <div className='hidden lg:flex'>
            <Nav />
          </div>


          {/* Mobile nav - hidden on desktop */}
          <div className={`${mobileNav ? 'left-0' : '-left-full'} fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all z-50`}>
            <MobileNav />
          </div>
        </div>

        <div className='flex justify-center items-center gap-x-3 lg:gap-x-5'>
          {/* Mobile nav trigger button - hidden on desktop */}
          <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? <HiOutlineX className='text-2xl text-black' /> : <HiMenuAlt4 className='text-2xl text-black' />}
          </button>

          {/* Cart */}
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
            <BsBag className='text-2xl' />
            <div className='bg-[#738c92] absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
