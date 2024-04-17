import React from 'react'
import send from '../img/send.png';
import headphone from '../img/headphones.png';
import diamond from '../img/diamond.png';

const data = [
    {
        img: send,
        title: "Free UK Shipping",
        dexc: "on all order over $2000",
    },
    {
        img: headphone,
        title: "Premium Support",
        dexc: "24/7 including holiday",
    },
    {
        img: diamond,
        title: "Member Discount",
        dexc: "up to 29% off",
    },
]

const Feature = () => {
    return (
        <section className='py-6 px-0 lg:px-20 xl:px-40'>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4'>
                    {
                        data.map((item, ind) => {
                            return (
                                <div className='flex gap-8' key={ind}>
                                    <img src={item.img} alt='' className='w-[40px] h-auto object-contain' />
                                    <div className='space-y-1'>
                                        <h2 className='font-semibold text-[17px] capitalize font-secondary'>{item.title}</h2>
                                        <p className='text-[#777777] text-[14px]'>{item.dexc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Feature