import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Garden1 from "../assets/garden1.jpg"
import Garden2 from "../assets/garden2.jpg"
import Garden3 from "../assets/garden3.jpg"




const HeroSection = () => {
    const banners = [
        {
            id: 1,
            image: Garden1,
            title: 'Transform Your Outdoor Space',
            description: 'Discover premium plants and expert gardening tips to create your dream garden',
            buttonText: 'Explore'
        },
        {
            id: 2,
            image: Garden2,
            title: 'Seasonal Planting Guide',
            description: 'Learn what to plant this season for a thriving, colorful garden all year round',
            buttonText: 'Learn More'
        },
        {
            id: 3,
            image: Garden3,
            title: 'Organic Gardening Solutions',
            description: 'Natural pest control and fertilizer options for a healthier garden ecosystem',
            buttonText: 'Learn More'
        }
    ];

    return (
        <div className="w-full h-[70vh] md:h-[80vh] bg-gray-100">

            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                className="h-full"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className="relative w-full h-full">
                            {/* Banner Image */}
                            <img
                                src={banner.image}
                                alt="Banner"
                                className="w-full h-full object-cover"
                            />


                            <div className="absolute inset-0 bg-black/30" />

                            {/* Banner Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl">
                                    {banner.title}
                                </h1>
                                <p className="text-lg md:text-xl mb-8 max-w-xl">
                                    {banner.description}
                                </p>
                                <button className="bg-green-600 hover:bg-white hover:text-green-800 text-white px-8 py-3 rounded-lg text-lg font-medium">
                                    {banner.buttonText}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;