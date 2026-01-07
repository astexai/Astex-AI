import React from 'react';
import Link from 'next/link';

const FinalCta = () => {
  return (
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
        <div className="relative z-10 p-[40px] md:p-[60px] md:px-[50px] text-white flex flex-col items-start justify-center min-h-[300px]">
          <div className="max-w-[750px]">
            <h2 className="text-[32px] md:text-[45px] font-medium mb-[15px] leading-[1.3]">
              Start Your Journey Toward Smarter, Scalable Operations
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.6] mb-[30px] opacity-90">
              Accelerate your growth with intelligent AI solutions that streamline operations and drive real business impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-[15px]">
              <Link href="/company/contact-us" className="bg-[#f7941d] hover:bg-[#d67500] text-black font-semibold py-[12px] px-[24px] text-[15px] transition-colors duration-300 border-none cursor-pointer">
                Get Started
              </Link>
              <Link href="/company/contact-us" className="bg-[#f7941d] hover:bg-[#d67500] text-black font-semibold py-[12px] px-[24px] text-[15px] transition-colors duration-300 border-none cursor-pointer">
                Talk to an expert
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCta;