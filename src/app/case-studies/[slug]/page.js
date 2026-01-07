


'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { getCaseStudyBySlug } from '../CaseStudyData'; // Import Data Helper

// --- Icons ---
const Icons = {
  ArrowLeft: () => (
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
  ),
  Check: () => (
    <svg className="w-5 h-5 text-[#e77d00] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
  ),
  Quote: () => (
    <svg className="w-12 h-12 text-[#e77d00]/20 absolute -top-6 -left-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.096 14.848 14.878 16.892 14.246C15.112 11.63 15.112 11.63 15.112 11.63C15.112 7.788 18.231 6 20.846 6C20.846 6 20.846 8.91 20.846 8.91C19.782 8.91 19.334 9.479 19.334 10.662C19.334 10.662 21.082 10.662 21.082 10.662C21.082 15.539 16.792 18.064 14.017 21ZM5.01697 21L5.01697 18C5.01697 16.096 5.84797 14.878 7.89197 14.246C6.11197 11.63 6.11197 11.63 6.11197 7.788 9.23097 6 11.846 6C11.846 6 11.846 8.91 11.846 8.91C10.782 8.91 10.334 9.479 10.334 10.662C10.334 10.662 12.082 10.662 12.082 10.662C12.082 15.539 7.79197 18.064 5.01697 21Z"></path></svg>
  )
};

