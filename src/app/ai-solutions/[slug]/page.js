// /ai-solutions/[slug]/page.js
'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { getAiSolutionBySlug } from '../AiSolutionsData';
import Image from 'next/image';
import GetInTouch from '@/components/GetInTouch';

// --- Icons ---
const Icons = {
    ArrowRight: () => (
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    ),
    CheckCircle: () => (
        <svg className="w-12 h-12 text-[#e77d00] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    ),
    ChevronDown: ({ className }) => (
        <svg className={`w-5 h-5 transition-transform duration-300 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
    ),
    EcommerceIcon: () => (
        <div className="w-full h-full flex items-center justify-center text-6xl">🛒</div>
    ),
    TravelIcon: () => (
        <div className="w-full h-full flex items-center justify-center text-6xl">✈️</div>
    ),
    HealthcareIcon: () => (
        <div className="w-full h-full flex items-center justify-center text-6xl">🏥</div>
    ),
    EducationIcon: () => (
        <div className="w-full h-full flex items-center justify-center text-6xl">🎓</div>
    )
};

const AiSolutionPage = () => {
    const params = useParams();
    const solution = getAiSolutionBySlug(params.slug);
    
    // State for Section 3 (Tabs)
    const [activeTab, setActiveTab] = useState(0);
    
    // State for Section 4 (Accordion)
    const [openAccordion, setOpenAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    // If solution not found, show error
    if (!solution) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">AI Solution Not Found</h1>
                    <p className="text-gray-600">The AI solution you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    // Get appropriate icon based on solution
    const getHeroIcon = () => {
        switch(solution.slug) {
            case 'e-commerce-d2c':
                return <Icons.EcommerceIcon />;
            case 'travel-hospitality':
                return <Icons.TravelIcon />;
            case 'healthcare-clinics':
                return <Icons.HealthcareIcon />;
            case 'ed-tech-coaching-institutes':
                return <Icons.EducationIcon />;
            default:
                return <Icons.EcommerceIcon />;
        }
    };

    return (
        <div className="bg-white text-black font-sans w-full">
            
            {/* =========================================
                1. HERO SECTION
            ========================================= */}
            <section className="w-full">
                <div className="max-w-[1400px] mx-auto border-x border-[#d9d9d9] px-6 md:px-18 py-10 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Text Content */}
                        <div>
                            <h1 className="text-[32px] md:text-[45px] font-medium leading-[1.1] mb-6">
                                {solution.title} <br />AI Solutions
                            </h1>
                            <p className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-relaxed mb-8">
                                {solution.heroSubtitle}
                            </p>
                            <button className="bg-[#e77d00] hover:bg-black text-white px-8 py-3.5 font-medium uppercase text-xs tracking-wider transition-colors duration-300">
                                Get in Touch
                            </button>
                        </div>

                        {/* Hero Image/Icon */}
                         {/* Hero Image - Square Design */}
                        <div className="relative flex justify-center items-center h-[300px] md:h-[450px]">
                            <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg">
                                {/* Fallback background if image doesn't load */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e77d00]/10 to-black/5"></div>
                                
                                {/* Square Image Container */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={solution.heroImage}
                                        alt={solution.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    {/* Overlay for better text visibility if needed */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                </div>
                                
                                {/* Decorative element */}
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e77d00] rounded-full opacity-10 blur-3xl"></div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* =========================================
                2. IMPACT ON DOMAIN (NUMBERS)
            ========================================= */}
            <section className="w-full">
                <div className="max-w-[1400px] mx-auto border-x border-t border-[#d9d9d9] px-6 md:px-12 py-12 md:py-16">
                    <div className="text-center mb-10 md:mb-16  flex justify-center">
                        <h2 className="text-[32px] md:text-[45px] font-medium max-w-3xl">
                            {solution.impactTitle}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {solution.impactStats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <span className="text-[40px] bg-[#e77d00]/10 w-16 md:w-24 h-16 md:h-24 rounded-full md:text-[56px] font-bold text-[#e77d00]">
                                    {stat.value}
                                </span>
                                <h3 className="text-lg font-medium text-black mb-3">
                                    {stat.label}
                                </h3>
                                <p className="text-[15px] text-[#4a4a4a] max-w-xs mx-auto leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
                3. CHALLENGES & SOLUTIONS (TABS)
            ========================================= */}
            <section className="w-full">
                <div className="max-w-[1400px] mx-auto border-x border-t border-[#d9d9d9] px-6 md:px-14 py-12 md:py-16 bg-white">
                    <div className="text-center mb-16 flex justify-center">
                        <h2 className="text-[32px] md:text-[45px] font-medium max-w-3xl">
                            {solution.challengesTitle}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
                        
                        {/* Left Side: Buttons */}
                        <div className="lg:col-span-4 flex flex-col space-y-4">
                            {solution.challengesTabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`text-left px-6 py-4 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-sm
                                    ${activeTab === index 
                                        ? 'bg-[#e77d00] text-white shadow-lg' 
                                        : 'bg-transparent text-[#4a4a4a] hover:bg-gray-50'
                                    }`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                        {/* Right Side: Content Card */}
                        <div className="lg:col-span-8">
                            <div className="bg-[#e77d00]/10 border border-gray-100 p-8 md:p-12 rounded-xl min-h-[300px] flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out">
                                <div className="animate-fadeIn">
                                    <div className="flex justify-center">
                                        <Icons.CheckCircle />
                                    </div>
                                    <p className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-relaxed">
                                        {solution.challengesTabs[activeTab].content.text}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================
                4. ADVANTAGES (ACCORDION)
            ========================================= */}
            <section className="w-full">
                <div className="max-w-[1400px] mx-auto border-x border-t border-[#d9d9d9] px-6 md:px-12 py-12 md:py-18 bg-gray-50/30">
                    <div className="text-center mb-16 flex justify-center">
                        <h2 className="text-[32px] md:text-[45px] font-medium leading-tight max-w-3xl mx-auto">
                            {solution.advantagesTitle}
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {solution.advantages.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full cursor-pointer flex items-center justify-between p-6 md:p-8 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-2 h-2 rounded-full ${openAccordion === index ? 'bg-[#e77d00]' : 'bg-gray-300'}`}></div>
                                        <span className={`text-lg md:text-xl font-medium ${openAccordion === index ? 'text-black' : 'text-[#4a4a4a]'}`}>
                                            {item.title}
                                        </span>
                                    </div>
                                    <Icons.ChevronDown className={openAccordion === index ? 'rotate-180 text-[#e77d00]' : 'text-gray-400'} />
                                </button>

                                <div 
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                        openAccordion === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="p-6 md:p-8 pt-0 text-[16px] text-[#4a4a4a] leading-relaxed pl-12 border-t border-gray-50/50">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
                5. SOLUTIONS GRID
            ========================================= */}
            <section className="w-full">
                <div className="max-w-[1400px] mx-auto border-x border-y border-[#d9d9d9] px-6 md:px-12 py-12 md:py-18">
                    <div className="text-center mb-10 md:mb-16 flex justify-center">
                        <h2 className="text-[32px] md:text-[45px] font-medium leading-tight max-w-3xl mx-auto">
                            {solution.solutionsTitle}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-20">
                        {solution.solutions.map((card, index) => (
                            <div 
                                key={index} 
                                className="bg-[#e77d00]/8 border border-gray-100 p-8 md:p-12 hover:shadow-lg transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-medium mb-6 text-black">
                                    {card.title}
                                </h3>
                                <p className="text-[16px] text-[#4a4a4a] leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <GetInTouch />
        </div>
    );
};

export default AiSolutionPage;