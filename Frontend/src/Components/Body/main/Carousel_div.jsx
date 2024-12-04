import React, { useState, useEffect } from 'react';
import slider1 from './../../../assets/banner6.jpg';
import slider2 from './../../../assets/banner2.jpg';
import slider3 from './../../../assets/banner3.webp';
import slider4 from './../../../assets/banner4.webp';
import slider5 from './../../../assets/banner5.jpg';
import slider6 from './../../../assets/banner1.jpg';

const Carousel_div = () => {
    const images = [slider1, slider2, slider3, slider4,slider5, slider6];
    const [currentIndex, setCurrentIndex] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#bae9f3] bg-opacity-90 ">
            <div className="w-[90%] mx-auto relative overflow-hidden rounded-md">
                <div className="w-full pt-[56.25%] relative md:h-[420px] lg:h-[600px]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img
                                src={image}
                                className="w-full h-full object-cover mx-auto"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                    
                    {/* Navigation Indicators */}
                    <div className="absolute bottom-10 lg:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-5 md:w-7 lg:w-10 h-2 md:h-4 lg:h-6 border-solid border-2 border-customBg-800 rounded-full cursor-pointer transition duration-300 ${index === currentIndex ? 'bg-customBg-500 scale-125' : 'bg-transparen'}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel_div;
