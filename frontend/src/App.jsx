import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashbord from './pages/dashbord';
import VideoUploadPage from './pages/VideoUploadPage';
import VideoUploadPageeee from './pages/VideoUploadPageeee';


const App = () => {
  return (
    <div className='bg-green-200'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/videoUploadPage" element={<VideoUploadPage />} />
          <Route path="/uploadPage" element={<VideoUploadPageeee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
