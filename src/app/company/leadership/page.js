'use client';
import React from 'react';
import Link from 'next/link';

// --- Social Icons ---
const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// --- Data: Team Members ---
const teamData = [
  {
    name: "Lin Qiao",
    role: "Co-Founder, CEO",
    prev: "Previously Head of PyTorch at Meta",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    linkedin: "#",
    x: "#"
  },
  {
    name: "Benny Chen",
    role: "Co-Founder",
    prev: "Previously Meta ads infra lead",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    linkedin: "#",
    x: "#"
  },
  {
    name: "Chenyu Zhao",
    role: "Co-Founder",
    prev: "Previously Google Vertex AI Lead",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    linkedin: "#",
    x: "#" // Only LinkedIn shown in image for some, but added for structure
  },
  {
    name: "Dmytro Dzhulgakov",
    role: "Co-Founder",
    prev: "Previously PyTorch core maintainer at Meta",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    linkedin: "#",
    x: "#"
  },
  {
    name: "Dmytro Ivchenko",
    role: "Co-Founder",
    prev: "Previously PyTorch for ranking lead at Meta",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    linkedin: "#",
    x: null
  },
  {
    name: "James Reed",
    role: "Co-Founder",
    prev: "Previously PyTorch compiler at Meta",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    linkedin: "#",
    x: null
  },
  // Add empty object if you want to fill the grid slot or leave blank
];

// --- Data: Investors ---
// Using text/SVGs representation since I don't have the specific logo files
const investorsData = [
  { name: "BENCHMARK", type: "text" },
  { name: "SEQUOIA", type: "text" },
  { name: "Lightspeed", type: "text" },
  { name: "Index Ventures", type: "text" },
  { name: "EVANTIC", type: "text" }, // Placeholder for icon style
  { name: "NVIDIA", type: "text" },
  { name: "AMD", type: "text" },
];

const Leadership = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-[1400px] border-x border-[#d9d9d9] mx-auto pt-10 md:pt-15 pb-20">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] text-gray-500 mb-4">
            <span className='text-[#e77d00]'>Astex AI</span>
          </p>
          <h1 className="text-[32px] md:text-[45px] font-medium text-black mb-2">
            Meet the Founding Team
          </h1>
          <p className="text-gray-500 text-md md:text-lg max-w-3xl mx-auto font-light px-6 md:px-0">
            Bringing decades of AI experience from PyTorch, Meta and Google to unlock product innovation.
          </p>
        </div>

        {/* --- Team Grid --- */}
        {/* We use a container with border-t and border-l to handle the outer edges,
            and every cell has border-b and border-r. This creates the "perfect grid" look. */}
        <div className="border-t border-l border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
            {teamData.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col border-r border-b border-gray-200 group hover:bg-gray-50 transition-colors duration-300"
              >
                {/* Image Area - Aspect Square/Portrait */}
                <div className="w-full aspect-[4/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-medium text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-black mb-6">
                    {member.role}
                  </p>

                  {/* Social Icons */}
                  <div className="mt-auto flex gap-4">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        className="text-black hover:text-[#e77d00] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                    {member.x && (
                      <a 
                        href={member.x} 
                        className="text-black hover:text-[#e77d00] transition-colors"
                        aria-label="X (Twitter)"
                      >
                        <XIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Empty grid cell to fill the row if needed on desktop (optional visual balance) */}
             <div className="hidden lg:block border-r border-b border-gray-200 bg-gray-50/30"></div> 

          </div>
        </div>

        {/* --- Investors Section --- */}
        <div className="mt-24 mb-8">
          <h2 className="text-[32px] md:text-[45px] pl-10 font-medium text-black">
            Our Investors
          </h2>
        </div>

        {/* --- Investors Grid --- */}
        <div className="border-t border-l border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            
            {investorsData.map((investor, index) => (
              <div 
                key={index} 
                className="border-r border-b border-gray-200 h-40 flex items-center justify-center p-8 hover:bg-gray-50 transition-colors"
              >
                {/* Placeholder Logic for Logos - Replacing text with appropriate styling to mimic logos */}
                <span className={`text-xl font-bold text-black uppercase tracking-wider ${index === 3 ? 'leading-tight text-center' : ''}`}>
                   {/* Simulating logo visuals with text */}
                   {investor.name === 'SEQUOIA' ? (
                       <span className="font-serif tracking-widest text-sm">SEQUOIA <span className="text-[10px]">III</span></span>
                   ) : investor.name === 'NVIDIA' ? (
                        <span className="flex items-center gap-1 font-sans font-bold">
                            <span className="inline-block w-4 h-4 bg-black"></span> NVIDIA
                        </span>
                   ) : (
                       investor.name
                   )}
                </span>
              </div>
            ))}
            
             {/* Empty filler cells to complete the grid look if row is incomplete */}
             <div className="hidden lg:block border-r border-b border-gray-200 h-40"></div>
             <div className="hidden lg:block border-r border-b border-gray-200 h-40"></div>
             <div className="hidden lg:block border-r border-b border-gray-200 h-40"></div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Leadership;