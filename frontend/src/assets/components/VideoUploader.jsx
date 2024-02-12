import React, { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { FaFileVideo } from 'react-icons/fa';

const VideoUploader = () => {
    const [video, setVideo] = useState(null);
    const [fileName, setFileName] = useState("No selected file");

    return (
        <div className=''>
            <form 
                action="" 
                className='flex flex-col justify-center items-center h-[300px] w-[500px] p-2 cursor-pointer border-2 border-dashed border-[#a87c7cbb] rounded-lg'
                onClick={() => document.querySelector('.input-field').click()}
            >
                <input 
                    type="file" 
                    accept='video/mp4, video/mov' 
                    className='input-field' 
                    hidden
                    onChange={({ target: {files}}) => {
                        files[0] && setFileName(files[0].name)
                        if(files) {
                            setVideo(URL.createObjectURL(files[0]))
                        }
                    }}
                />
                {/* <div>
                    <MdCloudUpload color='#a87c7cbb' fontSize='5rem'  />
                </div> */}
                {video ? 
                    <video className='h-full w-full' controls autoPlay loop>
                        <source src={video} type='video/mp4' />
                    </video>
                    :
                    <>
                        <MdCloudUpload className='h-24 w-24 opacity-40 text-[#a87c7c]' />
                        <p className='opacity-70 text-[#a87c7c]'>Browse Files to Upload</p>
                    </>
                }
            </form>
            <section className='flex justify-between items-center bg-[#85586f] mt-3 p-4 text-[#ffefef] rounded-lg'>
                <FaFileVideo className='#1475cf h-5 w-5' />
                <span className='flex gap-2 justify-center items-center'>
                {fileName}
                    <MdDelete
                        onClick={() => {
                            setFileName("No selected file")
                            setVideo(null)
                        }}
                        className='w-5 h-5 cursor-pointer'
                    />
                </span>
            </section>
        </div>
    )
}

export default VideoUploader