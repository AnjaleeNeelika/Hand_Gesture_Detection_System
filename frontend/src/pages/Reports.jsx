import React from 'react'
import Button2 from '../assets/components/Button2'
import Table from '../assets/components/Table'

const Reports = () => {
    return (
        <div className='w-full h-full px-8 py-5 overflow-auto'>
            <div className='h-[1rem]'>
                <h1 className='text-4xl text-[#7e6363] font-bold'>Reports</h1>
            </div>

            <div className='w-full h-[calc(100vh-11rem)] mt-10 p-10'>
                <div className='w-full h-full overflow-y-auto overflow-x-hidden rounded-lg shadow-lg'>
                    <Table />
                </div>
            </div>
            
            
        </div>
    )
}

export default Reports