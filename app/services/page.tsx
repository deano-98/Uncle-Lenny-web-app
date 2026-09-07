import Link from "next/link";
import { ArrowRight, BusFront, MapPin, Trophy, Users, CalendarDays } from "lucide-react";
const services = [
  ["Daily School Runs","Scheduled morning and afternoon transport for students.","BusFront"],
  ["School Trips & Excursions","Comfortable group transportation for educational activities and excursions.","MapPin"],
  ["Sports & School Events","Transport for sporting fixtures, events and extracurricular activities.","Trophy"],
  ["Group Vehicle Hire","Practical transport solutions for organised groups.","Users"],
  ["Dedicated School Arrangements","Discuss longer-term or dedicated vehicle requirements with our team.","CalendarDays"]
];
const icons = {BusFront,MapPin,Trophy,Users,CalendarDays};
export default function Services(){
 return <main>
  <section className="page-hero"><div className="container"><p className="eyebrow red">OUR SERVICES</p><h1>More than the daily<br/><span>school run.</span></h1><p>Flexible transportation solutions for schools, parents and organised groups.</p></div></section>
  <section className="section"><div className="container service-list">{services.map(([title,text,icon])=>{const Icon=icons[icon as keyof typeof icons]; return <article className="service-row" key={title}><div className="icon-box"><Icon size={27}/></div><div><h2>{title}</h2><p>{text}</p></div><ArrowRight/></article>})}</div></section>
  <section className="dark-section"><div className="container centered"><p className="eyebrow">NEED A TRANSPORT PLAN?</p><h2>Tell us what you need and we&apos;ll discuss the options.</h2><Link className="btn btn-red" href="/contact">Contact Uncle Lenny <ArrowRight size={18}/></Link></div></section>
 </main>
}
