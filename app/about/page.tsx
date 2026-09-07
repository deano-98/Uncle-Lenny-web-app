import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Clock3, Users } from "lucide-react";

export default function About() {
  return <main>
    <section className="page-hero"><div className="container"><p className="eyebrow red">ABOUT UNCLE LENNY</p><h1>Moving students safely.<br/><span>Supporting schools.</span></h1><p>Professional school transportation built around safety, reliability and peace of mind.</p></div></section>
    <section className="section"><div className="container split">
      <div className="photo-placeholder"><span>OUR STORY</span></div>
      <div><p className="eyebrow red">OUR STORY</p><h2>A service families can trust and schools can work with.</h2><p>Uncle Lenny School Run Services provides organised school transportation in Harare. The business is built around a simple idea: school transport should be safe, dependable, comfortable and professional.</p><p>Use this section to add the founder&apos;s actual story, when the business started, the schools served and the company&apos;s growth.</p><Link className="btn btn-navy" href="/contact">Talk to the team <ArrowRight size={18}/></Link></div>
    </div></section>
    <section className="light-section"><div className="container"><div className="section-heading"><p className="eyebrow red">OUR VALUES</p><h2>What we stand for.</h2></div><div className="four-grid">{[
      [ShieldCheck,"Safety","Every journey begins with responsibility."],[HeartHandshake,"Care","Children deserve patience and respect."],[Clock3,"Punctuality","Schools and families depend on time."],[Users,"Professionalism","Clear communication and dependable service."]
    ].map(([Icon,title,text]) => <div className="value-card" key={String(title)}><Icon size={28}/><h3>{title as string}</h3><p>{text as string}</p></div>)}</div></div></section>
    <section className="section"><div className="container quote"><p>“Safe rides. Happy kids. Peace of mind.”</p><span>— Uncle Lenny School Run Services</span></div></section>
  </main>
}
