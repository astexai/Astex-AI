import React from 'react';

const Partners = () => {
  return (
    <section className="w-full bg-white px-5 font-inter">
      <div className="max-w-[1400px] py-20  border-x border-[#d9d9d9] mx-auto text-center">
        
        {/* Header */}
        <h2 className="text-[32px] md:text-[45px] font-medium text-black mb-10">
          We impact the world in partnership with
        </h2>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center items-center gap-x-[60px] gap-y-[40px] max-w-[900px] mx-auto opacity-60">
          
          {/* Sinch */}
          <div className="flex items-center gap-2 text-[20px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-1.07 3.97-2.9 5.08z"/>
            </svg>
            sinch
          </div>

          {/* Cohere */}
          <div className="flex items-center gap-2 text-[20px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>
             cohere
          </div>

          {/* Chatfuel */}
          <div className="text-[20px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none">
            chatfuel
          </div>

          {/* Google Cloud */}
          <div className="text-[20px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none">
            Google Cloud
          </div>

          {/* Botpress */}
          <div className="flex items-center gap-2 text-[20px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>
             botpress
          </div>

          {/* Infobip */}
          <div className="flex items-center gap-2 text-[20px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
             infobip
          </div>

          {/* Voiceflow */}
          <div className="text-[20px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none">
            Voiceflow
          </div>

          {/* Ada */}
          <div className="text-[20px] font-extrabold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none">
            ada
          </div>

          {/* HumanFirst */}
          <div className="flex items-center gap-2 text-[20px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none">
            <strong className="border-2 border-[#b0b0b0] px-1 text-[14px]">H</strong>
            HumanFirst
          </div>

          {/* LivePerson */}
          <div className="text-[20px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none uppercase">
            LIVEPERSON
          </div>

          {/* Vonage */}
          <div className="text-[20px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none uppercase">
            VONAGE
          </div>

          {/* Nylas */}
          <div className="flex items-center gap-2 text-[20px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
            nylas
          </div>
          
          {/* Glia */}
           <div className="text-[22px] font-bold text-[#000] hover:text-[#f7941d] transition-colors duration-300 cursor-default select-none">
            glia
          </div>

        </div>

      </div>
    </section>
  );
};

export default Partners;