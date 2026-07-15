import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../site-data";
import { Chatbot, Footer, Header } from "../../site-shell";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.short} Compare ${service.title.toLowerCase()} packages and starting prices from Semeco Digital.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} | Semeco Digital`, description: service.short, url: `/services/${service.slug}` }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) notFound();
  const related = services.filter(item => item.slug !== slug).slice(0, 3);

  return <main>
    <Header />
    <section className="inner-hero"><div className="shell inner-grid">
      <div><p className="eyebrow light"><span /> Services · {service.title}</p><h1>{service.title}<br /><em>made practical.</em></h1><p>{service.short}</p><Link className="button cream" href={`/contact?service=${service.slug}`}>Book a Free Consultation <span>↗</span></Link></div>
      <div className="service-hero-mark" aria-hidden="true"><span>{service.mark}</span><small>SEMECO DIGITAL<br />SERVICE</small></div>
    </div></section>

    <section className="section shell"><div className="split-intro">
      <div><p className="eyebrow"><span /> Service overview</p><h2>A clear system for<br /><em>better customer experiences.</em></h2></div>
      <div><p>{service.overview}</p></div>
    </div></section>

    <section className="problem-section"><div className="shell service-story-grid">
      <article className="problem-list"><span>COMMON BUSINESS PROBLEMS</span><h2>What may be getting in the way</h2><ol>{service.problems.map((problem,index)=><li key={problem}><b>0{index+1}</b><span>{problem}</span></li>)}</ol></article>
      <article className="solution-card service-solution"><span>THE SEMECO APPROACH</span><h2>How we solve it</h2><p>{service.solution}</p><h3>Expected outcomes</h3><ul>{service.benefits.map(benefit=><li key={benefit}>{benefit}</li>)}</ul></article>
    </div></section>

    <section className="section shell" id="pricing"><div className="center-head"><p className="eyebrow"><span /> Transparent starting points</p><h2>Choose the package that<br /><em>matches your next step.</em></h2><p>Every price is a starting point. Final scope, responsibilities, timeline, and third-party costs are confirmed in your service agreement.</p></div>
      <div className="pricing-grid">{service.packages.map(pkg=><article className={pkg.popular?"featured-price":""} key={pkg.name}>
        {pkg.popular&&<div>Most Popular</div>}<small>{pkg.billing}</small><h3>{pkg.name}</h3><p>{pkg.description}</p>
        <strong><span>Starting at</span><b>{pkg.price}</b>{pkg.setupFee&&<em>+ {pkg.setupFee}</em>}</strong>
        <ul>{pkg.features.map(feature=><li key={feature}>{feature}</li>)}</ul>
        <Link href={`/contact?service=${service.slug}&package=${encodeURIComponent(pkg.name)}`}>Choose {pkg.name} →</Link>
      </article>)}</div>
      {service.note&&<p className="service-note"><strong>Important:</strong> {service.note}</p>}
    </section>

    <section className="service-faq shell"><div><p className="eyebrow"><span /> Service FAQ</p><h2>Questions,<br /><em>answered clearly.</em></h2></div><div className="faq-list">{service.faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="related shell"><p className="eyebrow"><span /> Other ways we can help</p><div className="related-grid">{related.map(item=><Link key={item.slug} href={`/services/${item.slug}`}><span>{item.mark}</span><h3>{item.title}</h3><p>{item.short}</p><b>Explore service ↗</b></Link>)}</div></section>
    <section className="cta-section"><div className="shell cta-inner"><p className="eyebrow light"><span /> Free consultation</p><h2>Let’s make technology<br /><em>work harder for you.</em></h2><p>Tell us what feels difficult today, and we’ll help clarify the most useful next step.</p><Link className="button cream" href={`/contact?service=${service.slug}`}>Book a Free Consultation <span>↗</span></Link></div></section>
    <Footer /><Chatbot />
  </main>;
}
