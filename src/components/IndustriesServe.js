'use client';

import React, { useState, useRef, useEffect } from 'react';


const IndustriesServe = () => {
  // --- Data ---
  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      title: 'Healthcare & Medical Services',
      // Using placeholder images as per original code logic
      image: 'https://masterofcode.com/wp-content/uploads/2025/07/Frame-1000004983.png',
      features: [
        { icon: 'chat', text: 'AI Patient Support<br>Chatbots' },
        { icon: 'calendar', text: 'Appointment<br>Scheduling' },
        { icon: 'heart', text: 'Remote Patient<br>Monitoring' },
        { icon: 'database', text: 'Knowledge Base<br>Automation' },
        { icon: 'bill', text: 'Medical Billing<br>Automation' },
        { icon: 'crm', text: 'Healthcare<br>CRM' }
      ]
    },
    {
      id: 'education',
      name: 'Education',
      title: 'Education & Learning Systems',
      image: 'https://masterofcode.com/wp-content/uploads/2025/07/master_of_code_global_Laptop_and_phone_with_predictive_graphs_a_764e2fc7-a550-4ec9-9944-a13beef60c3e-copy-1.png',
      features: [
        { icon: 'chat', text: 'Student Support<br>Assistants' },
        { icon: 'calendar', text: 'Classroom<br>Scheduling' },
        { icon: 'heart', text: 'Personalized<br>Learning Paths' },
        { icon: 'database', text: 'LMS<br>Integration' },
        { icon: 'bill', text: 'Automated<br>Grading' },
        { icon: 'crm', text: 'Student<br>CRM' }
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Operations',
      title: 'Enterprise & Business Operations',
      image: 'https://masterofcode.com/wp-content/uploads/2025/07/Deep-Learning-Development-Company.png',
      features: [
        { icon: 'chat', text: 'Internal HR<br>Bots' },
        { icon: 'calendar', text: 'Meeting<br>Coordination' },
        { icon: 'heart', text: 'Employee<br>Wellbeing' },
        { icon: 'database', text: 'Data Entry<br>Automation' },
        { icon: 'bill', text: 'Expense<br>Processing' },
        { icon: 'crm', text: 'Workflow<br>Orchestration' }
      ]
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce',
      title: 'E-Commerce & Retail AI',
      image: 'https://masterofcode.com/wp-content/uploads/2025/07/Frame-1000004983-1.png',
      features: [
        { icon: 'chat', text: 'Customer<br>Support' },
        { icon: 'calendar', text: 'Inventory<br>Forecasting' },
        { icon: 'heart', text: 'Product<br>Recommendations' },
        { icon: 'database', text: 'Supply Chain<br>Management' },
        { icon: 'bill', text: 'Automated<br>Invoicing' },
        { icon: 'crm', text: 'Customer<br>Retention' }
      ]
    },
    {
      id: 'finance',
      name: 'Finance',
      title: 'Finance & Banking Solutions',
      image: 'https://masterofcode.com/wp-content/uploads/2025/07/master_of_code_global_Laptop_and_phone_with_predictive_graphs_a_764e2fc7-a550-4ec9-9944-a13beef60c3e-copy-1.png',
      features: [
        { icon: 'chat', text: 'Advisory<br>Agents' },
        { icon: 'calendar', text: 'Audit<br>Scheduling' },
        { icon: 'heart', text: 'Fraud<br>Detection' },
        { icon: 'database', text: 'Risk<br>Analysis' },
        { icon: 'bill', text: 'Loan<br>Processing' },
        { icon: 'crm', text: 'Client<br>Portals' }
      ]
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      title: 'Real Estate & Property Tech',
      image: 'https://masterofcode.com/wp-content/uploads/2025/11/real-estate.png',
      features: [
        { icon: 'chat', text: 'Lead Qualify<br>Bots' },
        { icon: 'calendar', text: 'Viewing<br>Scheduling' },
        { icon: 'heart', text: 'Tenant<br>Relations' },
        { icon: 'database', text: 'Property<br>Listings' },
        { icon: 'bill', text: 'Rent<br>Collection' },
        { icon: 'crm', text: 'Investor<br>Dashboard' }
      ]
    },
    {
      id: 'finance',
      name: 'Finance',
      title: 'Finance & Banking Solutions',
      image: 'https://masterofcode.com/wp-content/uploads/2025/07/master_of_code_global_Laptop_and_phone_with_predictive_graphs_a_764e2fc7-a550-4ec9-9944-a13beef60c3e-copy-1.png',
      features: [
        { icon: 'chat', text: 'Advisory<br>Agents' },
        { icon: 'calendar', text: 'Audit<br>Scheduling' },
        { icon: 'heart', text: 'Fraud<br>Detection' },
        { icon: 'database', text: 'Risk<br>Analysis' },
        { icon: 'bill', text: 'Loan<br>Processing' },
        { icon: 'crm', text: 'Client<br>Portals' }
      ]
    },
  ];

  // --- Icons ---
  const icons = {
    chat: (
      <>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        <path d="M8 11h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/>
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </>
    ),
    heart: (
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </>
    ),
    bill: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </>
    ),
    crm: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </>
    )
  };

  // --- State ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('translate-x-0 opacity-100'); // Initial state
  
  // Drag Scroll State
  const tabsRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- Functions ---
  const changeSlide = (direction) => {
    if (isAnimating) return; // Prevent double clicks
    
    // Start Animation Out
    setAnimationClass('-translate-x-5 opacity-0'); // Move Left and Fade Out
    setIsAnimating(true);

    setTimeout(() => {
      // Change Index
      setCurrentIndex((prev) => {
        let newIndex = prev + direction;
        if (newIndex < 0) newIndex = industries.length - 1;
        else if (newIndex >= industries.length) newIndex = 0;
        return newIndex;
      });

      // Prepare Animation In (Start from Right)
      setAnimationClass('translate-x-5 opacity-0');
      
      // Execute Animation In
      setTimeout(() => {
        setAnimationClass('translate-x-0 opacity-100');
        setIsAnimating(false);
      }, 50);

    }, 300); // Wait for out animation
  };

  // Handle Tab Click
  const handleTabClick = (index) => {
    if (index === currentIndex || isAnimating) return;
    
    setAnimationClass('-translate-x-5 opacity-0');
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationClass('translate-x-5 opacity-0');
      setTimeout(() => {
        setAnimationClass('translate-x-0 opacity-100');
        setIsAnimating(false);
      }, 50);
    }, 300);
  };


  const firstLoad = useRef(true);
  

  // Scroll active tab into view
 useEffect(() => {
  if (firstLoad.current) {
    firstLoad.current = false;
    return; // ❌ Skip scrolling on initial page load
  }

  if (tabsRef.current) {
    const activeTab = tabsRef.current.children[currentIndex];
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }
}, [currentIndex]);

  // Drag Scroll Handlers
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - tabsRef.current.offsetLeft);
    setScrollLeft(tabsRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - tabsRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabsRef.current.scrollLeft = scrollLeft - walk;
  };

  const currentData = industries[currentIndex];

  return (
    <section className=" px-5 flex flex-col items-center font-inter w-full">
      <div className="max-w-[1400px] bg-[#f9f9f9] py-20 border border-[#d9d9d9] w-full flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-[800px] mb-10">
          <h2 className="text-[32px] md:text-[45px] font-medium text-[#111] mb-5">
            We Develop Impactful Solutions for Diverse Industries
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.6]">
            We build AI-driven solutions tailored for diverse industries, helping organizations improve efficiency, streamline operations, and achieve meaningful business results.
          </p>
        </div>

        {/* Navigation Tabs (Drag & Scroll) */}
        <div className="w-full flex justify-center mb-10 border-b border-[#ddd]">
          <div 
            ref={tabsRef}
            className={`
              flex gap-[30px] max-w-[1000px] w-full overflow-x-auto whitespace-nowrap pb-0 
              scrollbar-hide cursor-grab select-none justify-start
              ${isDown ? 'cursor-grabbing' : ''}
            `}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {industries.map((ind, index) => (
              <button
                key={ind.id}
                onClick={() => handleTabClick(index)}
                className={`
                  bg-none border-none py-[15px] px-[5px] text-[16px] cursor-pointer relative transition-colors duration-300 font-medium flex-shrink-0
                  ${index === currentIndex ? 'text-[#f7941d]' : 'text-[#666] hover:text-[#f7941d]'}
                `}
              >
                {ind.name}
                {/* Active Underline */}
                <span className={`
                  absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#f7941d] transition-transform duration-300
                  ${index === currentIndex ? 'scale-x-100' : 'scale-x-0'}
                `}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Card Wrapper */}
        <div className="relative w-full max-w-[1000px] flex items-center justify-center">
          
          {/* DESKTOP Arrow Left */}
          <button 
            onClick={() => changeSlide(-1)}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-[60px] bg-none border-none cursor-pointer z-10 text-[#ccc] hover:text-[#f7941d] transition-colors p-2.5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-10 h-10">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Main Card */}
          <div className="bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-[25px] md:p-[40px] w-full min-h-auto md:min-h-[450px] relative overflow-hidden">
            
            {/* Animated Content Area */}
            <div className={`transition-all duration-300 ease-in-out ${animationClass}`}>
              
              <h3 className="text-center text-[24px] font-medium text-[#111] mb-10">
                {currentData.title}
              </h3>
              
              <div className="flex flex-col md:flex-row items-center gap-10">
                
                {/* Image Side */}
                <div className="flex-1 flex justify-center items-center">
                  <img 
                    src={currentData.image} 
                    alt={currentData.name} 
                    className="w-full max-w-[200px] md:max-w-[350px] h-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] mb-5 md:mb-0"
                  />
                </div>

                {/* Features Side */}
                <div className="flex-[1.2] w-full">
                  <div className="grid grid-cols-2 gap-[15px] md:gap-[30px]">
                    {currentData.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-[10px] md:gap-[15px]">
                        <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] flex-shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                            {icons[feature.icon] || icons.crm}
                          </svg>
                        </div>
                        {/* Using dangerouslySetInnerHTML to render line breaks in text */}
                        <div 
                          className="text-[13px] md:text-[15px] text-[#444] leading-[1.4] font-normal"
                          dangerouslySetInnerHTML={{ __html: feature.text }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* DESKTOP Arrow Right */}
          <button 
            onClick={() => changeSlide(1)}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-[60px] bg-none border-none cursor-pointer z-10 text-[#f7941d] hover:text-[#e77d00] transition-colors p-2.5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-10 h-10">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

        </div>

        {/* MOBILE Navigation Controls */}
        <div className="flex md:hidden justify-center gap-5 mt-[25px] w-full">
          <button 
            onClick={() => changeSlide(-1)}
            className="bg-white border border-[#eee] rounded-full w-[50px] h-[50px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] text-[#333] active:bg-[#f7f7f7] active:scale-95 flex items-center justify-center transition-transform"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={() => changeSlide(1)}
            className="bg-white border border-[#eee] rounded-full w-[50px] h-[50px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] text-[#f7941d] active:bg-[#f7f7f7] active:scale-95 flex items-center justify-center transition-transform"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

      </div>

      {/* Internal CSS for Scrollbar Hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default IndustriesServe;