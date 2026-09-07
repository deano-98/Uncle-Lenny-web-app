import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  MapPin,
  BusFront,
  Users,
  Route,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

import { WhatsAppButton } from "@/components/conversions/WhatsAppButton";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-navy text-white min-h-[700px] overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,_rgba(223,32,40,0.35),_transparent_30%),_linear-gradient(115deg,#071b3a_0%,#0b2b58_55%,#071b3a_100%)]" />

        <div className="container-custom relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12.5 min-h-[700px] py-20 lg:py-0">
          <div>
            <p className="text-xs tracking-[0.18em] font-extrabold text-white mb-5.5">
              SCHOOL TRANSPORTATION • HARARE
            </p>

            <h1 className="text-[clamp(3rem,14vw,5rem)] lg:text-[clamp(3.2rem,7vw,6.5rem)] tracking-[-0.055em] font-manrope font-bold mb-4 leading-[1.08]">
              {/* Safe. Reliable.
              <br /> */}
              <span className="text-[#ff5b61]">Ready for the school run.</span>
            </h1>

            <p className="text-[#dbe4f3] text-lg max-w-[600px] mb-6">
              Professional school transportation for families, schools and
              educational organisations across Harare.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 my-8">
              <WhatsAppButton
                phone="263780927394"
                message="Hi Uncle Lenny, I'd like to enquire about school transport."
                location="hero"
                service="school_transport"
                className="inline-flex items-center justify-center gap-2.25 px-5 py-3.5 rounded-[10px] font-bold text-sm bg-red text-white hover:bg-red2 hover:-translate-y-0.5 transition-all"
              />

              <Link
                className="inline-flex items-center justify-center gap-2.25 px-5 py-3.5 rounded-[10px] font-bold text-sm bg-white text-navy hover:-translate-y-0.5 transition-all"
                href="/services"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex gap-5 flex-wrap text-[#cbd7e9] text-xs md:pb-6">
              <span className="flex gap-1.5 items-center">
                <ShieldCheck size={17} /> Safety first
              </span>
              <span className="flex gap-1.5 items-center">
                <Clock3 size={17} /> On-time service
              </span>
              <span className="flex gap-1.5 items-center">
                <MapPin size={17} /> Harare
              </span>
            </div>
          </div>

          {/* Graphic Bus Component */}
          <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[470px] grid place-items-center">
            <div className="w-[min(540px,90%)] h-[210px] sm:h-[260px] rounded-t-[25px] rounded-b-[15px] bg-[#f8fafc] shadow-[0_30px_70px_rgba(0,0,0,0.35)] relative [transform:perspective(700px)_rotateY(-8deg)]">
              <div className="h-[35px] bg-red text-white rounded-t-[25px] px-[22px] py-[9px] text-[11px] font-extrabold tracking-[0.15em]">
                UNCLE LENNY
              </div>

              <div className="flex gap-1.75 p-5.5">
                <i className="h-[52px] sm:h-[70px] flex-1 bg-[#102d54] rounded-[8px] border-4 border-[#d9e2ed] not-italic" />
                <i className="h-[52px] sm:h-[70px] flex-1 bg-[#102d54] rounded-[8px] border-4 border-[#d9e2ed] not-italic" />
                <i className="h-[52px] sm:h-[70px] flex-1 bg-[#102d54] rounded-[8px] border-4 border-[#d9e2ed] not-italic" />
                <i className="h-[52px] sm:h-[70px] flex-1 bg-[#102d54] rounded-[8px] border-4 border-[#d9e2ed] not-italic" />
                <i className="h-[52px] sm:h-[70px] flex-1 bg-[#102d54] rounded-[8px] border-4 border-[#d9e2ed] not-italic" />
              </div>

              <div className="px-6 py-0.75 flex flex-col text-navy">
                <strong className="text-lg sm:text-[25px] font-manrope">SCHOOL RUN</strong>
                <span className="text-[10px] tracking-[0.1em] text-red font-extrabold">
                  SAFE • RELIABLE • COMFORTABLE
                </span>
              </div>

              <div className="absolute -bottom-[22px] left-[45px] sm:left-[75px] w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#0c1420] border-[12px] border-[#6c7684]" />
              <div className="absolute -bottom-[22px] right-[45px] sm:right-[75px] w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#0c1420] border-[12px] border-[#6c7684]" />
            </div>

            <div className="absolute right-[5px] sm:right-0 bottom-[5px] sm:bottom-[45px] bg-white text-ink p-[14px] rounded-[16px] flex gap-[10px] items-center shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
              <span className="w-[40px] h-[40px] rounded-[12px] bg-[#eef2f7] text-red grid place-items-center">
                <ShieldCheck size={22} />
              </span>
              <div>
                <b className="block">Safety first</b>
                <small className="block text-muted mt-[3px]">Every journey matters.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-line">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Safety", "Your child's safety is our priority.", ShieldCheck],
            ["Reliability", "Consistent pickups and drop-offs.", Route],
            ["Comfort", "Clean, comfortable vehicles.", BusFront],
            ["Punctuality", "We value your school's time.", Clock3],
          ].map(([title, text, Icon]) => (
            <div
              className="p-[28px_18px] flex gap-3.25 border-b sm:border-b-0 sm:border-r border-line last:border-b-0 last:border-r-0"
              key={String(title)}
            >
              <Icon className="text-red flex-none" size={26} />
              <div>
                <b className="text-sm">{title as string}</b>
                <p className="text-xs mt-1.25 leading-[1.4] text-muted">{text as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-27.5">
        <div className="container-custom">
          <div className="max-w-[700px] mb-12">
            <p className="text-xs tracking-[0.18em] font-extrabold text-red mb-5.5">WHAT WE DO</p>
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] font-manrope font-bold mb-4">
              Transport built around the school day.
            </h2>
            <p className="text-[17px] text-muted">
              Flexible transport solutions for everyday school runs, trips, events and group requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4.5">
            {[
              {
                icon: BusFront,
                title: "Daily School Runs",
                text: "Scheduled morning and afternoon transport designed around school timetables and agreed routes.",
              },
              {
                icon: MapPin,
                title: "School Trips",
                text: "Comfortable group transportation for educational trips, excursions and activities.",
              },
              {
                icon: Users,
                title: "Events & Group Hire",
                text: "Practical vehicle solutions for sports, events and other organised group travel.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article className="p-7.5 border border-line rounded-[18px] bg-white" key={title}>
                <div className="w-12.5 h-12.5 rounded-[14px] bg-[#edf2f8] text-navy grid place-items-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-[1.25rem] font-manrope font-bold mb-3">{title}</h3>
                <p className="text-sm text-muted">{text}</p>
                <Link
                  href="/services"
                  className="text-red font-bold text-[13px] flex items-center gap-1.25 mt-6"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* For Schools Dark Section */}
      <section className="bg-navy text-white py-26.25">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          <div>
            <p className="text-xs tracking-[0.18em] font-extrabold text-white mb-5.5">FOR SCHOOLS</p>
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] font-manrope font-bold mb-4 max-w-[700px]">
              A transportation partner your school can rely on.
            </h2>
            <p className="text-[#b8c6da] mb-6">
              Whether you need daily student transport, additional vehicles for a school event, or a longer-term transport arrangement, let&apos;s discuss your requirements.
            </p>

            <div className="grid gap-3 my-7.5">
              {[
                "Route and schedule planning",
                "Daily student transportation",
                "School trips and activities",
                "Dedicated vehicle arrangements",
                "Direct communication with our team",
              ].map((x) => (
                <span className="flex items-center gap-2.25 text-[#dce5f2] text-sm" key={x}>
                  <CheckCircle2 size={18} /> {x}
                </span>
              ))}
            </div>

            <Link
              className="inline-flex items-center gap-2.25 px-5 py-3.5 rounded-[10px] font-bold text-sm bg-red text-white hover:bg-red2 hover:-translate-y-0.5 transition-all"
              href="/schools"
            >
              School Partnership <ArrowRight size={18} />
            </Link>
          </div>

          <div className="p-[38px] border border-white/14 bg-white/5 rounded-[22px]">
            <div className="text-[10px] tracking-[0.16em] text-[#ff5b61] font-extrabold mb-[18px]">
              SCHOOL PARTNER
            </div>
            <h3 className="text-[28px] font-manrope font-bold mb-3">Tell us what your school needs.</h3>
            <p className="text-[#b8c6da] mb-6">
              Share your routes, student numbers and schedule. We can discuss the most suitable transport arrangement.
            </p>
            <WhatsAppButton
              phone="263780927394"
              message="Hi Uncle Lenny, I'd like to request a quote for school transport."
              location="school_section"
              service="school_transport"
              className="inline-flex items-center gap-[9px] px-[20px] py-[14px] rounded-[10px] font-bold text-sm bg-white text-navy hover:-translate-y-0.5 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-[80px] lg:py-[110px]">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-[30px] mb-[48px]">
            <div>
              <p className="text-[12px] tracking-[0.18em] font-extrabold text-red mb-[22px]">THE FLEET</p>
              <h2 className="text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] font-manrope font-bold">
                Vehicles for different needs.
              </h2>
            </div>
            <Link className="font-extrabold text-red flex gap-[7px] items-center mb-[20px]" href="/fleet">
              View fleet <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px]">
            {["School Minibus", "Large School Bus", "Group Transport"].map((name, i) => (
              <div className="overflow-hidden border border-line rounded-[18px]" key={name}>
                <div className="h-[240px] bg-gradient-to-br from-[#dbe5ef] to-[#9aa9b9] relative overflow-hidden flex items-center p-[28px] text-white">
                  <span className="relative z-10 text-[10px] tracking-[0.14em] font-extrabold mt-[145px] text-navy">
                    UNCLE LENNY
                  </span>
                </div>
                <div className="p-[22px]">
                  <h3 className="text-[1.25rem] font-manrope font-bold mb-2">{name}</h3>
                  <p className="text-[13px] text-muted m-0">
                    Clean, comfortable and maintained for dependable school transportation.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-[80px] lg:py-[110px] bg-[#f5f7fa]">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
          <div className="h-[420px] rounded-[24px] bg-gradient-to-br from-[#071b3a] to-[#0e3973] text-white grid place-items-center content-center gap-[15px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
            <ShieldCheck size={70} />
            <span className="text-[13px] tracking-[0.2em] font-extrabold">SAFETY FIRST</span>
          </div>

          <div>
            <p className="text-[12px] tracking-[0.18em] font-extrabold text-red mb-[22px]">
              SAFETY & RELIABILITY
            </p>
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] font-manrope font-bold mb-4">
              Because getting there safely is the whole point.
            </h2>
            <p className="text-muted mb-6">
              We believe professional school transportation starts with responsible people, dependable vehicles, clear schedules and good communication.
            </p>

            <div className="grid gap-[18px] my-[30px]">
              {[
                ["01", "Responsible drivers", "Experienced and professionally managed."],
                ["02", "Vehicle care", "Clean, presentable and maintained vehicles."],
                ["03", "Clear communication", "Parents and schools can reach the team when needed."],
              ].map(([num, title, desc]) => (
                <div className="flex gap-[18px]" key={num}>
                  <b className="font-manrope text-red text-[18px]">{num}</b>
                  <span>
                    <strong className="block text-ink">{title}</strong>
                    <small className="block text-muted mt-[4px]">{desc}</small>
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#8a93a3]">
              *Specific screening, tracking and inspection procedures should be confirmed with Uncle Lenny before publication.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-[80px] lg:py-[110px]">
        <div className="container-custom max-w-[800px]">
          <div className="max-w-[700px] mb-[48px]">
            <p className="text-[12px] tracking-[0.18em] font-extrabold text-red mb-[22px]">FAQ</p>
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] font-manrope font-bold">
              Questions schools and parents ask.
            </h2>
          </div>

          {[
            [
              "Which areas of Harare do you service?",
              "We can discuss your pickup areas and school destination with you. Contact us for current service coverage.",
            ],
            [
              "Do you provide daily school runs?",
              "Yes. Daily morning and afternoon school transportation is a core service.",
            ],
            [
              "Can schools hire vehicles for trips and events?",
              "Yes. We can discuss suitable vehicles and schedules for organised school transportation.",
            ],
            [
              "How do I request a quote?",
              "The fastest option is WhatsApp. Tell us the school, route, student numbers and schedule and our team can respond.",
            ],
            [
              "Do you provide vehicle tracking?",
              "Only if the client confirms this service is currently available. This section should be updated with the exact tracking process before launch.",
            ],
          ].map(([q, a]) => (
            <details className="border-t border-line py-[21px] last:border-b" key={q}>
              <summary className="cursor-pointer flex justify-between items-center font-extrabold list-none">
                {q}
                <ChevronDown size={18} />
              </summary>
              <p className="text-[14px] text-muted max-w-[700px] mt-4 mb-0">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-red text-white py-[90px]">
        <div className="container-custom text-center">
          <p className="text-[12px] tracking-[0.18em] font-extrabold mb-[22px]">READY TO TALK?</p>
          <h2 className="text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] font-manrope font-bold max-w-[760px] mx-auto mb-[18px]">
            Let&apos;s plan a safer school run.
          </h2>
          <p className="text-[#ffe4e5] max-w-[600px] mx-auto mb-[28px]">
            Parents, schools and organisations can contact our team directly on WhatsApp.
          </p>
          <WhatsAppButton
            phone="263780927394"
            message="Hi Uncle Lenny, I'd like to enquire about school transport."
            location="final_cta"
            service="school_transport"
            className="inline-flex items-center gap-[9px] px-[20px] py-[14px] rounded-[10px] font-bold text-sm bg-white text-navy hover:-translate-y-0.5 transition-all"
          />
        </div>
      </section>
    </main>
  );
}