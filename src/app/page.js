import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import WhyAstex from "@/components/WhyAstex";
import IndustriesServe from "@/components/IndustriesServe";
import SectionBanner from "@/components/SectionBanner";
import OurProcess from "@/components/OurProcess";
import CaseStudy from "@/components/CaseStudy";
import Partners from "@/components/Partners";
import Blogs from "@/components/Blogs";
import FinalCta from "@/components/FinalCta";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <OurServices />
   <WhyAstex />
   <IndustriesServe />
   <SectionBanner />
   <OurProcess />
   <CaseStudy />
   <Partners />
   <Blogs />
   <FinalCta />
   <ContactUs />
   <Footer />
   </>
  );
}
