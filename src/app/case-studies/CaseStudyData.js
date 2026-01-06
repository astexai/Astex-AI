// case-study/CaseStudyData.js

export const caseStudiesData = [
    {
      id: 1,
      slug: "clinic-whatsapp-automation",
      title: "Scaling Patient Care with Intelligent WhatsApp Agents",
      client: "Shree Radhe Care Clinic",
      industry: "Healthcare",
      duration: "15 days",
      region: "India",
      image: "/assets/demo.png",
      description: "Automating the entire patient journey—from booking appointments to post-consultation follow-ups—using a conversational WhatsApp AI Agent.",
      
      // Stats for the Listing Page Card
      previewStats: [
        { label: "No-Show Rate", value: "-60%" },
        { label: "Bookings", value: "+45%" },
      ],
  
      // Stats for the Detail Page Header
      impactStats: [
        { label: "Reduction in Support Calls", value: "80%" },
        { label: "Daily Active Users", value: "5,000+" },
        { label: "Doctor Schedule Utilization", value: "98%" },
      ],
  
      techStack: ["WhatsApp Cloud API", "OpenAI GPT-4", "Next.js", "N8n", "MongoDB"],
      services: ["Conversational Design", "API Integration", "HIPAA Compliance", "Bot Training"],
  
      content: {
        challenge: "The clinic was overwhelmed with phone calls for simple tasks: booking appointments, checking doctor availability, and purchasing consultation plans. The manual reception team couldn't handle the volume, leading to long wait times and a 30% drop-off in potential bookings. Furthermore, manual follow-ups (reminding patients to take meds or book follow-ups) were inconsistent, affecting patient recovery rates.",
        
        solution: "We engineered a comprehensive WhatsApp-based AI Agent integrated directly with the clinic's CRM. The solution included three core modules:\n1. **Booking Engine:** Natural language understanding to check doctor slots and book appointments instantly.\n2. **Plan Manager:** Secure payment links sent within chat for purchasing consultation packages.\n3. **Care Companion:** An automated scheduler that sends daily reminders for medication and check-ins based on the doctor's prescription.",
        
        implementation: [
            "Integration with Clinic Management System (CMS)", 
            "Designing 'Human-like' conversation flows on WhatsApp", 
            "Setting up secure payment gateways for In-Chat payments", 
            "Beta testing with 500 patients"
        ],
        
        results: [
            "Reduced reception workload by 80%, allowing staff to focus on in-clinic care.",
            "Achieved a 60% reduction in patient no-shows due to automated WhatsApp reminders.",
            "30% increase in revenue from consultation plan upsells via the bot."
        ],
        
        testimonial: {
            quote: "Our phone lines used to be jammed constantly. Now, our WhatsApp agent handles 3,000 queries a day. It's like having a team of 10 receptionists working 24/7.",
            author: "Dr. A. Sharma",
            role: "Medical Director"
        }
      }
    },
    {
      id: 2,
      slug: "slack-data-backup-agent",
      title: "Zero Data Loss: The Autonomous Slack Backup Guardian",
      client: "Faculties AI Startup.",
      industry: "Enterprise IT",
      duration: "4 Weeks",
      region: "USA",
      image: "/assets/demo.png",
      description: "A background agent that securely archives daily Slack workspaces to Google Drive to bypass the 90-day free plan data limit.",
      
      previewStats: [
        { label: "Data Saved", value: "100 TB+" },
        { label: "Cost Savings", value: "$20k/yr" },
      ],
  
      impactStats: [
        { label: "Backup Reliability", value: "100%" },
        { label: "Files Archived Daily", value: "50k+" },
        { label: "Retrieval Time", value: "<1 min" },
      ],
  
      techStack: ["Slack API", "Google Drive API", "Python Scripts", "AWS Lambda (Cron Jobs)", "Docker"],
      services: ["Automation Scripting", "Cloud Infrastructure", "Security Audit", "Data Archiving"],
  
      content: {
        challenge: "Startups using the free tier of Slack face a critical limitation: message and file history is deleted after 90 days. For our client, losing intellectual property, design assets, and decision logs was a massive risk. Upgrading to the Enterprise plan for 500+ users was cost-prohibitive ($50k+/year) for a Series A startup.",
        
        solution: "We developed a 'Shadow Backup Agent'. This bot wakes up every 24 hours and performs a granular backup routine:\n1. **Scraper:** It reads all public channels, private groups, and direct messages (authorized).\n2. **Organizer:** It creates a structured folder hierarchy in Google Drive: `/Year/Month/Day/ChannelName`.\n3. **Asset Sorter:** It separates content into subfolders: `/Images`, `/Videos`, `/Audio`, and `/TextLogs` (JSON/PDF format).",
        
        implementation: [
            "Setting up Granular OAuth Permissions for Slack", 
            "Developing the Google Drive hierarchical sorting logic", 
            "Creating a searchable index file for easy data retrieval", 
            "Automating daily Cron jobs on AWS Lambda"
        ],
        
        results: [
            "Complete historical archive secured without upgrading Slack plans.",
            "Searchable database created on Google Drive for 'lost' files.",
            "Zero maintenance required after deployment; the agent runs silently in the background."
        ],
        
        testimonial: {
            quote: "We were about to lose 6 months of design discussions. This agent saved our history and saved us $20k in software fees. It's the most high-ROI automation we have.",
            author: "Mike R.",
            role: "Head of Operations"
        }
      }
    },
    {
      id: 3,
      slug: "restaurant-order-automation",
      title: "Revolutionizing Cafe Operations with Auto-Pilot Ordering",
      client: "Urban Brews Chain",
      industry: "Hospitality",
      duration: "3 Weeks",
      region: "Europe",
      image: "/assets/demo.png",
      description: "Automating table ordering, payments, and customer management to reduce waiter dependency and increase table turnover.",
      
      previewStats: [
        { label: "Table Turnover", value: "+35%" },
        { label: "Avg Order Value", value: "+15%" },
      ],
  
      impactStats: [
        { label: "Wait Staff Efficiency", value: "2x" },
        { label: "Order Accuracy", value: "99.9%" },
        { label: "Customer Data Captured", value: "12k+" },
      ],
  
      techStack: ["POS Integration (Square)", "React Native", "QR Code Tech", "Stripe Connect", "AI Recommendation Engine"],
      services: ["App Development", "Hardware Integration", "UX/UI Design", "Analytics Dashboard"],
  
      content: {
        challenge: "During peak hours, Urban Brews faced a common problem: customers waiting 15 minutes just to place an order, and another 10 minutes to pay the bill. This friction led to frustrated customers and lower table turnover. Additionally, they had zero data on who their customers were or what they preferred.",
        
        solution: "We deployed a 'Scan-Order-Pay' ecosystem powered by AI recommendations:\n1. **Smart Menu:** Customers scan a QR code. The menu highlights 'Best pairings' (e.g., 'Croissant goes well with your Cappuccino'), increasing ticket size.\n2. **Kitchen Sync:** Orders go directly to the kitchen display system (KDS), removing the waiter bottleneck.\n3. **CRM Integration:** Customers earn loyalty points automatically, allowing the cafe to send re-engagement offers later.",
        
        implementation: [
            "Mapping table QR codes to specific POS zones", 
            "Building the AI up-selling logic based on time of day", 
            "Integrating with Kitchen Display Systems for real-time syncing", 
            "Training staff on the new 'Runner' role rather than 'Order Taker'"
        ],
        
        results: [
            "Average Table Turnover time improved by 35% (faster ordering/paying).",
            "Average Order Value increased by 15% due to AI-suggested add-ons.",
            "Waiters reported less stress and higher tips per hour due to volume."
        ],
        
        testimonial: {
            quote: "Our waiters used to be order-takers. Now they are experience managers. The automation handles the boring stuff like payments, and our revenue is up double digits.",
            author: "Elena V.",
            role: "Franchise Owner"
        }
      }
    }
  ];
  
  // Helper to fetch all case studies
  export const getAllCaseStudies = () => {
    return caseStudiesData;
  };
  
  // Helper to fetch a single case study by slug
  export const getCaseStudyBySlug = (slug) => {
    return caseStudiesData.find((study) => study.slug === slug);
  };