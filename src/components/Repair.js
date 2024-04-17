import React from 'react'

const Repair = () => {
  return (
    <section className='bg-repair bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center'>
          <h5 className='text-white capitalize font-semibold font-secondary text-[18px]'>repair service</h5>
          <h2 className='text-white text-[28px] my-5 font-bold tracking-wider text-center font-secondary'>Up to <span className='text-red-500 font-secondary'>70% Off</span> - All t-Shirts & Accessories</h2>
          <button className='px-8 py-3 capitalize font-medium text-black bg-white cursor-pointer hover:bg-[#060f1e] hover:text-white border border-[#fff] transition font-secondary'>explore more</button>
        </div>
      </div>
    </section>
  )
}

export default Repair