// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// // --- Icons ---
// const Icons = {
//   Plus: () => (
//     <svg className="w-4 h-4 text-[#e77d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
//   ),
//   Minus: () => (
//     <svg className="w-4 h-4 text-[#e77d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
//   ),
//   Trash: () => (
//     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
//   )
// };

// const Blogs = () => {
//   // --- STATE MANAGEMENT ---
//   const [activeTab, setActiveTab] = useState('service'); // 'service', 'industry', 'content'
//   const [selectedTags, setSelectedTags] = useState([]);

//   // --- DATA LISTS ---
//   const servicesTags = [
//     "AI Agents Development", "Workflow Automation", "LLM Integration", 
//     "Chatbot Engineering", "Data Processing", "RPA Solutions", 
//     "Predictive Analytics", "Machine Learning Ops"
//   ];

//   const industryTags = [
//     "Healthcare", "Fintech", "E-commerce", "Real Estate", 
//     "Logistics", "EdTech", "Manufacturing", "Travel & Hospitality",
//     "Legal Tech", "Marketing", "SaaS", "Telecommunications"
//   ];

//   const contentTags = [
//     "Case Studies", "Blogs", "Insights", "News", "Whitepapers", "Webinars"
//   ];

//   // --- BLOG DATA ---
//   // Added 'image' property to display below heading
//   const blogPosts = [
//     {
//       id: 1,
//       category: "News",
//       title: "Company Appoints New Head of AI Strategy to Lead Global Expansion",
//       image: "/assets/demo.png",
//       link: "/company/blogs-and-insights/demo"
//     },
//     {
//       id: 2,
//       category: "Featured Insights",
//       title: "Agentic AI Trends for 2026: Beyond Simple Chatbots",
//       image: "/assets/demo.png",
//       link: "/company/blogs-and-insights/demo"
//     },
//     {
//       id: 3,
//       category: "Case Studies",
//       title: "From Fragmentation to Unification: How Automation Scaled a Fintech Ecosystem",
//       image: "/assets/demo.png",
//       link: "/company/blogs-and-insights/demo"
//     },
//     {
//       id: 4,
//       category: "Technology",
//       title: "Understanding Vector Databases in Modern AI Architectures",
//       image: "/assets/demo.png",
//       link: "/company/blogs-and-insights/demo"
//     },
//     {
//       id: 5,
//       category: "Featured Insights",
//       title: "The Cost of Inaction: Why Manual Workflows Are Killing Productivity",
//       image: "/assets/demo.png",
//       link: "/company/blogs-and-insights/demo"
//     },
//     {
//       id: 6,
//       category: "News",
//       title: "Strategic Partnership Announced with Leading Cloud Provider",
//       image: "/assets/demo.png",
//       link: "/company/blogs-and-insights/demo"
//     }
//   ];

//   // --- HANDLERS ---
  
//   // Toggle selection of a tag
//   const handleTagToggle = (tag) => {
//     if (selectedTags.includes(tag)) {
//       setSelectedTags(selectedTags.filter(t => t !== tag));
//     } else {
//       setSelectedTags([...selectedTags, tag]);
//     }
//   };

//   // Clear all selections
//   const handleClearAll = () => {
//     setSelectedTags([]);
//   };

//   // Helper to decide which list to show
//   const getCurrentTags = () => {
//     switch (activeTab) {
//       case 'service': return servicesTags;
//       case 'industry': return industryTags;
//       case 'content': return contentTags;
//       default: return [];
//     }
//   };

//   return (
//     <section className="w-full bg-white text-[#1a1a1a]">
//       <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 border-x border-[#d9d9d9]">
        
