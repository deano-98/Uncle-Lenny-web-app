import Link from "next/link";
import {
  ArrowRight,
  BusFront,
  MapPin,
  Trophy,
  Users,
  CalendarDays,
} from "lucide-react";

const services = [
  [
    "Daily School Runs",
    "Scheduled morning and afternoon transport for students.",
    "BusFront",
  ],
  [
    "School Trips & Excursions",
    "Comfortable group transportation for educational activities and excursions.",
    "MapPin",
  ],
  [
    "Sports & School Events",
    "Transport for sporting fixtures, events and extracurricular activities.",
    "Trophy",
  ],
  [
    "Group Vehicle Hire",
    "Practical transport solutions for organised groups.",
    "Users",
  ],
  [
    "Dedicated School Arrangements",
    "Discuss longer-term or dedicated vehicle requirements with our team.",
    "CalendarDays",
  ],
];

const icons = { BusFront, MapPin, Trophy, Users, CalendarDays };

export default function Services() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-navy py-27.5 text-white">
        <div className="container-custom">
          <p className="text-red mb-5.5 text-xs font-extrabold tracking-[0.18em]">
            OUR SERVICES
          </p>
          <h1 className="font-manrope mb-4 text-[clamp(3.2rem,7vw,6.5rem)] font-bold tracking-[-0.055em]">
            More than the daily
            <br />
            <span className="text-[#ff5b61]">school run.</span>
          </h1>
          <p className="max-w-170 text-lg text-[#c5d2e3]">
            Flexible transportation solutions for schools, parents and organised
            groups.
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
                className="border-line grid grid-cols-1 items-center gap-6.25 rounded-[18px] border p-6.25 md:grid-cols-[60px_1fr_24px]"
                key={title}
              >
                <div className="text-navy grid h-12.5 w-12.5 place-items-center rounded-[14px] bg-[#edf2f8]">
                  <Icon size={27} />
                </div>
                <div>
                  <h2 className="font-manrope mb-1 text-xl font-bold md:text-5xl">
                    {title}
                  </h2>
                  <p className="text-muted m-0 py-3 text-sm md:text-lg">
                    {text}
                  </p>
                </div>
                <ArrowRight className="text-navy hidden md:block" />
              </article>
            );
          })}
        </div>
      </section>

      {/* Dark Transport Plan Banner */}
      <section className="bg-navy py-26.25 text-white">
        <div className="container-custom text-center">
          <p className="mb-5.5 text-xs font-extrabold tracking-[0.18em] text-white">
            NEED A TRANSPORT PLAN?
          </p>
          <h2 className="font-manrope mx-auto mb-6 max-w-195 text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-[-0.04em]">
            Tell us what you need and we&apos;ll discuss the options.
          </h2>
          <Link
            className="bg-red hover:bg-red2 inline-flex items-center gap-2.25 rounded-[10px] px-5 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            href="/contact"
          >
            Contact Uncle Lenny <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}