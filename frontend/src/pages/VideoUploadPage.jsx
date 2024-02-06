import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Button2 from '../assets/components/Button2';

export default function VideoUploadPage() {
    return (
        <div className="flex items-center justify-center h-full">
            <Card className="w-150 bg-gray-100 p-5 rounded-lg">
                <CardHeader >
                    <Typography variant="h4" className=' p-8'>
                        Choose the video input type
                    </Typography>
                </CardHeader>

                <CardBody className='p-5 flex justify-center'>
                    <div>
                        <div className="flex items-center mb-4">
                            <input
                                id="default-radio-1"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 cursor-pointer"
                            />
                            <label
                                htmlFor="default-radio-1"
                                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                            >
                                Live
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="default-radio-2"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 cursor-pointer"
                            />
                            <label
                                htmlFor="default-radio-2"
                                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                            >
                                Upload Video
                            </label>
                        </div>
                    </div>
                </CardBody>

                {/* <CardFooter className="pt-4 self-end">
                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-[#3e3232] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#685656]  ">Green</button>
                </CardFooter> */}
                <div className='flex justify-center items-center'>
                    <Button2>Submit</Button2>
                </div>
            </Card>
        </div>
    );
}
