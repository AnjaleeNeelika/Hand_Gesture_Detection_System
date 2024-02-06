import React from 'react'

const Button2 = (props) => {
    return (
        <div className='bg-[#85586f] w-full text-center py-2 px-5 rounded text-[#ffefef] hover:bg-[#8b6d7d] cursor-pointer hover:-translate-y-1 transition delay-200'>
            {props.children}
        </div>
    )
}

export default Button2