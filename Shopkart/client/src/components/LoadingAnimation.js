import React, { useEffect, useState } from 'react';

const LoadingAnimation = ({ type = 'default', onComplete, message = '' }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowContent(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  // LOGIN SUCCESS ANIMATION
  if (type === 'login-success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-4">
        <div className="text-center">
          {/* Animated Circle */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-75"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-spin" 
                 style={{animationDuration: '3s'}}></div>
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center text-3xl">
              ✓
            </div>
          </div>

          {/* Text */}
          <h1 className="text-4xl font-extrabold text-white mb-2">Welcome Back!</h1>
          <p className="text-lg text-blue-100 mb-8">Authentication successful</p>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-white/30 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{width: `${progress}%`}}
            ></div>
          </div>
          <p className="text-white/80 text-sm mt-4">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // ORDER SUCCESS ANIMATION
  if (type === 'order-success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center p-4">
        <div className="text-center">
          {/* Animated Checkmark with Confetti */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            {/* Background circle */}
            <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping"></div>
            
            {/* Main circle */}
            <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <svg className="w-16 h-16 text-green-600 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Floating particles */}
            <div className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-pulse" style={{top: '10px', left: '50%'}}></div>
            <div className="absolute w-2 h-2 bg-red-300 rounded-full animate-pulse" style={{top: '20px', right: '20px'}}></div>
            <div className="absolute w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{bottom: '20px', right: '30px'}}></div>
            <div className="absolute w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{bottom: '30px', left: '20px'}}></div>
          </div>

          {/* Text */}
          <h1 className="text-4xl font-extrabold text-white mb-2">Order Confirmed! 🎉</h1>
          <p className="text-lg text-green-100 mb-2">Your order has been placed successfully</p>
          <p className="text-sm text-green-50 mb-8">{message}</p>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-white/30 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{width: `${progress}%`}}
            ></div>
          </div>
          <p className="text-white/80 text-sm mt-4">Processing your order...</p>
        </div>
      </div>
    );
  }

  // PRODUCT LOADING ANIMATION
  if (type === 'product-open') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-600 to-pink-600 flex items-center justify-center p-4">
        <div className="text-center">
          {/* Animated Product Icon */}
          <div className="relative w-28 h-28 mx-auto mb-6">
            {/* Rotating ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-white border-r-white rounded-full animate-spin"
                 style={{animationDuration: '1.5s'}}></div>
            
            {/* Inner ring */}
            <div className="absolute inset-3 border-2 border-transparent border-b-white border-l-white rounded-full animate-spin"
                 style={{animationDuration: '2s', animationDirection: 'reverse'}}></div>

            {/* Center icon */}
            <div className="absolute inset-6 bg-white rounded-lg flex items-center justify-center text-4xl">
              📦
            </div>
          </div>

          {/* Text */}
          <h1 className="text-3xl font-extrabold text-white mb-2">Loading Product</h1>
          <p className="text-lg text-orange-100 mb-8">Fetching product details...</p>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-white/30 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{width: `${progress}%`}}
            ></div>
          </div>
          <p className="text-white/80 text-sm mt-4">{Math.round(progress)}%</p>
        </div>
      </div>
    );
  }

  // CHECKOUT LOADING ANIMATION
  if (type === 'checkout') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-4">
        <div className="text-center">
          {/* Animated Shopping Cart */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <svg className="w-full h-full text-white animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1h7.586a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM5 16a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>

          {/* Text */}
          <h1 className="text-3xl font-extrabold text-white mb-2">Processing Checkout</h1>
          <p className="text-lg text-purple-100 mb-8">Secure payment processing...</p>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-white/30 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-300 to-red-300 transition-all duration-300 ease-out"
              style={{width: `${progress}%`}}
            ></div>
          </div>
          <p className="text-white/80 text-sm mt-4">Please don't close this window...</p>
        </div>
      </div>
    );
  }

  // DEFAULT LOADING
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Animated Dots */}
        <div className="flex justify-center gap-3 mb-8">
          <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>

        {/* Text */}
        <h1 className="text-3xl font-extrabold text-white mb-2">Loading</h1>
        <p className="text-lg text-gray-300 mb-8">{message}</p>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-500 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{width: `${progress}%`}}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
