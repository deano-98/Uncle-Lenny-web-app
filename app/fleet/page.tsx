import { BusFront, CheckCircle2 } from "lucide-react";
const fleet = [
    ["School Minibuses", "Ideal for regular school routes and smaller groups.", "Comfortable seating", "Easy route access", "Suitable for daily runs"],
    ["School Buses", "For larger student groups and school activities.", "Higher passenger capacity", "Suitable for school trips", "Group transportation"],
    ["Group Vehicles", "Flexible options for organised transportation requirements.", "Event transport", "Sports activities", "Private group hire"]
];
export default function Fleet() {
    return <main>
        <section className="page-hero"><div className="container"><p className="eyebrow red">OUR FLEET</p><h1>Comfortable vehicles.<br /><span>Professional service.</span></h1><p>Vehicle options can be matched to your route, group size and schedule.</p></div></section>
        <section className="section"><div className="container fleet-page-grid">{fleet.map(([title, text, ...features], i) => <article className="fleet-large" key={title}><div className={`mock-vehicle vehicle-${i}`}><span>UNCLE LENNY</span></div><div className="fleet-large-copy"><div className="mini-badge">FLEET {String(i + 1).padStart(2, "0")}</div><h2>{title}</h2><p>{text}</p><ul>{features.map(f => <li key={f}><CheckCircle2 size={17} />{f}</li>)}</ul></div></article>)}</div></section>
        <section className="light-section"><div className="container centered"><BusFront size={38} /><h2>Need a specific vehicle?</h2><p>Tell us your passenger count and route and we can discuss the most suitable option.</p></div></section>
    </main>
}
