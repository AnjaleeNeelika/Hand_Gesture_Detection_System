import React from 'react'
import Navbar from './assets/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Reports from './assets/pages/Reports'
import GetCount from './assets/pages/GetCount'

const App = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#f3e4e4] w-full h-screen pt-20'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/reports' element={<Reports />} />
                    <Route path='/get-count' element={<GetCount />} />
                </Routes>
            </div>
        </>
    )
}

export default App