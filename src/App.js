import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
