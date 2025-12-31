'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
    {/* <Navbar /> */}
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden font-inter text-[#111]">

      {/* 1. Subtle Background Grid (Pure CSS) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
        }}
      ></div>

      {/* 2. Main Content */}
      <div className="relative z-10 flex -mt-36 flex-col items-center text-center px-5 max-w-4xl mx-auto">

        {/* CSS-Only Animated AI Icon */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          {/* Inner Core */}
          <div className="w-5 h-5 bg-[#e77d00] rounded-full z-10 shadow-[0_0_20px_rgba(231,125,0,0.6)]"></div>
          
          {/* Ripples (Using Tailwind built-in animations + custom delay styles) */}
          <div className="absolute inset-0 border-[1.5px] border-[#e77d00] rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-8 border border-[#e77d00] rounded-full animate-pulse opacity-40"></div>
          
          {/* Rotating Ring */}
          <div className="absolute inset-2 border-t-2 border-[#111] rounded-full animate-spin [animation-duration:3s]"></div>
        </div>

        {/* Logo */}
        <div className="text-2xl font-medium tracking-tight mb-8">
          Astex<span className="text-[#e77d00]">ai</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium mb-6 leading-[1.1] tracking-tight">
         We’re Giving  <br className="hidden md:block" />
          Our Site a <span className="text-[#e77d00]">Quick Upgrade.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-[#666] max-w-2xl mb-12 leading-relaxed">
         Something awesome is on the way! We’re performing essential maintenance to bring you a better, faster experience.  <br className="hidden md:block" />
          We’ll be back online shortly. Thank you for your patience.
        </p>

        {/* Simple Button */}
        <Link href="/">
          <button className="px-10 cursor-pointer py-4 bg-black text-white text-[16px] font-semibold rounded-[4px] hover:bg-[#e77d00] transition-colors duration-300 shadow-lg">
            Return to Home
          </button>
        </Link>

      </div>

    </div>
    {/* <Footer /> */}
    </>
  );
};

export default NotFound;