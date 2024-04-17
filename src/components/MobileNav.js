import React from 'react'

const MobileNav = () => {
    return (
        <div className='bg-[#373737f2] w-full h-full'>
            <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
                <li>
                    <a className='text-white font-secondary text-[17px]' href='/'>Home</a>
                </li>
                <li>
                    <a className='text-white font-secondary text-[17px]' href='/'>Shop</a>
                </li>
                <li>
                    <a className='text-white font-secondary text-[17px]' href='/'>Blog</a>
                </li>
                <li>
                    <a className='text-white font-secondary text-[17px]' href='/'>Pages</a>
                </li>
                <li>
                    <a className='text-white font-secondary text-[17px]' href='/'>Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default MobileNav;