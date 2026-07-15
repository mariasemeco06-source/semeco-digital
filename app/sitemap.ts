import type { MetadataRoute } from "next";
import { services } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://semecodigital.netlify.app";
  const routes=["","/services","/portfolio","/about","/faq","/contact",...services.map(service=>`/services/${service.slug}`)];
  return routes.map((route,index)=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency:index===0?"weekly":"monthly",priority:index===0?1:route.startsWith("/services/") ? .8 : .7}));
}
