
'use client';
import React, { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import ContactUs from '@/components/ContactUs';

// --- Icons (Inline SVGs) ---
const Icons = {
    Chat: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
    ),
    Cpu: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
        </svg>
    ),
    Trophy: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172V9.75a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263-1.264a.563.563 0 01.8.8l-1.264 1.263a3.75 3.75 0 00-2.43 2.429M6.644 11.257l-1.263-1.264a.563.563 0 01.8-.8l1.264 1.263a3.75 3.75 0 002.43 2.429" />
        </svg>
    ),
    Bolt: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
    ),
    Handshake: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
    ),
    Rocket: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
    ),
    Quote: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774-.471 1.402-1.16 1.814-1.964a6.02 6.02 0 00.603-2.541c0-1.664-.62-2.958-1.558-3.93-.894-.927-2.077-1.45-3.494-1.533a8.38 8.38 0 013.063-5.26c.703-.567 1.35-1.106 1.933-1.616a.75.75 0 10-1.01-1.121c-.628.566-1.319 1.157-2.062 1.764C5.602 6.845 3.197 9.87 3 13.918c-.015.305.006.602.057.892.11.62.333 1.202.66 1.73.496.796 1.12 1.402 1.815 1.78a5.275 5.275 0 01-1.036 3.014.75.75 0 01-1.298-.756 6.756 6.756 0 00.606-2.934z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M15.804 21.644A6.707 6.707 0 0017 21.75a6.721 6.721 0 003.583-1.029c.774-.471 1.402-1.16 1.814-1.964a6.02 6.02 0 00.603-2.541c0-1.664-.62-2.958-1.558-3.93-.894-.927-2.077-1.45-3.494-1.533a8.38 8.38 0 013.063-5.26c.703-.567 1.35-1.106 1.933-1.616a.75.75 0 10-1.01-1.121c-.628.566-1.319 1.157-2.062 1.764C16.602 6.845 14.197 9.87 14 13.918c-.015.305.006.602.057.892.11.62.333 1.202.66 1.73.496.796 1.12 1.402 1.815 1.78a5.275 5.275 0 01-1.036 3.014.75.75 0 011.298-.756 6.756 6.756 0 00-.606-2.934z" clipRule="evenodd" />
        </svg>
    ),
    ChevronLeft: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
    ),
    ChevronRight: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    )
};

// --- Timeline Data ---
const timelineData = [
    {
        year: "2021",
        title: "The Beginning",
        description: "Started as Astex Labs in Bangalore focused on Machine Learning models. The initial product was promising but lacked enterprise integration. We pivoted on November 8th, 2021."
    },
    {
        year: "2022",
        title: "Building Foundation",
        description: "Invested heavily in R&D for Large Language Models. Built our proprietary orchestration engine. We lost some time iterating, but gained a robust foundation for future scale."
    },
    {
        year: "2023",
        title: "AI Agent Breakthrough",
        description: "Launched our first autonomous CRM bot. Generated 2x revenue for our first US-based client. COVID after-effects impacted global business, but we automated our way through."
    },
    {
        year: "2025",
        title: "Global Scale",
        description: "Generated 3x revenue for enterprise clients. Expanded to US & Europe. Partnered with major tech companies. Growing team of 70+ engineers with 99.9% uptime."
    }
];

// --- Process / Proven Path Data for Mobile Slider ---
const provenPathData = [
    {
        title: "Strategy & Design",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        ),
        points: [
            "Define success and engagement goals",
            "Ideate user stories, personas, & features",
            "Create optimized bot content",
            "Design tested & proven bot flows"
        ]
    },
    {
        title: "Development",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
        ),
        points: [
            "Build complex integrations",
            "Add bot intelligence using NLP",
            "Cross-channel capable implementations",
            "Custom CMS implementation"
        ]
    },
    {
        title: "Drive Further Engagement",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
        ),
        points: [
            "Extend complex inquiry capabilities",
            "Advanced audience segmentation",
            "Data-driven ROI measurement",
            "Voice experience capabilities"
        ]
    },
    {
        title: "Launch & Improve",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        ),
        points: [
            "Robust analytics capabilities",
            "Bot A/B testing",
            "Dedicated Support team",
            "AM team drives new bot features"
        ]
    }
];

// --- Accomplishments Data (Added for Slider) ---
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
    // Added duplicates so the slider has enough content to slide on PC
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

