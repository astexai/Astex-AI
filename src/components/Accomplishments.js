'use client';
import React, { useRef, useState } from 'react';

// --- Icons ---
const QuoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774-.471 1.402-1.16 1.814-1.964a6.02 6.02 0 00.603-2.541c0-1.664-.62-2.958-1.558-3.93-.894-.927-2.077-1.45-3.494-1.533a8.38 8.38 0 013.063-5.26c.703-.567 1.35-1.106 1.933-1.616a.75.75 0 10-1.01-1.121c-.628.566-1.319 1.157-2.062 1.764C5.602 6.845 3.197 9.87 3 13.918c-.015.305.006.602.057.892.11.62.333 1.202.66 1.73.496.796 1.12 1.402 1.815 1.78a5.275 5.275 0 01-1.036 3.014.75.75 0 01-1.298-.756 6.756 6.756 0 00.606-2.934z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M15.804 21.644A6.707 6.707 0 0017 21.75a6.721 6.721 0 003.583-1.029c.774-.471 1.402-1.16 1.814-1.964a6.02 6.02 0 00.603-2.541c0-1.664-.62-2.958-1.558-3.93-.894-.927-2.077-1.45-3.494-1.533a8.38 8.38 0 013.063-5.26c.703-.567 1.35-1.106 1.933-1.616a.75.75 0 10-1.01-1.121c-.628.566-1.319 1.157-2.062 1.764C16.602 6.845 14.197 9.87 14 13.918c-.015.305.006.602.057.892.11.62.333 1.202.66 1.73.496.796 1.12 1.402 1.815 1.78a5.275 5.275 0 01-1.036 3.014.75.75 0 011.298-.756 6.756 6.756 0 00-.606-2.934z" clipRule="evenodd" />
    </svg>
);

// --- Data ---
const accomplishmentsData = [
    {
        quote: "Special thanks to the Astex AI Team who have implemented the Agent Console. The process has been flexible, helpful and professional, going the extra mile to implement changes and fix issues during the testing phase.",
        name: "Andreas Soellner",
        role: "CTO, TechCorp",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
        quote: "Astex AI not only provides extremely helpful chatbot features but also goes above and beyond to improve the user experience. Their services have had a significantly positive impact on the business.",
        name: "Manager of Engagement",
        role: "Aveda Global",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
        quote: "Astex worked on a tight turn-around, was extremely helpful and professional in developing all components of the project up to the brand's high standards.",
        name: "Axelle Basso",
        role: "Director, Luxe Beauty",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
    },
    {
        quote: "The strategic insights provided by the team were invaluable. We saw an immediate uptick in customer retention after implementing their solutions.",
        name: "Sarah Jenkins",
        role: "VP Marketing, Spherix",
        img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
    },
    {
        quote: "Professionalism at its finest. They understood our complex requirements and delivered a solution that scaled perfectly with our growth.",
        name: "David Chen",
        role: "Head of Product, Innovate",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
];

const Accomplishments = () => {
    // --- Refs & State ---
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    // --- Drag Handlers (Mouse) ---
    const startDrag = (e) => {
        setIsDown(true);
        if (sliderRef.current) {
            setStartX(e.pageX - sliderRef.current.offsetLeft);
            setScrollLeft(sliderRef.current.scrollLeft);
        }
    };

    const stopDrag = () => {
        setIsDown(false);
    };

    const handleDrag = (e) => {
        if (!isDown || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fastness multiplier
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    // --- Scroll Handler (Update Dots) ---
    const handleScroll = () => {
        if (sliderRef.current) {
            const container = sliderRef.current;
            const cardWidth = container.children[0].offsetWidth;
            const index = Math.round(container.scrollLeft / cardWidth);
            setActiveSlide(index);
        }
    };

    return (
        <section className="bg-white font-sans text-black">
            <div className="max-w-[1400px] border-x border-[#d9d9d9] mx-auto px-4 sm:px-6 pt-4 md:pt-8 pb-12 md:pb-20">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[45px] font-medium text-black mb-4">
                        Our Accomplishments
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-[#4a4a4a]">
                        Below are just a few reviews from our amazing clients.
                    </p>
                </div>

                {/* Slider Container */}
                <div
                    ref={sliderRef}
                    onMouseDown={startDrag}
                    onMouseLeave={stopDrag}
                    onMouseUp={stopDrag}
                    onMouseMove={handleDrag}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory pb-8 cursor-grab active:cursor-grabbing scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide Scrollbar
                >
                    {accomplishmentsData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full md:w-1/3 flex-shrink-0 snap-center px-4 transition-transform duration-300 ease-out"
                        >
                            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full select-none">
                                {/* Quote Icon */}
                                <div className="text-[#e77d00] mb-6">
                                    <QuoteIcon />
                                </div>
                                
                                {/* Quote Text */}
                                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                                    "{item.quote}"
                                </p>
                                
                                {/* Profile Info */}
                                <div className="flex items-center mt-auto">
                                    <img 
                                        src={item.img} 
                                        alt={item.name} 
                                        className="w-12 h-12 rounded-full object-cover mr-4 pointer-events-none" 
                                    />
                                    <div>
                                        <h4 className="font-medium text-sm text-gray-900">
                                            {item.name}
                                        </h4>
                                        <span className="text-xs text-gray-500">
                                            {item.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-4 pb-8">
                        {accomplishmentsData.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeSlide === index ? 'bg-[#e77d00]' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>

            </div>
        </section>
    );
};

export default Accomplishments;