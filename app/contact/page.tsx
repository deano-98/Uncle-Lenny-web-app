import { Mail, MapPin, MessageCircle, Phone, Facebook } from "lucide-react";

const WA =
  "https://wa.me/263780927394?text=Hello%20Uncle%20Lenny%2C%20I%27d%20like%20to%20enquire%20about%20school%20transport.";

export default function Contact() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-navy py-27.5 text-white">
        <div className="container-custom">
          <p className="text-red mb-5.5 text-xs font-extrabold tracking-[0.18em]">
            CONTACT
          </p>
          <h1 className="font-manrope mb-4 text-[clamp(3.2rem,7vw,6.5rem)] font-bold tracking-[-0.055em]">
            Let&apos;s get your
            <br />
            <span className="text-[#ff5b61]">school run moving.</span>
          </h1>
          <p className="max-w-170 text-lg text-[#c5d2e3]">
            For bookings, school partnerships, routes and vehicle enquiries,
            contact the team directly.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-27.5">
        <div className="container-custom grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            className="border-line bg-navy flex min-h-47.5 flex-col items-start rounded-[20px] border p-8 text-white"
            href={WA}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="text-red mb-6.25" size={30} />
            <span className="text-xs font-extrabold tracking-[0.14em] text-[#c4d0df] uppercase">
              WhatsApp
            </span>
            <strong className="font-manrope mt-1.5 text-[21px]">
              +263 78 092 7394
            </strong>
            <small className="mt-2 text-[#c4d0df]">
              Fastest way to enquire or request a quote.
            </small>
          </a>

          <div className="border-line flex min-h-47.5 flex-col items-start rounded-[20px] border p-8">
            <Phone className="text-red mb-6.25" size={30} />
            <span className="text-muted text-xs font-extrabold tracking-[0.14em] uppercase">
              Phone
            </span>
            <strong className="font-manrope mt-1.5 text-[21px]">
              +263 78 092 7394
            </strong>
            <small className="text-muted mt-2">
              Call for bookings and general enquiries.
            </small>
          </div>

          <div className="border-line flex min-h-47.5 flex-col items-start rounded-[20px] border p-8">
            <Facebook className="text-red mb-6.25" size={30} />
            <span className="text-muted text-xs font-extrabold tracking-[0.14em] uppercase">
              Facebook
            </span>
            <strong className="font-manrope mt-1.5 text-[21px]">
              Uncle Lenny School Run Services
            </strong>
            <small className="text-muted mt-2">
              Follow the business and see updates.
            </small>
          </div>

          <div className="border-line flex min-h-47.5 flex-col items-start rounded-[20px] border p-8">
            <MapPin className="text-red mb-6.25" size={30} />
            <span className="text-muted text-xs font-extrabold tracking-[0.14em] uppercase">
              Location
            </span>
            <strong className="font-manrope mt-1.5 text-[21px]">
              Harare, Zimbabwe
            </strong>
            <small className="text-muted mt-2">
              Confirm current service areas with the team.
            </small>
          </div>
        </div>
      </section>

      {/* Quote Checklist Request Section */}
      <section className="bg-[#f5f7fa] py-25">
        <div className="container-custom max-w-200">
          <h2 className="font-manrope mb-4 text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-[-0.04em]">
            Request a school transport quote
          </h2>
          <p className="mb-4">When contacting us, it helps to include:</p>
          <ul className="text-muted mb-7.5 list-inside list-disc leading-[2.1]">
            <li>School or organisation name</li>
            <li>Pickup areas and destination</li>
            <li>Number of students/passengers</li>
            <li>Required days and times</li>
            <li>Type or number of vehicles needed</li>
          </ul>
          <a
            className="bg-red hover:bg-red2 inline-flex items-center gap-2.25 rounded-[10px] px-5 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
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
