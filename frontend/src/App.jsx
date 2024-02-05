import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashbord from './pages/dashbord';
import VideoUploadPage from './pages/VideoUploadPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/videoUploadPage" element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
