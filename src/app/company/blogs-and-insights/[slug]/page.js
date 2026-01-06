// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const BlogDetail = () => {
//   const [activeId, setActiveId] = useState('');

//   // --- TOC Data ---
//   // The 'id' must match the id attributes in the HTML content below
//   const tocItems = [
//     { id: 'introduction', label: 'Introduction' },
//     { id: 'why-care', label: 'Why care about prompt optimization?' },
//     { id: 'what-is-gepa', label: 'What Did GEPA Learn?' },
//     { id: 'system-output', label: 'System output, before and after' },
//     { id: 'pushing-further', label: 'Pushing on Agents Even Further' },
//     { id: 'conclusion', label: 'Conclusion' },
//   ];

//   // --- Scroll Spy Logic ---
//   // This detects which section is currently on screen to highlight the TOC
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveId(entry.target.id);
//           }
//         });
//       },
//       { rootMargin: '-100px 0px -60% 0px' } 
//     );

//     tocItems.forEach((item) => {
//       const element = document.getElementById(item.id);
//       if (element) observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // --- Smooth Scroll Handler ---
//   const handleScroll = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       // Offset for fixed headers if you have one, otherwise just scroll
//       const yOffset = -40; 
//       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//       setActiveId(id);
//     }
//   };

//   return (
//     <div className="w-full bg-white text-[#1a1a1a] font-sans">
      
//       {/* ================= HEADER SECTION ================= */}
//       <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-8 border-x border-[#d9d9d9]">
        
//         {/* Breadcrumb */}
//         <nav className="text-sm text-gray-500 mb-8 tracking-wide flex items-center gap-2">
//           <Link href="/" className="hover:text-[#e77d00] transition-colors">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
//           </Link>
//           <span>/</span>
//           <Link href="#" className="hover:text-[#e77d00] transition-colors">Company</Link> 
//           <span>/</span>
//           <Link href="/company/blogs-and-insights" className="hover:text-[#e77d00] transition-colors">Blogs & Insights</Link> 
//           <span>/</span> 
//           <span className="text-[#e77d00] font-medium">Self Improving Agent</span>
//         </nav>

//         {/* Blog Title */}
//         <h1 className="text-[32px] md:text-[45px] font-medium leading-[1.1] text-black mb-6 max-w-7xl">
//           Self-Improving Agents, Powered by Your Evals
//         </h1>

//         {/* Metadata */}
//         <div className="flex items-center gap-6 text-sm text-gray-500 font-medium tracking-wider border-b border-[#d9d9d9] pb-8">
//           <span>Published 12/17/2025</span>
//           <span className="w-1 h-1 bg-[#e77d00] rounded-full"></span>
//           <span>By Automation Team</span>
//           <span className="w-1 h-1 bg-[#e77d00] rounded-full"></span>
//           <span>5 Min Read</span>
//         </div>
//       </div>

//       {/* ================= MAIN CONTENT GRID ================= */}
//       <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 border-x border-b border-[#d9d9d9]">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">

//           {/* --- LEFT SIDEBAR (STICKY TOC) --- */}
//           <aside className="lg:col-span-3 hidden lg:block">
//             <div className="sticky top-12">
//               <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
//                 Table of Contents
//               </h4>
//               <nav className="space-y-4 border-l border-gray-200 ml-1">
//                 {tocItems.map((item) => (
//                   <a
//                     key={item.id}
//                     href={`#${item.id}`}
//                     onClick={(e) => handleScroll(e, item.id)}
//                     className={`block pl-4 text-sm transition-all duration-300 border-l-2 -ml-[2px]
//                       ${activeId === item.id 
//                         ? 'border-[#e77d00] text-[#e77d00] font-medium' 
//                         : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
//                       }
//                     `}
//                   >
//                     {item.label}
//                   </a>
//                 ))}
//               </nav>

//               {/* Optional: Social Share in Sidebar */}
//               <div className="mt-12 pt-8 border-t border-gray-100">
//                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Share</p>
//                 <div className="flex gap-4">
//                     {/* Dummy Social Icons */}
//                     <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#e77d00] hover:text-white transition-colors">
//                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
//                     </button>
//                     <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#e77d00] hover:text-white transition-colors">
//                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//                     </button>
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* --- RIGHT CONTENT AREA --- */}
//           <article className="lg:col-span-9">
            
//             {/* Featured Image */}
//             <div className="relative w-full h-[300px] md:h-[450px] mb-12 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
//                  {/* Replace with your actual image source */}
//                  <Image 
//                     src="/assets/demo.png" 
//                     alt="AI Chart Analysis" 
//                     fill
//                     className="object-cover"
//                 />
//             </div>

