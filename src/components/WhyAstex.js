import React from 'react';

const WhyAstex = () => {
  const features = [
    {
      title: "Autonomous Intelligence",
      desc: "We build AI systems that think, act, and evolve — not just respond.",
      isHighlight: true,
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#f7941d] stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
          <path d="M9.5 2h5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
          <path d="M12 8v4"/>
          <path d="M12 12l-4 4"/>
          <path d="M12 12l4 4"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="7" cy="17" r="2"/>
          <circle cx="17" cy="17" r="2"/>
          <path d="M5 17h-2"/>
          <path d="M21 17h-2"/>
          <path d="M2 17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"/>
        </svg>
      )
    },
    {
      title: "Enterprise Reliability",
      desc: "Robust, scalable AI architectures designed for mission-critical business systems.",
      isHighlight: false,
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#f7941d] stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    },
    {
      title: "Impact Automation",
      desc: "Automation that doesn’t just save time — it drives measurable growth.",
      isHighlight: false,
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#f7941d] stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <path d="M9 3v18"/>
          <path d="M14 9h4"/>
          <path d="M14 15h4"/>
          <rect x="9" y="8" width="5" height="2"/> 
          <rect x="9" y="14" width="5" height="2"/> 
        </svg>
      )
    },
    {
      title: "Seamless Integration",
      desc: "Connects with your tech stack — workflows, CRMs, tools — without friction.",
      isHighlight: false,
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#f7941d] stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      )
    },
    {
      title: "Scalable Growth",
      desc: "From startups to global enterprises — built to grow with your business.",
      isHighlight: false,
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#f7941d] stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
          <path d="M2 20h20"/>
          <path d="M16 4l-4 4-4-4"/>
          <path d="M6 20l4-10 4 6 4-12"/>
          <rect x="18" y="2" width="4" height="6"/>
        </svg>
      )
    },
    {
      title: "AI Innovation",
      desc: "We’re not just using AI — we’re inventing the way it works in real business environments.",
      isHighlight: false,
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#f7941d] stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
          <path d="M12 2a7 7 0 0 0-7 7c0 2 0 3 2 4.5V15a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.5c2-1.5 2-2.5 2-4.5a7 7 0 0 0-7-7z"/>
          <path d="M12 8v4"/>
          <path d="M10 10h4"/>
        </svg>
      )
    },
  ];

  return (
    <section className="bg-white text-[#111] font-inter px-5">
      <div className="max-w-[1400px]  py-20 border border-[#d9d9d9] mx-auto">
        
        {/* Header Section */}
        <div className="mb-[50px] pl-6 text-left max-w-[800px]">
          <span className="text-[16px] font-medium text-black/80 mb-[15px] block">
            Why Astex AI
          </span>
          <h2 className="text-[30px] md:text-[45px] font-medium leading-[1.2] mb-5 text-black tracking-[-1px]">
            Trusted by Forward-Thinking Teams Worldwide
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6] max-w-[700px]">
            Astex AI builds intelligent automation and autonomous systems that improve efficiency, reduce manual work, and help businesses scale faster.
          </p>
        </div>

        {/* 
          Grid Section 
          - Logic: Container has Top & Left borders.
          - Items have Bottom & Right borders.
          - This prevents double borders.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#d9d9d9]">
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`
                p-[30px] md:p-[40px] 
                border-r border-b border-[#d9d9d9] 
                flex flex-col items-start 
                transition-colors duration-300
                ${item.isHighlight ? 'bg-[#fffbf5]' : 'bg-white hover:bg-gray-50'}
              `}
            >
              {/* Icon Box */}
              <div className="w-[48px] h-[48px] mb-[25px]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className={`text-[20px] font-medium mb-[15px] ${item.isHighlight ? 'text-[#f7941d]' : 'text-[#111]'}`}>
                {item.title}
              </h3>

              {/* Description */}
              <p className={`text-[16px] leading-[1.6] ${item.isHighlight ? 'text-[#d68324]' : 'text-[#555]'}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyAstex;