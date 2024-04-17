import React from 'react';

const Footer = () => {
  return <footer>
    <div className='container mx-auto'>
      <div className='flex justify-center items-center bg-[#f8f8f8]'>
        <div className='flex flex-col justify-center items-center text-center w-full lg:w-[49%] py-20'>
          <h2 className='text-[25px] lg:text-[30px] font-bold'>Fear of missing out</h2>
          <p className='text-[#777777] text-[15px] leading-7 my-5'>Hey yooo! Become the 1st who receive our latest news and pormotion by typing your email
            and hit ‘Enter’ on textbox below. We never send spam!!!!</p>
          <form className='w-full sm:w-[80%] flex flex-col justify-center items-center mt-6 px-2'>
            <input className='bg-transparent border-b border-[#777777] w-full outline-none py-2 text-[#777777] text-[15px]' type='text' placeholder='Your email address' />
            <button className='mt-5 px-8 py-3 uppercase text-white bg-[#738c92] cursor-pointer border border-[#738c92] hover:text-[#738c92] hover:bg-white transition'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between py-1'>
        <p className='text-[#777777] text-[15px] text-center lg:text-start'>Copyright 2023 - All right reserved. Powered by <span className='font-secondary font-bold text-[#333] text-[15px]'>Farhan.</span></p>
        <ul className='flex justify-center items-center gap-x-2 lg:gap-x-8 py-5'>
          <li>
            <a className='text-[#777777] text-[16px] font-secondary' href='/'>Site map</a>
          </li>
          <li>
            <a className='text-[#777777] text-[16px] border-l border-r border-[#777777] font-secondary px-2 lg:px-8' href='/'>Terms of use</a>
          </li>
          <li>
            <a className='text-[#777777] text-[16px] font-secondary' href='/'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>;
};

export default Footer;
