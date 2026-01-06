// components/GetInTouch.js
'use client';
import React from 'react';

const GetInTouch = () => {
  // Theme constants
  const theme = {
    primary: '#ffffff',
    secondary: '#e77d00', // Orange
    border: '#d9d9d9',
    textMain: '#1a1a1a',
    textLight: '#6b7280',
  };

  return (
    <section className="w-full bg-white">
      {/* 
         Container matches your website's layout:
         max-w-[1400px], centered, with side borders and a bottom border to close the page.
      */}
      <div 
        className="max-w-[1400px] mx-auto border-x border-b border-[#d9d9d9] px-6 md:px-12 pt-8 md:pt-4 pb-10 md:pb-10" 
      >
        <div className="w-full h-full flex justify-center items-center">
          
          {/* The Form Card */}
          <div 
            className="w-full max-w-3xl bg-white p-8 md:p-12 rounded-sm"
          >
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 
                className="text-[32px] md:text-[45px] font-light mb-4 leading-tight"
                style={{ color: theme.textMain }}
              >
                Scale Your Operations With <br />
                <span className="font-medium">Intelligent AI Agents</span>
              </h2>
              <p className="text-[16px] md:text-[18px] " style={{ color: theme.textLight }}>
                Ready to automate workflows? Fill out the form below and <br className="hidden md:block" />
                our AI architects will contact you within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-8" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 gap-8">
                <FloatingInput id="name" label="Your Name" required={true} theme={theme} />
                <FloatingInput id="email" type="email" label="Email" required={true} theme={theme} />
                <FloatingInput id="phone" type="tel" label="Phone" required={false} theme={theme} />
                <FloatingInput id="budget" label="Project Budget in USD" required={true} theme={theme} />
              </div>

              {/* Textarea with + Icon */}
              <div className="relative z-0 w-full mb-6 group">
                <textarea
                  name="description"
                  id="description"
                  rows="1"
                  className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 peer resize-none"
                  placeholder=" "
                  required
                  style={{ borderColor: theme.border }}
                  // Inline styles for focus color handling
                  onFocus={(e) => e.target.style.borderColor = theme.secondary}
                  onBlur={(e) => e.target.style.borderColor = theme.border}
                />
                <label
                  htmlFor="description"
                  className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 w-full flex justify-between items-center"
                >
                  <span>Briefly describe your project <span style={{ color: theme.secondary }}>*</span></span>
                  <span 
                    className="text-2xl font-light transform peer-focus:rotate-45 transition-transform duration-300"
                    style={{ color: theme.secondary }}
                  >
                    +
                  </span>
                </label>
              </div>

              {/* NDA Checkbox */}
              <div className="flex items-center justify-center pt-2">
                <input
                  id="nda"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-0 text-[#e77d00]"
                  style={{ accentColor: theme.secondary }}
                />
                <label htmlFor="nda" className="ml-2 text-sm text-gray-600">
                  By clicking submit, you agree to our <a href="#" className="underline text-[#e77d00]">Terms of Service</a> and <a href="#" className="underline text-[#e77d00]">Privacy Policy</a>.
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 text-sm font-medium text-white tracking-widest shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  style={{ backgroundColor: theme.secondary }}
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for Floating Inputs
const FloatingInput = ({ id, label, type = "text", required, theme }) => {
  return (
    <div className="relative z-0 w-full group">
      <input
        type={type}
        name={id}
        id={id}
        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
        required={required}
        style={{ borderColor: theme.border }}
        onFocus={(e) => e.target.style.borderColor = theme.secondary}
        onBlur={(e) => e.target.style.borderColor = theme.border}
      />
      <label
        htmlFor={id}
        className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label} 
        {required && <span style={{ color: theme.secondary }}> &bull;</span>}
      </label>
    </div>
  );
};

export default GetInTouch;