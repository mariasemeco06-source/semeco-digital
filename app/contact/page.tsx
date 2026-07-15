import type { Metadata } from "next";
import { Suspense } from "react";
import { Chatbot, Footer, Header } from "../site-shell";
import { ConsultationForm } from "./contact-form";

export const metadata: Metadata = {
  title:"Book a Free Consultation",
  description:"Tell Semeco Digital about your website, marketing, content, or AI automation goals and request a free consultation.",
  alternates:{canonical:"/contact"},
  openGraph:{title:"Book a Free Consultation | Semeco Digital",description:"Start a practical conversation about your business goals.",url:"/contact"}
};

export default function Contact(){return <main><Header/><section className="contact-page"><div className="shell contact-grid">
  <div className="contact-copy"><p className="eyebrow light"><span/> Free consultation</p><h1>Let’s make business<br/><em>feel easier.</em></h1><p>Tell me what you are working toward and what currently feels difficult. I’ll help you identify a practical next step for your website, marketing, content, or automation.</p><div className="contact-detail"><small>EMAIL</small><a href="mailto:maria.semeco06@gmail.com">maria.semeco06@gmail.com</a></div><div className="contact-detail"><small>PHONE</small><a href="tel:+14692075242">469-207-5242</a></div><div className="contact-detail"><small>LOCATION</small><span>Denton, Texas · Supporting local businesses</span></div><div className="consult-expect"><strong>What to expect</strong><ul><li>A no-pressure discovery conversation</li><li>A clear recommendation based on your goals</li><li>Transparent starting prices and next steps</li></ul></div></div>
  <Suspense fallback={<div className="contact-form"><p>Loading consultation form…</p></div>}><ConsultationForm/></Suspense>
  </div></section><Footer/><Chatbot/></main>}
