import { React, useState, useEffect } from 'react';
import Button2 from '../assets/components/Button2';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const ActionCountInput = () => {
    const [videoSrc, setVideoSrc] = useState(null);
    const [error, setError] = useState(null);
    const [fileName, setFileName] = useState(null);

    useEffect(() => {
        const currentURL = window.location.href;
        const parts = currentURL.split('/');
        const id = parts[parts.length - 1];

        // Fetch video path from backend based on ID
        axios.get(`${BASE_URL}/videos/view-fulldetect/${id}`)
            .then(response => {
                const filePath = response.data.filePath;
                const parts = filePath.split('\\'); // Split by backslash
                const fileName = parts.pop(); // Get the last part (the file name)

                setFileName(fileName); // Update fileName state
                setVideoSrc(filePath);
            })
            .catch(error => {
                setError(error.message);
                console.error('Error loading video:', error);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log(fileName);

    return (
        <div className='h-full p-5 flex flex-col justify-center items-center'>
            {/* Top Section */}
            <div className='flex mt-1 h-3/8 items-center'>
                {/* Left Side - Video */}
                <div className='w-1/2 mr-2 h-fit shadow-lg'>
                    {/* {videoSrc && (
                        <video className="w-auto h-full shadow-lg" autoPlay loop controls muted>
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    )} */}
                    {fileName && (
                        <video className="w-auto h-full shadow-lg" autoPlay loop controls muted>
                            <source src={`/videos/${fileName}`} type="video/mp4" />
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
        </div>
    );
};

export default ActionCountInput;




// import React, { useState, useEffect } from 'react';
// import Button2 from '../assets/components/Button2';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const BASE_URL = 'http://localhost:8080';

// const ActionCountInput = () => {
//     const [videoSrc, setVideoSrc] = useState(null);
//     const [error, setError] = useState(null);
//     const [fileName, setFileName] = useState(null);

//     useEffect(() => {
//         const currentURL = window.location.href;
//         const parts = currentURL.split('/');
//         const id = parts[parts.length - 1];

//         // Fetch video path from backend based on ID
//         axios.get(`${BASE_URL}/videos/view-fulldetect/${id}`)
//             .then(response => {
//                 const filePath = response.data.filePath;
//                 const parts = filePath.split('\\'); // Split by backslash
//                 const fileName = parts.pop(); // Get the last part (the file name)

//                 setFileName(fileName); // Update fileName state
//                 setVideoSrc(filePath);

//                 // Simulate detected points data
//                 const detectedPoints = { landmarks: [{ x: 100, y: 200 }, { x: 150, y: 250 }] };
//                 // Send detected points data to server
//                 axios.post(`http://localhost:5000/detected-points`, detectedPoints)
//                     .then(response => {
//                         console.log(response.data.message);
//                     })
//                     .catch(error => {
//                         console.error('Error sending detected points:', error);
//                     });
//             })
//             .catch(error => {
//                 setError(error.message);
//                 console.error('Error loading video:', error);
//             });
//     }, []);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className='h-full p-5 flex flex-col justify-center items-center'>
//             {/* Top Section */}
//             <div className='flex mt-1 h-3/8 items-center'>
//                 {/* Left Side - Video */}
//                 <div className='w-1/2 mr-2 h-fit shadow-lg'>
//                     {fileName && (
//                         <video className="w-auto h-full shadow-lg" autoPlay loop controls muted>
//                             <source src={`/videos/${fileName}`} type="video/mp4" />
//                         </video>
//                     )}

//                 </div>
//                 {/* Right Side - Form */}
//                 <div className='w-1/2 mr-2 flex items-center justify-center'>
//                     <form className='max-w-md mx-auto bg-white p-11 rounded-lg shadow-lg'> {/* Adjust max-width here */}
//                         <div className='flex justify-center items-end gap-10 '>
//                             <div className=''>
//                                 <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 ">Number of Actions</label>
//                                 <input type='number' id="number" min={2} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of actions" required />
//                             </div>
//                             <Link to='/input-points'>
//                                 <Button2>Save</Button2>
//                             </Link>
//                         </div>
//                     </form>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default ActionCountInput;