//         {/* ================= HEADER SECTION ================= */}
//         <div className="mb-12">
//           {/* Breadcrumb */}
//           <nav className="text-sm text-gray-500 mb-8 tracking-wide flex items-center gap-2">
//           <Link href="/" className="hover:text-[#e77d00] transition-colors">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
//           </Link>
//           <span>/</span>
//           <Link href="#" className="hover:text-[#e77d00] transition-colors">Company</Link> 
//           <span>/</span> 
//           <span className="text-[#e77d00] font-medium">Blogs & Insights</span>
//         </nav>

//           {/* Main Title */}
//           <h1 className="text-[32px] md:text-[45px] font-medium leading-tight text-[#e77d00] max-w-7xl">
//             Discover our research, insights, and client successes to help you navigate change and accelerate value creation
//           </h1>
//         </div>

//         {/* ================= FILTER SECTION ================= */}
//         <div className="bg-gray-50 border border-[#d9d9d9] rounded-sm mb-16">
          
//           {/* Top Tabs Row */}
//           <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#d9d9d9]">
            
//             {/* Tab 1: Service */}
//             <button 
//               onClick={() => setActiveTab('service')}
//               className={`flex items-center justify-between p-6 text-lg font-medium transition-colors
//                 ${activeTab === 'service' ? 'bg-[#e77d00]/5 text-black' : 'bg-transparent text-gray-600 hover:text-[#e77d00]'}
//                 ${activeTab !== 'service' ? '' : ''}
//               `}
//             >
//               {/* Dynamic Number Calculation */}
//               <span>Service <span className="text-[#e77d00] ml-1">( {servicesTags.length} )</span></span>
//               {activeTab === 'service' ? <Icons.Minus /> : <Icons.Plus />}
//             </button>

//             {/* Tab 2: Industry */}
//             <button 
//               onClick={() => setActiveTab('industry')}
//               className={`flex items-center justify-between p-6 text-lg font-medium transition-colors
//                 ${activeTab === 'industry' ? 'bg-[#e77d00]/5 text-black' : 'bg-transparent text-gray-600 hover:text-[#e77d00]'}
//                 ${activeTab !== 'industry' ? '' : ''}
//               `}
//             >
//               <span>Industry <span className="text-[#e77d00] ml-1">( {industryTags.length} )</span></span>
//               {activeTab === 'industry' ? <Icons.Minus /> : <Icons.Plus />}
//             </button>

//             {/* Tab 3: Content Type */}
//             <button 
//               onClick={() => setActiveTab('content')}
//               className={`flex items-center justify-between p-6 text-lg font-medium transition-colors
//                 ${activeTab === 'content' ? 'bg-[#e77d00]/5 text-black' : 'bg-transparent text-gray-600 hover:text-[#e77d00]'}
//               `}
//             >
//               <span>Content Type <span className="text-[#e77d00] ml-1">( {contentTags.length} )</span></span>
//               {activeTab === 'content' ? <Icons.Minus /> : <Icons.Plus />}
//             </button>
//           </div>

//           {/* Filter Content Area (Tags) */}
//           <div className="p-8 md:p-10 min-h-[150px] bg-[#e77d00]/5">
//             <div className="flex flex-wrap gap-4 animate-fadeIn">
//               {getCurrentTags().map((tag, idx) => {
//                 const isSelected = selectedTags.includes(tag);
//                 return (
//                   <button 
//                     key={idx}
//                     onClick={() => handleTagToggle(tag)}
//                     className={`px-6 py-2 border rounded-full text-sm transition-all duration-300
//                       ${isSelected 
//                         ? 'bg-[#e77d00] text-white border-[#e77d00] shadow-md' 
//                         : 'bg-white text-gray-700 border-[#d9d9d9] hover:border-[#e77d00] hover:text-[#e77d00]'
//                       }
//                     `}
//                   >
//                     {tag}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Filter Footer Actions */}
//           <div className="flex flex-col md:flex-row justify-between items-center p-6 border-t border-[#d9d9d9] bg-gray-50">
//              {/* Clear All */}
//             <button 
//                 onClick={handleClearAll}
//                 className={`flex items-center font-medium transition-colors mb-4 md:mb-0
//                     ${selectedTags.length > 0 ? 'text-[#e77d00] cursor-pointer' : 'text-gray-400 cursor-not-allowed'}
//                 `}
//                 disabled={selectedTags.length === 0}
//             >
//               <Icons.Trash />
//               Clear all
//             </button>

