import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import SignUpPage from './pages/SignUpPage';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image.png')" }}
      >
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
