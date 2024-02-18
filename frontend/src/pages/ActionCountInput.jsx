import { React, useState, useEffect, useRef } from 'react';
import Button2 from '../assets/components/Button2';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ActionCountInput = () => {
    const [videoSrc, setVideoSrc] = useState(null);

    useEffect(() => {
        import("../assets/videos/sample-vid.mp4")
            .then((module) => {
                setVideoSrc(module.default);
            })
            .catch((error) => {
                console.error("Error loading video:", error);
            });
    }, []);


    return (

        <div className='h-full p-5 flex flex-col justify-center items-center'>
            {/* Top Section */}
            <div className='flex mt-1 h-3/8 items-center'>
                {/* Left Side - Video */}
                <div className='w-1/2 mr-2 h-fit shadow-lg'>
                    {videoSrc && (
                        <video className="w-auto h-full shadow-lg" autoPlay loop controls muted>
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    )}
                </div>
                {/* Right Side - Form */}
                <div className='w-1/2 mr-2 flex items-center justify-center'>
                    <form className='max-w-md mx-auto bg-white p-11 rounded-lg shadow-lg'> {/* Adjust max-width here */}
                        <div className='flex justify-center items-end gap-10 '>
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
