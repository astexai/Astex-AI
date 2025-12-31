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
          <button className="bg-[#f7941d] text-black px-[24px] py-[10px] font-semibold text-[14px] rounded-[4px] border-none cursor-pointer transition-opacity duration-300 hover:opacity-90">
            Call Now
          </button>
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
                xx, Marimata Square<br />
                Indore - 452015
              </div>
              <div className="text-white leading-[1.6] mt-[5px]">
                info@astexai.in | +91 9098343508
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
                { name: 'Testimonials', url: '/company/testimonials' },
                { name: 'Team', url: '/company/team' },
                { name: 'Contacts', url: '/company/contacts' },
                { name: 'Case Studies', url: '/case-studies' }
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
            <h4 className="text-[#f7941d] text-[18px] font-normal mb-[25px]">Services</h4>
            <ul className="flex flex-col gap-[12px]">
              {[
                { name: 'AI Agent Development', url: '/services/ai-agent-development' },
                { name: 'Chatbot & Voicebots', url: '/services/chatbot-voicebots' },
                { name: 'Workflow Automation Systems', url: '/services/workflow-automation' },
                { name: 'CRM Process Automation', url: '/services/crm-automation' },
                { name: 'Custom AI Products', url: '/services/custom-ai-products' },
                { name: 'AI Copilot Solutions', url: '/services/ai-copilot' },
                { name: 'API & Webhooks Integration', url: '/services/api-webhooks' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.url} className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: AI Solutions (Changed from Technologies) - Center aligned on mobile */}
          <div className="text-center sm:text-left">
            <h4 className="text-[#f7941d] text-[18px] font-normal mb-[25px]">AI Solutions</h4>
            <ul className="flex flex-col gap-[12px]">
              {[
                { name: 'E-Commerce & D2C', url: '/ai-solutions/ecommerce-d2c' },
                { name: 'Travel & Hospitality', url: '/ai-solutions/travel-hospitality' },
                { name: 'Healthcare & Clinics', url: '/ai-solutions/healthcare' },
                { name: 'Real Estate & Property', url: '/ai-solutions/real-estate' },
                { name: 'Finance, Banking & FinTech', url: '/ai-solutions/finance' },
                { name: 'SaaS & Software Companies', url: '/ai-solutions/saas' },
                { name: 'Marketing Agencies', url: '/ai-solutions/marketing' }
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
          <h4 className="text-[#f7941d] text-[18px] mb-[25px] text-center sm:text-left">Industries</h4>
          
          {/* Responsive Grid: 2 Cols on Mobile/Tablet, 4 Cols on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center md:text-left gap-[30px] md:gap-[40px]">
            
            {/* Ind Col 1 */}
            <ul className="flex flex-col gap-[12px]">
              {[
                { name: 'E-Commerce', url: '/industries/ecommerce' },
                { name: 'Travel & Hospitality', url: '/industries/travel-hospitality' },
                { name: 'Healthcare Clinics', url: '/industries/healthcare' },
                { name: 'Real Estate', url: '/industries/real-estate' },
                { name: 'Education Institutes', url: '/industries/education' },
                { name: 'SaaS Companies', url: '/industries/saas' }
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
                { name: 'Marketing Agencies', url: '/industries/marketing-agencies' },
                { name: 'Restaurants & Cafes', url: '/industries/restaurants' },
                { name: 'Logistics & Supply', url: '/industries/logistics' },
                { name: 'FinTech Services', url: '/industries/fintech' },
                { name: 'Retail Stores', url: '/industries/retail' },
                { name: 'Manufacturing Units', url: '/industries/manufacturing' }
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
                { name: 'Event Management', url: '/industries/event-management' },
                { name: 'Coaching Centers', url: '/industries/coaching' },
                { name: 'HR & Staffing', url: '/industries/hr-staffing' },
                { name: 'IT Services', url: '/industries/it-services' },
                { name: 'Consulting Firms', url: '/industries/consulting' },
                { name: 'Automobile Dealers', url: '/industries/automobile' }
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
                { name: 'Fitness & Gyms', url: '/industries/fitness' },
                { name: 'Legal Services', url: '/industries/legal' },
                { name: 'Banking Support', url: '/industries/banking' },
                { name: 'Insurance Services', url: '/industries/insurance' },
                { name: 'Media & Creators', url: '/industries/media' },
                { name: 'Startup Founders', url: '/industries/startups' }
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
            &copy; 2025 Astex AI, All rights reserved.
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