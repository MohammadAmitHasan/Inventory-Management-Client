import React, { useState } from 'react';
import logo from '../../../img/logo.png'
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='py-2 bg-color flex container items-center mx-auto'>
            <div>
                <img src={logo} className='h-10' alt="" />
            </div>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden ml-auto mr-4'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`bg-color z-50 md:flex justify-end text-center absolute md:static w-full duration-300 ease-in ${open ? 'top-14' : 'top-[-220px]'}`}>
                <CustomLink to={'/'}>HOME</CustomLink>
                <CustomLink to={'/blogs'}>LOGIN</CustomLink>
                <CustomLink to={'/about'}>SIGN UP</CustomLink>
            </ul>
        </nav>

    );
};

export default Navbar;
