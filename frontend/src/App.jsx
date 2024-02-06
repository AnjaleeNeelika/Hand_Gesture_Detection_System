import React from 'react'
import Navbar from './assets/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Reports from './pages/Reports'
import VideoUploadPage from './pages/VideoUploadPage'
import VideoUploadPageeee from './pages/VideoUploadPageeee'
import StartCounting from './pages/StartCounting'
import PointInput from './pages/PointInput'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <>
        <Navbar />
        <div className='bg-[#f3e4e4] w-full h-screen pt-20'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/start-count' element={<StartCounting />} />
                <Route path='/videoUploadPage' element={<VideoUploadPage />} />
                <Route path='/uploadVideo' element={<VideoUploadPageeee />} />
                <Route path='/input-points' element={<PointInput />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    </>
  )
}

export default App;
