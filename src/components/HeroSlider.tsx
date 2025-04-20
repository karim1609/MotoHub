import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaLink: string;
  ctaText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Sport Bike Collection",
    subtitle: "Experience the thrill of speed and precision",
    imageUrl: "https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=1920",
    ctaLink: "/motorcycles",
    ctaText: "Explore Sport Bikes"
  },
  {
    id: 2,
    title: "Cruiser Comfort",
    subtitle: "Ride in style with our premium cruisers",
    imageUrl: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1920",
    ctaLink: "/motorcycles",
    ctaText: "View Cruisers"
  },
  {
    id: 3,
    title: "Adventure Awaits",
    subtitle: "Find your next off-road companion",
    imageUrl: "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1920",
    ctaLink: "/search",
    ctaText: "Find Your Bike"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    goToSlide(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-20"></div>
          
          {/* Image background */}
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-10000"
            style={{ 
              backgroundImage: `url(${slide.imageUrl})`,
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
            }}
          ></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-start z-30 px-4 sm:px-12 md:px-24">
            <div 
              className={`max-w-md transition-all duration-1000 
                ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{slide.title}</h1>
              <p className="text-xl text-gray-100 mb-8">{slide.subtitle}</p>
              <Link 
                to={slide.ctaLink}
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors shadow-lg"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;