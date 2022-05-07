import React, { useState } from 'react';
import logo from '../../../img/logo.png'
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    return (
        <nav className='py-2 bg-color flex container items-center mx-auto'>
            <div className='flex w-[120px]'>
                <img src={logo} className='h-10 ml-2 sm:ml-0' alt="" />
                <span className='flex items-center text-2xl ml-1 text-red-400 font-semibold'>NIM</span>
            </div>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden ml-auto mr-4'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`bg-color z-50 md:flex justify-end text-center left-0 w-full absolute md:static duration-300 ease-in ${open ? 'top-14' : 'top-[-220px]'}`}>
                <CustomLink to={'/'}>Home</CustomLink>
                {
                    user ?
                        <>
                            <CustomLink to={'/manageProducts'}>Manage</CustomLink>
                            <CustomLink to={'/addItem'}>Add Items</CustomLink>
                            <CustomLink to={'/myItems'}>My Items</CustomLink>
                            <button onClick={() => signOut(auth)} className='font-semibold mx-3 px-2 rounded-md text-lg border-b-2 border-[#ff347400] hover:border-red-500'>Logout</button>
                        </>
                        :
                        <CustomLink to={'/login'}>Login</CustomLink>
                }
            </ul>
        </nav>

    );
};

export default Navbar;
