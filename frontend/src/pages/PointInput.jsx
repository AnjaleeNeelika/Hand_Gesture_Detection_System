import React, { Children, Fragment, useState } from 'react';
import Button2 from '../assets/components/Button2';
import { Link } from 'react-router-dom';

const Model = ({ isVisible, onClose }) => {
    const handelClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    };

    if (!isVisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handelClose}>
            <div className='w-2/3 flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={onClose}>X</button>
                <div className='bg-white p-2 rounded'>
                    <img src='points.png'></img>
                </div>
            </div>
        </div>
    );
};

const PointInput = () => {
    const [isModelVisible, setIsModelVisible] = useState(false);

    const openModel = () => {
        setIsModelVisible(true);
    };

    const closeModel = () => {
        setIsModelVisible(false);
    };

    return (
        <div class='h-full p-5 flex justify-center items-center gap-10'>
            <div className='w-fit'>
                <div className='min-w-[300px] w-[800px] h-fit bg-white shadow-lg'>
                    <video className="w-auto h-full" autoPlay loop controls muted>
                        <source
                            src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4"
                            type="video/mp4" />
                    </video>
                </div>
                <div className='p-11 flex justify-center'>
                    <button className=" bg-[#7e6363] py-2 px-5 text-white rounded flex justify-center p-11" onClick={openModel}>
                        See points
                    </button>
                </div>

                <Model isVisible={isModelVisible} onClose={closeModel} />
            </div>

           <div className='w-[600px] min-w-[300px] h-fit'>
                <form className="w-full mx-auto bg-white p-9 rounded-lg shadow-lg">
                    <div className='mb-8 mx-auto w-fit px-5 py-3 bg-[#a87c7c] rounded-lg'>
                        <p className='text-lg font-semibold text-white'>Number of Actions: 3</p>
                    </div>
                    <div className='flex flex-row w-full mb-3'>
                        <div className='mb-2 mr-2 mx-4'>
                            <label for="number" className="block mb-1 text-sm font-medium text-gray-900 w-20">Action 1</label>
                        </div>
                        <div className='flex w-full'>
                            <div className='mb-2 mr-2 w-full'>
                                <label for="number" className="block mb-1 text-sm font-medium text-gray-900">Mid Point</label>
                                <input type='number' id="number" min={0} max={32} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No. of actions" required />
                            </div>
                            <div className='mb-2 mr-2 w-full'>
                                <label for="number" className="block mb-1 text-sm font-medium text-gray-900">Point 1</label>
                                <input type='number' id="number" min={0} max={32} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No. of actions" required />
                            </div>
                            <div className='mb-2 mr-2 w-full'>
                                <label for="number" className="block mb-1 text-sm font-medium text-gray-900">Point 2</label>
                                <input type='number' id="number" min={0} max={32} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No. of actions" required />
                            </div>
                        </div>
                    </div>     

                    <div className='flex flex-row w-full mb-3'>
                        <div className='mb-2 mr-2 mx-4'>
                            <label for="number" className="block mb-1 text-sm font-medium text-gray-900 w-20">Action 2</label>
                        </div>
                        <div className='flex w-full'>
                            <div className='mb-2 mr-2 w-full'>
                                <label for="number" className="block mb-1 text-sm font-medium text-gray-900">Mid Point</label>
                                <input type='number' id="number" min={0} max={32} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No. of actions" required />
                            </div>
                            <div className='mb-2 mr-2 w-full'>
                                <label for="number" className="block mb-1 text-sm font-medium text-gray-900">Point 1</label>
                                <input type='number' id="number" min={0} max={32} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No. of actions" required />
                            </div>
                            <div className='mb-2 mr-2 w-full'>
                                <label for="number" className="block mb-1 text-sm font-medium text-gray-900">Point 2</label>
                                <input type='number' id="number" min={0} max={32} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No. of actions" required />
                            </div>
                        </div>
                    </div>  

                    <div className='flex flex-row w-full mb-3'>
                        <div className='mb-2 mr-2 mx-4'>
                            <label for="number" className="block mb-1 text-sm font-medium text-gray-900 w-20">Action 3</label>
                        </div>
                        <div className='flex w-full'>
                            <div className='mb-2 mr-2 w-full'>
                                <label for="number" className="block mb-1 text-sm font-medium text-gray-900">Mid Point</label>
                                <input type='number' id="number" min={0} max={32} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No. of actions" required />
                            </div>
                            <div className='mb-2 mr-2 w-full'>
                                <label for="number" className="block mb-1 text-sm font-medium text-gray-900">Point 1</label>
                                <input type='number' id="number" min={0} max={32} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No. of actions" required />
                            </div>
                            <div className='mb-2 mr-2 w-full'>
                                <label for="number" className="block mb-1 text-sm font-medium text-gray-900">Point 2</label>
                                <input type='number' id="number" min={0} max={32} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No. of actions" required />
                            </div>
                        </div>
                    </div>  

                    <div className='mt-8'>
                        <Link to='/threshold-value'>
                            <Button2>Save</Button2>
                        </Link>                        
                    </div>
                </form>
           </div>
        </div>

    );
};

export default PointInput;
