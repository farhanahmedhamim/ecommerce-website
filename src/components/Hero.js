import React from 'react';


// import Link
import { Link } from 'react-router-dom';



const Hero = () => {
  return <section className='h-screen bg-hero bg-no-repeat bg-cover bg-center py-24 px-0 lg:px-20 xl:px-40'>
    <div className='container mx-auto flex justify-between h-full'>
      {/* {Text} */}
      <div className='flex flex-col justify-center'>
        {/* {Pretitle} */}
        <div className='font-semibold flex items-center uppercase font-secondary'>
          <div className='w-10 h-[2px] bg-[#777777] mr-3'></div>New Trend
        </div>
        {/* {Title} */}
        <h1 className='text-[45px] md:text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH <br />
          <span className='font-semibold font-secondary'>WOMENS</span>
        </h1>
        <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary font-secondary'>Discover More</Link>
      </div>
    </div>
  </section>
};

export default Hero;
