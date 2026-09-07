import { Mail, MapPin, MessageCircle, Phone, Facebook } from "lucide-react";

const WA = "https://wa.me/263780927394?text=Hello%20Uncle%20Lenny%2C%20I%27d%20like%20to%20enquire%20about%20school%20transport.";

export default function Contact() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-navy text-white py-27.5">
        <div className="container-custom">
          <p className="text-xs font-extrabold tracking-[0.18em] text-red mb-5.5">CONTACT</p>
          <h1 className="text-[clamp(3.2rem,7vw,6.5rem)] tracking-[-0.055em] font-manrope font-bold mb-4">
            Let&apos;s get your<br />
            <span className="text-[#ff5b61]">school run moving.</span>
          </h1>
          <p className="max-w-[680px] text-[#c5d2e3] text-lg">
            For bookings, school partnerships, routes and vehicle enquiries, contact the team directly.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-27.5">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            className="border border-line rounded-[20px] p-8 flex flex-col items-start min-h-[190px] bg-navy text-white"
            href={WA}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="mb-6.25 text-red" size={30} />
            <span className="text-xs uppercase tracking-[0.14em] font-extrabold text-[#c4d0df]">WhatsApp</span>
            <strong className="font-manrope text-[21px] mt-1.5">+263 78 092 7394</strong>
            <small className="text-[#c4d0df] mt-2">Fastest way to enquire or request a quote.</small>
          </a>

          <div className="border border-line rounded-[20px] p-8 flex flex-col items-start min-h-[190px]">
            <Phone className="mb-6.25 text-red" size={30} />
            <span className="text-xs uppercase tracking-[0.14em] font-extrabold text-muted">Phone</span>
            <strong className="font-manrope text-[21px] mt-1.5">+263 78 092 7394</strong>
            <small className="text-muted mt-2">Call for bookings and general enquiries.</small>
          </div>

          <div className="border border-line rounded-[20px] p-8 flex flex-col items-start min-h-[190px]">
            <Facebook className="mb-6.25 text-red" size={30} />
            <span className="text-xs uppercase tracking-[0.14em] font-extrabold text-muted">Facebook</span>
            <strong className="font-manrope text-[21px] mt-1.5">Uncle Lenny School Run Services</strong>
            <small className="text-muted mt-2">Follow the business and see updates.</small>
          </div>

          <div className="border border-line rounded-[20px] p-8 flex flex-col items-start min-h-[190px]">
            <MapPin className="mb-6.25 text-red" size={30} />
            <span className="text-xs uppercase tracking-[0.14em] font-extrabold text-muted">Location</span>
            <strong className="font-manrope text-[21px] mt-1.5">Harare, Zimbabwe</strong>
            <small className="text-muted mt-2">Confirm current service areas with the team.</small>
          </div>
        </div>
      </section>

      {/* Quote Checklist Request Section */}
      <section className="py-25 bg-[#f5f7fa]">
        <div className="container-custom max-w-[800px]">
          <h2 className="text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] font-manrope font-bold mb-4">
            Request a school transport quote
          </h2>
          <p className="mb-4">When contacting us, it helps to include:</p>
          <ul className="leading-[2.1] text-muted mb-[30px] list-disc list-inside">
            <li>School or organisation name</li>
            <li>Pickup areas and destination</li>
            <li>Number of students/passengers</li>
            <li>Required days and times</li>
            <li>Type or number of vehicles needed</li>
          </ul>
          <a
            className="inline-flex items-center gap-2.25 px-5 py-3.5 rounded-[10px] font-bold text-sm bg-red text-white hover:bg-red2 hover:-translate-y-0.5 transition-transform"
            href={WA}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Send enquiry on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}