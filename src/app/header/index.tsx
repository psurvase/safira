"use client";
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../../public/logo.png';
import Image from 'next/image';

export default function Header() {
    const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

    const navItems = [
        { id: 1, text: 'Home', link:'/' },
        { id: 2, text: 'About', link:'/about' },
    ];

    return (
        <div className='bg-green-500 flex justify-between items-center h-24 max-w mx-auto text-white'>
            <div className='flex items-center justify-center h-20 w-20 ml-2'>
                <Image src={logo} height={100} width={100} alt="website-logo" className='rounded-full' />
            </div>

            <div className='flex-grow text-center'>
                <h1 className='text-4xl font-bold text-white'>Project Right</h1>
                <h2 className='text-xl text-white'>Health Search Tool</h2>
            </div>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex mr-4'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                    >
                        <Link href={item.link}>{item.text}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden mr-5'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-green-700 ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                <h1 className='w-full text-3xl font-bold text-white m-4'>Project Right</h1>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer mb-1vh border-gray-600'
                    >
                        <Link href={item.link}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
