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
        {/* Mobile: 1 Col, Tablet: 2 Cols, Desktop: 4 Cols (Custom Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] gap-[40px] mb-[60px]">
          
          {/* Column 1: Offices (Full width on mobile, spans 2 cols on tablet if needed, or just 1) */}
          <div className="flex flex-col gap-[30px] sm:col-span-2 lg:col-span-1">
            
            {/* India Office */}
            <div>
              <div className="flex items-center gap-[10px] mb-[15px] text-[#f7941d] text-[16px]">
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
              <div className="flex items-center gap-[10px] mb-[15px] text-[#f7941d] text-[16px]">
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

          {/* Column 2: Company */}
          <div>
            <h4 className="text-[#f7941d] text-[18px] font-normal mb-[25px]">Company</h4>
            <ul className="flex flex-col gap-[12px]">
              {['About', 'Case Study', 'Career', 'Blog & Insights', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[#f7941d] text-[18px] font-normal mb-[25px]">Services</h4>
            <ul className="flex flex-col gap-[12px]">
              {[
                'AI Agents', 'Business Automation', 'Conversational AI', 
                'Workflow Automation', 'Voice Calling Agents', 'Data Intelligence', 
                'Enterprises RAG', 'Custom Integrations', 'AI Engineering'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Technologies */}
          <div>
            <h4 className="text-[#f7941d] text-[18px] font-normal mb-[25px]">Technologies</h4>
            <ul className="flex flex-col gap-[12px]">
              {[
                'Artificial Intelligence', 'Machine Learning', 'Automation Platforms', 
                'Cloud & Infrastructure', 'Data Engineering', 'APIs & Integrations', 
                'LLM & RAG Systems', 'Enterprise Architecture', 'DevOps & Deployment'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* --- Industries Section --- */}
        <div className="mb-[60px]">
          <h4 className="text-[#f7941d] text-[18px] mb-[25px]">Industries</h4>
          
          {/* Responsive Grid: 2 Cols on Mobile/Tablet, 4 Cols on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] md:gap-[40px]">
            
            {/* Ind Col 1 */}
            <ul className="flex flex-col gap-[12px]">
              {[
                'Healthcare', 'Education & EdTech', 'Finance & Banking', 
                'Insurance', 'Marketing & Advertising', 'Legal & Compliance'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Ind Col 2 */}
            <ul className="flex flex-col gap-[12px]">
               {[
                'E-Commerce', 'Retail', 'Real Estate', 
                'Logistics & Supply Chain', 'HR & Workforce Management', 'Agriculture & Food Tech'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Ind Col 3 */}
            <ul className="flex flex-col gap-[12px]">
               {[
                'Manufacturing', 'Travel & Hospitality', 'IT & SaaS', 
                'Telecommunications', 'Consulting Services', 'Startups Labs'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Ind Col 4 */}
            <ul className="flex flex-col gap-[12px]">
               {[
                'Energy & Utilities', 'Government & Public Services', 'Automotive', 
                'Media & Entertainment', 'Innovation Labs'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white font-light hover:text-[#f7941d] transition-colors duration-200 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-[#333] py-[25px] flex flex-col md:flex-row justify-between items-center text-[13px] text-white gap-[15px] md:gap-0">
          <div className="text-center md:text-left">
            &copy; 2025 Astex AI, All rights reserved.
          </div>
          <div className="flex gap-[20px]">
            <a href="#" className="text-white hover:text-[#f7941d] transition-colors">Terms & condition</a>
            <span className="text-[#666]">|</span>
            <a href="#" className="text-white hover:text-[#f7941d] transition-colors">Privacy policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;