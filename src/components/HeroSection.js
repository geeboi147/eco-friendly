import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { className: "relative w-full h-96", children: _jsx(Swiper, { modules: [Autoplay, Pagination, Navigation], spaceBetween: 0, slidesPerView: 1, autoplay: { delay: 3000, disableOnInteraction: false }, pagination: { clickable: true }, navigation: true, className: "w-full h-full", children: images.map((image, index) => (_jsx(SwiperSlide, { children: _jsx("div", { className: "w-full h-full bg-cover bg-center", style: { backgroundImage: `url(${image.src})` }, children: _jsxs("div", { className: "absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center", children: [_jsx("h1", { className: "text-4xl font-bold drop-shadow-lg", children: "Welcome to EcoShop!" }), _jsx("p", { className: "mt-2 text-lg drop-shadow-md", children: "Discover sustainable products for a better tomorrow" }), _jsx("button", { className: "mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full", children: "Shop Now" })] }) }) }, index))) }) }));
};
export default HeroSection;