//             {/* Show Results Button */}
//             <button className="px-8 py-3 bg-[#e77d00] cursor-pointer text-white font-medium rounded-full hover:bg-black transition-colors duration-300 shadow-md">
//               Show results {selectedTags.length > 0 && `( ${selectedTags.length} )`}
//             </button>
//           </div>

//         </div>

//         {/* ================= BLOG GRID SECTION ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <div 
//               key={post.id} 
//               className="flex flex-col h-full bg-white p-6 border border-[#d9d9d9] hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
//             >
//               {/* Category */}
//               <div className="mb-4">
//                 <span className="text-xs font-medium text-[#e77d00] uppercase tracking-wider border border-[#e77d00]/20 bg-[#e77d00]/5 px-2 py-1 rounded">
//                   {post.category}
//                 </span>
//               </div>
              
//               {/* Title */}
//               <h3 className="text-xl md:text-[22px] font-medium text-[#1a1a1a] leading-tight group-hover:text-[#e77d00] transition-colors mb-5">
//                 {post.title}
//               </h3>

//               {/* Image BELOW Heading */}
//               <div className="relative w-full h-48 mb-6 overflow-hidden rounded-sm">
//                 <Image 
//                     src={post.image} 
//                     alt={post.title}
//                     fill
//                     className="object-cover transform group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
              
//               {/* Read Article Link (Bottom) */}
//               <div className="mt-auto">
//                   <span className="text-[#e77d00] text-sm font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
//                     Read Article 
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
//                   </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Blogs;


'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogs } from './BlogData'; // Import the data

// --- Icons ---
const Icons = {
  Plus: () => (
    <svg className="w-4 h-4 text-[#e77d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
  ),
  Minus: () => (
    <svg className="w-4 h-4 text-[#e77d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
  ),
  Trash: () => (
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
  ),
  NotFound: () => (
    <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  )
};

