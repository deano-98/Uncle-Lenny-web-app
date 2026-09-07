import Link from "next/link";
import { ArrowRight, BusFront, MapPin, Trophy, Users, CalendarDays } from "lucide-react";

const services = [
  ["Daily School Runs", "Scheduled morning and afternoon transport for students.", "BusFront"],
  ["School Trips & Excursions", "Comfortable group transportation for educational activities and excursions.", "MapPin"],
  ["Sports & School Events", "Transport for sporting fixtures, events and extracurricular activities.", "Trophy"],
  ["Group Vehicle Hire", "Practical transport solutions for organised groups.", "Users"],
  ["Dedicated School Arrangements", "Discuss longer-term or dedicated vehicle requirements with our team.", "CalendarDays"],
];

const icons = { BusFront, MapPin, Trophy, Users, CalendarDays };

export default function Services() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-navy text-white py-27.5">
        <div className="container-custom">
          <p className="text-xs font-extrabold tracking-[0.18em] text-red mb-5.5">OUR SERVICES</p>
          <h1 className="text-[clamp(3.2rem,7vw,6.5rem)] tracking-[-0.055em] font-manrope font-bold mb-4">
            More than the daily<br />
            <span className="text-[#ff5b61]">school run.</span>
          </h1>
          <p className="max-w-[680px] text-[#c5d2e3] text-lg">
            Flexible transportation solutions for schools, parents and organised groups.
          </p>
        </div>
      </section>

      {/* Services List Table View */}
      <section className="py-27.5">
        <div className="container-custom grid gap-3.75">
          {services.map(([title, text, icon]) => {
            const Icon = icons[icon as keyof typeof icons];
            return (
              <article
                className="grid grid-cols-1 md:grid-cols-[60px_1fr_24px] items-center gap-6.25 p-6.25 border border-line rounded-[18px]"
                key={title}
              >
                <div className="w-12.5 h-12.5 rounded-[14px] bg-[#edf2f8] text-navy grid place-items-center">
                  <Icon size={27} />
                </div>
                <div>
                  <h2 className="text-xl md:text-5xl font-manrope font-bold mb-1">{title}</h2>
                  <p className="text-sm md:text-lg text-muted m-0 py-3">{text}</p>
                </div>
                <ArrowRight className="hidden md:block text-navy" />
              </article>
            );
          })}
        </div>
      </section>

      {/* Dark Transport Plan Banner */}
      <section className="bg-navy text-white py-26.25">
        <div className="container-custom text-center">
          <p className="text-xs font-extrabold tracking-[0.18em] text-white mb-5.5">NEED A TRANSPORT PLAN?</p>
          <h2 className="text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] font-manrope font-bold max-w-[780px] mx-auto mb-6">
            Tell us what you need and we&apos;ll discuss the options.
          </h2>
          <Link
            className="inline-flex items-center gap-[9px] px-[20px] py-[14px] rounded-[10px] font-bold text-sm bg-red text-white hover:bg-red2 hover:-translate-y-0.5 transition-transform"
            href="/contact"
          >
            Contact Uncle Lenny <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}