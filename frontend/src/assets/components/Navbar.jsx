import React, { useState } from 'react'
import Button1 from './Button1'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let [open, setOpen] = useState(false);

    return (
        <div className='w-full shadow-md fixed top-0 left-0 flex'>
            <div className='md:flex justify-between items-center bg-white py-4 md:px-10 px-7 w-full'>
                <div className='md:flex justify-between items-center font-bold text-3xl text-[#3e3232]'>
                    <span className='text-3xl mr-1 pt-2'>
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    <Link to="/" className='title font-bold text-3xl text-[#3e3232]'>Company</Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:justify-between md:items-center gap-10 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
                    <li className='text-[#3e3232] hover:text-[#a87c7c] md:my-0 my-7'>
                        <Link to="/home">HOME</Link>
                    </li>
                    <li className='text-[#3e3232] hover:text-[#a87c7c] md:my-0 my-7'>
                        <Link to="/reports">REPORTS</Link>
                    </li>
                    <li className='text-[#3e3232] hover:text-[#a87c7c] md:my-0 my-7'>
                        <Link to="/get-count">GET COUNT</Link>
                    </li>

                    <div className='flex gap-10 md:ml-5'>
                        <Button1>Login</Button1>
                        <Button1>Signup</Button1>
                    </div>                
                </ul>
            </div>
            

            
        </div>
    )
}

export default Navbar