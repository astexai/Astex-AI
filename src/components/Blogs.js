import React from 'react';

const Blogs = () => {
  const articles = [
    {
      date: 'Dec 28, 2025',
      title: 'How AI Automation is Transforming Modern Business Operations',
      // Tech/Business abstract image
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop'
    },
    {
      date: 'Dec 28, 2025',
      title: 'Building Intelligent Systems That Scale with Your Enterprise',
      // Circuit/Data image
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
    },
    {
      date: 'Dec 28, 2025',
      title: 'Real-World Use Cases of AI Agents in Industry',
      // Robot/Handshake image
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop'
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
                {item.title}
              </h4>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;