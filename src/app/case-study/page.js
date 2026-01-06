
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllCaseStudies } from './CaseStudyData'; // Import Data

// --- Icons ---
const Icons = {
  ArrowRight: () => (
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
  ),
  Filter: () => (
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
  )
};

const CaseStudy = () => {
  const [activeIndustry, setActiveIndustry] = useState('All');
  
  // Fetch Data
  const caseStudies = getAllCaseStudies();

  // Distinct industries from data + 'All'
  const industries = ['All', ...new Set(caseStudies.map(item => item.industry))];

  // Filter Logic
  const filteredCases = activeIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === activeIndustry);

  // Separate the first featured item (optional logic, taking the first from filtered)
  const featuredCase = filteredCases.length > 0 ? filteredCases[0] : null;
  const remainingCases = filteredCases.length > 0 ? filteredCases.slice(1) : [];

  return (
    <section className="w-full bg-white text-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto border-x border-[#d9d9d9]">
        
        {/* ================= HERO SECTION ================= */}
        <div className="px-6 md:px-12 py-16 md:py-24 border-b border-[#d9d9d9]">
          <nav className="text-sm text-gray-500 mb-8 tracking-wide flex items-center gap-2">
            <Link href="/" className="hover:text-[#e77d00] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </Link>
            <span>/</span>
            <span className="text-[#e77d00] font-medium">Case Studies</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-7xl">
                <h1 className="text-[32px] md:text-[56px] font-medium leading-[1.1] text-black mb-6">
                    Engineering Impact: <br />
                    <span className="text-[#e77d00]">Real Results</span> with AI Agents.
                </h1>
                <p className="text-md md:text-lg text-gray-500 leading-relaxed max-w-2xl">
                    We don't just build POCs. We deploy scalable, enterprise-grade AI solutions that drive measurable business outcomes. Explore our client success stories below.
                </p>
            </div>
            {/* Stat Circle */}
            <div className="hidden md:flex flex-col items-center justify-center w-40 h-40 rounded-full border border-[#e77d00] bg-[#e77d00]/5 text-center p-4">
                <span className="text-3xl font-bold text-[#e77d00]">$50M+</span>
                <span className="text-xs uppercase tracking-widest text-black mt-1">Value Generated</span>
            </div>
          </div>
        </div>

        {/* ================= FILTER BAR ================= */}
        <div className="px-6 md:px-12 py-8 bg-gray-50 border-b border-[#d9d9d9] sticky top-0 z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center text-sm font-medium text-gray-500 uppercase tracking-widest">
                <Icons.Filter />
                Filter by Industry:
            </div>
            
            <div className="flex flex-wrap gap-2 md:gap-4">
                {industries.map((ind) => (
                    <button
                        key={ind}
                        onClick={() => setActiveIndustry(ind)}
                        className={`px-5 py-2 text-sm rounded-full border transition-all duration-300
                            ${activeIndustry === ind 
                                ? 'bg-[#e77d00] text-white border-[#e77d00] shadow-md' 
                                : 'bg-white text-gray-600 border-[#d9d9d9] hover:border-[#e77d00] hover:text-[#e77d00]'
                            }
                        `}
                    >
                        {ind}
                    </button>
                ))}
            </div>
          </div>
        </div>

        {/* ================= FEATURED CASE STUDY (First Item) ================= */}
        {featuredCase && activeIndustry === 'All' && (
             <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#d9d9d9]">
                {/* Image Side */}
                <div className="relative h-[400px] lg:h-auto border-b lg:border-b-0 lg:border-r border-[#d9d9d9] group overflow-hidden">
                    <Image 
                        src={featuredCase.image} 
                        alt={featuredCase.title} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-[#e77d00] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                        Featured Success Story
                    </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-16 flex flex-col justify-center bg-white">
                    <div className="mb-6 flex items-center gap-2">
                        <span className="text-xs font-bold text-[#e77d00] uppercase tracking-widest border border-[#e77d00]/20 bg-[#e77d00]/5 px-2 py-1 rounded">
                            {featuredCase.industry}
                        </span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">
                             {featuredCase.client}
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">
                        {featuredCase.title}
                    </h2>

                    <p className="text-gray-600 mb-10 leading-relaxed line-clamp-3">
                        {featuredCase.description}
                    </p>

                    {/* Impact Stats Row */}
                    <div className="flex gap-12 mb-10 border-l-4 border-[#e77d00] pl-6">
                        {featuredCase.previewStats.map((stat, i) => (
                            <div key={i}>
                                <span className="block text-4xl font-bold text-[#e77d00] mb-1">{stat.value}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <Link href={`/case-study/${featuredCase.slug}`} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#e77d00] transition-colors group">
                        Read Full Case Study
                        <div className="transform group-hover:translate-x-1 transition-transform">
                            <Icons.ArrowRight />
                        </div>
                    </Link>
                </div>
             </div>
        )}

        {/* ================= CASE STUDY GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* If 'All' is active, we mapped the first one as featured, so show the rest. If filtered, show all matches. */}
            {(activeIndustry === 'All' ? remainingCases : filteredCases).map((study, index) => (
                <Link 
                    href={`/case-study/${study.slug}`} 
                    key={study.id}
                    className={`group flex flex-col h-full bg-white border-b border-[#d9d9d9] p-8 hover:bg-gray-50 transition-colors duration-300
                        ${(index + 1) % 3 !== 0 ? 'lg:border-r' : ''} 
                        ${(index + 1) % 2 !== 0 ? 'md:border-r lg:border-r-0' : ''}
                    `}
                >
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-6">
                         <div className="text-xs font-bold text-[#e77d00] uppercase tracking-widest border border-[#e77d00]/20 bg-[#e77d00]/5 px-2 py-1 rounded">
                            {study.industry}
                        </div>
                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                            {study.client}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-48 mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500">
                        <Image 
                            src={study.image} 
                            alt={study.title}
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-medium text-black mb-4 leading-tight group-hover:text-[#e77d00] transition-colors">
                        {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed line-clamp-3">
                        {study.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-dashed border-gray-300">
                        {study.previewStats.map((stat, i) => (
                            <div key={i}>
                                <span className="block text-xl font-bold text-black group-hover:text-[#e77d00] transition-colors">
                                    {stat.value}
                                </span>
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                     {/* Hover Arrow */}
                     <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-[#e77d00]">
                            <Icons.ArrowRight />
                        </span>
                     </div>
                </Link>
            ))}
        </div>

        {/* ================= NO RESULTS STATE ================= */}
        {filteredCases.length === 0 && (
            <div className="py-24 text-center">
                 <h3 className="text-2xl font-medium text-gray-800 mb-2">No case studies found</h3>
                 <p className="text-gray-500">We are currently compiling case studies for this industry.</p>
                 <button 
                    onClick={() => setActiveIndustry('All')}
                    className="mt-6 text-[#e77d00] font-medium underline"
                 >
                    View All Success Stories
                 </button>
            </div>
        )}

        {/* ================= CTA SECTION ================= */}
        <div className="px-6 md:px-12 py-20 md:py-28 bg-[#1a1a1a] text-white text-center">
            <h2 className="text-3xl md:text-5xl font-medium mb-6">
                Ready to write your success story?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Join the forward-thinking companies using our AI Agents to reduce costs and scale operations.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <Link 
                    href="/company/contact-us"
                    className="bg-[#e77d00] text-white px-10 py-4 uppercase text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                    Start Project
                </Link>
                <Link 
                    href="/company/book-demo"
                    className="border border-white text-white px-10 py-4 uppercase text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                    Book a Demo
                </Link>
            </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;