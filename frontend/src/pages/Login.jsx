import React from 'react'
import InputText from '../assets/components/InputText'
import Button2 from '../assets/components/Button2'

const Login = () => {
    return (
        <div className='h-full w-screen p-5 flex flex-auto justify-center items-center'>
            <div className='bg-white shadow-lg p-10 rounded-md w-[400px]'>
                <h1 className='h1 text-3xl font-bold text-[#7e6363]'>Welcome Back!</h1>
                <form action="post" className='login w-full mt-12'>
                    <div className='input-wrapper w-full'>
                        <InputText label='Email Address' />
                    </div>
                    <div className='input-wrapper w-full mt-5'>
                        <InputText label='Password' />
                    </div>
                    <div className='mt-8'>
                        <Button2>Login</Button2>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Login