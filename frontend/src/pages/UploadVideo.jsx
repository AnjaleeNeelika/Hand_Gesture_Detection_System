import React from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import InputText from '../assets/components/InputText'
import { Link } from 'react-router-dom'
import VideoUploader from '../assets/components/VideoUploader'

const UploadVideo = () => {
    return (
        <div className='w-full h-full relative p-5'>
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
            <div className='pt-10 p-5 w-full h-full'>
                <h1 className='text-4xl text-[#7e6363] font-bold'>Upload a Video</h1>
                <div className='p-5 pb-10 flex justify-center items-center w-full h-full'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <VideoUploader />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default UploadVideo