// /services/[slug]/page.js
'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { getServiceBySlug } from '../ServiceData';

// --- Icons ---
const Icons = {
    // Hero/Misc
    ArrowRight: () => (
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    ),
    Check: () => (
        <svg className="w-5 h-5 text-[#e77d00] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    ),
    // Solutions Icons
    Unified: () => <svg className="w-8 h-8 text-[#e77d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    Synthesis: () => <svg className="w-8 h-8 text-[#e77d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    Chat: () => <svg className="w-8 h-8 text-[#e77d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
    Speed: () => <svg className="w-8 h-8 text-[#e77d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    Adapt: () => <svg className="w-8 h-8 text-[#e77d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
    Scale: () => <svg className="w-8 h-8 text-[#e77d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>,
    // Impact Icons
    Bolt: () => <svg className="w-6 h-6 text-[#e77d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    Globe: () => <svg className="w-6 h-6 text-[#e77d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    Dollar: () => <svg className="w-6 h-6 text-[#e77d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    Refresh: () => <svg className="w-6 h-6 text-[#e77d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
};

// --- Logos Data ---
const logos = [
    { name: "Notion", url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { name: "GitLab", url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg" },
    { name: "Upwork", url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Upwork-logo.svg" },
    { name: "HubSpot", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/HubSpot_Logo.svg" },
    { name: "Cursor", text: "CURSOR" },
    { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
    { name: "Cresta", text: "CRESTA" },
    { name: "Quora", url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Quora_Logo_2011.png" },
];

const ServicePage = () => {
    const params = useParams();
    const service = getServiceBySlug(params.slug);

    // If service not found, show error
    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
                    <p className="text-gray-600">The service you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white text-black font-sans w-full">

            {/* =========================================================================
           1. HERO SECTION
           ========================================================================= */}
            <section className="w-full">
                <div className="max-w-[1400px] mx-auto border-x border-[#d9d9d9] px-6 md:px-12 pt-10 md:pt-20 pb-16">
                    <p className="text-md font-medium tracking-[0.1em] text-[#4a4a4a] uppercase mb-6">
                        {service.title}
                    </p>
                    <h1 className="text-[32px] md:text-[64px] font-medium leading-[1.1] mb-6">
                        {service.heroTitle}
                    </h1>
                    <p className="text-[16px] md:text-[18px] text-[#4a4a4a] max-w-4xl leading-relaxed mb-10">
                        {service.heroSubtitle}
                    </p>

                    <div className="flex flex-row gap-4 mb-20">
                        <button className="bg-[#e77d00] cursor-pointer hover:bg-black text-white px-8 py-3.5 font-medium uppercase text-xs tracking-wider transition-colors duration-300">
                            Get Started
                        </button>
                        <button className="border cursor-pointer border-black hover:bg-gray-50 text-black px-8 py-3.5 font-medium uppercase text-xs tracking-wider transition-colors duration-300">
                            Contact Us
                        </button>
                    </div>

                    {/* Logo Strip */}
                    <div className="border-t border-[#d9d9d9] pt-10">
                        <div className="flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {logos.map((logo, idx) => (
                                <div key={idx} className="flex items-center justify-center min-w-[80px]">
                                    {logo.url ? (
                                        <img src={logo.url} alt={logo.name} className="h-6 md:h-8 object-contain" />
                                    ) : (
                                        <span className="text-xl font-bold font-serif text-gray-600">{logo.text}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
           2. PROBLEM SECTION
           ========================================================================= */}
            <section className="w-full">
                <div className="max-w-[1400px] mx-auto border-x border-t border-[#d9d9d9] px-6 md:px-0 md:pl-12 py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div>
                            <p className="text-md font-medium tracking-[0.1em] text-[#4a4a4a] uppercase mb-6">
                                Problem
                            </p>
                            <h2 className="text-[32px] md:text-[45px] font-medium leading-tight mb-6">
                                {service.problemTitle}
                            </h2>
                            <p className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-relaxed">
                                {service.problemContent}
                            </p>
                        </div>

                        {/* Right Column - Dynamic Problems */}
                        <div className="border border-[#d9d9d9] px-8">
                            {service.problems && service.problems.map((problem, index) => (
                                <div 
                                    key={index}
                                    className={`border-[#d9d9d9] py-8 ${
                                        index < service.problems.length - 1 ? 'border-b' : ''
                                    }`}
                                >
                                    <h3 className="text-xl font-medium mb-3">{problem.title}</h3>
                                    <p className="text-[16px] text-[#4a4a4a] leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
           3. SOLUTION GRID
           ========================================================================= */}
            <section className="w-full">
                <div className="max-w-[1400px] mx-auto border-x border-t border-[#d9d9d9]">
                    {/* Header */}
                    <div className="px-6 md:px-12 py-12 md:py-18 text-center border-b border-[#d9d9d9]">
                        <p className="text-md font-medium tracking-[0.1em] text-[#4a4a4a] uppercase mb-6">
                            Solution
                        </p>
                        <h2 className="text-[32px] md:text-[45px] font-medium leading-tight mb-8 max-w-3xl mx-auto">
                            {service.solutionTitle}
                        </h2>
                        <p className="text-[16px] md:text-[18px] text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
                            {service.solutionSubtitle}
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {service.features.map((item, idx) => (
                            <div 
                                key={idx} 
                                className={`p-8 md:p-12 border-b border-[#d9d9d9] hover:bg-gray-50 transition-colors duration-300
                                    ${(idx + 1) % 2 !== 0 ? 'md:border-r' : ''} 
                                    ${(idx + 1) % 3 !== 0 ? 'lg:border-r' : 'lg:border-r-0'}
                                `}
                            >
                                <div className="mb-6">
                                    {Icons[item.icon] ? Icons[item.icon]() : <Icons.Unified />}
                                </div>
                                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                                <p className="text-[15px] text-[#4a4a4a] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================================
           4. IMPACT SECTION
           ========================================================================= */}
            <section className="w-full">
                <div className="max-w-[1400px] mx-auto border-x border-[#d9d9d9] bg-white px-6 md:px-12 pt-18 md:pt-24">
                    <div className="bg-black text-white rounded-[20px] p-8 md:p-16">
                        <h2 className="text-[32px] md:text-[45px] font-medium mb-12">
                            {service.impactTitle || "Real-World Impact"}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.impacts.map((card, idx) => (
                                <div key={idx} className="bg-white text-black p-6 rounded-[12px] h-full flex flex-col">
                                    <div className="mb-6">
                                        {Icons[card.icon] ? Icons[card.icon]() : <Icons.Bolt />}
                                    </div>
                                    <h3 className="text-xl font-medium mb-4 leading-tight">{card.metric}</h3>
                                    <p className="text-sm text-[#4a4a4a] leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
           5. USE CASES SECTION
           ========================================================================= */}
            <section className="w-full">
                <div className="max-w-[1400px] mx-auto border-x border-b border-[#d9d9d9] px-6 md:px-12 py-20">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-md font-medium tracking-[0.1em] text-[#4a4a4a] uppercase mb-6">
                            {service.useCasesTitle || "Maximize Your Team's Impact"}
                        </p>
                        <h2 className="text-[32px] md:text-[45px] font-medium leading-tight mb-6">
                            {service.useCasesHeading || `Build, Tune, and Scale ${service.title}`}
                        </h2>
                        <p className="text-[16px] md:text-[18px] text-[#4a4a4a] max-w-4xl mx-auto leading-relaxed">
                            {service.useCasesDescription || "Astex AI enables teams to reason across multi-source data and documents, delivering context-aware guidance, faster decisions, and scalable, auditable knowledge workflows across your organization"}
                        </p>
                    </div>

                    {/* Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#d9d9d9] pt-12">
                        {service.useCases.map((useCase, idx) => (
                            <div 
                                key={idx} 
                                className={idx < service.useCases.length - 1 ? "md:border-r border-[#d9d9d9] md:pr-8" : ""}
                            >
                                <h3 className="text-xl font-medium mb-8">{useCase.title}</h3>
                                <ul className="space-y-6">
                                    {useCase.points.map((item, i) => (
                                        <li key={i} className="flex items-start text-[15px] text-[#4a4a4a] leading-relaxed">
                                            <Icons.Check />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServicePage;