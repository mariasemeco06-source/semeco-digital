import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { faqs, services } from "./site-data";
import { Chatbot, Footer, Header } from "./site-shell";

export const metadata: Metadata = {
  title:"AI-Powered Growth for Local Businesses",
  description:"Semeco Digital helps small businesses attract customers through modern websites, digital marketing, content, and intelligent automation.",
  alternates:{canonical:"/"}
};
const Arrow=()=> <span aria-hidden="true">↗</span>;

export default function Home(){return <main>
  <Header/>
  <section className="hero shell"><div className="hero-copy reveal">
    <p className="eyebrow"><span/> Websites · Marketing · Content · AI</p>
    <h1>AI-Powered Growth<br/>for <em>Local Businesses</em></h1>
    <p className="hero-sub">Semeco Digital helps small businesses attract more customers, build a stronger online presence, and save time through modern websites, digital marketing, and intelligent automation.</p>
    <div className="actions"><Link className="button primary" href="/contact">Book a Free Consultation <Arrow/></Link><Link className="button text-button" href="#services">Explore Our Services <span>↓</span></Link></div>
    <div className="trust-row"><div className="brand-seal">SD</div><p><strong>Professional digital tools, made practical.</strong><br/>Founder-led support for growing local businesses.</p></div>
  </div><div className="hero-visual reveal delay-1" aria-label="A connected Semeco Digital growth system">
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
    <div className="dashboard-card glass"><p className="dash-label">YOUR DIGITAL GROWTH SYSTEM</p><div className="system-list"><span><b>01</b> Professional website</span><span><b>02</b> Consistent marketing</span><span><b>03</b> Useful content</span><span><b>04</b> Intelligent automation</span></div><div className="system-status"><i/> Connected around your business</div></div>
    <div className="float-card float-a glass"><b>AI</b><span><small>Less repetitive work</small><strong>Practical automation</strong></span></div>
    <div className="float-card float-b glass"><b>↗</b><span><small>Clear next steps</small><strong>Conversion-focused</strong></span></div>
    <div className="hero-stamp"><span>SD</span><small>HUMAN-LED<br/>AI-POWERED</small></div>
  </div></section>

  <section className="proof-strip"><div className="shell proof-grid"><p>Built for the realities of small business</p><div><strong>6</strong><span>Connected services</span></div><div><strong>Clear</strong><span>Starting prices</span></div><div><strong>Flexible</strong><span>One-time or monthly</span></div><div><strong>Human</strong><span>Founder-led support</span></div></div></section>

  <section className="section shell" id="services"><div className="section-head reveal"><div><p className="eyebrow"><span/> Six core services</p><h2>One digital partner.<br/><em>Six practical ways to grow.</em></h2></div><p>Start with the service you need today. Each offer is designed to work independently or connect with a broader digital system.</p></div>
    <div className="service-grid">{services.map((service,index)=><Link className="service-card reveal" href={`/services/${service.slug}`} key={service.slug}><div className="service-number">0{index+1}</div><div className="service-icon">{service.mark}</div><h3>{service.title}</h3><p>{service.short}</p><span className="learn">Starting at {service.packages[0].price} <Arrow/></span></Link>)}</div>
  </section>

  <section className="problems-section"><div className="shell"><div className="section-head reveal"><div><p className="eyebrow"><span/> Common business problems</p><h2>Good businesses should not be<br/><em>held back by digital friction.</em></h2></div><p>Semeco Digital focuses on the everyday obstacles that make it harder to attract customers and run the business efficiently.</p></div><div className="problem-cards"><article><span>01</span><h3>“Our website does not represent us.”</h3><p>Outdated pages, unclear messaging, or a poor mobile experience can make a strong business look less credible.</p></article><article><span>02</span><h3>“Marketing always falls behind.”</h3><p>Posting, emailing, and creating content become inconsistent when the owner is already doing everything else.</p></article><article><span>03</span><h3>“We miss leads and follow-ups.”</h3><p>Slow replies and manual processes can create gaps in the customer experience and unnecessary repetitive work.</p></article><article><span>04</span><h3>“Our tools do not work together.”</h3><p>Disconnected platforms create duplicate work, confusion, and less visibility into what customers need.</p></article></div></div></section>

  <section className="ai-section"><div className="shell ai-grid"><div className="ai-art reveal"><div className="ai-core"><span>SD</span><small>HUMAN + AI</small></div><div className="ai-label a1">Human strategy</div><div className="ai-label a2">AI efficiency</div><div className="ai-label a3">Practical systems</div></div><div className="ai-copy reveal delay-1"><p className="eyebrow light"><span/> The Semeco Digital AI advantage</p><h2>Modern technology should make<br/><em>business easier.</em></h2><p>AI helps us plan, write, organize, automate, and improve faster. Maria provides the strategy, empathy, creative judgment, and quality control that keep every solution useful and human.</p><ul className="check-list"><li>Reduce repetitive administrative work</li><li>Respond to common customer needs more consistently</li><li>Create content and digital systems more efficiently</li><li>Keep sensitive credentials out of browser-side code</li></ul><Link className="button cream" href="/services/ai-virtual-assistance">Explore AI Virtual Assistance <Arrow/></Link></div></div></section>

  <section className="section shell process-section"><div className="center-head"><p className="eyebrow"><span/> How the process works</p><h2>Clear steps. <em>No unnecessary complexity.</em></h2><p>You will always know what we are working on, what is needed from you, and what happens next.</p></div><div className="process-grid"><article><b>01</b><h3>Discover</h3><p>We talk through your business, customers, challenges, current tools, and goals.</p></article><article><b>02</b><h3>Plan</h3><p>You receive a recommended service, clear scope, starting investment, and responsibilities.</p></article><article><b>03</b><h3>Create</h3><p>Semeco Digital builds the agreed website, content, campaign, or automation system.</p></article><article><b>04</b><h3>Launch & support</h3><p>We test, hand off, and provide the launch or ongoing support included in your package.</p></article></div></section>

  <section className="featured-case"><div className="shell case-grid"><div className="case-art"><div className="case-wordmark"><small>FEATURED PROJECT · COMING SOON</small><strong>SERVICE<br/>OFFERS</strong><span>Pilot Point, Texas</span></div></div><div className="case-copy"><p className="eyebrow"><span/> Featured portfolio project</p><h2>A bilingual digital home for a <em>family-owned business.</em></h2><p>Service Offers provides tax, insurance, immigration-document-support, and notary services in Pilot Point, Texas. Semeco Digital is creating a clearer, more professional experience for English- and Spanish-speaking customers.</p><ul className="case-services"><li>Website strategy</li><li>Responsive website design</li><li>Copywriting</li><li>Bilingual experience</li><li>Quote and appointment forms</li><li>Basic SEO and brand refresh</li></ul><Link className="button primary" href="/portfolio">View Project Details <Arrow/></Link></div></div></section>

  <section className="founder-section shell"><div className="founder-card reveal"><div className="founder-photo"><Image src="/maria-semeco-founder.jpg" alt="Maria Semeco, founder of Semeco Digital" fill sizes="(max-width: 900px) 100vw, 40vw" priority={false}/></div><div className="founder-copy"><p className="eyebrow"><span/> Meet Maria Semeco</p><h2>Technology should make<br/>business <em>easier—not harder.</em></h2><p>I founded Semeco Digital because small businesses deserve professional digital tools without the overhead of a large agency. I use modern technology and AI to create practical websites, content, marketing, and automations that help owners spend less time on repetitive work.</p><Link className="button primary" href="/about">Read Maria’s Story <Arrow/></Link></div></div></section>

  <section className="faq-preview shell"><div><p className="eyebrow"><span/> Frequently asked</p><h2>Start with<br/><em>clear answers.</em></h2><p>Good partnerships begin with realistic expectations and transparent next steps.</p><Link className="button text-button" href="/faq">View all FAQs →</Link></div><div className="faq-list">{faqs.slice(0,4).map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
  <section className="cta-section"><div className="shell cta-inner"><p className="eyebrow light"><span/> Free consultation</p><h2>Ready for a more useful<br/><em>digital presence?</em></h2><p>Tell us what feels difficult today. We’ll help you identify a practical next step.</p><Link className="button cream" href="/contact">Book a Free Consultation <Arrow/></Link></div></section>
  <Footer/><Chatbot/>
</main>}
