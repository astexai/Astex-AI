'use client';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  // --- Configuration ---
  const menuData = {
    "AI Solutions": {
      type: "complex_grid",
      imageTitle: "Domain AI Solutions",
      imageDesc: "Industry-specific AI solutions transforming businesses with intelligent automation.",
      imageColor: "bg-blue-600",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
      items: [
        { name: "E-Commerce & D2C", url: "/ai-solutions/e-commerce-d2c" },
        { name: "Travel & Hospitality", url: "/ai-solutions/travel-hospitality" },
        { name: "Healthcare & Clinics", url: "/ai-solutions/healthcare-clinics" },
        { name: "Ed-Tech & Coaching Institutes", url: "/ai-solutions/ed-tech-coaching-institutes" },
        { name: "Real Estate & Property", url: "/ai-solutions/real-estate-property" },
        { name: "Finance, Banking & FinTech", url: "/ai-solutions/finance-banking-fintech" },
        { name: "Restaurants & Cafes", url: "/ai-solutions/restaurants-cafes" },
        { name: "SaaS & Software Companies", url: "/ai-solutions/saas-software-companies" },
        { name: "Marketing Agencies & Service Businesses", url: "/ai-solutions/marketing-agencies-service-businesses" },
        { name: "Logistics & Supply Chain", url: "/ai-solutions/logistics-supply-chain" },
        { name: "HR, Recruitment & Staffing", url: "/ai-solutions/hr-recruitment-staffing" },
        { name: "Education Institutes & Universities", url: "/ai-solutions/education-institutes-universities" }
      ]
    },
    "Services": {
      type: "complex_columns",
      imageTitle: "Our Services",
      imageDesc: "Comprehensive AI services from development to integration and product engineering.",
      imageColor: "bg-[#ff4d4d]",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
      columns: [
        {
          title: "AI & Automation",
          items: [
            { name: "AI Agent Development", url: "/services/ai-agent-development" },
            { name: "Chatbot & Voicebots", url: "/services/chatbot-voicebots" },
            { name: "Workflow Automation Systems", url: "/services/workflow-automation-systems" },
            { name: "WhatsApp Automation Tools", url: "/services/whatsapp-automation-tools" },
            { name: "CRM Process Automation", url: "/services/crm-process-automation" },
            { name: "Email Automation Flows", url: "/services/email-automation-flows" },
            { name: "Data Insight Agents", url: "/services/data-insight-agents" },
            { name: "Document QA Bots", url: "/services/document-qa-bots" }
          ]
        },
        {
          title: "AI Products & Intelligence",
          items: [
            { name: "Custom AI Products", url: "/services/custom-ai-products" },
            { name: "Conversational AI Design", url: "/services/conversational-ai-design" },
            { name: "Multi-Agent Workflows", url: "/services/multi-agent-workflows" },
            { name: "Predictive Automation Tools", url: "/services/predictive-automation-tools" },
            { name: "RAG Knowledge Assistants", url: "/services/rag-knowledge-assistants" },
            { name: "AI Analytics Agents", url: "/services/ai-analytics-agents" },
            { name: "Domain AI Solutions", url: "/services/domain-ai-solutions" }
          ]
        },
        {
          title: "Integrations & Engineering",
          items: [
            { name: "API & Webhooks", url: "/services/api-and-webhooks" },
            { name: "Automation Platform Integrations", url: "/services/automation-platform-integrations" },
            { name: "CRM SaaS Integrations", url: "/services/crm-saas-integrations" },
            { name: "Backend Data Automations", url: "/services/backend-data-automations" },
            { name: "Lead Data Pipelines", url: "/services/lead-data-pipelines" },
            { name: "Voice-to-CRM Sync", url: "/services/voice-to-crm-sync" },
            { name: "Chatbot Data Sync", url: "/services/chatbot-data-sync" },
            { name: "Dashboard Integrations", url: "/services/dashboard-integrations" }
          ]
        },
        {
          title: "Product Development & Platforms",
          items: [
            { name: "Web App Development", url: "/services/web-app-development" },
            { name: "SaaS Product Development", url: "/services/saas-product-development" },
            { name: "Dashboard & Portals", url: "/services/dashboard-and-portals" },
            { name: "Backend API Development", url: "/services/backend-api-development" },
            { name: "Product Maintenance Support", url: "/services/product-maintenance-support" }
          ]
        }
      ]
    },
    "Case Studies": { type: "link", href: "/case-studies" },
    "Industries": {
      type: "complex_columns",
      dropdownTitle: "Industries We Serve", // The small heading inside dropdown
      isStatic: true, // Config to make items non-clickable
      imageTitle: "Industries We Serve",
      imageDesc: "Tailored AI solutions for diverse industry verticals.",
      imageColor: "bg-green-600",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      columns: [
        { 
          title: "", 
          items: [
            { name: "E-Commerce", url: "#" },
            { name: "Travel & Hospitality", url: "#" },
            { name: "Healthcare Clinics", url: "#" },
            { name: "Real Estate", url: "#" },
            { name: "Education Institutes", url: "#" },
            { name: "SaaS Companies", url: "#" }
          ]
        },
        { 
          title: "", 
          items: [
            { name: "Marketing Agencies", url: "#" },
            { name: "Restaurants & Cafes", url: "#" },
            { name: "Logistics & Supply", url: "#" },
            { name: "FinTech Services", url: "#" },
            { name: "Retail Stores", url: "#" },
            { name: "Manufacturing Units", url: "#" }
          ]
        },
        { 
          title: "", 
          items: [
            { name: "Event Management", url: "#" },
            { name: "Coaching Centers", url: "#" },
            { name: "HR & Staffing", url: "#" },
            { name: "IT Services", url: "#" },
            { name: "Consulting Firms", url: "#" },
            { name: "Automobile Dealers", url: "#" }
          ]
        },
        { 
          title: "", 
          items: [
            { name: "Fitness & Gyms", url: "#" },
            { name: "Legal Services", url: "#" },
            { name: "Banking Support", url: "#" },
            { name: "Insurance Services", url: "#" },
            { name: "Media & Creators", url: "#" },
            { name: "Startup Founders", url: "#" }
          ]
        }
      ]
    },
    "Company": {
      type: "complex_simple",
      imageTitle: "About AstexAI",
      imageDesc: "Innovating the future of AI with cutting-edge solutions and expertise.",
      imageColor: "bg-purple-600",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
      items: [
        { name: "About Us", url: "/company/about-us" },
        { name: "Leadership", url: "/company/leadership" },
        { name: "Blogs & Insights", url: "/company/blogs-and-insights" },
        { name: "Contacts", url: "/company/contact-us" },
      ]
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
      
      {/* Top Bar (Scrolls away) */}
      <div className="bg-gradient-to-r from-[#e77d00] via-black to-[#e77d00] text-white text-center py-2.5 text-sm md:text-base relative z-[61]">
        Future-Ready Solutions for Every Industry - Trusted by top Worldwide companies
      </div>

      {/* Nav (STICKS TO TOP) */}
      <nav className="sticky top-0 z-[100] bg-white border-b border-[#f0f0f0]">
        <div className="flex justify-between items-center px-5 lg:px-12 h-[90px] max-w-[1400px] mx-auto">
          
          {/* Logo */}
          <a href="/" className="text-2xl lg:text-3xl font-medium text-[#111111] tracking-tight flex items-center z-50">
            Astex<span className="text-[#e77d00]">ai</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-10 list-none h-full items-center">
            {Object.keys(menuData).map((key) => {
              const isLink = menuData[key].type === 'link';
              return (
                <li 
                  key={key}
                  onMouseEnter={() => handleMouseEnter(key)}
                  className="h-full flex flex-col justify-center items-center cursor-pointer group relative px-2"
                >
                  {/* Case Studies is a link, others are spans */}
                  {isLink ? (
                    <a href={menuData[key].href} className={`text-[17px] font-normal transition-colors duration-300 ${activeDropdown === key ? 'text-[#e77d00]' : 'text-[#1a1a1a] group-hover:text-[#e77d00]'}`}>
                      {key}
                    </a>
                  ) : (
                    <span className={`text-[17px] font-normal transition-colors duration-300 ${activeDropdown === key ? 'text-[#e77d00]' : 'text-[#1a1a1a] group-hover:text-[#e77d00]'}`}>
                      {key}
                    </span>
                  )}
                  
                  {/* The Dot Indicator */}
                  <span 
                    className={`absolute bottom-[25px] w-1.5 h-1.5 rounded-full transition-all duration-300 
                      ${activeDropdown === key ? 'bg-[#e77d00] scale-125' : 'bg-gray-300 group-hover:bg-[#e77d00]'}`}
                  ></span>
                </li>
              );
            })}
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

        {/* --- DESKTOP DROPDOWNS (Inside Nav to stick with it) --- */}
        <div 
          className={`hidden lg:block absolute top-full left-0 w-full bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border-t border-gray-100 transition-all duration-300 transform origin-top z-50 
          ${activeDropdown && menuData[activeDropdown].type !== 'link' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1400px] mx-auto px-12 py-10">
            
            {/* Services / Industries (Columns Layout) */}
            {activeDropdown && menuData[activeDropdown].type === 'complex_columns' && (
              <div className="flex w-full">
                {renderBanner(menuData[activeDropdown])}
                <div className="w-3/4">
                  
                  {/* Industries Title (Displayed only for Industries dropdown) */}
                  {menuData[activeDropdown].dropdownTitle && (
                    <h4 className="text-[15px] font-bold text-black mb-6 uppercase tracking-wide">
                      {menuData[activeDropdown].dropdownTitle}
                    </h4>
                  )}

                  <div className="grid grid-cols-4 gap-8">
                    {menuData[activeDropdown].columns.map((col, idx) => (
                      <div key={idx}>
                        {col.title && <h4 className="text-[15px] font-bold text-black mb-4 uppercase tracking-wide">{col.title}</h4>}
                        <ul className="flex flex-col gap-3">
                          {col.items.map((item, i) => (
                            <li key={i}>
                              {/* If isStatic (Industries), render non-clickable text. Else Link. */}
                              {menuData[activeDropdown].isStatic ? (
                                <span className="text-[14px] text-gray-600 block cursor-default">
                                  {item.name}
                                </span>
                              ) : (
                                <a href={item.url} className="text-[14px] text-gray-600 hover:text-[#e77d00] transition-colors block">
                                  {item.name}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
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
                        <a key={i} href={item.url} className="text-[15px] text-gray-700 hover:text-[#e77d00] transition-colors py-1 block">
                          {item.name}
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
                        <a key={i} href={item.url} className="text-[18px] font-medium text-gray-800 hover:text-[#e77d00] transition-colors flex items-center gap-3 group/link">
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover/link:bg-[#e77d00] transition-colors"></span>
                          {item.name}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </nav>

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
                  {hasSubMenu ? (
                    <span className={`text-xl font-medium ${mobileSubMenu === key ? 'text-[#e77d00]' : 'text-[#111]'}`}>
                      {key}
                    </span>
                  ) : (
                    <a href={data.href} className="text-xl font-medium text-[#111]">
                      {key}
                    </a>
                  )}

                  {hasSubMenu && (
                    <div className={`w-3 h-3 border-r-2 border-b-2 border-gray-400 transition-transform duration-300 ${mobileSubMenu === key ? 'rotate-[225deg] mt-1 border-[#e77d00]' : 'rotate-45 mb-1'}`}></div>
                  )}
                </div>

                {/* Mobile Accordion */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileSubMenu === key ? 'max-h-[2500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                   
                   {/* Complex Columns (Services / Industries) */}
                   {data.type === 'complex_columns' && (
                      <div className="flex flex-col gap-6 pl-2">
                        
                        {/* Mobile Title for Industries */}
                        {data.dropdownTitle && (
                           <h5 className="font-bold text-sm text-black uppercase tracking-wide mb-[-10px]">{data.dropdownTitle}</h5>
                        )}

                        {data.columns.map((col, i) => (
                           <div key={i}>
                             {col.title && <h5 className="font-bold text-xs text-gray-400 mb-3 uppercase tracking-widest">{col.title}</h5>}
                             <div className="flex flex-col gap-3 pl-3 border-l-2 border-gray-100">
                               {col.items.map((sub, j) => (
                                 data.isStatic ? (
                                   <span key={j} className="text-gray-600 text-[15px]">{sub.name}</span>
                                 ) : (
                                   <a key={j} href={sub.url} className="text-gray-700 text-[15px] hover:text-[#e77d00]">{sub.name}</a>
                                 )
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
                           <a key={i} href={item.url} className="text-gray-700 text-[15px] hover:text-[#e77d00]">{item.name}</a>
                        ))}
                      </div>
                   )}

                   {/* Complex Simple (Company) */}
                   {data.type === 'complex_simple' && (
                      <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100">
                        {data.items.map((item, i) => (
                           <a key={i} href={item.url} className="text-gray-800 text-[16px] font-medium hover:text-[#e77d00]">{item.name}</a>
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