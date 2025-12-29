'use client';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  // --- Configuration ---
  const menuData = {
    "AI Solutions": {
      type: "complex_grid", // Image Left + Grid Right
      imageTitle: "AI Innovation",
      imageDesc: "Transforming industries with cutting-edge artificial intelligence.",
      imageColor: "bg-blue-600",
      // Using a tech abstract image
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
      items: [
        "Airport & Airlines", "AI Automotive", "Banking AI Consulting",
        "Finance AI Consulting", "Ecommerce", "Healthcare AI Consulting",
        "HR & Recruitment", "Insurance", "Oil & Gas Solutions",
        "Real Estate AI Consulting", "Retail AI Consulting", "Telecom",
        "Travel & Hospitality"
      ]
    },
    "Services": {
      type: "complex_columns", // Image Left + Column Lists Right
      imageTitle: "LOFT",
      imageDesc: "LOFT is a Secure LLM orchestration framework to achieve your unique business objectives.",
      imageColor: "bg-[#ff4d4d]",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
      columns: [
        {
          title: "AI & Data",
          items: ["AI Development", "AI Chatbot Development", "AI Agent Development", "Conversational AI", "Conversation Design", "Generative AI Development", "AI Predictive Analytics", "LLM Development", "AI Voice Bots"]
        },
        {
          title: "Consulting",
          items: ["EU Accessibility Act Audit", "AI Consulting", "Chatbot Consulting", "Generative AI Consulting", "Machine Learning Consulting", "AI Security Consulting"]
        },
        {
          title: "Development",
          items: ["Software Product Development", "PoC Development", "Mobile Development", "Connector Development", "Blockchain Development", "CRM Software Development", "Digital Platform Development"]
        },
        {
          title: "Other",
          items: ["Business Process Automation", "IT Recruiting Services", "Conversational Analytics", "AI Copilot", "LLM-Orchestrator Open Source Framework"]
        }
      ]
    },
    "Case Studies": { type: "link", href: "/case-studies" },
    "Industries": {
      type: "complex_columns",
      imageTitle: "Global Impact",
      imageDesc: "Tailored AI strategies for every sector of the modern economy.",
      imageColor: "bg-green-600",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      columns: [
        { title: "", items: ['Healthcare', 'Education & EdTech', 'Finance & Banking', 'Insurance', 'Marketing & Advertising', 'Legal & Compliance'] },
        { title: "", items: ['E-Commerce', 'Retail', 'Real Estate', 'Logistics & Supply Chain', 'HR & Workforce Management', 'Agriculture & Food Tech'] },
        { title: "", items: ['Manufacturing', 'Travel & Hospitality', 'IT & SaaS', 'Telecommunications', 'Consulting Services', 'Startups Labs'] },
        { title: "", items: ['Energy & Utilities', 'Government & Public Services', 'Automotive', 'Media & Entertainment', 'Innovation Labs'] }
      ]
    },
    "Company": {
      type: "complex_simple", // Landscape Image + List
      imageTitle: "Who We Are",
      imageDesc: "Building the future of automation with a dedicated team of experts.",
      imageColor: "bg-purple-600",
      // Landscape team image
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop", 
      items: ["About Us", "Testimonials", "Team", "Contacts"]
    }
  };

  // --- Handlers ---

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleMobileSubMenu = (key) => {
    setMobileSubMenu(mobileSubMenu === key ? null : key);
  };

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const handleMouseEnter = (key) => setActiveDropdown(key);
  const handleMouseLeave = () => setActiveDropdown(null);

  // Helper to render the Left Banner Image
  const renderBanner = (data) => (
    <div className="w-1/4 pr-8 hidden lg:block">
      <div className="rounded-lg h-full flex flex-col justify-end relative overflow-hidden group min-h-[300px]">
        {/* Background Image */}
        <img src={data.imageUrl} alt={data.imageTitle} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 p-6">
          <div className={`${data.imageColor} text-white text-sm font-bold px-3 py-1 inline-block mb-3 rounded uppercase tracking-wider`}>
            {data.imageTitle}
          </div>
          <p className="text-white/90 text-sm mb-4 leading-relaxed">
            {data.imageDesc}
          </p>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full font-inter relative" onMouseLeave={handleMouseLeave}>
      
      {/* Top Bar */}
        <div className="bg-gradient-to-r from-[#e77d00] via-black to-[#e77d00] text-white text-center py-2.5 text-sm md:text-base relative z-[60]">
        Future-Ready Solutions for Every Industry - Trusted by top Worldwide companies
      </div>

      {/* Nav */}
      <nav className="relative z-[60] bg-white border-b border-[#f0f0f0]">
        <div className="flex justify-between items-center px-5 lg:px-12 h-[90px] max-w-[1400px] mx-auto">
          
          {/* Logo */}
          <div className="text-2xl lg:text-3xl font-medium text-[#111111] tracking-tight flex items-center z-50">
            Astex<span className="text-[#e77d00]">ai</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-10 list-none h-full items-center">
            {Object.keys(menuData).map((key) => (
              <li 
                key={key}
                onMouseEnter={() => handleMouseEnter(key)}
                className="h-full flex flex-col justify-center items-center cursor-pointer group relative px-2"
              >
                <span className={`text-[17px] font-normal transition-colors duration-300 ${activeDropdown === key ? 'text-[#e77d00]' : 'text-[#1a1a1a] group-hover:text-[#e77d00]'}`}>
                  {key}
                </span>
                
                {/* The Dot Indicator (Replaces Chevron) */}
                <span 
                  className={`absolute bottom-[25px] w-1.5 h-1.5 rounded-full transition-all duration-300 
                    ${activeDropdown === key ? 'bg-[#e77d00] scale-125' : 'bg-gray-300 group-hover:bg-[#e77d00]'}`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Desktop Contact Button */}
          <button className="hidden lg:block bg-[#e77d00] text-[#111] px-7 py-3 text-lg font-semibold cursor-pointer hover:opacity-90 transition-opacity border-none rounded-[4px]">
            Contact Us
          </button>

          {/* Mobile Toggle */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden z-50 p-2 focus:outline-none text-[#111]"
          >
            {isMenuOpen ? (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* --- DESKTOP DROPDOWNS --- */}
      <div 
        className={`hidden lg:block absolute top-[125px] left-0 w-full bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border-t border-gray-100 transition-all duration-300 transform origin-top z-50 
        ${activeDropdown && menuData[activeDropdown].type !== 'link' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
        onMouseEnter={() => setActiveDropdown(activeDropdown)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1400px] mx-auto px-12 py-10">
          
          {/* Services / Industries (Columns Layout) */}
          {activeDropdown && menuData[activeDropdown].type === 'complex_columns' && (
            <div className="flex w-full">
              {renderBanner(menuData[activeDropdown])}
              <div className="w-3/4 grid grid-cols-4 gap-8">
                {menuData[activeDropdown].columns.map((col, idx) => (
                  <div key={idx}>
                    {col.title && <h4 className="text-[15px] font-bold text-black mb-4 uppercase tracking-wide">{col.title}</h4>}
                    <ul className="flex flex-col gap-3">
                      {col.items.map((item, i) => (
                        <li key={i}><a href="#" className="text-[14px] text-gray-600 hover:text-[#e77d00] transition-colors block">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Solutions (Grid Layout) */}
          {activeDropdown && menuData[activeDropdown].type === 'complex_grid' && (
            <div className="flex w-full">
              {renderBanner(menuData[activeDropdown])}
              <div className="w-3/4">
                 <h4 className="text-[15px] font-bold text-black mb-6 uppercase tracking-wide">Solutions by Domain</h4>
                 <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                    {menuData[activeDropdown].items.map((item, i) => (
                       <a key={i} href="#" className="text-[15px] text-gray-700 hover:text-[#e77d00] transition-colors py-1 block">
                         {item}
                       </a>
                    ))}
                 </div>
              </div>
            </div>
          )}

          {/* Company (List Layout) */}
          {activeDropdown && menuData[activeDropdown].type === 'complex_simple' && (
            <div className="flex w-full">
              {renderBanner(menuData[activeDropdown])}
              <div className="w-3/4 pl-10 flex flex-col justify-center">
                 <h4 className="text-[15px] font-bold text-black mb-6 uppercase tracking-wide">Explore Astex</h4>
                 <div className="flex flex-col gap-4">
                    {menuData[activeDropdown].items.map((item, i) => (
                       <a key={i} href="#" className="text-[18px] font-medium text-gray-800 hover:text-[#e77d00] transition-colors flex items-center gap-3 group/link">
                         <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover/link:bg-[#e77d00] transition-colors"></span>
                         {item}
                       </a>
                    ))}
                 </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div 
        className={`
          fixed inset-0 bg-white z-40 flex flex-col pt-[150px] px-6 overflow-y-auto
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        <ul className="flex flex-col w-full list-none pb-32">
          {Object.keys(menuData).map((key, index) => {
            const data = menuData[key];
            const hasSubMenu = data.type !== 'link';

            return (
              <li key={index} className="w-full border-b border-[#f5f5f5]">
                <div 
                  className="flex justify-between items-center py-5 cursor-pointer"
                  onClick={() => hasSubMenu ? toggleMobileSubMenu(key) : null}
                >
                  <span className={`text-xl font-medium ${mobileSubMenu === key ? 'text-[#e77d00]' : 'text-[#111]'}`}>
                    {key}
                  </span>
                  {hasSubMenu && (
                    <div className={`w-3 h-3 border-r-2 border-b-2 border-gray-400 transition-transform duration-300 ${mobileSubMenu === key ? 'rotate-[225deg] mt-1 border-[#e77d00]' : 'rotate-45 mb-1'}`}></div>
                  )}
                </div>

                {/* Mobile Accordion */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileSubMenu === key ? 'max-h-[2500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                   
                   {/* Render Image Banner Mobile (Optional, keeping it simple text for speed, or add back if requested) */}
                   
                   {/* Complex Columns (Services / Industries) */}
                   {data.type === 'complex_columns' && (
                      <div className="flex flex-col gap-6 pl-2">
                        {data.columns.map((col, i) => (
                           <div key={i}>
                             {col.title && <h5 className="font-bold text-xs text-gray-400 mb-3 uppercase tracking-widest">{col.title}</h5>}
                             <div className="flex flex-col gap-3 pl-3 border-l-2 border-gray-100">
                               {col.items.map((sub, j) => (
                                 <a key={j} href="#" className="text-gray-700 text-[15px] hover:text-[#e77d00]">{sub}</a>
                               ))}
                             </div>
                           </div>
                        ))}
                      </div>
                   )}

                   {/* Complex Grid (AI Solutions) */}
                   {data.type === 'complex_grid' && (
                      <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                        {data.items.map((item, i) => (
                           <a key={i} href="#" className="text-gray-700 text-[15px] hover:text-[#e77d00]">{item}</a>
                        ))}
                      </div>
                   )}

                   {/* Complex Simple (Company) */}
                   {data.type === 'complex_simple' && (
                      <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100">
                        {data.items.map((item, i) => (
                           <a key={i} href="#" className="text-gray-800 text-[16px] font-medium hover:text-[#e77d00]">{item}</a>
                        ))}
                      </div>
                   )}

                </div>
              </li>
            );
          })}
          
          <li className="w-full text-center mt-8">
            <button className="bg-[#e77d00] text-[#111] px-10 py-4 text-lg font-semibold cursor-pointer hover:opacity-90 transition-opacity border-none rounded-md w-full">
              Contact Us
            </button>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;