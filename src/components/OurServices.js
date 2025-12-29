// export default OurServices;
'use client';
import React from 'react';

const OurServices = () => {
  // Data for First Row (Right Scroll)
  const row1 = [
    {
      title: "Conversational AI Systems",
      desc: "AI-driven interaction frameworks for customer engagement, workflow assistance, and intelligent communication environments."
    },
    {
      title: "Enterprises RAG",
      desc: "Secure, context-aware data reasoning systems that connect organizational knowledge, documents, and platforms."
    },
    {
      title: "Intelligence Analytics",
      desc: "AI-enabled monitoring systems providing deep decision-support insights, predictive visibility and governance."
    },
    {
      title: "Predictive Modeling",
      desc: "Advanced forecasting engines that analyze historical data to predict future trends and optimize resource allocation."
    }
  ];

  // Data for Second Row (Left Scroll)
  const row2 = [
    {
      title: "Autonomous Agent Orchestration",
      desc: "Multi-agent execution environments for task planning, workflow delegation, and end-to-end process automation."
    },
    {
      title: "Business Process Automation",
      desc: "Automate routine tasks while gaining real-time insights for informed decision-making."
    },
    {
      title: "Voice Intelligence",
      desc: "AI-powered voice experiences that modernize contact operations, automate support, and ensure real-time response handling."
    },
    {
      title: "Computer Vision Systems",
      desc: "Automated visual inspection and analysis tools that transform video feeds into actionable operational data."
    }
  ];

  return (
    <div className="w-full bg-white font-inter">
      {/* 
        Container Limitation:
        - max-w-[1400px] constrains the width.
        - overflow-hidden cuts off anything outside this 1400px box.
      */}
      <div className="max-w-[1400px] py-20 border-x border-[#d9d9d9] mx-auto px-5 md:px-0 relative overflow-hidden">
        
        {/* Header Section */}
        <div className="text-center max-w-[900px] mx-auto mb-[60px] px-5">
          <span className="text-[16px] font-medium text-black/80 mb-[15px] inline-block">
            Our Services
          </span>
          <h2 className="text-[32px] md:text-[45px] font-medium text-[#111111] mb-5 leading-[1.2] tracking-[-0.5px]">
            Autonomous AI Systems for Modern Enterprises
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] max-w-[750px] mx-auto">
            Purpose-built AI agents and automation systems that enhance intelligence, streamline operations, and enable scalable digital transformation.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex flex-col gap-[30px] w-full">
          
          {/* Fade Masks - Strictly inside the 1400px container */}
          <div className="absolute top-0 left-0 w-[80px] md:w-[150px] h-full z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[80px] md:w-[150px] h-full z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          {/* 
             ROW 1: Scroll Right 
             Logic: Two identical sets of cards moving together.
          */}
          <div className="flex w-full overflow-hidden">
             <div className="flex gap-[30px] animate-scroll-right flex-shrink-0 pr-[30px]">
                {/* Set 1 (Duplicated to ensure length) */}
                {[...row1, ...row1].map((item, index) => (
                  <ServiceCard key={`r1-a-${index}`} title={item.title} desc={item.desc} />
                ))}
             </div>
             <div className="flex gap-[30px] animate-scroll-right flex-shrink-0 pr-[30px]">
                {/* Set 2 (Identical Clone) */}
                {[...row1, ...row1].map((item, index) => (
                  <ServiceCard key={`r1-b-${index}`} title={item.title} desc={item.desc} />
                ))}
             </div>
          </div>

          {/* 
             ROW 2: Scroll Left 
          */}
          <div className="flex w-full overflow-hidden">
             <div className="flex gap-[30px] animate-scroll-left flex-shrink-0 pr-[30px]">
                {/* Set 1 */}
                {[...row2, ...row2].map((item, index) => (
                  <ServiceCard key={`r2-a-${index}`} title={item.title} desc={item.desc} />
                ))}
             </div>
             <div className="flex gap-[30px] animate-scroll-left flex-shrink-0 pr-[30px]">
                {/* Set 2 */}
                {[...row2, ...row2].map((item, index) => (
                  <ServiceCard key={`r2-b-${index}`} title={item.title} desc={item.desc} />
                ))}
             </div>
          </div>

        </div>
      </div>

      {/* Internal CSS for seamless looping */}
      <style jsx>{`
        /* Move Left Animation */
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        
        /* Move Right Animation (Start at -100% and move to 0) */
        @keyframes scrollRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scrollLeft 50s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 50s linear infinite;
        }

        /* Hover Pause */
        .flex:hover .animate-scroll-left,
        .flex:hover .animate-scroll-right {
          animation-play-state: paused;
        }

        /* Responsive Speed */
        @media (max-width: 768px) {
           .animate-scroll-left, .animate-scroll-right {
             animation-duration: 30s; 
           }
        }
      `}</style>
    </div>
  );
};

// Reusable Card Component
const ServiceCard = ({ title, desc }) => {
  return (
    <div className="
      bg-white 
      border border-[#d9d9d9] 
      rounded-[16px] 
      p-[30px] md:p-[40px] 
      w-[300px] md:w-[450px] 
      flex-shrink-0 
      flex flex-col 
      justify-start 
      transition-all duration-300 
      hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] 
      hover:border-[#ccc]
    ">
      <h3 className="text-[#f7941d] text-[20px] font-medium mb-[15px]">
        {title}
      </h3>
      <p className="text-[16px] text-[#222] leading-[1.5]">
        {desc}
      </p>
    </div>
  );
};

export default OurServices;