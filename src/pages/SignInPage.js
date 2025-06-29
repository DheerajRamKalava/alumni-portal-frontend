  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';

  function SignInPage() {
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpInput, setOtpInput] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('');
    const navigate = useNavigate();

    const handleSendOtp = () => {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      console.log('OTP sent:', otp);
      setGeneratedOtp(otp);
      setOtpSent(true);
      alert('OTP sent to email! (Check console)');
    };

    const handleVerifyOtp = () => {
      if (otpInput === generatedOtp) {
        alert('OTP Verified! Redirecting...');
        navigate('/profile');
      } else {
        alert('Invalid OTP. Try again.');
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

          {!otpSent ? (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
              />
              <button
                onClick={handleSendOtp}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Send OTP
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
              />
              <button
                onClick={handleVerifyOtp}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Verify OTP
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  export default SignInPage;
