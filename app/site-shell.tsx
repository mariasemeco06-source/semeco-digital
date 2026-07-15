"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { services, startingPrices } from "./site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell nav-wrap">
    <Link className="logo" href="/" aria-label="Semeco Digital home"><span>SD</span><div>SEMECO<small>DIGITAL</small></div></Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? "×" : "☰"}</button>
    <nav className={open ? "open" : ""} aria-label="Primary navigation">
      <Link href="/">Home</Link>
      <div className="nav-drop"><Link href="/services">Services</Link><div className="drop-menu">{services.map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}<span>→</span></Link>)}</div></div>
      <Link href="/portfolio">Portfolio</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link>
      <Link className="nav-cta" href="/contact">Free Consultation <span>↗</span></Link>
    </nav>
  </div></header>;
}

export function Footer() {
  return <footer><div className="shell footer-grid">
    <div className="footer-brand"><Link className="logo logo-light" href="/"><span>SD</span><div>SEMECO<small>DIGITAL</small></div></Link><p>Websites, marketing, content, and practical AI automation for local businesses.</p><div className="socials"><a href="#" aria-label="Instagram placeholder">ig</a><a href="#" aria-label="LinkedIn placeholder">in</a><a href="mailto:maria.semeco06@gmail.com" aria-label="Email Semeco Digital">@</a></div></div>
    <div><h4>Explore</h4><Link href="/">Home</Link><Link href="/portfolio">Portfolio</Link><Link href="/about">About Maria</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div>
    <div><h4>Services</h4>{services.map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}</div>
    <div><h4>Start a conversation</h4><a href="mailto:maria.semeco06@gmail.com">maria.semeco06@gmail.com</a><a href="tel:+14692075242">469-207-5242</a><p>Denton, Texas<br />Supporting local businesses.</p><Link className="footer-link" href="/contact">Book a free consultation →</Link></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Semeco Digital. All rights reserved.</span><span>Human-led · AI-powered</span></div></footer>;
}

type ChatView = "home" | "services" | "prices" | "recommend" | "lead" | "complete";
type Lead = { name:string; email:string; phone:string; business:string; need:string };
const emptyLead: Lead = { name:"", email:"", phone:"", business:"", need:"" };

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<ChatView>("home");
  const [businessType, setBusinessType] = useState("");
  const [lead, setLead] = useState<Lead>(emptyLead);

  const recommended = businessType === "starting" ? services[0] : businessType === "visibility" ? services[2] : businessType === "content" ? services[1] : services[5];
  function submitLead(event:FormEvent<HTMLFormElement>){event.preventDefault();setView("complete");}
  function reset(){setView("home");setBusinessType("");setLead(emptyLead);}

  return <div className="chat-wrap">
    {open && <section className="chat-panel" aria-label="Semeco Digital guided assistant" aria-live="polite">
      <header className="chat-head"><div><span aria-hidden="true">SD</span><p><strong>Semeco Digital Assistant</strong><small>Guided service assistant</small></p></div><button onClick={() => setOpen(false)} aria-label="Close assistant">×</button></header>
      <div className="chat-body">
        {view!=="home"&&<button className="chat-back" onClick={()=>setView("home")}>← Main menu</button>}
        {view==="home"&&<><p className="assistant-message">Hi! I’m the Semeco Digital Assistant. I can help you compare services, explore starting prices, or request a free consultation. What would you like help with?</p><div className="chat-choices"><button onClick={()=>setView("services")}>Explore the six services</button><button onClick={()=>setView("prices")}>Compare starting prices</button><button onClick={()=>setView("recommend")}>Recommend a service</button><button onClick={()=>setView("lead")}>Request a consultation</button></div></>}
        {view==="services"&&<><p className="chat-title">Choose a service to learn more.</p><div className="chat-service-list">{services.map(service=><Link key={service.slug} href={`/services/${service.slug}`}><b>{service.mark}</b><span><strong>{service.title}</strong><small>{service.short}</small></span></Link>)}</div></>}
        {view==="prices"&&<><p className="chat-title">Entry packages and starting prices</p><div className="chat-price-list">{startingPrices.map(item=><Link key={item.slug} href={`/services/${item.slug}#pricing`}><span>{item.title}<small>{item.packageName}</small></span><b>From {item.price}</b></Link>)}</div><small className="chat-disclaimer">Final scope and third-party fees are confirmed before work begins.</small></>}
        {view==="recommend"&&<><p className="assistant-message">What best describes your main need right now?</p><div className="chat-choices"><button onClick={()=>setBusinessType("starting")}>I need a stronger website</button><button onClick={()=>setBusinessType("visibility")}>I need more local visibility</button><button onClick={()=>setBusinessType("content")}>I need consistent content</button><button onClick={()=>setBusinessType("automation")}>I need to save time</button></div>{businessType&&<div className="chat-recommendation"><small>A useful starting point</small><strong>{recommended.title}</strong><p>{recommended.short}</p><Link href={`/services/${recommended.slug}`}>View packages →</Link><button onClick={()=>setView("lead")}>Request a consultation</button></div>}</>}
        {view==="lead"&&<form className="chat-lead-form" onSubmit={submitLead}><p className="chat-title">Tell us a little about your business.</p><label>Name<input required value={lead.name} onChange={e=>setLead({...lead,name:e.target.value})}/></label><label>Email<input required type="email" value={lead.email} onChange={e=>setLead({...lead,email:e.target.value})}/></label><label>Phone<input required type="tel" value={lead.phone} onChange={e=>setLead({...lead,phone:e.target.value})}/></label><label>Business name<input required value={lead.business} onChange={e=>setLead({...lead,business:e.target.value})}/></label><label>Main need<textarea required rows={3} value={lead.need} onChange={e=>setLead({...lead,need:e.target.value})}/></label><button className="button primary" type="submit">Continue to consultation</button></form>}
        {view==="complete"&&<div className="chat-complete"><span>✓</span><h3>Great—your details are ready.</h3><p>Continue to the consultation form to review your information and send the inquiry.</p><Link className="button primary" href={`/contact?name=${encodeURIComponent(lead.name)}&email=${encodeURIComponent(lead.email)}&phone=${encodeURIComponent(lead.phone)}&business=${encodeURIComponent(lead.business)}&challenge=${encodeURIComponent(lead.need)}`}>Open consultation form</Link><button onClick={reset}>Start over</button></div>}
      </div>
      <small className="chat-note">Guided assistant · No API key or sensitive credentials used</small>
    </section>}
    <button className="chat-button" onClick={() => setOpen(!open)} aria-label={open?"Close Semeco Digital assistant":"Open Semeco Digital assistant"}>{open?"×":"SD"}<span>{open?"Close":"Ask Semeco"}</span></button>
  </div>;
}
