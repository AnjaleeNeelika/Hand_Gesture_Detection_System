import React from 'react'

const Button1 = (props) => {
    return (
        <button className='bg-[#7e6363] py-2 px-5 text-white rounded text-sm font-semibold hover:bg-[#ac9191] duration-500 relative'>
            {props.children}
        </button>
    )
}

export default Button1