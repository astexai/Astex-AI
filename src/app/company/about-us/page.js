'use client';
import React, { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import ContactUs from '@/components/ContactUs'; // Ensure path is correct

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

// --- Timeline Data (Updated with Astex AI Story) ---
const timelineData = [
    {
        year: "Oct 2024",
        title: "The Inception",
        description: "Founded Astex AI with a singular vision: to democratize intelligence. We started by building proprietary RAG pipelines and foundational automation frameworks."
    },
    {
        year: "Jan 2025",
        title: "Strategic Alliance",
        description: "Partnered with Tuleip AI to co-engineer next-gen AI Agents. This collaboration accelerated our capabilities in multi-agent orchestration and complex reasoning tasks."
    },
    {
        year: "Apr 2025",
        title: "First Development Milestone",
        description: "Secured and kicked off our first major custom development project. Successfully deployed a hybrid LLM solution for a mid-sized Logistics firm."
    },
    {
        year: "July 2025",
        title: "Scaling Operations",
        description: "Landed our second major development contract. Expanded our engineering team and optimized our deployment cycles to handle concurrent enterprise workflows."
    },
    {
        year: "Aug 2025",
        title: "Agentic Breakthrough",
        description: "Launched our 3rd major project focused purely on Autonomous AI Agents. This marked our shift from 'Automation' to 'Cognitive Agents' that plan and execute tasks independently."
    },
    {
        year: "Dec 2025",
        title: "Rapid Growth",
        description: "Completed 10+ AI Agent deployments and 30+ custom development projects. Surpassed $300K+ in revenue, establishing Astex AI as a premier player in the automation space."
    }
];

// --- Process / Proven Path Data (Updated for AI Agents) ---
const provenPathData = [
    {
        title: "Discovery & Strategy",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        ),
        points: [
            "Analyze current workflow bottlenecks",
            "Define AI Agent personas & KPIs",
            "Map data sources & API endpoints",
            "Architect the automation blueprint"
        ]
    },
    {
        title: "Agent Development",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
        ),
        points: [
            "Build custom LLM chains (LangChain)",
            "Integrate Vector Databases (RAG)",
            "Develop function-calling capabilities",
            "Ensure enterprise-grade security"
        ]
    },
    {
        title: "Orchestration & Scale",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
        ),
        points: [
            "Deploy Multi-Agent Systems",
            "Implement Human-in-the-loop (HITL)",
            "Connect to CRMs, ERPs, & Slack",
            "Real-time performance monitoring"
        ]
    },
    {
        title: "Optimization",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        ),
        points: [
            "Prompt Engineering refinement",
            "Reduction in token costs",
            "Latency optimization",
            "Continuous model fine-tuning"
        ]
    }
];