//             {/* Intro Text - ID: introduction */}
//             <div id="introduction" className="scroll-mt-24 mb-12">
//                 <p className="text-md md:text-xl  leading-relaxed text-gray-700 mb-6 font-light">
//                     <span className="font-bold text-black">TLDR:</span> Eval Protocol is a unified eval interface that powers both prompt optimization and RL on the same evaluation function. Author your evaluator once, and instantly unlock huge gains on open-source models.
//                 </p>
//                 <p className="text-md md:text-lg  leading-relaxed text-[#4a4a4a] mb-6">
//                     Imagine: You've built an eval suite that tells you where your agent fails, but it doesn't tell you how to fix it. So you tweak the prompt—add a few instructions, maybe some examples, re-run the evals, watch the number wobble up or down. After a while, it's just hours of staring at failure cases and guessing what the next prompt change needs to be.
//                 </p>
//                 <div className="bg-[#e77d00]/5 border-l-4 border-[#e77d00] p-6 my-8">
//                     <p className="text-gray-800 italic">
//                         "Reflective prompt optimization uses the evaluation framework you already trust, tightening the loop from failure case to shipped improvement."
//                     </p>
//                 </div>
//             </div>

//             {/* Section 2 - ID: why-care */}
//             <div id="why-care" className="scroll-mt-24 mb-12">
//                 <h2 className="text-xl md:text-3xl font-medium text-black mb-6">Why care about prompt optimization?</h2>
//                 <p className="text-md md:text-lg leading-relaxed text-[#4a4a4a] mb-6">
//                     Eval Protocol is introducing a new integration to help eliminate some of this prompt guesswork: <span className="text-[#e77d00] font-medium">GEPA</span> inside EP. GEPA runs on your existing eval setup—datasets, metrics, and task constraints—to convert failure signals into precise, enforceable prompt improvements and deliver automatic, inspectable gains to your agent, without touching weights.
//                 </p>
//             </div>

//             {/* Section 3 - ID: what-is-gepa */}
//             <div id="what-is-gepa" className="scroll-mt-24 mb-12">
//                 <h2 className="text-xl md:text-3xl font-medium text-black mb-6">What kind of gains are we talking about?</h2>
//                 <p className="text-md md:text-lg leading-relaxed text-[#4a4a4a] mb-6">
//                     Eval Protocol is an open-source evaluation solution for doing reinforcement learning, across any language, environment, or framework. With our EP + GEPA integration, we tackled a Text2SQL problem by defining the evals and running our agent with GEPA-based prompt optimization on Qwen3-32b.
//                 </p>
//                 <p className="text-md md:text-lgleading-relaxed text-[#4a4a4a] mb-6">
//                     Without touching the model weights, our team was able to achieve a 10% improvement in test set accuracy and a 5% increase in validation set accuracy.
//                 </p>
//             </div>

//             {/* Section 4 - ID: system-output (The Table) */}
//             <div id="system-output" className="scroll-mt-24 mb-16">
//                 <h3 className="text-xl md:text-3xl font-medium text-black mb-6">System Output Data</h3>
//                 <div className="overflow-x-auto border border-[#d9d9d9] rounded-sm">
//                     <table className="w-full text-left border-collapse">
//                         <thead>
//                             <tr className="bg-gray-50 border-b border-[#d9d9d9]">
//                                 <th className="p-4 font-bold text-black uppercase text-xs tracking-wider">Metric</th>
//                                 <th className="p-4 font-bold text-black uppercase text-xs tracking-wider">Before</th>
//                                 <th className="p-4 font-bold text-black uppercase text-xs tracking-wider">After GEPA</th>
//                                 <th className="p-4 font-bold text-[#e77d00] uppercase text-xs tracking-wider">After GEPA + RFT</th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-gray-700">
//                             <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
//                                 <td className="p-4 font-medium">Test set accuracy</td>
//                                 <td className="p-4">26.7%</td>
//                                 <td className="p-4">43.3%</td>
//                                 <td className="p-4 font-bold text-[#e77d00] bg-[#e77d00]/5">51.6%</td>
//                             </tr>
//                             <tr className="hover:bg-gray-50/50 transition-colors">
//                                 <td className="p-4 font-medium">Processing Time</td>
//                                 <td className="p-4">1.2s</td>
//                                 <td className="p-4">1.1s</td>
//                                 <td className="p-4 font-bold text-[#e77d00] bg-[#e77d00]/5">0.9s</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//                 <p className="text-sm text-gray-400 mt-4 italic text-center">
//                     Table 1: Accuracy improvements observed across different testing stages.
//                 </p>
//             </div>

