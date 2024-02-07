import React from 'react';
import Button2 from '../assets/components/Button2';

const ActionCountInput = () => {
    return (
        <div className='h-full p-5 flex flex-col justify-center items-center'>

            {/* Top Section */}
            <div className='flex flex-1 mt-1 h-3/8 '>
                {/* Left Side - Video */}
                <div className='w-1/2 mr-2'>
                    <video className="w-auto h-full shadow-lg" autoPlay loop controls muted>
                        <source
                            src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4"
                            type="video/mp4" />
                    </video>
                </div>
                {/* Right Side - Form */}
                <div className='w-1/2 mr-2 flex items-center justify-center'>
                    <form className='max-w-md mx-auto bg-white p-11'> {/* Adjust max-width here */}
                        <div className='mb-2'>
                            <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 ">Number of actions</label>
                            <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                        </div>
                        <Button2>Save</Button2>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ActionCountInput;
