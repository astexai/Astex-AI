'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const CaseStudy = () => {
  // Intersection Observer for Text Animation
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll('.anim-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white px-5 font-inter" ref={sectionRef}>
      <div className="max-w-[1400px] px-8 border-x border-[#d9d9d9]  mx-auto">
        
        {/* Case Study Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[50px] mb-10 items-start">
          
          {/* Left Side */}
          <div className="anim-item opacity-0 translate-y-5 transition-all duration-700">
            <h4 className="text-[14px] md:text-[16px] uppercase tracking-[0.5px] text-black/80 mb-2.5 font-semibold">
              Case Study
            </h4>
            <h3 className="text-[32px] md:text-[45px] font-medium leading-[1.2] text-black">
              Scaling Patient Care with Intelligent WhatsApp Agents
            </h3>
          </div>

          {/* Right Side */}
          <div className="anim-item opacity-0 translate-y-5 transition-all duration-700 delay-200 flex flex-col gap-[25px]">
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#4a4a4a]">
             A conversational WhatsApp AI Agent that streamlines the full patient workflow: appointment booking, document collection, reminders, prescription sharing, feedback capture, and ongoing care follow-ups — all handled automatically without manual intervention.
            </p>
            
            <Link href="/case-studies/clinic-whatsapp-automation" className="bg-[#f7941d] text-black py-[14px] px-[28px] border-none font-semibold text-[15px] cursor-pointer w-fit flex items-center gap-2.5 hover:opacity-90 transition-opacity">
              Read the case study
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* Case Study Image with AI Overlay */}
        <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden bg-gray-100 group">
          
          {/* Grid Overlay */}
          <div 
            className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          ></div>

          {/* Image */}
          <img 
            src="/assets/case-studies/whatsapp.png"
            alt="AI Network Background"
            className="w-full h-full object-cover transition-transform duration-700"
          />

          {/* Center Text Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[48px] md:text-[64px] font-bold tracking-[2px] z-[2] drop-shadow-[0_0_20px_rgba(0,150,255,0.8)]">
            
          </div>

        </div>

      </div>
      
      {/* Internal Animation CSS */}
      <style jsx>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default CaseStudy;