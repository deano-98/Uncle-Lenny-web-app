import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Route,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";

const WA =
  "https://wa.me/263780927394?text=Hello%20Uncle%20Lenny%2C%20our%20school%20would%20like%20to%20discuss%20transportation.";

export default function Schools() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-navy py-27.5 text-white">
        <div className="container-custom">
          <p className="text-red mb-5.5 text-xs font-extrabold tracking-[0.18em]">
            FOR SCHOOLS
          </p>
          <h1 className="font-manrope mb-4 text-[clamp(3.2rem,7vw,6.5rem)] font-bold tracking-[-0.055em]">
            Your school.
            <br />
            <span className="text-[#ff5b61]">Our transport team.</span>
          </h1>
          <p className="mb-8 max-w-170 text-lg text-[#c5d2e3]">
            A dependable transportation partner for daily school runs, trips and
            organised school travel.
          </p>
          <a
            className="bg-red hover:bg-red2 inline-flex items-center gap-2.25 rounded-[10px] px-5 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
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
        <div className="container-custom grid grid-cols-1 items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-red mb-5.5 text-xs font-extrabold tracking-[0.18em]">
              BUILT AROUND YOUR REQUIREMENTS
            </p>
            <h2 className="font-manrope mb-4 text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-[-0.04em]">
              Let&apos;s discuss your routes, timetable and student numbers.
            </h2>
            <p className="text-muted mb-6">
              Every school has different requirements. Instead of forcing you
              into a fixed package, we can discuss the transport arrangement
              that makes sense for your school.
            </p>
            <div className="my-7.5 grid gap-3">
              {[
                "Morning pickup routes",
                "Afternoon drop-offs",
                "School trips and excursions",
                "Sports and extracurricular events",
                "Dedicated or recurring vehicle arrangements",
              ].map((x) => (
                <span
                  className="text-ink flex items-center gap-2.25 text-sm"
                  key={x}
                >
                  <CheckCircle2 size={18} /> {x}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-navy rounded-[22px] p-9.5 text-white">
            <Route className="mb-4 text-[#ff5b61]" size={38} />
            <h3 className="font-manrope mb-3 text-[28px] font-bold">
              What to include in your enquiry
            </h3>
            <p className="text-[#c6d2e2]">
              School name, pickup areas, destination, approximate number of
              students, required vehicles and timetable.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="bg-[#f5f7fa] py-25">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-4.5 md:grid-cols-3">
            {[
              [
                ShieldCheck,
                "Safety",
                "Ask us about our driver, vehicle and operating procedures.",
              ],
              [
                CalendarDays,
                "Scheduling",
                "Plan around your school's actual timetable.",
              ],
              [
                Route,
                "Routes",
                "Discuss pickup points and practical route requirements.",
              ],
            ].map(([Icon, title, text]) => (
              <div
                className="border-line rounded-[18px] border bg-white p-7.5"
                key={String(title)}
              >
                <Icon className="text-navy mb-6" size={27} />
                <h3 className="font-manrope mb-3 text-xl font-bold">
                  {title as string}
                </h3>
                <p className="text-muted text-sm">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red py-22.5 text-white">
        <div className="container-custom text-center">
          <p className="mb-5.5 text-xs font-extrabold tracking-[0.18em]">
            SCHOOL PARTNERSHIPS
          </p>
          <h2 className="font-manrope mx-auto mb-6 max-w-195 text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-[-0.04em]">
            Let&apos;s talk about your transport requirements.
          </h2>
          <a
            className="text-navy inline-flex items-center gap-2.25 rounded-[10px] bg-white px-5 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
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