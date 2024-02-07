import React, { Children, Fragment, useState } from 'react';

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


const ThresholdValue = () => {
    const [isModelVisible, setIsModelVisible] = useState(false);

    const openModel = () => {
        setIsModelVisible(true);
    };

    const closeModel = () => {
        setIsModelVisible(false);
    };

    return (
        <div class='h-full p-5 flex flex-col justify-center items-center'>
            <div class='flex flex-1 mt-1 h-3/4 w-full'>

                <div class='w-1/2 mr-2 mt-3 justify-center'>
                    <div className=''>
                        <video class="w-full h-auto object-cover shadow-lg" autoplay loop controls muted>
                            <source src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className=' p-11 flex justify-center'>
                        <button className=" bg-[#7e6363] py-2 px-5 text-white rounded flex justify-center p-11" onClick={openModel}>
                            See Points
                        </button>
                    </div>
                    <Model isVisible={isModelVisible} onClose={closeModel} />
                </div>

                <div class='w-1/2 flex flex-col justify-center p-20 '>
                    <div className='bg-[#7e6363] p-10 rounded'>
                        <form className=" max-w-md mx-auto bg-white p-9 mb-5">

                            <div className='flex flex-row items-center'>
                                <div className='mb-2 mr-2 mx-4'>
                                    <label for="number" className="block mb-2 text-sm font-medium text-gray-900 w-28">Angle at Action 1</label>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row items-center'>
                                <div className='mb-2 mr-2 mx-4'>
                                    <label for="number" className="block mb-2 text-sm font-medium text-gray-900 w-28">Angle at Action 2 </label>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-row items-center'>
                                <div className='mb-2 mr-2 mx-4'>
                                    <label for="number" className="block mb-2 text-sm font-medium text-gray-900 w-28">Angle at Action 3</label>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                </div>
                            </div>
                            {/* <Button2>Save</Button2> */}
                        </form>

                        <form className=" max-w-md mx-auto bg-white p-9">

                            <div className='text-xl flex justify-end'>
                                <label for="number" className="block mb-2 text-sm font-medium text-gray-900 w-28">Start Value</label>
                                <label for="number" className="block mb-2 text-sm font-medium text-gray-900 w-28">End Value</label>
                            </div>


                            <div className='flex flex-row items-center'>
                                <div className='mb-2 mr-2 mx-4'>
                                    <label for="number" className="block mb-2 text-sm font-medium text-gray-900 w-28">Angle at Action 1</label>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>

                                </div>
                            </div>

                            <div className='flex flex-row items-center'>
                                <div className='mb-2 mr-2 mx-4'>
                                    <label for="number" className="block mb-2 text-sm font-medium text-gray-900 w-28">Angle at Action 2 </label>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>

                                </div>
                            </div>


                            <div className='flex flex-row items-center'>
                                <div className='mb-2 mr-2 mx-4'>
                                    <label for="number" className="block mb-2 text-sm font-medium text-gray-900 w-28">Angle at Action 3</label>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>
                                    <div className='mb-2 mr-2'>
                                        <input type='number' id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
                                    </div>

                                </div>
                            </div>
                            {/* <Button2>Submit</Button2> */}
                            <div className='flex justify-center mt-4'>
                                <button className='bg-[#85586f] w-1/3 text-center py-2 px-5 rounded text-[#ffefef] hover:bg-[#8b6d7d] '>Submit</button>
                            </div>

                        </form>
                    </div>

                </div>


            </div>
        </div>

    );
};

export default ThresholdValue;
