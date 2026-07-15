export type BillingType = "One-Time" | "Monthly" | "Monthly + Setup";

export type ServicePackage = {
  name: string;
  price: string;
  billing: BillingType;
  setupFee?: string;
  popular?: boolean;
  description: string;
  features: string[];
};

export type Service = {
  slug: string;
  title: string;
  mark: string;
  short: string;
  overview: string;
  problems: string[];
  solution: string;
  benefits: string[];
  packages: ServicePackage[];
  faqs: [string, string][];
  note?: string;
};

export const services: Service[] = [
  {
    slug: "website-design", title: "Website Design", mark: "WD",
    short: "Professional, mobile-friendly websites designed to help local businesses earn trust and turn visits into inquiries.",
    overview: "Your website should clearly explain what you do, make your business feel credible, and give potential customers an easy next step. Semeco Digital combines strategy, copy, design, and responsive development into one practical launch process.",
    problems: ["The current website looks outdated or does not work well on phones.", "Visitors cannot quickly understand the services or how to get started.", "The business depends on social media and does not own a reliable digital home.", "Updates, hosting, security, and backups feel confusing or time-consuming."],
    solution: "We create a polished website around your customers’ real questions, then connect the forms, maps, analytics, and tools your business needs. Ongoing plans add hosting, monitoring, updates, and AI features so the site remains useful after launch.",
    benefits: ["A clearer and more credible online presence", "An easier path from visitor to inquiry", "A mobile-responsive experience", "A website foundation that can grow with the business"],
    packages: [
      { name:"Starter Website", price:"$399", billing:"One-Time", description:"A professional launch for businesses that want to own and manage their website.", features:["Up to 5 pages","Mobile-responsive design","Basic SEO","Contact forms","Google Maps","Domain connection","Google Analytics","One revision round","Website management tutorial","No monthly commitment"] },
      { name:"Growth Website", price:"$149/month", billing:"Monthly + Setup", setupFee:"$399 setup", popular:true, description:"A managed website with ongoing care and an AI-powered customer support layer.", features:["Everything in Starter","Website hosting","AI chatbot","Security updates","Monthly backups","Up to 30 minutes of edits per month","Website monitoring"] },
      { name:"Scale Website", price:"$299/month", billing:"Monthly + Setup", setupFee:"$399 setup", description:"Ongoing content, analytics, and optimization for businesses ready to keep improving.", features:["Everything in Growth","One AI-assisted blog article per month","Landing pages as defined by the service agreement","Ongoing SEO improvements","Monthly analytics","Quarterly optimization"] }
    ],
    faqs:[["Will I own my website?","Ownership and platform details are confirmed in your service agreement. The one-time Starter package is designed for clients who want to manage the site after launch."],["Are hosting and updates included?","They are included in the Growth and Scale monthly plans. Starter has no monthly commitment, so hosting is arranged separately."],["Can you use my existing domain?","Yes. Domain connection is included, provided you have access to the domain account."],["Is SEO guaranteed?","No agency can responsibly guarantee rankings. We provide a technically sound foundation and ongoing improvements based on the selected package."]]
  },
  {
    slug:"social-media-management", title:"Social Media Management", mark:"SM",
    short:"Consistent, on-brand content that helps your business stay visible without taking over your schedule.",
    overview:"Social media works best when it is clear, consistent, and connected to a real business goal. We turn your services, expertise, and promotions into a practical monthly content system.",
    problems:["Posting is inconsistent because there is never enough time.","The brand looks different from post to post.","Writing captions and deciding what to share creates decision fatigue.","Content is published without a clear plan or review process."],
    solution:"We plan the themes, create branded graphics and captions, and—depending on the package—schedule the content and review performance so your presence remains active and intentional.",
    benefits:["A more consistent brand presence","Less time spent planning and writing","A reusable monthly content rhythm","Clearer insight into content performance"],
    packages:[
      {name:"Content Starter",price:"$150",billing:"One-Time",description:"A complete month of ready-to-post content for business owners who prefer to publish themselves.",features:["One month of content","12 graphics","12 captions","Monthly content calendar","Hashtag suggestions","Client posts everything themselves"]},
      {name:"Growth Social",price:"$199/month",billing:"Monthly",popular:true,description:"Reliable monthly content creation, scheduling, and basic reporting.",features:["12 graphics per month","12 captions per month","Posting and scheduling","Monthly analytics"]},
      {name:"Scale Social",price:"$400/month",billing:"Monthly",description:"Broader distribution and active strategy refinement for a growing content presence.",features:["Everything in Growth","Strategy optimization","Cross-platform posting","Performance reports","Priority support"]}
    ],
    faqs:[["Which platforms are included?","Platforms are selected during discovery and listed in the service agreement so the scope stays clear."],["Do I need to provide photos?","We can use approved brand assets, client-provided images, and designed graphics. Any custom photography is scoped separately."],["Does this guarantee more followers or sales?","No. We build consistency, clarity, and a stronger content system, but platform reach and customer behavior cannot be guaranteed."]]
  },
  {
    slug:"google-business-growth",title:"Google Business Growth",mark:"GB",
    short:"A stronger Google Business Profile that helps nearby customers find accurate information and take action.",
    overview:"Your Google Business Profile is often a customer’s first impression. Accurate details, useful posts, organized photos, and a thoughtful review process can make it easier for local customers to understand and contact your business.",
    problems:["The profile is incomplete, outdated, or inconsistent.","Services and categories are not clearly organized.","Reviews are not being requested through a repeatable process.","The business has little insight into profile activity."],
    solution:"We improve the foundation of your profile, publish useful updates, organize photos, and create practical local visibility systems without making unrealistic ranking promises.",
    benefits:["More accurate business information","A more complete and trustworthy profile","A repeatable review request process","Useful monthly performance visibility"],
    packages:[
      {name:"Google Profile Setup",price:"$249",billing:"One-Time",description:"A complete profile foundation for businesses that need an accurate, optimized starting point.",features:["Business description","Categories","Services","Photo organization and uploads","Keyword optimization","Google Maps profile optimization"]},
      {name:"Google Growth",price:"$99/month",billing:"Monthly",popular:true,description:"Consistent profile activity and reporting for local businesses.",features:["Weekly Google posts","Monthly profile updates","Review request strategy","Photo uploads","Monthly performance report"]},
      {name:"Local SEO",price:"$250/month",billing:"Monthly",description:"Expanded local visibility work and competitor awareness.",features:["Everything in Google Growth","Local SEO improvements","Citation management","Competitor tracking","AI-assisted FAQ content"]}
    ],
    faqs:[["Can you guarantee first place on Google?","No. Rankings depend on many factors outside any agency’s control. We improve the profile and local signals using responsible best practices."],["Can you respond to reviews?","Review response support can be included when responsibilities and approval guidelines are defined in the service agreement."],["Do I need an existing profile?","No. The setup package can help organize a new or incomplete profile, subject to Google’s verification requirements."]]
  },
  {
    slug:"email-marketing",title:"Email Marketing",mark:"EM",
    short:"Useful campaigns and automated follow-up that keep your business connected to leads and customers.",
    overview:"Email gives your business a direct way to follow up, educate, promote, and stay remembered. We create a practical setup and consistent campaigns that reflect your brand and respect your audience.",
    problems:["Customer emails are scattered or not being collected.","New leads receive no consistent welcome or follow-up.","Newsletters take too long to plan and write.","Past customers are rarely re-engaged."],
    solution:"We set up the platform, templates, signup forms, campaigns, and customer journeys included in your package, then use performance data to refine future communication.",
    benefits:["A professional email foundation","More consistent customer communication","Less repetitive follow-up","Clear campaign analytics"],
    packages:[
      {name:"Email Setup",price:"$199",billing:"One-Time",description:"The essential tools and templates needed to begin collecting and emailing contacts.",features:["Email platform setup","Welcome email","Newsletter template","Signup forms","Basic automation"]},
      {name:"Email Growth",price:"$150/month",billing:"Monthly",popular:true,description:"Two professionally planned campaigns every month.",features:["Two email campaigns per month","Promotions","Newsletter","Analytics"]},
      {name:"Email Scale",price:"$299/month",billing:"Monthly",description:"More advanced lifecycle campaigns and automated customer journeys.",features:["Everything in Email Growth","Automated follow-ups","Customer win-back campaigns","Customer journeys","Seasonal campaigns"]}
    ],
    faqs:[["Which email platform do you use?","The platform is selected based on your needs, existing tools, list size, and budget."],["Do platform fees come with the package?","Third-party email platform fees are separate unless the service agreement says otherwise."],["Do you provide the email list?","No. Clients must collect contacts lawfully and provide any existing list with the necessary permission to email it."]],
    note:"Third-party email platform fees may be billed separately depending on the tools and list size selected."
  },
  {
    slug:"short-form-video",title:"Short-Form Video",mark:"VF",
    short:"A practical system for turning your expertise and footage into polished short-form videos.",
    overview:"Short-form video can help customers understand the people, services, and ideas behind a local business. Our packages make planning and editing easier whether you film independently or need an on-location session.",
    problems:["The business does not know what to film.","Raw clips never make it through editing and posting.","Videos lack strong hooks, captions, or platform formatting.","Content creation feels inconsistent and difficult to repeat."],
    solution:"We provide prompts, shot guidance, editing, hooks, captions, music, and platform-ready formatting. The Scale package adds a planned local filming session when travel is available.",
    benefits:["A repeatable filming process","Polished platform-ready edits","Less time spent planning and editing","A stronger library of useful video content"],
    packages:[
      {name:"DIY Video Pack",price:"$299",billing:"One-Time",description:"You film using our guidance, and Semeco Digital turns the footage into finished content.",features:["Shot list and filming guide","Up to 8 edited videos","Captions","Hooks","Music","Platform optimization"]},
      {name:"Content Growth",price:"$250/month",billing:"Monthly",popular:true,description:"A monthly editing partnership for clients who record their own clips.",features:["Monthly filming prompts","Up to 8 edited videos per month","Captions","Hooks","Trend optimization"]},
      {name:"Content Scale",price:"$799/month",billing:"Monthly",description:"On-location filming and a larger monthly library of edited content.",features:["One monthly two-hour filming session","Up to 16 edited videos","Captions","Hooks","Platform optimization","Content planning"]}
    ],
    faqs:[["Do you film on location?","On-location filming is included in Content Scale when travel is available for the client’s location."],["Can you guarantee a video will go viral?","No. We optimize the creative for clarity and the selected platforms, but reach and virality cannot be guaranteed."],["Who owns the raw footage?","Raw footage delivery and storage expectations are defined in the service agreement."]],
    note:"Travel availability and any travel fee depend on the client’s location and are confirmed before booking."
  },
  {
    slug:"ai-virtual-assistance",title:"AI Virtual Assistance",mark:"AI",
    short:"Customer-facing assistants and workflow automations that reduce repetitive work without losing the human touch.",
    overview:"AI should make business easier—not add another complicated tool. We identify useful, responsible automation opportunities and build systems that support lead capture, customer questions, appointments, and follow-up.",
    problems:["Common questions take time to answer repeatedly.","Leads wait too long for a response or next step.","Appointment, review, and follow-up tasks are handled manually.","Business tools do not share information efficiently."],
    solution:"We configure the approved chatbot, knowledge, qualification questions, and workflows included in your package. The system is designed for secure server-side expansion without exposing API keys in browser code.",
    benefits:["Faster first responses","More consistent lead capture","Less repetitive administrative work","A scalable foundation for connected workflows"],
    packages:[
      {name:"AI Setup",price:"$499",billing:"One-Time",description:"A focused chatbot and lead-capture foundation that the client manages after launch.",features:["AI chatbot setup","FAQ setup","Lead capture","Website integration","Client manages it after launch"]},
      {name:"AI Growth",price:"$149/month",billing:"Monthly",popular:true,description:"Ongoing chatbot support, booking, and lead qualification.",features:["Everything in AI Setup","Chatbot updates","Appointment booking","Lead qualification","Monthly optimization"]},
      {name:"AI Scale",price:"$299/month",billing:"Monthly",description:"Expanded communication and workflow automation across business tools.",features:["Everything in AI Growth","Email automation","SMS follow-ups","Review request automation","Workflow automations","Monthly improvements"]}
    ],
    faqs:[["Does the chatbot replace my team?","No. It handles selected routine questions and steps while keeping clear paths to human contact."],["Are AI usage fees included?","Third-party AI, phone, CRM, SMS, email, or automation fees may be separate depending on the tools selected."],["Will API keys be visible on my website?","No. Any future AI connection should use a secure server-side endpoint so secrets are not exposed in browser code."]],
    note:"Third-party platform, email, SMS, AI usage, phone, CRM, or automation fees may be billed separately depending on the tools selected."
  }
];

