import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function VideoUploadPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-green-200">
            <Card className="w-96 bg-gray-100 p-5">
                <CardHeader className=' p-2'>
                    <Typography variant="h4" className=' p-10'>
                        UI/UX Review Check
                    </Typography>
                </CardHeader>

                <CardBody>
                    <div className="flex items-center mb-4">
                        <input
                            id="default-radio-1"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
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
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                        />
                        <label
                            htmlFor="default-radio-2"
                            className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                        >
                            Upload Video
                        </label>
                    </div>
                </CardBody>

                <CardFooter className="pt-4">
                    <Button>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
