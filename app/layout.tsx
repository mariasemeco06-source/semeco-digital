import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://semecodigital.netlify.app"),
  title: { default: "Semeco Digital | AI-Powered Growth for Local Businesses", template: "%s | Semeco Digital" },
  description: "Premium websites, AI automation, and digital marketing that help local businesses attract more customers and grow with confidence.",
  keywords: ["digital agency", "website design", "AI automation", "local business marketing", "Denton digital agency"],
  openGraph: { title: "Semeco Digital — AI-Powered Growth", description: "Human creativity and AI-powered execution for ambitious local businesses.", type: "website", images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Semeco Digital — AI-Powered Growth for Local Businesses" }] },
  twitter: { card: "summary_large_image", title: "Semeco Digital — AI-Powered Growth", description: "Human creativity and AI-powered execution for ambitious local businesses.", images: ["/og-v2.png"] },
  robots: { index:true, follow:true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context":"https://schema.org",
    "@type":"ProfessionalService",
    name:"Semeco Digital",
    url:"https://semecodigital.netlify.app",
    email:"maria.semeco06@gmail.com",
    telephone:"+1-469-207-5242",
    founder:{"@type":"Person",name:"Maria Semeco"},
    areaServed:{"@type":"City",name:"Denton"},
    description:"Websites, digital marketing, content, and AI-powered automation for local businesses.",
    serviceType:["Website Design","Social Media Management","Google Business Growth","Email Marketing","Short-Form Video","AI Virtual Assistance"]
  };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} /></body></html>;
}
