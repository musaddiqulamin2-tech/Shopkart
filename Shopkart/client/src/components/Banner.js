import React, { useState, useEffect } from 'react';

const Banner = ({ onShopNow, onLearnMore }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: '🎉 Welcome to Shopkart',
      subtitle: 'Discover the best products at unbeatable prices',
      gradient: 'from-blue-600 to-indigo-700',
      emoji: '🛍️',
      cta: 'Start Shopping',
    },
    {
      title: '⚡ Flash Sale Today',
      subtitle: 'Get up to 50% off on selected items',
      gradient: 'from-red-600 to-orange-600',
      emoji: '🔥',
      cta: 'View Deals',
    },
    {
      title: '🚚 Free Shipping',
      subtitle: 'On orders above ₹500 - Limited time offer',
      gradient: 'from-green-600 to-emerald-600',
      emoji: '📦',
      cta: 'Shop Now',
    },
    {
      title: '💎 Premium Quality',
      subtitle: '100% Authentic Products - 30-Day Returns',
      gradient: 'from-purple-600 to-pink-600',
      emoji: '⭐',
      cta: 'Explore',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${slide.gradient} text-white min-h-96 flex items-center justify-between px-6 sm:px-12 py-12 transition-all duration-1000 ease-in-out`}>
        {/* Left Content */}
        <div className="flex-1 max-w-2xl animate-fadeInLeft">
          <div className="text-6xl sm:text-7xl mb-4 animate-bounce">{slide.emoji}</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            {slide.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl">
            {slide.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={onShopNow}
              className="bg-white text-indigo-700 px-8 py-3 rounded-full font-extrabold text-lg hover:bg-gray-100 transform hover:scale-105 transition shadow-lg"
            >
              {slide.cta}
            </button>
            <button
              onClick={onLearnMore}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-extrabold text-lg hover:bg-white/10 transform hover:scale-105 transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Visual - Personal Image */}
        <div className="hidden lg:flex flex-1 justify-end items-center relative h-80 overflow-hidden">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl"></div>
          
          {/* Image Container with border glow */}
          <div className="relative z-10 w-72 h-72 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-110 transition-transform duration-300 border-4 border-white/50">
            <img 
              src="/Shopkart Official.png" 
              alt="Shopkart Official" 
              className="w-full h-full object-cover"
              onError={(e) => { console.warn('Banner image failed to load, switching to fallback'); e.target.onerror = null; e.target.src = 'https://via.placeholder.com/288x288?text=Shopkart'; }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Floating badges around image */}
          <div className="absolute top-10 right-5 bg-white text-indigo-600 px-4 py-2 rounded-full shadow-lg font-bold animate-bounce">
            ⭐ Best Deal
          </div>
          <div className="absolute bottom-20 left-10 bg-yellow-300 text-gray-900 px-4 py-2 rounded-full shadow-lg font-bold animate-pulse">
            🔥 Limited Offer
          </div>
          <div className="absolute top-1/2 -right-10 bg-green-400 text-white px-4 py-2 rounded-full shadow-lg font-bold animate-bounce" style={{animationDelay: '0.5s'}}>
            ✨ Premium
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 py-6 bg-gray-100">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-indigo-600 w-8' : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Promotional Text Below Banner */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 sm:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🚚</div>
            <p className="font-bold text-gray-800">Fast Delivery</p>
            <p className="text-sm text-gray-600">24-48 hour shipping</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🛡️</div>
            <p className="font-bold text-gray-800">Secure Payment</p>
            <p className="text-sm text-gray-600">100% encrypted transactions</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">↩️</div>
            <p className="font-bold text-gray-800">Easy Returns</p>
            <p className="text-sm text-gray-600">30-day return policy</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">⭐</div>
            <p className="font-bold text-gray-800">Top Rated</p>
            <p className="text-sm text-gray-600">4.8/5 stars from 50K+ users</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Banner;
