import React from 'react';
import Link from 'next/link';

const Blogs = () => {
  const articles = [
    {
      date: 'Jan 05, 2026',
      title: 'The Rise of Autonomous AI Agents in Enterprise Workflows',
      // Tech/Business abstract image
      image: '/assets/blogs/blog1banner.png',
      link: '/company/blogs-and-insights/autonomous-ai-agents-enterprise-workflows',
    },
    {
      date: 'Jan 05, 2026',
      title: 'Orchestrating Multi-Agent Systems for Customer Support',
      // Circuit/Data image
      image: '/assets/blogs/blog2banner.png',
       link: '/company/blogs-and-insights/orchestrating-multi-agent-systems-support',
    },
    {
      date: 'Jan 05, 2026',
      title: 'From Tasks to Outcomes: Agentic AI Automation in Business Operations',
      // Robot/Handshake image
      image: '/assets/blogs/blog3banner.png',
       link: '/company/blogs-and-insights/agentic-ai-automation-business-operations',
    }
  ];

  return (
    <section className="w-full bg-white px-5 font-inter">
      <div className="max-w-[1400px] pb-24 px-5 md:px-8 border-x border-[#d9d9d9] mx-auto text-left">
        
        {/* Header */}
        <h2 className="text-[32px] md:text-[45px] font-medium text-black mb-10 mt-10">
          Gain Valuable Insights Before Leveraging AI
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {articles.map((item, index) => (
            <div key={index} className="flex border border-[#d9d9d9] p-4 flex-col cursor-pointer group">
              
              {/* Image Container */}
              <div className="w-full h-[220px] bg-gray-100 mb-5 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Meta Data */}
              <div className="text-[15px] text-[#999999] mb-2.5">
                {item.date}
              </div>

              {/* Title */}
              <h4 className="text-[22px] font-medium leading-[1.5] text-[#111] transition-colors duration-200 group-hover:text-[#f7941d]">
                <Link href={item.link}>
                  {item.title}
                </Link>
              </h4>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;