const CaseStudyDetail = () => {
  const params = useParams();
  const slug = params.slug;
  const data = getCaseStudyBySlug(slug);

  // Handle 404 if data missing
  if (!data) {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white text-center px-4">
             <h1 className="text-4xl font-bold text-[#e77d00] mb-4">404</h1>
             <p className="text-xl text-gray-600 mb-8">Case Study not found.</p>
             <Link href="/case-studies" className="bg-black text-white px-6 py-3 rounded-sm uppercase tracking-wider text-sm font-bold">
                Back to Case Studies
             </Link>
        </div>
    );
  }

  return (
    <section className="w-full bg-white text-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto border-x border-[#d9d9d9]">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="px-6 md:px-12 pt-12 md:pt-20 pb-12">
            {/* Back Link */}
            <Link href="/case-studies" className="inline-flex items-center text-gray-500 hover:text-[#e77d00] transition-colors mb-8 text-sm uppercase tracking-wider font-medium">
                <Icons.ArrowLeft />
                Back to Case Studies
            </Link>

            {/* Title & Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <div>
                    <span className="text-[#e77d00] font-bold uppercase tracking-widest text-xs mb-4 block">
                        {data.industry}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-medium leading-[1.1] text-black mb-6">
                        {data.title}
                    </h1>
                    <p className="text-xl text-gray-500 font-light">
                        Client: <span className="text-black font-normal">{data.client}</span>
                    </p>
                </div>

                {/* Highlight Stats Box */}
                <div className="bg-black/5 text-white p-8 md:p-10 flex flex-col md:flex-row justify-between gap-8 md:gap-4">
                    {data.impactStats.map((stat, index) => (
                        <div key={index} className="flex-1">
                            <span className="block text-3xl md:text-5xl font-bold text-[#e77d00] mb-2">
                                {stat.value}
                            </span>
                            <span className="text-xs text-gray-900 tracking-widest leading-relaxed block">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* ================= HERO IMAGE ================= */}
        <div className="w-full h-[300px] md:h-[600px] relative border-y border-[#d9d9d9] overflow-hidden">
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-black/10 z-10"></div>
             <Image 
                src={data.image} 
                alt={data.title}
                fill
                className="object-cover"
                priority
            />
        </div>

        {/* ================= MAIN CONTENT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
            
            {/* --- LEFT: NARRATIVE (Cols 8) --- */}
            <div className="lg:col-span-8 p-6 md:p-12 lg:border-r border-[#d9d9d9]">
                
                {/* 1. The Challenge */}
                <div className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center">
                        <span className="w-8 h-[2px] bg-[#e77d00] mr-4"></span>
                        The Challenge
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                        {data.content.challenge}
                    </p>
                </div>

                {/* 2. The Solution */}
                <div className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center">
                        <span className="w-8 h-[2px] bg-[#e77d00] mr-4"></span>
                        The AI Solution
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line mb-8">
                        {data.content.solution}
                    </p>
                </div>

                {/* 3. The Implementation (Process) */}
                <div className="mb-16">
                     <h2 className="text-2xl font-medium mb-6 flex items-center">
                        <span className="w-8 h-[2px] bg-[#e77d00] mr-4"></span>
                        Implementation Process
                    </h2>
                    <ul className="space-y-4">
                        {data.content.implementation.map((step, i) => (
                            <li key={i} className="flex items-center text-lg text-gray-600">
                                <span className="w-8 h-8 rounded-full border border-[#d9d9d9] text-[#e77d00] font-bold flex items-center justify-center mr-4 text-sm flex-shrink-0">
                                    0{i+1}
                                </span>
                                {step}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4. Testimonial */}
                <div className="mb-16 relative bg-[#e77d00]/5 p-10 rounded-sm">
                    <Icons.Quote />
                    <blockquote className="relative z-10 text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-6">
                        "{data.content.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden relative">
                             {/* Avatar Placeholder */}
                             <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-xs">
                                {data.content.testimonial.author.charAt(0)}
                             </div>
                         </div>
                         <div>
                             <p className="text-sm font-bold text-black">{data.content.testimonial.author}</p>
                             <p className="text-xs text-gray-500 uppercase tracking-wider">{data.content.testimonial.role}</p>
                         </div>
                    </div>
                </div>

                {/* 5. Results Summary */}
                <div>
                    <h2 className="text-2xl font-medium mb-6 flex items-center">
                        <span className="w-8 h-[2px] bg-[#e77d00] mr-4"></span>
                        Key Outcomes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.content.results.map((item, i) => (
                            <div key={i} className="flex items-start p-4 border border-gray-100 bg-gray-50 rounded-sm">
                                <Icons.Check />
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* --- RIGHT: SIDEBAR (Cols 4) --- */}
            <div className="lg:col-span-4 bg-gray-50 p-6 md:p-12 border-b lg:border-b-0 border-[#d9d9d9]">
                <div className="sticky top-8">
                    <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-8 pb-4 border-b border-[#d9d9d9]">
                        Project At a Glance
                    </h3>

                    <div className="space-y-8">
                        {/* Client */}
                        <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Client</span>
                            <span className="text-lg font-medium text-black">{data.client}</span>
                        </div>
                        
                         {/* Industry */}
                         <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Industry</span>
                            <span className="text-lg font-medium text-black">{data.industry}</span>
                        </div>

                        {/* Region */}
                        <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Region</span>
                            <span className="text-lg font-medium text-black">{data.region}</span>
                        </div>
                        
                        {/* Duration */}
                        <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Duration</span>
                            <span className="text-lg font-medium text-black">{data.duration}</span>
                        </div>

                         {/* Tech Stack */}
                         <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-3">Tech Stack</span>
                            <div className="flex flex-wrap gap-2">
                                {data.techStack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-white border border-[#d9d9d9] text-xs font-medium text-gray-600 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                         {/* Services Provided */}
                         <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-3">Services Delivered</span>
                            <ul className="space-y-2">
                                {data.services.map((service, i) => (
                                    <li key={i} className="text-sm text-gray-600 border-b border-gray-200 pb-2 last:border-0">
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="mt-12 pt-8 border-t border-[#d9d9d9]">
                        <p className="text-sm text-gray-500 mb-4">Facing a similar challenge?</p>
                        <Link 
                            href="/company/contact-us"
                            className="block w-full text-center bg-[#e77d00] text-white px-6 py-3 uppercase text-xs font-bold tracking-widest hover:bg-black transition-colors duration-300"
                        >
                            Discuss Your Project
                        </Link>
                    </div>

                </div>
            </div>

        </div>

         {/* ================= BOTTOM NAV ================= */}
         <div className="border-t border-[#d9d9d9] px-6 md:px-12 py-12 flex justify-between items-center bg-gray-50">
             <Link href="/case-studies" className="text-gray-500 hover:text-black transition-colors text-sm font-medium flex items-center group">
                 <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back to List
             </Link>
             <Link href="/case-studies" className="text-[#e77d00] font-bold text-sm uppercase tracking-widest hover:text-black transition-colors">
                 View All Projects
             </Link>
             {/* Optional: Add logic for Next Project link based on index */}
         </div>

      </div>
    </section>
  );
};

export default CaseStudyDetail;