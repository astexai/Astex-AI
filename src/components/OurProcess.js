'use client';

import React, { useEffect, useRef } from 'react';

const OurProcess = () => {
  const steps = [
    "Discovery Phase",
    "Strategy Mapping",
    "System Design",
    "AI Development",
    "Seamless Integration",
    "Launch & Scale",
    "Maintenance & Scale",
    "Dedicated Support"
  ];

  const activeIndex = 5; // "Launch & Scale" is active (Index 5)

  // Intersection Observer for Animation
  const containerRef = useRef(null);

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
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll('.step-circle');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full px-5 font-inter">
      <div className="max-w-[1400px] pt-20 md:py-20 border-x border-[#d9d9d9] mx-auto" ref={containerRef}>
        
        {/* Header */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[32px] md:text-[45px] font-medium text-[#111] mb-[15px] leading-[1.3]">
            Enjoy the Smooth Process from Idea to Business<br className="hidden md:block" /> Benefits
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#4a4a4a] max-w-[700px] mx-auto leading-[1.6]">
            We follow a structured, collaborative, and outcome-focused approach that takes your idea from vision to real, measurable business impact.
          </p>
        </div>

        {/* Process Steps (Circles) */}
        <div className="flex flex-wrap justify-center items-center gap-[15px] md:gap-0 md:flex-nowrap relative mb-[100px]">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`
                  step-circle opacity-0 translate-y-5 transition-all duration-500
                  w-[130px] h-[130px] md:w-[150px] md:h-[150px] 
                  rounded-full md:rounded-full 
                  border-2 flex justify-center items-center text-center p-2.5 
                  text-[15px] font-medium 
                  shadow-[0_4px_10px_rgba(0,0,0,0.05)]
                  
                  /* Desktop Overlap Logic */
                  md:-ml-[25px] md:first:ml-0
                  
                  /* Colors & States */
                  ${isActive 
                    ? 'bg-[#f7941d] cursor-pointer border-[#f7941d] text-white z-[1] hover:z-10 hover:-translate-y-[5px] shadow-[0_10px_20px_rgba(247,148,29,0.4)] font-semibold' 
                    : 'bg-[#f2f2f2] cursor-pointer border-[#dcdcdc] text-[#333] z-[1] hover:z-10 hover:-translate-y-[5px] bg-white'
                  }
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Render text with line break if needed */}
                <span dangerouslySetInnerHTML={{ __html: step.replace(' ', '<br/>') }}></span>
              </div>
            );
          })}
        </div>

      </div>

      {/* Internal Animation CSS */}
      <style jsx global>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        /* Override scale transform for active element when animated */
        .step-circle.active.animate-fade-in-up {
           transform: scale(1.1) translateY(0) !important;
        }
        @media (max-width: 768px) {
           .step-circle.active.animate-fade-in-up {
             transform: scale(1) translateY(0) !important;
           }
        }
      `}</style>
    </section>
  );
};

export default OurProcess;