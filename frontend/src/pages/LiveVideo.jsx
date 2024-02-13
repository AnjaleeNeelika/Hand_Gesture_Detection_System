import React from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import InputText from '../assets/components/InputText';
import { Link } from 'react-router-dom';

const LiveVideo = () => {
    return (
        <div className='h-full p-5'>
            <div className='flex items-center gap-3 fixed'>
                <Link
                    to={{
                        pathname: '../start-count'
                    }}
                >
                    <button>
                        <BsFillArrowLeftCircleFill className='text-3xl text-[#b87d7d]' /> 
                    </button>                    
                </Link>
                
                <span className='text-lg text-[#b87d7d]'>Back</span>
            </div>
            <div className='pt-10 p-5 w-full-full'>
                <h1 className='text-4xl text-[#7e6363] font-bold'>Live Video</h1>
                <div className='w-full mt-5 flex justify-center items-center'>
                    <div className='w-[900px] h-[500px] bg-slate-300 shadow-lg'></div>
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <div>
                        <span className='w-full flex justify-center'>
                            <h2 className='text-2xl font-semibold text-[#665151]'>Download a snippet from the Live Video</h2>
                        </span>
                        <div className='bg-white py-3 px-5 flex justify-center items-center gap-5 mt-3 rounded-md'>
                            <span className='text-lg'>Select video duration to download (max. 20min)</span>
                            {/* add a numeric textbox */}
                            <input type="number" name="" id="" min="1" max="20" className='border border-[#ddd] focus:border-[#ca9a9a] outline-none px-4 py-2 rounded' />
                        </div>
                        <div className='mt-5 flex w-fit mx-auto gap-10'>
                            <button className='w-36 bg-[#61113a] text-white px-7 py-2 rounded shadow-lg hover:bg-[#8a1853] hover:-translate-y-2 transform duration-200'>Download</button>
                            <Link to='/action-count-input'>
                                <button className='w-36 bg-[#61113a] text-white px-7 py-2 rounded shadow-lg hover:bg-[#8a1853] hover:-translate-y-2 transform duration-200'>Start</button>
                            </Link>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default LiveVideo