// --- Accomplishments Data (Updated with AI/Automation Context) ---
const accomplishmentsData = [
    {
        quote: "Astex AI transformed our customer support. Their agents handle 80% of our queries autonomously, saving us hours daily. The transition was seamless.",
        name: "James Carter",
        role: "COO, Nexus Logistics",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
    },
    {
        quote: "We needed a custom solution to automate our lead qualification. Astex delivered a system that not only qualifies leads but schedules meetings automatically.",
        name: "Elena Rodriguez",
        role: "Head of Sales, FinTech Pro",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
    },
    {
        quote: "The team at Astex AI understands the nuances of LLMs. They didn't just give us a chatbot; they gave us a reasoning engine that integrates with our ERP.",
        name: "Michael Chen",
        role: "CTO, Spherix Data",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
        quote: "Their 'No fluff' approach is refreshing. They audited our workflows, identified the bottlenecks, and deployed agents that actually work in production.",
        name: "Sarah Jenkins",
        role: "VP Operations, OmniRetail",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
    },
    {
        quote: "Astex AI helped us scale our content operations by 10x using autonomous drafting agents. Highly professional and technically sound.",
        name: "David Ross",
        role: "Founder, MediaFlow",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"
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
            const cardWidth = container.children[0].offsetWidth;
            const index = Math.round(container.scrollLeft / cardWidth);
            setActiveSlide(index);
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Head>
                <title>About Astex AI | Intelligent Automation Experts</title>
                <meta name="description" content="Learn about Astex AI, a leading AI Automation agency building autonomous agents and custom software to streamline enterprise workflows." />
            </Head>

            {/* --- Section 1: Hero --- */}
            <section className="">
                <div className="pt-8 md:pt-16 pb-12 max-w-[1400px] border-x border-[#d9d9d9] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-6 md:mb-10">
                        <span className="text-gray-500 text-sm font-semibold tracking-widest uppercase">Home • Company • <span className='text-[#e77d00]'>About Us</span></span>
                        <h1 className="mt-4 text-4xl md:text-6xl font-medium text-black">
                             Building the <span className="text-[#e77d00]">Autonomous</span> Future.
                        </h1>
                    </div>

                    <div className="relative w-full h-[200px] md:h-[400px] rounded-sm overflow-hidden group">
                        {/* Use a tech/team related image here */}
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Astex AI Team"
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute bottom-6 left-6 md:bottom-6 md:left-16">
                            <span className="text-white text-xs md:text-sm font-medium uppercase tracking-wider mb-2 block border-l-4 border-[#e77d00] pl-3">
                                Astex AI
                            </span>
                            <h2 className="text-3xl md:text-6xl font-medium text-white">
                                Scaling Intelligence.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Intro Text --- */}
            <section className="-mt-5 md:-mt-0">
                <div className="max-w-[1400px] border-x border-[#d9d9d9] mx-auto px-6 text-center">
                    <p className="text-lg md:text-xl md:text-xl md:ml-50 mx-auto text-gray-600 leading-relaxed">
                        At <span className="font-bold text-[#1a1a1a]">Astex AI</span>, we believe the future isn't about working harder; it's about working smarter through intelligence. 
                        We started with a simple mission: to eliminate the mundane. 
                        From manual data entry to complex decision-making, we engineer <span className="text-[#e77d00]">AI Agents</span> that integrate seamlessly into your business, 
                        allowing your team to focus on what truly matters—innovation and growth.
                    </p>
                </div>
            </section>

            {/* --- Section 3: Evolution Timeline (Carousel Style) --- */}
            <section className="pt-20 md:pt-30 pb-4 md:pb-18 max-w-[1400px] border-x border-[#d9d9d9] mx-auto px-4 sm:px-6">
                <h2 className="text-4xl md:text-6xl text-center md:text-left font-medium text-black mb-2">
                    The Astex<span className="text-[#e77d00]">ai</span> Journey:
                </h2>
                <p className="text-gray-600 mb-0 md:mb-12 text-center md:text-left text-lg">From Inception to Impact.</p>

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
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
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
                                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#d9d9d9]"></div>
                                        <div className="w-4 h-4 rounded-full border-[3px] border-[#e77d00] bg-white shadow-sm z-10"></div>
                                    </div>

                                    {/* Card */}
                                    <div className="bg-gray-50 p-6 rounded-lg w-full max-w-[320px] mx-auto min-h-[200px] text-center md:text-left transition-shadow hover:shadow-lg border-t-4 border-[#e77d00] hover:border-[#e77d00]">
                                        <h4 className="text-lg font-bold text-black mb-2">{item.title}</h4>
                                        <p className="text-gray-800 text-sm leading-relaxed">
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

                    <div className="relative z-10 p-[40px] md:p-[60px] md:px-[40px] text-white flex flex-col items-start justify-center min-h-[300px]">
                        <div className="max-w-[750px]">
                            <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.6] mb-[30px] opacity-90">
                                Our Core Values
                            </p>
                            <h2 className="text-[32px] md:text-[45px] font-medium mb-[15px] leading-[1.3]">
                                We don't just write code. <br/> We Engineer Intelligence.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 5: The Formula Grid (White) --- */}
            <section className="bg-white">
                <div className="max-w-[1400px] pt-18 md:pt-22 pb-12 md:pb-16 border-x border-[#d9d9d9] mx-auto px-4 sm:px-6">
                    <h3 className="text-3xl md:text-5xl text-center md:text-left font-medium text-black mb-10">
                        The Astex Formula:
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Chat />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">No fluff. Precision Engineering.</span>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Cpu />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">Software + Strategy = Success.</span>
                        </div>

                        {/* Card 3 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Trophy />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">ROI-First Mindset.</span>
                        </div>

                        {/* Card 4 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Handshake />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">Transparent Partnerships.</span>
                        </div>

                        {/* Card 5 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Rocket />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">Rapid Deployment.</span>
                        </div>

                        {/* Card 6 */}
                        <div className="flex items-center p-6 bg-gray-50 rounded-lg transition hover:bg-[#e77d00]/10">
                            <div className="text-[#e77d00] mr-5 flex-shrink-0">
                                <Icons.Bolt />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">Scalable Architecture.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 6: Proven Path (Process) --- */}
            <section className="bg-gray-50">
                <div className="max-w-[1400px] border-x border-[#d9d9d9] mx-auto pt-10 md:pt-14 pb-12 md:pb-16 px-4 sm:px-6">
                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
                        <h2 className="text-4xl md:text-6xl font-medium text-black mb-4">A Proven Path to Automation</h2>
                        <p className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-relaxed">
                            Through a powerful combination of technology, people, and autonomous agents, we help organizations
                            transform their operational efficiency to create a competitive edge.
                        </p>
                    </div>

                    {/* MOBILE / TABLET VIEW */}
                    <div className="md:hidden relative w-full">
                        <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 gap-5 px-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {provenPathData.map((step, idx) => (
                                <div key={idx} className="min-w-[85vw] sm:min-w-[350px] snap-center relative pt-8">
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="w-16 h-16 bg-[#e77d00] rounded-full flex items-center justify-center shadow-md border-4 border-gray-50">
                                            {step.icon}
                                        </div>
                                    </div>
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
                         <div className="flex justify-center gap-2 -mt-2 md:mt-2">
                            {provenPathData.map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
                            ))}
                        </div>
                    </div>

                    {/* DESKTOP VIEW */}
                    <div className="hidden md:block relative max-w-6xl mx-auto">
                        {/* Central Hub */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[200px] h-[200px] bg-white rounded-full border-2 border-dashed border-[#e77d00] flex items-center justify-center shadow-xl">
                            <h3 className="text-xl font-medium text-black text-center leading-tight">
                                Partnership<br />Through the<br />Agent Lifecycle
                            </h3>

                            {/* Icons on Rim */}
                            <div className="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#e77d00] rounded-full flex items-center justify-center text-white shadow-md">
                                {provenPathData[0].icon}
                            </div>
                            <div className="absolute top-8 right-8 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#e77d00] rounded-full flex items-center justify-center text-white shadow-md">
                                {provenPathData[1].icon}
                            </div>
                            <div className="absolute bottom-8 left-8 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#e77d00] rounded-full flex items-center justify-center text-white shadow-md">
                                {provenPathData[2].icon}
                            </div>
                            <div className="absolute bottom-8 right-8 translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#e77d00] rounded-full flex items-center justify-center text-white shadow-md">
                                {provenPathData[3].icon}
                            </div>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                            {/* Card 1 */}
                            <div className="bg-white p-10 shadow-lg rounded-xl h-[250px] flex flex-col justify-start items-start text-left">
                                <h3 className="text-[#e77d00] text-xl font-medium mb-6">{provenPathData[0].title}</h3>
                                <ul className="text-[15px] text-gray-600 space-y-2 font-medium">
                                    {provenPathData[0].points.map((p,i)=> <li key={i}>{p}</li>)}
                                </ul>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white p-10 shadow-lg rounded-xl h-[250px] flex flex-col justify-start items-end text-right">
                                <h3 className="text-[#e77d00] text-xl font-medium mb-6">{provenPathData[1].title}</h3>
                                <ul className="text-[15px] text-gray-600 space-y-2 font-medium">
                                     {provenPathData[1].points.map((p,i)=> <li key={i}>{p}</li>)}
                                </ul>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white p-10 shadow-lg rounded-xl h-[250px] flex flex-col-reverse justify-end items-start text-left">
                                <h3 className="text-[#e77d00] text-xl font-medium mt-6">{provenPathData[2].title}</h3>
                                <ul className="text-[15px] text-gray-600 space-y-2 font-medium">
                                     {provenPathData[2].points.map((p,i)=> <li key={i}>{p}</li>)}
                                </ul>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white p-10 shadow-lg rounded-xl h-[250px] flex flex-col-reverse justify-end items-end text-right">
                                <h3 className="text-[#e77d00] text-xl font-medium mt-6">{provenPathData[3].title}</h3>
                                <ul className="text-[15px] text-gray-600 space-y-2 font-medium">
                                     {provenPathData[3].points.map((p,i)=> <li key={i}>{p}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 7: Accomplishments/Testimonials --- */}
            <section className="bg-white">
                <div className="max-w-[1400px] pt-12 md:pt-16 pb-0 md:pb-8 border-x border-[#d9d9d9] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-medium text-black mb-4">Our Impact</h2>
                        <p className="text-[16px] md:text-[18px] text-[#4a4a4a]">See what industry leaders are saying about Astex AI.</p>
                    </div>

                    {/* Slider */}
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
                                className="w-full md:w-1/3 flex-shrink-0 snap-center px-4 transition-transform duration-300 ease-out"
                            >
                                <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full select-none">
                                    <div className="text-[#e77d00] mb-6">
                                        <Icons.Quote />
                                    </div>
                                    <p className="text-gray-600 mb-8 flex-grow italic">
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

                    {/* Dots */}
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