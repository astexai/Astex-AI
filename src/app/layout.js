import "./globals.css";
import { Poppins } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-sans",
});

export const metadata = {
   title: 'Astexai - AI Development & Automation',
  description: 'AI Development & Automation Company Trusted by Startups',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
