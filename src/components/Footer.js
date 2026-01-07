import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-[50px] text-[14px] font-inter border-t border-[#d9d9d9]/20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[40px]">
        
        {/* --- Top Bar: Logo & Button --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-[30px] border-b border-[#333] mb-[40px] gap-5 md:gap-0">
          <div className="text-[32px] font-medium text-white tracking-[-0.5px]">
            Astex<span className="text-[#f7941d]">ai</span>
          </div>
          <a href="tel:+919098343508" className="bg-[#f7941d] text-black px-[24px] py-[10px] font-semibold text-[14px] rounded-[4px] border-none cursor-pointer transition-opacity duration-300 hover:opacity-90">
            Call Now
          </a>
        </div>

        {/* --- Main Grid: Offices & Links --- */}
        {/* Mobile: Center align, Tablet: 2 Cols, Desktop: 4 Cols (Custom Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] gap-[40px] mb-[60px]">
          
          {/* Column 1: Offices (Center aligned on mobile) */}
          <div className="flex flex-col gap-[30px] sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            
            {/* India Office */}
            <div>
              <div className="flex items-center gap-[10px] mb-[15px] text-[#f7941d] text-[16px] justify-center sm:justify-start">
                <img 
                  src="https://flagcdn.com/w40/in.png" 
                  alt="India" 
                  className="w-[24px] h-[16px] rounded-[2px] object-cover"
                />
                India Office
              </div>
              <div className="text-white leading-[1.6] mb-[5px]">
                Marimata Square<br />
                Indore - 452015
              </div>
              <div className="text-white leading-[1.6] mt-[5px]">
                contact.astexai@gmail.com | +91 9098343508
              </div>
            </div>

            {/* USA Office */}
            <div>
              <div className="flex items-center gap-[10px] mb-[15px] text-[#f7941d] text-[16px] justify-center sm:justify-start">
                <img 
                  src="https://flagcdn.com/w40/us.png" 
                  alt="USA" 
                  className="w-[24px] h-[16px] rounded-[2px] object-cover"
                />
                USA Office
              </div>
              <div className="text-white leading-[1.6] mb-[5px]">
                27 Narrows Way, Monroe<br />
                Township, NJ 08831
              </div>
              <div className="text-white leading-[1.6] mt-[5px]">
                sales@astexai.in | +1 973 435 6491
              </div>
            </div>
          </div>

          {/* Column 2: Company (Center aligned on mobile) */}
          <div className="text-center sm:text-left">
            <h4 className="text-[#f7941d] text-[18px] font-normal mb-[25px]">Company</h4>
            <ul className="flex flex-col gap-[12px]">
              {[
                { name: 'About Us', url: '/company/about-us' },
                // { name: 'Testimonials', url: '/company/testimonials' },
                { name: 'Leadership', url: '/company/leadership' },
                { name: 'Contacts', url: '/company/contact-us' },
                { name: 'Case Studies', url: '/case-studies' },
                { name: 'Blogs & Insights', url: '/company/blogs-and-insights' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.url} className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Center aligned on mobile) */}
          <div className="text-center sm:text-left">
            <h4 className="text-[#f7941d] text-[18px] font-normal mb-[25px]">Industries</h4>
            <ul className="flex flex-col gap-[12px]">
              {[
                 { name: "E-Commerce", url: "#" },
            { name: "Travel & Hospitality", url: "#" },
            { name: "Healthcare Clinics", url: "#" },
            { name: "Real Estate", url: "#" },
            { name: "Education Institutes", url: "#" },
            { name: "SaaS Companies", url: "#" },
            { name: "Marketing Agencies", url: "#" },
            { name: "Restaurants & Cafes", url: "#" },
            { name: "Logistics & Supply", url: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <span  className="text-white font-light transition-colors duration-200 block">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: AI Solutions (Changed from Technologies) - Center aligned on mobile */}
          <div className="text-center sm:text-left">
            <h4 className="text-[#f7941d] text-[18px] font-normal mb-[25px]">AI Solutions</h4>
            <ul className="flex flex-col gap-[12px]">
              {[
               { name: "E-Commerce & D2C", url: "/ai-solutions/e-commerce-d2c" },
        { name: "Travel & Hospitality", url: "/ai-solutions/travel-hospitality" },
        { name: "Healthcare & Clinics", url: "/ai-solutions/healthcare-clinics" },
        { name: "Ed-Tech & Coaching Institutes", url: "/ai-solutions/ed-tech-coaching-institutes" },
        { name: "Real Estate & Property", url: "/ai-solutions/real-estate-property" },
        { name: "Finance, Banking & FinTech", url: "/ai-solutions/finance-banking-fintech" },
        { name: "Restaurants & Cafes", url: "/ai-solutions/restaurants-cafes" },
        { name: "SaaS & Software Companies", url: "/ai-solutions/saas-software-companies" },
         { name: "Marketing Agencies & Service Businesses", url: "/ai-solutions/marketing-agencies-service-businesses" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.url} className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* --- Industries Section --- */}
        <div className="mb-[60px]">
          <h4 className="text-[#f7941d] text-[18px] mb-[25px] text-center sm:text-left">Services</h4>
          
          {/* Responsive Grid: 2 Cols on Mobile/Tablet, 4 Cols on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center md:text-left gap-[30px] md:gap-[40px]">
            
            {/* Ind Col 1 */}
            <ul className="flex flex-col gap-[12px]">
              {[
                { name: "AI Agent Development", url: "/services/ai-agent-development" },
            { name: "Chatbot & Voicebots", url: "/services/chatbot-voicebots" },
            { name: "Workflow Automation Systems", url: "/services/workflow-automation-systems" },
            { name: "WhatsApp Automation Tools", url: "/services/whatsapp-automation-tools" },
            { name: "CRM Process Automation", url: "/services/crm-process-automation" },
            { name: "Email Automation Flows", url: "/services/email-automation-flows" },
            { name: "Data Insight Agents", url: "/services/data-insight-agents" },
            { name: "Document QA Bots", url: "/services/document-qa-bots" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.url} className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Ind Col 2 */}
            <ul className="flex flex-col gap-[12px]">
               {[
               { name: "Custom AI Products", url: "/services/custom-ai-products" },
            { name: "Conversational AI Design", url: "/services/conversational-ai-design" },
            { name: "Multi-Agent Workflows", url: "/services/multi-agent-workflows" },
            { name: "Predictive Automation Tools", url: "/services/predictive-automation-tools" },
            { name: "RAG Knowledge Assistants", url: "/services/rag-knowledge-assistants" },
            { name: "AI Analytics Agents", url: "/services/ai-analytics-agents" },
            { name: "Domain AI Solutions", url: "/services/domain-ai-solutions" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.url} className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Ind Col 3 */}
            <ul className="flex flex-col gap-[12px]">
               {[
                { name: "API & Webhooks", url: "/services/api-and-webhooks" },
            { name: "Automation Platform Integrations", url: "/services/automation-platform-integrations" },
            { name: "CRM SaaS Integrations", url: "/services/crm-saas-integrations" },
            { name: "Backend Data Automations", url: "/services/backend-data-automations" },
            { name: "Lead Data Pipelines", url: "/services/lead-data-pipelines" },
            { name: "Voice-to-CRM Sync", url: "/services/voice-to-crm-sync" },
            { name: "Chatbot Data Sync", url: "/services/chatbot-data-sync" },
            { name: "Dashboard Integrations", url: "/services/dashboard-integrations" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.url} className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Ind Col 4 */}
            <ul className="flex flex-col gap-[12px]">
               {[
                { name: "Web App Development", url: "/services/web-app-development" },
            { name: "SaaS Product Development", url: "/services/saas-product-development" },
            { name: "Dashboard & Portals", url: "/services/dashboard-and-portals" },
            { name: "Backend API Development", url: "/services/backend-api-development" },
            { name: "Product Maintenance Support", url: "/services/product-maintenance-support" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.url} className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-[#333] py-[25px] flex flex-col md:flex-row justify-between items-center text-[13px] text-white gap-[15px] md:gap-0 text-center md:text-left">
          <div>
            &copy; 2026 Astex AI, All rights reserved.
          </div>
          <div className="flex gap-[20px]">
            <a href="/company/terms" className="text-white hover:text-[#f7941d] transition-colors">Terms & condition</a>
            <span className="text-[#666]">|</span>
            <a href="/company/privacy" className="text-white hover:text-[#f7941d] transition-colors">Privacy policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;