export const faqs: [string,string][] = [
  ["What types of businesses do you work with?","Semeco Digital is built for local and service-based small businesses that want a stronger online presence and practical digital systems."],
  ["How do I know which service or package fits?","Start with a free consultation or use the guided assistant. We’ll consider your goals, current tools, time, and budget before recommending a direction."],
  ["Do you guarantee rankings, revenue, or follower growth?","No. We provide thoughtful strategy and professional execution, but platforms, competition, customer behavior, and business results remain outside any agency’s full control."],
  ["How does AI fit into your process?","AI supports research, copy development, content planning, automation, and business systems. Maria provides the human judgment, creative direction, and quality control."],
  ["Can you create bilingual English and Spanish websites?","Yes. Bilingual website experiences can be scoped based on the amount of content and the translation support needed."],
  ["Are third-party tools included in the listed prices?","Not always. Hosting, email, SMS, AI usage, phone, CRM, automation, or other platform fees are identified before work begins and may be billed separately."],
  ["What happens after launch?","You’ll receive the support and ongoing services included in your selected package. Responsibilities, access, and next steps are documented in the service agreement."]
];

export const startingPrices = services.map(service => ({
  title: service.title,
  slug: service.slug,
  price: service.packages[0].price,
  packageName: service.packages[0].name
}));
