import React from 'react';
import Button2 from '../assets/components/Button2';
import { Link } from 'react-router-dom';

const ActionCountInput = () => {
    return (
        <div className='h-full p-5 flex justify-center items-center gap-10'>
            <div className='min-w-[300px] w-[800px] h-fit bg-white'>
                <video className="w-auto h-full shadow-lg" autoPlay loop controls muted>
                    <source
                        src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4"
                        type="video/mp4" />
                </video>
            </div>
            <form className='min-w-[200px] w-[400px] bg-white p-11 rounded-lg shadow-lg'> 
                <div className='flex justify-center items-end gap-10 w-full'>
                    <div className=''>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 ">Number of Actions</label>
                        <input type='number' id="number" min={2} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                    </div>
                    <Link to='/input-points'>
                        <Button2>Save</Button2>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default ActionCountInput;
