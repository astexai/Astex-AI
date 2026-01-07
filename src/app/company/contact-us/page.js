'use client';
import React, { useState, useRef } from 'react';
import Partners from '@/components/Partners';
import Accomplishments from '@/components/Accomplishments';
import Link from 'next/link';

// --- Icons (Extracted for Accomplishments) ---
const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774-.471 1.402-1.16 1.814-1.964a6.02 6.02 0 00.603-2.541c0-1.664-.62-2.958-1.558-3.93-.894-.927-2.077-1.45-3.494-1.533a8.38 8.38 0 013.063-5.26c.703-.567 1.35-1.106 1.933-1.616a.75.75 0 10-1.01-1.121c-.628.566-1.319 1.157-2.062 1.764C5.602 6.845 3.197 9.87 3 13.918c-.015.305.006.602.057.892.11.62.333 1.202.66 1.73.496.796 1.12 1.402 1.815 1.78a5.275 5.275 0 01-1.036 3.014.75.75 0 01-1.298-.756 6.756 6.756 0 00.606-2.934z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M15.804 21.644A6.707 6.707 0 0017 21.75a6.721 6.721 0 003.583-1.029c.774-.471 1.402-1.16 1.814-1.964a6.02 6.02 0 00.603-2.541c0-1.664-.62-2.958-1.558-3.93-.894-.927-2.077-1.45-3.494-1.533a8.38 8.38 0 013.063-5.26c.703-.567 1.35-1.106 1.933-1.616a.75.75 0 10-1.01-1.121c-.628.566-1.319 1.157-2.062 1.764C16.602 6.845 14.197 9.87 14 13.918c-.015.305.006.602.057.892.11.62.333 1.202.66 1.73.496.796 1.12 1.402 1.815 1.78a5.275 5.275 0 01-1.036 3.014.75.75 0 011.298-.756 6.756 6.756 0 00-.606-2.934z" clipRule="evenodd" />
  </svg>
);

// --- Accomplishments Data ---
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

const ContactUs = () => {
  // --- Refs & State for Accomplishments Slider ---
  const accomplishmentsRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  // --- Accomplishments Handlers ---
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

  const handleScroll = () => {
    if (accomplishmentsRef.current) {
      const container = accomplishmentsRef.current;
      const cardWidth = container.children[0].offsetWidth;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveSlide(index);
    }
  };

  return (
    <div className="min-h-screen text-black font-sans">
      
      {/* 1. Main Contact Form Section */}
      <div className="max-w-[1400px] px-4 md:px-10 border-x border-[#d9d9d9] mx-auto pt-10 md:pt-16 pb-4">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8 tracking-wide flex items-center gap-2">
          <Link href="/" className="hover:text-[#e77d00] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          </Link>
          <span>/</span>
          <span className="">Company</span> 
          <span>/</span> 
          <span className="text-[#e77d00] font-medium">Contact Us</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-[32px] md:text-[45px] font-medium text-center md:text-left text-[#e77d00] mb-8 md:mb-12">
          How can we help you?
        </h1>

        {/* Form Card */}
        <div className="w-full bg-white">
          
          {/* Header Section of Card */}
          <div className="text-center mb-10 px-4">
            <h2 className="text-xl md:text-2xl font-medium text-black mb-3">
              Your business results matter
            </h2>
            <p className="text-black/80 text-md md:text-lg">
              Achieve them with minimized risk through our bespoke innovation capabilities. Fill in the form below.
            </p>
          </div>

          {/* Form Structure */}
          <form className="w-full">
            
            {/* Custom Grid Layout */}
            <div className="border-t border-b border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Left Column (Personal Info) */}
                <div className="grid grid-cols-2 border-b lg:border-b-0 lg:border-r border-gray-200">
                  
                  {/* First Name */}
                  <div className="col-span-1 border-r border-b border-gray-200 p-6 relative group transition-colors hover:bg-gray-50">
                    <label htmlFor="firstName" className="block text-base text-black/90 mb-2">
                      First name <span className="text-[#e77d00]">*</span>
                    </label>
                    <input 
                      placeholder='Write your first name'
                      type="text" 
                      id="firstName" 
                      className="w-full bg-transparent outline-none text-black placeholder-gray-400"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="col-span-1 border-b border-gray-200 p-6 relative group transition-colors hover:bg-gray-50">
                    <label htmlFor="lastName" className="block text-base text-black/90 mb-2">
                      Last name <span className="text-[#e77d00]">*</span>
                    </label>
                    <input 
                      placeholder='Write your last name'
                      type="text" 
                      id="lastName" 
                      className="w-full bg-transparent outline-none text-black placeholder-gray-400"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="col-span-2 border-b border-gray-200 p-6 relative group transition-colors hover:bg-gray-50">
                    <label htmlFor="email" className="block text-base text-black/90 mb-2">
                      Business email <span className="text-[#e77d00]">*</span>
                    </label>
                    <input 
                      placeholder='Write your business email'
                      type="email" 
                      id="email" 
                      className="w-full bg-transparent outline-none text-black placeholder-gray-400"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="col-span-2 p-6 relative group transition-colors hover:bg-gray-50">
                    <label htmlFor="source" className="block text-base text-black/90 mb-2">
                      What Service you are looking for?
                    </label>
                    <input 
                      placeholder='Write your service'
                      type="text" 
                      id="service" 
                      className="w-full bg-transparent outline-none text-black placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Right Column (Message) */}
                <div className="p-6 relative transition-colors hover:bg-gray-50 flex flex-col h-full min-h-[250px] lg:min-h-auto">
                  <label htmlFor="message" className="block text-base text-black/90 mb-2">
                    How can we help you? <span className="text-[#e77d00]">*</span>
                  </label>
                  <textarea 
                    placeholder='Write your message'
                    id="message" 
                    className="w-full h-full bg-transparent outline-none text-black resize-none flex-grow"
                  ></textarea>
                </div>

              </div>
            </div>

            {/* Footer Section */}
            <div className="mt-4 flex justify-end">
              <span className="text-xs font-medium text-black">
                <span className="text-[#e77d00]">*</span> Required fields
              </span>
            </div>

            {/* Checkboxes */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="privacy" 
                    type="checkbox" 
                    className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-[#e77d00] text-[#e77d00] cursor-pointer" 
                  />
                </div>
                <div className="ml-3 text-base">
                  <label htmlFor="privacy" className="text-black">
                    Yes, I agree with Astex AI's <a href="#" className="text-[#e77d00] underline hover:text-black">Term's & condition</a> and <a href="#" className="text-[#e77d00] underline hover:text-black">Privacy policy</a>. <span className="text-[#e77d00]">*</span>
                  </label>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="newsletter" 
                    type="checkbox" 
                    className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-[#e77d00] text-[#e77d00] cursor-pointer" 
                  />
                </div>
                <div className="ml-3 text-base">
                  <label htmlFor="newsletter" className="text-black">
                    Yes, I'd like to receive Astex AI's newsletter with updates, valuable tech resources, and useful digitalization tips.
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-12 flex justify-center">
              <button 
                type="submit" 
                className="bg-[#e77d00] cursor-pointer text-white px-8 py-3 rounded-full text-md md:text-lg font-medium hover:bg-black transition-colors duration-300"
              >
                Send message
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* 2. Partners Component */}
      <Partners />

      {/* 3. Accomplishments Section (Implemented from AboutUs) */}
      <Accomplishments />

    </div>
  );
};

export default ContactUs;