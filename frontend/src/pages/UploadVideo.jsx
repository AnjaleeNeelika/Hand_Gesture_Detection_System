import React from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import InputText from '../assets/components/InputText'
import { Link } from 'react-router-dom'
import Upload from '../assets/components/Upload'

const UploadVideo = () => {
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
                <h1 className='text-4xl text-[#7e6363] font-bold'>Upload a Video</h1>
                <div className='w-full mt-5 flex justify-center items-center'>
                </div>
                
            </div>
        </div>
    )
}

export default UploadVideo