import { React, useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import VideoUploader from '../assets/components/VideoUploader';
import Button2 from '../assets/components/Button2';

const UploadVideo = () => {

    const [videoId, setVideoId] = useState(null);

    const handleUploadSuccess = (uploadedId) => {
        setVideoId(uploadedId);
        console.log("Video ID:", uploadedId);
    };



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
                        <div>
                            <VideoUploader onVideoUpload={handleUploadSuccess} />
                            <div className='mt-5 w-fit mx-auto'>
                                <Link to={`/action-count-input/${videoId}`}>
                                    <button className='bg-[#61113a] text-white px-7 py-2 rounded shadow-lg hover:bg-[#8a1853] hover:-translate-y-2 transform duration-200'>Submit</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default UploadVideo