//             {/* Section 5 - ID: pushing-further */}
//             <div id="pushing-further" className="scroll-mt-24 mb-12">
//                 <h2 className="text-xl md:text-3xl font-medium text-black mb-6">Eval Protocol, now with GEPA-based prompt optimization</h2>
//                 <p className="text-md md:text-lg leading-relaxed text-[#4a4a4a] mb-6">
//                     Eval Protocol gives you a clean, structured way to write down your evals: datasets, metrics, scoring logic, and task-specific constraints all live in one place.
//                 </p>
//                 <p className="text-md md:text-lg leading-relaxed text-[#4a4a4a] mb-6">
//                     On top of that evaluation layer, EP now supports GEPA as a first-class prompt optimizer. Via DSPy, it handles prompt manipulation and candidate evaluation. In your code, you define your eval as usual, then call <strong>GEPA</strong> through our DSPy integration:
//                 </p>
                
//                 {/* Bullet Points */}
//                 <ul className="space-y-4 mb-8">
//                     {['Look at which examples pass/fail', 'Automatically propose structured edits to the prompt', 'Keep whatever reliably moves your metric up', 'Spit out an optimized system prompt you can diff'].map((item, i) => (
//                         <li key={i} className="flex items-start">
//                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e77d00]/10 flex items-center justify-center mt-1 mr-4">
//                                 <span className="w-2 h-2 rounded-full bg-[#e77d00]"></span>
//                              </div>
//                              <span className="text-lg text-[#4a4a4a]">{item}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Section 6 - ID: conclusion */}
//             <div id="conclusion" className="scroll-mt-24">
//                 <h2 className="text-xl md:text-3xl font-medium text-black mb-6">Conclusion</h2>
//                 <p className="text-md md:text-lg leading-relaxed text-[#4a4a4a]">
//                     In practice, this means you write your evals once with Eval Protocol and watch as those same evals keep paying dividends. Now those evals aren’t just measuring performance, they’re improving it.
//                 </p>
                
//                 {/* Call to Action Box */}
//                 <div className="mt-12 p-8 bg-gray-50 border border-[#d9d9d9] rounded-sm text-center">
//                     <h3 className="text-xl font-bold mb-6">Ready to optimize your agents?</h3>
//                     <Link href="/company/contact-us" className="bg-[#e77d00] text-white px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-black transition-colors duration-300">
//                         Get Started Today
//                     </Link>
//                 </div>
//             </div>

//           </article>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;


'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { getBlogBySlug } from '../BlogData'; // Import the data helper

