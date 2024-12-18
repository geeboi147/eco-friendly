import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Correct modules
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

const HeroSection = () => {
    const images = [
        { src: hero1, alt: 'Eco-friendly products' },
        { src: hero2, alt: 'Sustainable living' },
        { src: hero3, alt: 'Environmentally conscious shopping' },
      ];

  return (
    <section className="relative w-full h-96">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center">
                <h1 className="text-4xl font-bold drop-shadow-lg">Welcome to EcoShop!</h1>
                <p className="mt-2 text-lg drop-shadow-md">
                  Discover sustainable products for a better tomorrow
                </p>
                <button className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
