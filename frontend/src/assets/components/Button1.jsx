import React from 'react'

const Button1 = (props) => {
    return (
        <button className='bg-[#7e6363] px-5 py-2 md:ml-8 text-white rounded-full text-xs font-semibold hover:bg-[#ac9191] duration-500'>
            {props.children}
        </button>
    )
}

export default Button1