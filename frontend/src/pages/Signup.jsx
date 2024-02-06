import React from 'react'
import InputText from '../assets/components/InputText'
import Button2 from '../assets/components/Button2'

const Signup = () => {
    return (
        <div className='h-full w-screen p-5 flex flex-auto justify-center items-center'>
            <div className='bg-white shadow-lg p-10 rounded-md w-[400px]'>
                <h1 className='h1 text-3xl font-bold text-[#7e6363]'>Haven't signed up yet?</h1>
                <form action="post" className='login w-full mt-12'>
                    <div className='input-wrapper w-full'>
                        <InputText label='Full Name' type='text' />
                    </div>
                    {/* <div className='input-wrapper w-full mt-5'>
                        <InputText label='Position' type='text' />
                    </div> */}
                    <div className='input-wrapper w-full mt-5'>
                        <InputText label='Email Address' type='text' />
                    </div>
                    <div className='input-wrapper w-full mt-5'>
                        <InputText label='Password' type='password' />
                    </div>
                    <div className='input-wrapper w-full mt-5'>
                        <InputText label='Confirm Password' type='password' />
                    </div>
                    <div className='mt-8'>
                        <Button2>Signup</Button2>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Signup