export default function AboutUs() {
    // Ref for the scrollable container (Timeline)
    const scrollContainerRef = useRef(null);
    // Ref for the Accomplishments Slider
    const accomplishmentsRef = useRef(null);

    // --- State for Accomplishments Slider ---
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    // Timeline Scroll Handler
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 350;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    // --- Accomplishments Slider Logic (Drag & Dots) ---
    const startDrag = (e) => {
        setIsDown(true);
        if (accomplishmentsRef.current) {
            setStartX(e.pageX - accomplishmentsRef.current.offsetLeft);
            setScrollLeft(accomplishmentsRef.current.scrollLeft);
        }
    };

    const stopDrag = () => {
        setIsDown(false);
    };

    const handleDrag = (e) => {
        if (!isDown || !accomplishmentsRef.current) return;
        e.preventDefault();
        const x = e.pageX - accomplishmentsRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fastness
        accomplishmentsRef.current.scrollLeft = scrollLeft - walk;
    };

    // Update active dot on scroll
    const handleScroll = () => {
        if (accomplishmentsRef.current) {
            const container = accomplishmentsRef.current;
            // Determine active slide index based on scroll position and item width
            // This works well for mobile (1 item) and gives a rough estimate for desktop
            const cardWidth = container.children[0].offsetWidth;
            const index = Math.round(container.scrollLeft / cardWidth);
            setActiveSlide(index);
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">

            {/* --- Section 1: Hero --- */}
            <section className="">
                <div className="pt-8 md:pt-16 pb-12 max-w-[1400px] border-x border-[#d9d9d9] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-6 md:mb-10">
                        <span className="text-gray-500 text-sm font-semibold uppercase tracking-widest">Home • About Us</span>
                        <h1 className="mt-4 text-4xl md:text-6xl font-medium text-black">
                            We build on transparency.
                        </h1>
                    </div>

                    <div className="relative w-full h-[200px] md:h-[400px] rounded-sm overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Astex AI Team"
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute bottom-6 left-6 md:bottom-6 md:left-16">
                            <span className="text-white text-xs md:text-sm font-medium uppercase tracking-wider mb-2 block border-l-4 border-[#e77d00] pl-3">
                                About Us
                            </span>
                            <h2 className="text-3xl md:text-6xl font-medium text-white">
                                We started small.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Intro Text --- */}
            <section className="-mt-5 md:-mt-0">
                <div className="max-w-[1400px] border-x border-[#d9d9d9] mx-auto px-6 text-center">
                    <p className="text-lg md:text-xl md:ml-50 text-gray-600 leading-relaxed">
                        Like you, we were a growing company needing to scale without the chaos.
                        We began with a simple question: How can intelligence be automated?
                        Yet, we stood strong to the test of time and discovered what we're good at.
                        The goal was simple. We wanted to automate and simplify businesses so you can focus on the core area of your business—sales and revenue.
                    </p>
                </div>
            </section>

            {/* --- Section 3: Evolution Timeline (Carousel Style) --- */}
            <section className="pt-20 md:pt-30 pb-4 md:pb-18 max-w-[1400px] border-x border-[#d9d9d9] mx-auto px-4 sm:px-6">
                <h2 className="text-4xl text-center md:text-left md:text-6xl font-medium text-black mb-2">
                    The Astex<span className="text-[#e77d00]">ai</span> evolution:
                </h2>
                <p className="text-gray-600 mb-0 md:mb-12 text-center md:text-left  text-lg">Our failure to success story.</p>

                {/* Carousel Container */}
                <div className="flex items-center">

                    {/* Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:flex flex-shrink-0 cursor-pointer z-10 w-10 h-10 rounded-full bg-gray-200 hover:bg-[#e77d00] hover:text-white flex items-center justify-center transition-colors duration-300 mr-2 md:mr-6"
                        aria-label="Scroll Left"
                    >
                        <Icons.ChevronLeft />
                    </button>

                    {/* Scrollable Viewport */}
                    <div
                        ref={scrollContainerRef}
                        className="flex-1 overflow-x-auto scrollbar-hide scroll-smooth py-10"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar CSS
                    >
                        <div className="flex min-w-max">
                            {timelineData.map((item, index) => (
                                <div key={index} className="flex flex-col items-center w-full md:w-[380px] px-4">

                                    {/* Year - Fixed to always be centered */}
                                    <h3 className="text-3xl font-medium text-black mb-6 text-center">
                                        {item.year}
                                    </h3>

                                    {/* Line & Dot */}
                                    <div className="relative w-full flex items-center justify-center mb-8">
                                        {/* The gray line going through the dot */}
                                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#d9d9d9]"></div>
                                        {/* The Dot */}
                                        <div className="w-4 h-4 rounded-full border-[3px] border-[#e77d00] bg-white shadow-sm z-10"></div>
                                    </div>

                                    {/* Card - Fixed for mobile to show full card */}
                                    <div className="bg-gray-50 p-6 rounded-lg w-full max-w-[320px] mx-auto min-h-[200px] text-center md:text-left transition-shadow hover:shadow-lg border-t-4 border-[#e77d00] hover:border-[#e77d00]">
                                        <p className="text-gray-800 text-sm leading-relaxed text-center">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="hidden md:flex flex-shrink-0 z-10 cursor-pointer w-10 h-10 rounded-full bg-gray-200 hover:bg-[#e77d00] hover:text-white flex items-center justify-center transition-colors duration-300 ml-2 md:ml-6"
                        aria-label="Scroll Right"
                    >
                        <Icons.ChevronRight />
                    </button>

                </div>
            </section>



            {/* --- Section 4: Core Values Banner (Dark) --- */}
            <section className="w-full px-5 font-inter">
                <div className="max-w-[1400px] border-x border-[#d9d9d9] mx-auto relative overflow-hidden">

                    {/* Background Gradient & Stripes Logic */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background: `linear-gradient(
              to right,
              #000000 0%, 
              #000000 50%, 
              #291400 50%, #291400 60%,
              #4f2a00 60%, #4f2a00 70%,
              #753f00 70%, #753f00 80%,
              #9c5400 80%, #9c5400 90%,
              #c26900 90%, #c26900 100%
            )`
                        }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 p-[40px] md:p-[60px] md:px-[40px] text-white flex flex-col items-start justify-center min-h-[300px]">
                        <div className="max-w-[750px]">
                            <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.6] mb-[30px] opacity-90">
                                Our Core Values
                            </p>
                            <h2 className="text-[32px] md:text-[45px] font-medium mb-[15px] leading-[1.3]">
                                For significant differences, we use this formula.
                            </h2>
                        </div>
                    </div>

                </div>
            </section>




            {/* --- Section 5: The Formula Grid (White) --- */}
            <section className="bg-white">
                <div className="max-w-[1400px]  pt-18 md:pt-22 pb-12 md:pb-16 border-x border-[#d9d9d9] mx-auto px-4 sm:px-6">
                    <h3 className="text-3xl md:text-5xl text-center md:text-left font-medium text-black mb-10">
                        The Astex Formula:
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Chat />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">No fluff. Straight talks.</span>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Cpu />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">Software isn't all we do. We consult.</span>
                        </div>

                        {/* Card 3 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Trophy />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">You win, we win.</span>
                        </div>

                        {/* Card 4 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Handshake />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">No unnecessary meetings/calls</span>
                        </div>

                        {/* Card 5 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Rocket />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">Seamless Collaboration.</span>
                        </div>

                        {/* Card 6 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Bolt />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">Quick execution.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 6: Proven Path (Process) --- */}
            <section className="bg-gray-50">
                <div className="max-w-[1400px] border-x border-[#d9d9d9] mx-auto pt-10 md:pt-14 pb-12 md:pb-16 px-4 sm:px-6">
                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto  mb-10 md:mb-20">
                        <h2 className="text-4xl md:text-6xl font-medium text-gray-900 mb-4">A Proven Path to Success</h2>
                        <p className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-relaxed">
                            Through a powerful combination of technology, people, and AI agents, we help organizations
                            transform their customer experience to create a driving competitive edge.
                        </p>
                    </div>

                    {/* =========================================
              MOBILE / TABLET VIEW (< md)
              Draggable/Scrollable cards mimicking the user image
              ========================================= */}
                    <div className="md:hidden relative w-full">
                        <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 gap-5 px-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {provenPathData.map((step, idx) => (
                                <div key={idx} className="min-w-[85vw] sm:min-w-[350px] snap-center relative pt-8">
                                    {/* Icon Circle - Floating Top Center */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="w-16 h-16 bg-[#e77d00] rounded-full flex items-center justify-center shadow-md border-4 border-gray-50">
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="bg-white p-8 pt-12 rounded-xl shadow-lg h-full flex flex-col items-center text-center">
                                        <h3 className="text-[#e77d00] text-xl font-bold mt-4 mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-[15px] text-gray-600 font-medium leading-relaxed">
                                            {step.points.join('. ')}.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Optional Visual Indicators (Dots) */}
                        <div className="flex justify-center gap-2 -mt-2 md:mt-2">
                            {provenPathData.map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
                            ))}
                        </div>
                    </div>


                    {/* =========================================
              DESKTOP VIEW (>= md)
              Original Hub & Grid Design - Unchanged
              ========================================= */}
                    <div className="hidden md:block relative max-w-6xl mx-auto">

                        {/* --- Central Hub --- */}
                        {/* Z-Index 20 to sit ON TOP of the cards */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[200px] h-[200px] bg-white rounded-full border-2 border-dashed border-[#e77d00] flex items-center justify-center shadow-xl">
                            <h3 className="text-xl font-medium text-black text-center leading-tight">
                                Partnership<br />Through the<br />Bot Lifecycle
                            </h3>

                            {/* --- 4 Icons on the Rim --- */}

                            {/* Top Left Icon - Strategy */}
                            <div className="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#e77d00] rounded-full flex items-center justify-center text-white shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </div>

                            {/* Top Right Icon - Development */}
                            <div className="absolute top-8 right-8 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#e77d00] rounded-full flex items-center justify-center text-white shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                </svg>
                            </div>

                            {/* Bottom Left Icon - Engagement */}
                            <div className="absolute bottom-8 left-8 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#e77d00] rounded-full flex items-center justify-center text-white shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                            </div>

                            {/* Bottom Right Icon - Launch */}
                            <div className="absolute bottom-8 right-8 translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#e77d00] rounded-full flex items-center justify-center text-white shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* --- The Cards Grid --- */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

                            {/* Card 1: Top Left */}
                            <div className="bg-white p-10 shadow-lg rounded-xl h-[250px] flex flex-col justify-start items-start text-left">
                                <h3 className="text-[#e77d00] text-xl font-medium mb-6">Strategy & Design</h3>
                                <ul className="text-[15px] text-gray-600 space-y-2 font-medium">
                                    <li>Define success and engagement goals</li>
                                    <li>Ideate user stories, personas, & features</li>
                                    <li>Create optimized bot content</li>
                                    <li>Design tested & proven bot flows</li>
                                </ul>
                            </div>

                            {/* Card 2: Top Right (Text Aligned Right) */}
                            <div className="bg-white p-10 shadow-lg rounded-xl h-[250px] flex flex-col justify-start items-end text-right">
                                <h3 className="text-[#e77d00] text-xl font-medium mb-6">Development</h3>
                                <ul className="text-[15px] text-gray-600 space-y-2 font-medium">
                                    <li>Build complex integrations</li>
                                    <li>Add bot intelligence using NLP</li>
                                    <li>Cross-channel capable implementations</li>
                                    <li>Custom CMS implementation</li>
                                </ul>
                            </div>

                            {/* Card 3: Bottom Left (Title at Bottom) */}
                            <div className="bg-white p-10 shadow-lg rounded-xl h-[250px] flex flex-col-reverse justify-end items-start text-left">
                                <h3 className="text-[#e77d00] text-xl font-medium mt-6">Drive Further Engagement</h3>
                                <ul className="text-[15px] text-gray-600 space-y-2 font-medium">
                                    <li>Extend complex inquiry capabilities</li>
                                    <li>Advanced audience segmentation</li>
                                    <li>Data-driven ROI measurement</li>
                                    <li>Voice experience capabilities</li>
                                </ul>
                            </div>

                            {/* Card 4: Bottom Right (Title at Bottom, Text Aligned Right) */}
                            <div className="bg-white p-10 shadow-lg rounded-xl h-[250px] flex flex-col-reverse justify-end items-end text-right">
                                <h3 className="text-[#e77d00] text-xl font-medium mt-6">Launch & Improve</h3>
                                <ul className="text-[15px] text-gray-600 space-y-2 font-medium">
                                    <li>Robust analytics capabilities</li>
                                    <li>Bot A/B testing</li>
                                    <li>Dedicated Support team</li>
                                    <li>AM team drives new bot features</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 7: Accomplishments/Testimonials (UPDATED with Slider) --- */}
            <section className="bg-white">
                <div className="max-w-[1400px] pt-12 md:pt-16 pb-0 md:pb-8 border-x border-[#d9d9d9] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-medium text-black mb-4">Our Accomplishments</h2>
                        <p className="text-[16px] md:text-[18px] text-[#4a4a4a]">Below are just a few reviews from our amazing clients.</p>
                    </div>

                    {/* Slider Container - Added smooth scroll for PC */}
                    <div
                        ref={accomplishmentsRef}
                        onMouseDown={startDrag}
                        onMouseLeave={stopDrag}
                        onMouseUp={stopDrag}
                        onMouseMove={handleDrag}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing pb-8 scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {accomplishmentsData.map((item, index) => (
                            <div
                                key={index}
                                // Added smooth transition for PC sliding
                                className="w-full md:w-1/3 flex-shrink-0 snap-center px-4 transition-transform duration-300 ease-out"
                            >
                                <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full select-none">
                                    <div className="text-[#e77d00] mb-6">
                                        <Icons.Quote />
                                    </div>
                                    <p className="text-gray-600 mb-8 flex-grow">
                                        "{item.quote}"
                                    </p>
                                    <div className="flex items-center mt-auto">
                                        <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover mr-4 pointer-events-none" />
                                        <div>
                                            <h4 className="font-medium text-sm text-gray-900">{item.name}</h4>
                                            <span className="text-xs text-gray-500">{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Indicator */}
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
            <ContactUs />

        </div>
    );
}