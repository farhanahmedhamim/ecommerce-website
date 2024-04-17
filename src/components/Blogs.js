import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

import image1 from '../img/img1.jpg';
import image2 from '../img/img2.jpg';
import image3 from '../img/img3.jpg';

const data = [
    {
        img: image2,
        category: "fashion",
        name: "james simson",
        date: "feb 2, 2029",
        title: "seasonal trends",
        desc: "Are you a fashion-forward individual looking to find the best deals on Matalan clothing online? Look no further. In this article.",
        icon: <MdArrowRightAlt className='text-3xl' />,
    },
    {
        img: image1,
        category: "trends",
        name: "james simson",
        date: "apr 15, 2029",
        title: "fashion tips and advice",
        desc: "Are you a fashion-forward individual looking to find the best deals on Matalan clothing online? Look no further. In this article.",
        icon: <MdArrowRightAlt className='text-3xl' />,
    },
    {
        img: image3,
        category: "style",
        name: "james simson",
        date: "jul 22, 2029",
        title: "sustainable fashion",
        desc: "Are you a fashion-forward individual looking to find the best deals on Matalan clothing online? Look no further. In this article.",
        icon: <MdArrowRightAlt className='text-3xl' />,
    },
]



const Blogs = () => {
    return (
        <section className='pb-24 px-0 lg:px-20 xl:px-40'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='text-[25px] lg:text-[30px] font-bold my-14'>Latest News</h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px] mx-auto max-w-sm md:max-w-none md:mx-0'>
                    {
                        data.map((val, ind) => {
                            return (
                                <div key={ind}>
                                    <img src={val.img} alt='' className='w-full h-[250px] object-contain' />
                                    <div className='flex flex-col justify-center items-center text-center py-5 px-5'>
                                        <div className='flex justify-between items-center'>
                                            <span className='uppercase text-[#777777] text-[14px] font-medium'>{val.category}</span>
                                            <span className='px-2 sm:px-4 font-bold'>.</span>
                                            <span className='uppercase text-[14px] font-semibold font-secondary'>{val.name}</span>
                                            <span className='px-2 sm:px-4 font-bold'>.</span>
                                            <span className='uppercase text-[#777777] text-[14px] font-medium'>{val.date}</span>
                                        </div>
                                        <h2 className='text-[20px] w-full capitalize font-semibold py-5 border-b border-[#777777]'>{val.title}</h2>
                                        <p className='text-[#777777] text-[15px] leading-6 py-5'>{val.desc}</p>
                                        <a href='/'>{val.icon}</a>
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

export default Blogs