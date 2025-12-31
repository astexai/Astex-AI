
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-sans",
});

// ✅ SEO Metadata (Optimised for AI Development Company)
export const metadata = {
  title: "Astex AI — AI Development & Automation Company | AI Agents, Workflows & Automation Services",
  description:
    "Astex AI is a global AI Development & Automation company building AI Agents, Automation Systems, Chatbots, Voicebots, Workflow Automation & Business AI Solutions for startups and enterprises.",
  keywords: [
    "Astex AI",
    "AI development company",
    "AI automation company",
    "AI agents development",
    "business automation services",
    "AI workflow automation",
    "AI chatbot development",
    "AI voicebot development",
    "process automation",
    "enterprise automation",
    "custom AI solutions",
    "AI product development",
    "automated business systems",
    "AI consulting services",
    "intelligent automation",
    "machine learning solutions",
    "AI assistant development",
    "AI copilot development",
    "document AI bots",
    "RAG knowledgebase bots",
    "AI task automation",
    "CRM automation",
    "sales automation",
    "WhatsApp automation",
    "Telegram automation",
    "data extraction bots",
    "insight generation agents",
    "AI customer support bots",
    "workflow optimization",
    "business AI services",
    "startup AI solutions",
    "global AI automation services",
    "AI integrations",
    "AI process improvement",
    "AI powered business tools",
    "AI engineering company",
    "AI SaaS development",
    "custom automation tools",
    "AI systems engineering",
    "digital transformation automation",
    "AI technology services",
    "AI innovation studio",
    "automation consulting",
    "intelligent workflow automation",
    "autonomous AI agents",
    "AI powered operations",
    "enterprise AI solutions",
    "AI engineering services",
    "automation for startups",
    "AI tools development"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🔎 Google Search Console */}
        <meta
          name="google-site-verification"
          content="3kUbOcWk_ldCebvpIBePHDn-DgvI1H7eruMIGdksVm4"
        />

        {/* 🟢 Google Tag Manager (HEAD) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5FXTQSF9');`,
          }}
        />

        {/* 📊 Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1V10VZ3XC8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1V10VZ3XC8');
            `,
          }}
        />
      </head>

      <body className={`${poppins.variable} antialiased`}>
        {/* 🟢 Google Tag Manager (BODY NoScript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FXTQSF9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