const BlogDetail = () => {
  const params = useParams();
  const slug = params.slug;
  const blog = getBlogBySlug(slug);

  const [activeId, setActiveId] = useState('');
  const [tocItems, setTocItems] = useState([]);

  // --- 1. GENERATE TOC DYNAMICALLY ---
  useEffect(() => {
    if (blog) {
      // Filter blocks that are headings or have a specific 'headingLabel' (like intro)
      const items = blog.content
        .filter(block => block.id && (block.type === 'heading' || block.headingLabel))
        .map(block => ({
          id: block.id,
          label: block.headingLabel || block.text // Use explicit label or the heading text
        }));
      setTocItems(items);
    }
  }, [blog]);

  // --- 2. SCROLL SPY LOGIC ---
  useEffect(() => {
    if (!blog || tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' } 
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocItems, blog]);

  // --- 3. SMOOTH SCROLL ---
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -40; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  // If blog not found, return Next.js notFound (or custom UI)
  if (!blog) {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white text-center px-4">
             <h1 className="text-4xl font-bold text-[#e77d00] mb-4">404</h1>
             <p className="text-xl text-gray-600 mb-8">Article not found.</p>
             <Link href="/blogs-and-insights" className="bg-black text-white px-6 py-3 rounded-sm">
                Back to Blogs
             </Link>
        </div>
    );
  }

  // --- 4. CONTENT RENDERER ---
  const renderBlock = (block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <div key={index} id={block.id} className="scroll-mt-24 mb-6">
            <p 
              className="text-md md:text-lg leading-relaxed text-[#4a4a4a]"
              dangerouslySetInnerHTML={{ __html: block.text }} 
            />
          </div>
        );
      case 'heading':
        const HeadingTag = `h${block.level || 2}`;
        return (
          <HeadingTag 
            key={index} 
            id={block.id} 
            className="scroll-mt-24 text-xl md:text-3xl font-medium text-black mb-6 mt-12"
          >
            {block.text}
          </HeadingTag>
        );
      case 'list':
        return (
          <ul key={index} className="space-y-4 mb-8">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e77d00]/10 flex items-center justify-center mt-1 mr-4">
                  <span className="w-2 h-2 rounded-full bg-[#e77d00]"></span>
                </div>
                <span 
                    className="text-lg text-[#4a4a4a]"
                    dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>
        );
      case 'quote':
        return (
          <div key={index} className="bg-[#e77d00]/5 border-l-4 border-[#e77d00] p-6 my-8">
            <p className="text-gray-800 italic font-medium">"{block.text}"</p>
          </div>
        );
      case 'table':
        return (
          <div key={index} className="scroll-mt-24 mb-16 overflow-x-auto border border-[#d9d9d9] rounded-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b border-[#d9d9d9]">
                  {block.headers.map((header, i) => (
                    <th key={i} className={`p-4 font-bold uppercase text-xs tracking-wider ${i === block.headers.length - 1 ? 'text-[#e77d00]' : 'text-black'}`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {block.rows.map((row, rIndex) => (
                  <tr key={rIndex} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors last:border-0">
                    {row.map((cell, cIndex) => (
                       <td 
                         key={cIndex} 
                         className={`p-4 ${cIndex === 0 ? 'font-medium' : ''} ${cIndex === row.length - 1 ? 'font-bold text-[#e77d00] bg-[#e77d00]/5' : ''}`}
                       >
                         {cell}
                       </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white text-[#1a1a1a] font-sans">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-8 border-x border-[#d9d9d9]">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8 tracking-wide flex items-center gap-2">
          <Link href="/" className="hover:text-[#e77d00] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          </Link>
          <span>/</span>
          <span className="transition-colors">Company</span> 
          <span>/</span>
          <Link href="/company/blogs-and-insights" className="hover:text-[#e77d00] transition-colors">Blogs & Insights</Link> 
          <span>/</span> 
          <span className="text-[#e77d00] font-medium truncate max-w-[200px]">{blog.title}</span>
        </nav>

        {/* Blog Title */}
        <h1 className="text-[32px] md:text-[45px] font-medium leading-[1.1] text-black mb-6 max-w-7xl">
          {blog.title}
        </h1>
        {blog.subtitle && (
             <p className="text-xl text-gray-600 mb-8 max-w-5xl font-light">{blog.subtitle}</p>
        )}

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-500 font-medium tracking-wider border-b border-[#d9d9d9] pb-8">
          <span>Published {blog.publishedDate}</span>
          <span className="w-1 h-1 bg-[#e77d00] rounded-full hidden md:block"></span>
          <span>By {blog.author}</span>
          <span className="w-1 h-1 bg-[#e77d00] rounded-full hidden md:block"></span>
          <span>{blog.readTime}</span>
          <span className="w-1 h-1 bg-[#e77d00] rounded-full hidden md:block"></span>
          <span className="text-[#e77d00]">{blog.category}</span>
        </div>
      </div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 border-x border-b border-[#d9d9d9]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">

          {/* --- LEFT SIDEBAR (STICKY TOC) --- */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-12">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                Table of Contents
              </h4>
              <nav className="space-y-4 border-l border-gray-200 ml-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleScroll(e, item.id)}
                    className={`block pl-4 text-sm transition-all duration-300 border-l-2 -ml-[2px] truncate
                      ${activeId === item.id 
                        ? 'border-[#e77d00] text-[#e77d00] font-medium' 
                        : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

               {/* Share Buttons (Visual Only for UI consistency) */}
               <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Share</p>
                <div className="flex gap-4">
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#e77d00] hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#e77d00] hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                </div>
              </div>
            </div>
          </aside>

          {/* --- RIGHT CONTENT AREA --- */}
          <article className="lg:col-span-9">
            
            {/* Featured Image */}
            <div className="relative w-full h-[300px] md:h-[450px] mb-12 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                 <Image 
                    src={blog.image} 
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Render Content Blocks */}
            <div className="blog-content">
                {blog.content.map((block, index) => renderBlock(block, index))}
            </div>

            {/* Call to Action Box */}
            <div className="mt-16 p-8 bg-gray-50 border border-[#d9d9d9] rounded-sm text-center">
                <h3 className="text-xl font-bold mb-6">Ready to optimize your operations with AI?</h3>
                <Link href="/company/contact-us" className="bg-[#e77d00] text-white px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-black transition-colors duration-300">
                    Get Started Today
                </Link>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;