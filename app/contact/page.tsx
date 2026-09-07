import { Mail, MapPin, MessageCircle, Phone, Facebook } from "lucide-react";
const WA="https://wa.me/263780927394?text=Hello%20Uncle%20Lenny%2C%20I%27d%20like%20to%20enquire%20about%20school%20transport.";
export default function Contact(){
 return <main>
  <section className="page-hero"><div className="container"><p className="eyebrow red">CONTACT</p><h1>Let&apos;s get your<br/><span>school run moving.</span></h1><p>For bookings, school partnerships, routes and vehicle enquiries, contact the team directly.</p></div></section>
  <section className="section"><div className="container contact-grid">
    <a className="contact-card primary" href={WA} target="_blank" rel="noreferrer"><MessageCircle size={30}/><span>WhatsApp</span><strong>+263 78 092 7394</strong><small>Fastest way to enquire or request a quote.</small></a>
    <div className="contact-card"><Phone size={30}/><span>Phone</span><strong>+263 78 092 7394</strong><small>Call for bookings and general enquiries.</small></div>
    <div className="contact-card"><Facebook size={30}/><span>Facebook</span><strong>Uncle Lenny School Run Services</strong><small>Follow the business and see updates.</small></div>
    <div className="contact-card"><MapPin size={30}/><span>Location</span><strong>Harare, Zimbabwe</strong><small>Confirm current service areas with the team.</small></div>
  </div></section>
  <section className="light-section"><div className="container narrow"><h2>Request a school transport quote</h2><p>When contacting us, it helps to include:</p><ul className="simple-list"><li>School or organisation name</li><li>Pickup areas and destination</li><li>Number of students/passengers</li><li>Required days and times</li><li>Type or number of vehicles needed</li></ul><a className="btn btn-red" href={WA} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Send enquiry on WhatsApp</a></div></section>
 </main>
}
