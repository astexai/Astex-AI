'use client';
import React, { useState } from 'react';

const ContactUs = () => {
  // --- Testimonial Logic ---
  const testimonials = [
    {
      name: "Antonio Santana",
      role: "CEO at Wellness Empowered",
      quote: "I have been working with Astex AI for almost 3 years now, & the team is simply great. They understand your need & deliver what's best for your business.",
      img: "https://img.freepik.com/free-photo/smiling-indian-businessman-working-laptop-office_23-2149301037.jpg"
    },
    {
      name: "Sarah Jenkins",
      role: "CTO at TechFlow Solutions",
      quote: "The automation tools provided by Astex transformed our workflow. We reduced manual processing by 60% in the first quarter alone.",
      img: "https://img.freepik.com/free-photo/portrait-successful-mid-adult-businesswoman-sitting-office-smiling_23-2148753232.jpg"
    },
    {
      name: "Michael Chen",
      role: "Director at DataSphere",
      quote: "Incredible insights and scalable architecture. The transition to their AI systems was smooth and the support has been world-class.",
      img: "https://img.freepik.com/free-photo/confident-handsome-business-man-office_1303-18155.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeTestimonial = (direction) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        let newIndex = prev + direction;
        if (newIndex >= testimonials.length) newIndex = 0;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        return newIndex;
      });
      setIsAnimating(false);
    }, 300); // Wait for fade out
  };

  const currentT = testimonials[currentIndex];

  return (
    <section className="w-full px-5 font-inter">
      <div className="max-w-[1400px] border-x border-[#d9d9d9] mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-[50px] md:gap-[60px] items-start">
        
        {/* --- Left Column: Testimonial --- */}
        <div>
          <h3 className="text-[32px] md:text-[45px] font-medium mb-[25px] text-black">
            Trust by business leaders
          </h3>

          <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
            {/* Image */}
            <div className="w-full h-[250px] md:h-[300px] mb-[20px] bg-[#f0f0f0] overflow-hidden">
               <img 
                 src={currentT.img} 
                 alt={currentT.name} 
                 className="w-full h-full object-cover"
               />
            </div>

            {/* Quote */}
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#4a4a4a] mb-[25px] min-h-[80px]">
              {currentT.quote}
            </p>

            {/* Author Row */}
            <div className="flex justify-between items-end">
              <div>
                <h4 className="text-[16px] md:text-[18px] font-semibold text-black mb-1">
                  {currentT.name}
                </h4>
                <p className="text-[14px] md:text-[16px] text-[#555]">
                  {currentT.role}
                </p>
              </div>

              {/* Controls */}
              <div className="flex gap-[10px]">
                <button 
                  onClick={() => changeTestimonial(-1)}
                  className="w-[32px] h-[32px] rounded-full bg-[#f7941d] border-none flex items-center justify-center cursor-pointer text-white transition-transform hover:opacity-80 hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white stroke-white stroke-[2]">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => changeTestimonial(1)}
                  className="w-[32px] h-[32px] rounded-full bg-[#f7941d] border-none flex items-center justify-center cursor-pointer text-white transition-transform hover:opacity-80 hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white stroke-white stroke-[2]">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Column: Form --- */}
        <div className="bg-white border border-[#eeeeee] p-[25px] md:p-[40px]">
          <h4 className="text-center text-[25px] font-semibold mb-[30px] text-black">
            Get Free Consultation
          </h4>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-[18px] text-[#555] mb-[8px]">Name *</label>
              <input type="text" placeholder='Enter your name'  className="bg-white border border-[#e0e0e0] rounded-[4px] p-[10px] text-[14px] outline-none focus:border-[#f7941d] transition-colors" />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[18px] text-[#555] mb-[8px]">Email *</label>
              <input type="email" placeholder='Enter your email'  className="bg-white border border-[#e0e0e0] rounded-[4px] p-[10px] text-[14px] outline-none focus:border-[#f7941d] transition-colors" />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-[18px] text-[#555] mb-[8px]">Phone Number *</label>
              <div className="flex border border-[#e0e0e0] rounded-[4px] overflow-hidden focus-within:border-[#f7941d] transition-colors bg-white">
                <select className="border-none bg-[#f9f9f9] w-[90px] pl-[10px] pr-[5px] py-[10px] text-[13px] text-[#333] cursor-pointer border-r border-[#eee] outline-none">
                  <option value="+91">IN +91</option>
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                  <option value="+61">AU +61</option>
                  <option value="+81">JP +81</option>
                  <option value="+971">UAE +971</option>
                  <option value="+49">DE +49</option>
                </select>
                <input type="tel" placeholder="90983 XXXXX" className="border-none w-full pl-[10px] outline-none text-[14px]" />
              </div>
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <label className="text-[18px] text-[#555] mb-[8px]">Company Name *</label>
              <input type="text" placeholder='Enter company name'  className="bg-white border border-[#e0e0e0] rounded-[4px] p-[10px] text-[14px] outline-none focus:border-[#f7941d] transition-colors" />
            </div>

            {/* Website URL */}
            <div className="flex flex-col">
              <label className="text-[18px] text-[#555] mb-[8px]">Website URL</label>
              <input type="text" placeholder='https://astexai.in'  className="bg-white border border-[#e0e0e0] rounded-[4px] p-[10px] text-[14px] outline-none focus:border-[#f7941d] transition-colors" />
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label className="text-[18px] text-[#555] mb-[8px]">Subject</label>
              <input type="text" placeholder='Enter subject' className="bg-white border border-[#e0e0e0] rounded-[4px] p-[10px] text-[14px] outline-none focus:border-[#f7941d] transition-colors" />
            </div>

            {/* Message */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <label className="text-[18px] text-[#555] mb-[8px]">Message *</label>
              <textarea placeholder="Type your message here..." className="bg-white border border-[#e0e0e0] rounded-[4px] p-[10px] text-[14px] outline-none focus:border-[#f7941d] transition-colors min-h-[80px] resize-y"></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2">
              <button type="submit" className="bg-[#f7941d] text-black border-none py-[12px] px-[30px] font-semibold text-[16px] cursor-pointer mt-[10px] rounded-[4px] hover:opacity-90 transition-opacity">
                Submit
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;