const Blogs = () => {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState('service'); 
  const [selectedTags, setSelectedTags] = useState([]);

  // Fetch all blogs from data file
  const allPosts = getAllBlogs();

  // --- DATA LISTS (Filters) ---
  const servicesTags = [
    "AI Agents Development", "Workflow Automation", "LLM Integration", 
    "Chatbot Engineering", "Data Processing", "RPA Solutions", 
    "Predictive Analytics", "Machine Learning Ops"
  ];

  const industryTags = [
    "Healthcare", "Fintech", "E-commerce", "Real Estate", 
    "Logistics", "EdTech", "Manufacturing", "Travel & Hospitality",
    "Legal Tech", "Marketing", "SaaS", "Telecommunications"
  ];

  const contentTags = [
    "Case Studies", "Blogs", "Insights", "News", "Featured Insights", "Webinars"
  ];

  // --- FILTERING LOGIC ---
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) return allPosts;
    
    return allPosts.filter(post => 
      // Check if ANY of the selected tags exist in the post's tags array
      selectedTags.some(tag => post.tags.includes(tag))
    );
  }, [selectedTags, allPosts]);

  // --- HANDLERS ---
  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleClearAll = () => {
    setSelectedTags([]);
  };

  const getCurrentTags = () => {
    switch (activeTab) {
      case 'service': return servicesTags;
      case 'industry': return industryTags;
      case 'content': return contentTags;
      default: return [];
    }
  };

  return (
    <section className="w-full bg-white text-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 border-x border-[#d9d9d9]">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-12">
          <nav className="text-sm text-gray-500 mb-8 tracking-wide flex items-center gap-2">
            <Link href="/" className="hover:text-[#e77d00] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </Link>
            <span>/</span>
            <span className="font-medium">Company</span>
            <span>/</span>
            <span className="text-[#e77d00] font-medium">Blogs & Insights</span>
          </nav>

          <h1 className="text-[32px] md:text-[45px] font-medium leading-tight text-[#e77d00] max-w-7xl">
            Discover our research, insights, and client successes to help you navigate change and accelerate value creation
          </h1>
        </div>

        {/* ================= FILTER SECTION ================= */}
        <div className="bg-gray-50 border border-[#d9d9d9] rounded-sm mb-16">
          
          {/* Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#d9d9d9]">
            {['service', 'industry', 'content'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-between p-6 text-lg font-medium transition-colors capitalize
                  ${activeTab === tab ? 'bg-[#e77d00]/5 text-black' : 'bg-transparent text-gray-600 hover:text-[#e77d00]'}
                  ${tab !== 'content' ? 'md:border-r border-[#d9d9d9]' : ''}
                `}
              >
                <span>{tab} <span className="text-[#e77d00] ml-1">
                  ( {tab === 'service' ? servicesTags.length : tab === 'industry' ? industryTags.length : contentTags.length} )
                </span></span>
                {activeTab === tab ? <Icons.Minus /> : <Icons.Plus />}
              </button>
            ))}
          </div>

          {/* Tags Area */}
          <div className="p-8 md:p-10 min-h-[150px] bg-[#e77d00]/5">
            <div className="flex flex-wrap gap-4 animate-fadeIn">
              {getCurrentTags().map((tag, idx) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button 
                    key={idx}
                    onClick={() => handleTagToggle(tag)}
                    className={`px-6 py-2 border rounded-full text-sm transition-all duration-300
                      ${isSelected 
                        ? 'bg-[#e77d00] text-white border-[#e77d00] shadow-md' 
                        : 'bg-white text-gray-700 border-[#d9d9d9] hover:border-[#e77d00] hover:text-[#e77d00]'
                      }
                    `}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col md:flex-row justify-between items-center p-6 border-t border-[#d9d9d9] bg-gray-50">
            <button 
                onClick={handleClearAll}
                className={`flex items-center font-medium transition-colors mb-4 md:mb-0
                    ${selectedTags.length > 0 ? 'text-[#e77d00] cursor-pointer' : 'text-gray-400 cursor-not-allowed'}
                `}
                disabled={selectedTags.length === 0}
            >
              <Icons.Trash />
              Clear all
            </button>
            <button className="px-8 py-3 bg-[#e77d00] text-white font-medium rounded-full hover:bg-black transition-colors duration-300 shadow-md">
              Show results {selectedTags.length > 0 && `( ${filteredPosts.length} )`}
            </button>
          </div>
        </div>

        {/* ================= BLOG GRID SECTION ================= */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/company/blogs-and-insights/${post.slug}`}
                className="flex flex-col h-full bg-white p-6 border border-[#d9d9d9] hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-xs font-medium text-[#e77d00] uppercase tracking-wider border border-[#e77d00]/20 bg-[#e77d00]/5 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-[22px] font-medium text-[#1a1a1a] leading-tight group-hover:text-[#e77d00] transition-colors mb-5">
                  {post.title}
                </h3>

                <div className="relative w-full h-48 mb-6 overflow-hidden rounded-sm">
                  <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="mt-auto">
                    <span className="text-[#e77d00] text-sm font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Article 
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // ================= NO DATA FOUND STATE =================
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-gray-300 rounded-lg bg-gray-50">
            <Icons.NotFound />
            <h3 className="text-xl font-medium text-gray-800 mb-2">No Insights Found</h3>
            <p className="text-gray-500 text-center max-w-md">
              We couldn't find any articles matching your selected filters. 
              Try clearing the filters or selecting a different category.
            </p>
            <button 
              onClick={handleClearAll}
              className="mt-6 text-[#e77d00] font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blogs;