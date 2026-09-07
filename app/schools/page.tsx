import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Route, ShieldCheck, CalendarDays } from "lucide-react";

const WA = "https://wa.me/263780927394?text=Hello%20Uncle%20Lenny%2C%20our%20school%20would%20like%20to%20discuss%20transportation.";

export default function Schools() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-navy text-white py-27.5">
        <div className="container-custom">
          <p className="text-xs font-extrabold tracking-[0.18em] text-red mb-5.5">FOR SCHOOLS</p>
          <h1 className="text-[clamp(3.2rem,7vw,6.5rem)] tracking-[-0.055em] font-manrope font-bold mb-4">
            Your school.<br />
            <span className="text-[#ff5b61]">Our transport team.</span>
          </h1>
          <p className="max-w-[680px] text-[#c5d2e3] text-lg mb-8">
            A dependable transportation partner for daily school runs, trips and organised school travel.
          </p>
          <a
            className="inline-flex items-center gap-[9px] px-[20px] py-[14px] rounded-[10px] font-bold text-sm bg-red text-white hover:bg-red2 hover:-translate-y-0.5 transition-transform"
            href={WA}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Request a Quote
          </a>
        </div>
      </section>

      {/* Requirements Split View */}
      <section className="py-27.5">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] text-red mb-5.5">BUILT AROUND YOUR REQUIREMENTS</p>
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] font-manrope font-bold mb-4">
              Let&apos;s discuss your routes, timetable and student numbers.
            </h2>
            <p className="text-muted mb-6">
              Every school has different requirements. Instead of forcing you into a fixed package, we can discuss the transport arrangement that makes sense for your school.
            </p>
            <div className="grid gap-3 my-7.5">
              {[
                "Morning pickup routes",
                "Afternoon drop-offs",
                "School trips and excursions",
                "Sports and extracurricular events",
                "Dedicated or recurring vehicle arrangements",
              ].map((x) => (
                <span className="flex items-center gap-2.25 text-ink text-sm" key={x}>
                  <CheckCircle2 size={18} /> {x}
                </span>
              ))}
            </div>
          </div>

          <div className="p-[38px] bg-navy text-white rounded-[22px]">
            <Route className="mb-4 text-[#ff5b61]" size={38} />
            <h3 className="text-[28px] font-manrope font-bold mb-3">What to include in your enquiry</h3>
            <p className="text-[#c6d2e2]">
              School name, pickup areas, destination, approximate number of students, required vehicles and timetable.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-25 bg-[#f5f7fa]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
            {[
              [ShieldCheck, "Safety", "Ask us about our driver, vehicle and operating procedures."],
              [CalendarDays, "Scheduling", "Plan around your school's actual timetable."],
              [Route, "Routes", "Discuss pickup points and practical route requirements."],
            ].map(([Icon, title, text]) => (
              <div className="p-7.5 border border-line rounded-[18px] bg-white" key={String(title)}>
                <Icon className="mb-[24px] text-navy" size={27} />
                <h3 className="text-xl font-manrope font-bold mb-3">{title as string}</h3>
                <p className="text-sm text-muted">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red text-white py-22.5">
        <div className="container-custom text-center">
          <p className="text-xs font-extrabold tracking-[0.18em] mb-5.5">SCHOOL PARTNERSHIPS</p>
          <h2 className="text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] font-manrope font-bold max-w-[760px] mx-auto mb-6">
            Let&apos;s talk about your transport requirements.
          </h2>
          <a
            className="inline-flex items-center gap-[9px] px-[20px] py-[14px] rounded-[10px] font-bold text-sm bg-white text-navy hover:-translate-y-0.5 transition-transform"
            href={WA}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> WhatsApp our team
          </a>
        </div>
      </section>
    </main>
  );
}