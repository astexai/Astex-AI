'use client';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  // --- Typewriter State & Logic ---
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Startups,", "Teams,", "Enterprises,"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Determine typing speed
      let typeSpeed = isDeleting ? 50 : 150; 

      if (!isDeleting && text === fullText) {
        // Word finished typing, pause before deleting
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        // Word finished deleting, move to next
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typeSpeed = 500;
      }

      setTypingSpeed(typeSpeed);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="font-inter bg-white overflow-x-hidden border-t border-[#d9d9d9]">
      {/* Hero Section Container */}
      <section className="flex flex-col md:flex-row border-x border-[#d9d9d9] max-w-[1400px] mx-auto relative pt-20 min-h-[600px]">
        
        {/* Left: Content 
            - Added z-20 to sit above the grid on mobile
            - Added text-center for mobile, md:text-left for desktop
        */}
        <div className="w-full md:w-1/2 px-5 md:pl-[5%] z-20 relative text-center md:text-left">
          <h1 className="text-[36px] md:text-[50px] leading-[1.2] text-black font-medium mb-6 tracking-[-1px]">
            AI Development &<br />
            Automation Company<br />
            <strong className="font-semibold">
              Trusted by <span className="text-[#e77d00]">{text}</span>
              <span className="animate-pulse">|</span>
            </strong>
          </h1>
          
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#333333] mb-10 max-w-[600px] mx-auto md:mx-0">
            We build intelligent AI agents, automation workflows, and smart business systems that help organizations eliminate manual work, improve efficiency, and scale operations with next-generation technology.
          </p>

          {/* CTA Buttons - Centered on mobile, Start on Desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 md:gap-7">
            <button className="bg-[#e77d00] text-black px-8 py-4 text-[18px] font-semibold border-none cursor-pointer flex items-center gap-2.5 hover:opacity-90 transition-opacity rounded-md sm:rounded-none w-full sm:w-auto justify-center">
              Get Started
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </button>
            <a href="#" className="text-[18px] text-black no-underline border-b border-transparent hover:border-black transition-colors">
              Talk to our team
            </a>
          </div>
        </div>

        {/* Right: Geometric Visual Pattern 
            - Positioned Absolute on ALL devices to ensure text flows over it on mobile if needed.
            - z-0 ensures it stays behind the text on mobile.
            - Added opacity-30 on mobile so text is readable over it, full opacity on desktop.
        */}
        <div className="absolute right-0 top-0 w-full h-full md:w-1/2 flex justify-end overflow-hidden z-0 pointer-events-none md:pointer-events-auto opacity-20 md:opacity-100">
          
          {/* Grid Logic */}
          <div className="grid grid-cols-[repeat(6,70px)] grid-rows-[repeat(7,70px)] md:grid-cols-[repeat(6,100px)] md:grid-rows-[repeat(7,100px)]">
            
            {/* Row 1 */}
            <div className="w-full h-full bg-[#ffdd91]"></div>
            <div className="w-full h-full bg-[#ffcd78]"></div>
            <div className="w-full h-full bg-[#ffbd60]"></div>
            <div className="w-full h-full bg-[#ffad48]"></div>
            <div className="w-full h-full bg-[#f89d31]"></div>
            <div className="w-full h-full bg-[#e77d00]"></div>

            {/* Row 2 */}
            <div></div> {/* Empty */}
            <div className="w-full h-full bg-[#ffdd91]"></div>
            <div className="w-full h-full bg-[#ffcd78]"></div>
            <div className="w-full h-full bg-[#ffbd60]"></div>
            <div className="w-full h-full bg-[#ffad48]"></div>
            <div className="w-full h-full bg-[#f89d31]"></div>

            {/* Row 3 */}
            <div></div> {/* Empty */}
            <div></div> {/* Empty */}
            <div className="w-full h-full bg-[#ffdd91]"></div>
            <div className="w-full h-full bg-[#ffcd78]"></div>
            <div className="w-full h-full bg-[#ffbd60]"></div>
            <div className="w-full h-full bg-[#ffad48]"></div>

            {/* Row 4 */}
            <div></div> {/* Empty */}
            <div></div> {/* Empty */}
            <div></div> {/* Empty */}
            <div className="w-full h-full bg-[#ffdd91]"></div>
            <div className="w-full h-full bg-[#ffcd78]"></div>
            <div className="w-full h-full bg-[#ffbd60]"></div>

            {/* Row 5 */}
            <div></div> {/* Empty */}
            <div></div> {/* Empty */}
            <div></div> {/* Empty */}
            <div></div> {/* Empty */}
            <div className="w-full h-full bg-[#ffdd91]"></div>
            <div className="w-full h-full bg-[#ffcd78]"></div>

            {/* Row 6 */}
            <div></div> {/* Empty */}
            <div></div> {/* Empty */}
            <div></div> {/* Empty */}
            <div></div> {/* Empty */}
            <div></div> {/* Empty */}
            <div className="w-full h-full bg-[#ffdd91]"></div>
            
             {/* Row 7 */}
             <div></div>
          </div>
        </div>
      </section>

      {/* Client Logos Section - Added relative z-20 to ensure it's clickable/viewable */}
      <section className="relative z-20 mx-auto max-w-[1400px] border border-[#d9d9d9] py-10 px-[5%] flex justify-center items-center gap-10 md:gap-[60px] flex-wrap bg-white/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        {/* Quora */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Quora_logo_2015.svg" 
          alt="Quora" 
          className="h-[25px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />

        {/* Cursor */}
        <div className="font-bold text-[22px] text-[#555] flex items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
          CURSOR
        </div>

        {/* Notion */}
        <div className="flex items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
           <img 
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" 
            alt="Notion" 
            className="h-[30px]"
          />
          <span className="font-semibold text-[20px] text-[#555] ml-[-5px] mt-[1px]">Notion</span>
        </div>

        {/* HubSpot */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/d/d4/HubSpot_Logo.svg" 
          alt="HubSpot" 
          className="h-[30px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />

        {/* Genspark */}
        <div className="font-semibold text-[20px] text-[#555] flex items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
           <span className="text-[24px] mr-[5px]">*</span>genspark
        </div>

        {/* DoorDash */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/03/DoorDash_Logo.svg" 
          alt="DoorDash" 
          className="h-[22px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      </section>
    </div>
  );
};

export default Hero;