import React from 'react'

const Nav = () => {
    return (
        <div>
            <ul className='flex justify-center items-center gap-x-10'>
                <li>
                    <a className='font-medium font-secondary text-[17px]' href='/'>Home</a>
                </li>
                <li>
                    <a className='font-medium font-secondary text-[17px]' href='/'>Shop</a>
                </li>
                <li>
                    <a className='font-medium font-secondary text-[17px]' href='/'>Blog</a>
                </li>
                <li>
                    <a className='font-medium font-secondary text-[17px]' href='/'>Pages</a>
                </li>
                <li>
                    <a className='font-medium font-secondary text-[17px]' href='/'>Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;