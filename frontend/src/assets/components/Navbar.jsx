import React from 'react'
import Button1 from './Button1'

const Navbar = () => {
    let Links = [
        {name: "HOME", link: '/'},
        {name: "REPORTS", link: '/'},
        {name: "CALCULATE ANGLE", link: '/'},
    ]

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-7 px-5'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <span className='text-3xl text-[#7e6363] mr-1 pt-1'>
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    Company
                </div>

                <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] 
                left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-sm font-semibold md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-[#9f8d8d] duration-500'>{link.name}</a>
                            </li>
                        ))
                    }

                    <div>
                        <Button1>
                            Login
                        </Button1>

                        <Button1>
                            Signup
                        </Button1>
                    </div>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar