"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "./app/site-data";

type Status = "idle" | "success" | "error";

export function ConsultationForm(){
  const params = useSearchParams();
  const [status,setStatus]=useState<Status>("idle");
  const [message,setMessage]=useState(()=>params.get("challenge")||"");

  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form=event.currentTarget;
    if(!form.checkValidity()){setStatus("error");form.reportValidity();return;}
    const data=new FormData(form);
    data.set("form-name","semeco-consultation");
    try {
      const encoded=new URLSearchParams();
      data.forEach((value,key)=>encoded.append(key,typeof value==="string"?value:value.name));
      const response=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:encoded.toString()});
      if(!response.ok) throw new Error("Submission failed");
      setStatus("success");form.reset();setMessage("");
    } catch { setStatus("error"); }
  }

  return <form className="contact-form" name="semeco-consultation" method="POST" data-netlify="true" onSubmit={submit} noValidate>
    <input type="hidden" name="form-name" value="semeco-consultation" />
    <div className="form-intro"><span>01</span><div><h2>Request your free consultation</h2><p>Complete the form and your email app will open with the inquiry ready to send.</p></div></div>
    {status==="success"&&<div className="form-status success" role="status"><strong>Thank you—your inquiry was sent.</strong> Maria will review your information and follow up using your preferred contact method.</div>}
    {status==="error"&&<div className="form-status error" role="alert"><strong>We could not send the form.</strong> Check the required fields and try again, or email maria.semeco06@gmail.com directly.</div>}
    <div className="form-row"><label htmlFor="name">Name <span>*</span><input id="name" name="name" defaultValue={params.get("name")||""} autoComplete="name" required/></label><label htmlFor="email">Email <span>*</span><input id="email" type="email" name="email" defaultValue={params.get("email")||""} autoComplete="email" required/></label></div>
    <div className="form-row"><label htmlFor="phone">Phone number <span>*</span><input id="phone" type="tel" name="phone" defaultValue={params.get("phone")||""} autoComplete="tel" required/></label><label htmlFor="business">Business name <span>*</span><input id="business" name="business" defaultValue={params.get("business")||""} autoComplete="organization" required/></label></div>
    <label htmlFor="website">Website URL <span className="optional">Optional</span><input id="website" type="url" name="website" placeholder="https://yourbusiness.com" autoComplete="url"/></label>
    <div className="form-row"><label htmlFor="service">Service of interest <span>*</span><select id="service" name="service" defaultValue={params.get("service")||""} required><option value="" disabled>Select a service</option>{services.map(service=><option key={service.slug} value={service.title}>{service.title}</option>)}<option>Not sure yet</option></select></label><label htmlFor="budget">Estimated budget <span>*</span><select id="budget" name="budget" defaultValue="" required><option value="" disabled>Select a range</option><option>Under $500</option><option>$500–$1,000</option><option>$1,000–$2,500</option><option>$2,500+</option><option>Monthly services</option><option>Not sure yet</option></select></label></div>
    <label htmlFor="challenge">Main business challenge <span>*</span><textarea id="challenge" name="challenge" value={message} onChange={event=>setMessage(event.target.value)} placeholder="What feels difficult today, and what would you like to improve?" rows={5} required/></label>
    <fieldset><legend>Preferred contact method <span>*</span></legend><div className="radio-row"><label><input type="radio" name="preferredContact" value="Email" required/> Email</label><label><input type="radio" name="preferredContact" value="Phone"/> Phone</label><label><input type="radio" name="preferredContact" value="Text"/> Text</label></div></fieldset>
    <button className="button primary" type="submit">Prepare Consultation Request <span>↗</span></button>
    <small className="form-note">Your submission is securely processed by Netlify Forms and will appear in the site’s Netlify dashboard.</small>
  </form>;
}
