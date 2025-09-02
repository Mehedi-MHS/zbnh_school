
import { useState, useEffect } from "react";
 import React from 'react';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import {Autoplay } from 'swiper/modules';

// Sample data for the carousel
const slides = [
  {
    id: 1,
    url: '/images/jbnhschool.jpg',
    alt: 'Slide 1',
    title: 'School Playground',
    subtitle: 'Explore the world like never before.'
  },
  {
    id: 2,
    url: '/images/school.jpg',
    alt: 'Slide 2',
    title: 'Create Something Beautiful',
    subtitle: 'Let your creativity soar.'
  }

];

import settings from "../../helpers/Settings";
export default function CarouselComponent() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const req = await fetch(settings.backendURL + "/gallery", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const res = await req.json();
    const res_length = res.length;
    if (res_length > 0) {
      if (res_length > 4) {
        setPosts(res.slice(0, 4));
      } else {
        setPosts(res);
      }
    }
  };

  return (
  <>
  <style>
        {`
          .swiper-slide .animated-text {
            transform: translateY(20px);
            opacity: 0;
            transition: transform 0.8s ease-out, opacity 0.8s ease-out;
          }
          .swiper-slide-active .animated-text {
            transform: translateY(0);
            opacity: 1;
          }
          .swiper-slide .animated-subtitle {
            transform: translateY(30px);
            opacity: 0;
            transition: transform 0.8s ease-out 0.2s, opacity 0.8s ease-out 0.2s;
          }
          .swiper-slide-active .animated-subtitle {
            transform: translateY(0);
            opacity: 1;
          }
        `}
      </style>

      <Swiper
        // Modules for functionality
        modules={[Autoplay]}
        spaceBetween={0} // Adjusted to remove gap between slides
        slidesPerView={1}
        loop={true}
        // Auto-sliding feature
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // Classes for full-screen effect
        className="w-full h-96 md:h-[400px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-96 md:h-[400px]">
              {/* The image */}
              <img src={slide.url} alt={slide.alt} className="absolute inset-0 w-full h-full object-cover" />
              
              {/* Semi-transparent dark overlay */}
              <div className="absolute inset-0 bg-slate-700/70"></div>
              
              {/* Animated Text Content */}
              <div className="absolute inset-0 flex flex-col items-end justify-center text-white text-center p-8">
                <h3 className="animated-text text-3xl md:text-5xl font-bold mb-2">
                  {slide.title}
                </h3>
                <p className="animated-subtitle text-lg md:text-xl font-medium">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  </>
  )
      
}
