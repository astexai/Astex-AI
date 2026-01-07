import React from 'react';

const SectionBanner = () => {
  return (
    <section className="w-full bg-white px-5 flex justify-center font-inter">
      
      <div 
        className="
          relative w-full max-w-[1400px] min-h-[500px] mx-auto 
          border-x border-[#d9d9d9] 
          bg-cover bg-no-repeat 
          bg-[position:right_center] md:bg-center
          flex items-center overflow-hidden
        "
        style={{
          backgroundImage: "url('https://masterofcode.com/wp-content/uploads/2024/07/hero_large.jpg')"
        }}
      >
        
        {/* Inner Content Wrapper */}
        <div className="w-full px-5 md:px-[60px] flex items-center">
          
          {/* 
            Hero Content Block
            - Mobile: Has white background + blur for readability
            - Desktop: Transparent background
          */}
          <div className="
            relative z-10 max-w-[550px] w-full
            bg-white/75 backdrop-blur-sm p-8 rounded-xl
            md:bg-transparent md:backdrop-blur-none md:p-0 md:rounded-none
          ">
            
            {/* Heading */}
            <h1 className="text-[32px] md:text-[45px] font-medium leading-[1.2] text-[#111] mb-5 tracking-[-0.5px]">
              Building Intelligent Systems for<br />
              <span className="text-[#f7941d] font-semibold">a Smarter World</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#4a4a4a] mb-[35px] max-w-[500px]">
              Empowering businesses with AI-driven automation and future-ready digital intelligence built for global impact.
            </p>
            
            {/* CTA Button */}
            <a 
              href="/company/contact-us" 
              className="
                group inline-flex items-center justify-center gap-3 
                bg-[#f7941d] text-black 
                py-[14px] px-[32px] 
                text-[16px] font-semibold 
                border-none transition-all duration-200 
                hover:bg-[#e68a1b] hover:-translate-y-[2px]
                w-full md:w-auto
              "
            >
              Book Consultation
              {/* Arrow Icon */}
              <svg 
                viewBox="0 0 24 24" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-[18px] h-[18px] stroke-[2.5] stroke-black fill-none transition-transform duration-200 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionBanner;