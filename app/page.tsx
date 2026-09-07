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
      <section className="bg-navy relative min-h-175 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(223,32,40,0.35),transparent_30%),linear-gradient(115deg,#071b3a_0%,#0b2b58_55%,#071b3a_100%)]" />

        <div className="container-custom relative grid min-h-175 grid-cols-1 items-center gap-12.5 py-20 lg:grid-cols-2 lg:py-0">
          <div>
            <p className="mb-5.5 text-xs font-extrabold tracking-[0.18em] text-white">
              SCHOOL TRANSPORTATION • HARARE
            </p>

            <h1 className="font-manrope mb-4 text-[clamp(3rem,14vw,5rem)] leading-[1.08] font-bold tracking-[-0.055em] lg:text-[clamp(3.2rem,7vw,6.5rem)]">
              {/* Safe. Reliable.
              <br /> */}
              <span className="text-[#ff5b61]">Ready for the school run.</span>
            </h1>

            <p className="mb-6 max-w-150 text-lg text-[#dbe4f3]">
              Professional school transportation for families, schools and
              educational organisations across Harare.
            </p>

            <div className="my-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                phone="263780927394"
                message="Hi Uncle Lenny, I'd like to enquire about school transport."
                location="hero"
                service="school_transport"
                className="bg-red hover:bg-red2 inline-flex items-center justify-center gap-2.25 rounded-[10px] px-5 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
              />

              <Link
                className="text-navy inline-flex items-center justify-center gap-2.25 rounded-[10px] bg-white px-5 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5"
                href="/services"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-5 text-xs text-[#cbd7e9] md:pb-6">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={17} /> Safety first
              </span>
              <span className="flex items-center gap-1.5">
                <Clock3 size={17} /> On-time service
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={17} /> Harare
              </span>
            </div>
          </div>

          {/* Graphic Bus Component */}
          <div className="relative grid min-h-80 place-items-center sm:min-h-100 lg:min-h-117.5">
            <div className="relative h-52.5 w-[min(540px,90%)] transform-[perspective(700px)_rotateY(-8deg)] rounded-t-[25px] rounded-b-[15px] bg-[#f8fafc] shadow-[0_30px_70px_rgba(0,0,0,0.35)] sm:h-65">
              <div className="bg-red h-8.75 rounded-t-[25px] px-5.5 py-2.25 text-[11px] font-extrabold tracking-[0.15em] text-white">
                UNCLE LENNY
              </div>

              <div className="flex gap-1.75 p-5.5">
                <i className="h-13 flex-1 rounded-lg border-4 border-[#d9e2ed] bg-[#102d54] not-italic sm:h-17.5" />
                <i className="h-13 flex-1 rounded-lg border-4 border-[#d9e2ed] bg-[#102d54] not-italic sm:h-17.5" />
                <i className="h-13 flex-1 rounded-lg border-4 border-[#d9e2ed] bg-[#102d54] not-italic sm:h-17.5" />
                <i className="h-13 flex-1 rounded-lg border-4 border-[#d9e2ed] bg-[#102d54] not-italic sm:h-17.5" />
                <i className="h-13 flex-1 rounded-lg border-4 border-[#d9e2ed] bg-[#102d54] not-italic sm:h-17.5" />
              </div>

              <div className="text-navy flex flex-col px-6 py-0.75">
                <strong className="font-manrope text-lg sm:text-[25px]">
                  SCHOOL RUN
                </strong>
                <span className="text-red text-[10px] font-extrabold tracking-widest">
                  SAFE • RELIABLE • COMFORTABLE
                </span>
              </div>

              <div className="absolute -bottom-5.5 left-11.25 h-12 w-12 rounded-full border-12 border-[#6c7684] bg-[#0c1420] sm:left-18.75 sm:h-15 sm:w-15" />
              <div className="absolute right-11.25 -bottom-5.5 h-12 w-12 rounded-full border-12 border-[#6c7684] bg-[#0c1420] sm:right-18.75 sm:h-15 sm:w-15" />
            </div>

            <div className="text-ink absolute right-1.25 bottom-1.25 flex items-center gap-2.5 rounded-2xl bg-white p-3.5 shadow-[0_18px_40px_rgba(0,0,0,0.25)] sm:right-0 sm:bottom-11.25">
              <span className="text-red grid h-10 w-10 place-items-center rounded-xl bg-[#eef2f7]">
                <ShieldCheck size={22} />
              </span>
              <div>
                <b className="block">Safety first</b>
                <small className="text-muted mt-0.75 block">
                  Every journey matters.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-line border-b bg-white">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Safety", "Your child's safety is our priority.", ShieldCheck],
            ["Reliability", "Consistent pickups and drop-offs.", Route],
            ["Comfort", "Clean, comfortable vehicles.", BusFront],
            ["Punctuality", "We value your school's time.", Clock3],
          ].map(([title, text, Icon]) => (
            <div
              className="border-line flex gap-3.25 border-b p-[28px_18px] last:border-r-0 last:border-b-0 sm:border-r sm:border-b-0"
              key={String(title)}
            >
              <Icon className="text-red flex-none" size={26} />
              <div>
                <b className="text-sm">{title as string}</b>
                <p className="text-muted mt-1.25 text-xs leading-[1.4]">
                  {text as string}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-27.5">
        <div className="container-custom">
          <div className="mb-12 max-w-175">
            <p className="text-red mb-5.5 text-xs font-extrabold tracking-[0.18em]">
              WHAT WE DO
            </p>
            <h2 className="font-manrope mb-4 text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-[-0.04em]">
              Transport built around the school day.
            </h2>
            <p className="text-muted text-[17px]">
              Flexible transport solutions for everyday school runs, trips,
              events and group requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4.5 lg:grid-cols-3">
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
              <article
                className="border-line rounded-[18px] border bg-white p-7.5"
                key={title}
              >
                <div className="text-navy mb-6 grid h-12.5 w-12.5 place-items-center rounded-[14px] bg-[#edf2f8]">
                  <Icon size={24} />
                </div>
                <h3 className="font-manrope mb-3 text-[1.25rem] font-bold">
                  {title}
                </h3>
                <p className="text-muted text-sm">{text}</p>
                <Link
                  href="/services"
                  className="text-red mt-6 flex items-center gap-1.25 text-[13px] font-bold"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* For Schools Dark Section */}
      <section className="bg-navy py-26.25 text-white">
        <div className="container-custom grid grid-cols-1 items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5.5 text-xs font-extrabold tracking-[0.18em] text-white">
              FOR SCHOOLS
            </p>
            <h2 className="font-manrope mb-4 max-w-175 text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-[-0.04em]">
              A transportation partner your school can rely on.
            </h2>
            <p className="mb-6 text-[#b8c6da]">
              Whether you need daily student transport, additional vehicles for
              a school event, or a longer-term transport arrangement, let&apos;s
              discuss your requirements.
            </p>

            <div className="my-7.5 grid gap-3">
              {[
                "Route and schedule planning",
                "Daily student transportation",
                "School trips and activities",
                "Dedicated vehicle arrangements",
                "Direct communication with our team",
              ].map((x) => (
                <span
                  className="flex items-center gap-2.25 text-sm text-[#dce5f2]"
                  key={x}
                >
                  <CheckCircle2 size={18} /> {x}
                </span>
              ))}
            </div>

            <Link
              className="bg-red hover:bg-red2 inline-flex items-center gap-2.25 rounded-[10px] px-5 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
              href="/schools"
            >
              School Partnership <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-[22px] border border-white/14 bg-white/5 p-9.5">
            <div className="mb-4.5 text-[10px] font-extrabold tracking-[0.16em] text-[#ff5b61]">
              SCHOOL PARTNER
            </div>
            <h3 className="font-manrope mb-3 text-[28px] font-bold">
              Tell us what your school needs.
            </h3>
            <p className="mb-6 text-[#b8c6da]">
              Share your routes, student numbers and schedule. We can discuss
              the most suitable transport arrangement.
            </p>
            <WhatsAppButton
              phone="263780927394"
              message="Hi Uncle Lenny, I'd like to request a quote for school transport."
              location="school_section"
              service="school_transport"
              className="text-navy inline-flex items-center gap-2.25 rounded-[10px] bg-white px-5 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5"
            />
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20 lg:py-27.5">
        <div className="container-custom">
          <div className="mb-12 flex flex-col items-start justify-between gap-7.5 sm:flex-row sm:items-end">
            <div>
              <p className="text-red mb-5.5 text-[12px] font-extrabold tracking-[0.18em]">
                THE FLEET
              </p>
              <h2 className="font-manrope text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-[-0.04em]">
                Vehicles for different needs.
              </h2>
            </div>
            <Link
              className="text-red mb-5 flex items-center gap-1.75 font-extrabold"
              href="/fleet"
            >
              View fleet <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4.5 lg:grid-cols-3">
            {["School Minibus", "Large School Bus", "Group Transport"].map(
              (name, i) => (
                <div
                  className="border-line overflow-hidden rounded-[18px] border"
                  key={name}
                >
                  <div className="relative flex h-60 items-center overflow-hidden bg-linear-to-br from-[#dbe5ef] to-[#9aa9b9] p-7 text-white">
                    <span className="text-navy relative z-10 mt-36.25 text-[10px] font-extrabold tracking-[0.14em]">
                      UNCLE LENNY
                    </span>
                  </div>
                  <div className="p-5.5">
                    <h3 className="font-manrope mb-2 text-[1.25rem] font-bold">
                      {name}
                    </h3>
                    <p className="text-muted m-0 text-[13px]">
                      Clean, comfortable and maintained for dependable school
                      transportation.
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="bg-[#f5f7fa] py-20 lg:py-27.5">
        <div className="container-custom grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div className="grid h-105 place-items-center content-center gap-3.75 rounded-3xl bg-linear-to-br from-navy to-[#0e3973] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
            <ShieldCheck size={70} />
            <span className="text-[13px] font-extrabold tracking-[0.2em]">
              SAFETY FIRST
            </span>
          </div>

          <div>
            <p className="text-red mb-5.5 text-[12px] font-extrabold tracking-[0.18em]">
              SAFETY & RELIABILITY
            </p>
            <h2 className="font-manrope mb-4 text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-[-0.04em]">
              Because getting there safely is the whole point.
            </h2>
            <p className="text-muted mb-6">
              We believe professional school transportation starts with
              responsible people, dependable vehicles, clear schedules and good
              communication.
            </p>

            <div className="my-7.5 grid gap-4.5">
              {[
                [
                  "01",
                  "Responsible drivers",
                  "Experienced and professionally managed.",
                ],
                [
                  "02",
                  "Vehicle care",
                  "Clean, presentable and maintained vehicles.",
                ],
                [
                  "03",
                  "Clear communication",
                  "Parents and schools can reach the team when needed.",
                ],
              ].map(([num, title, desc]) => (
                <div className="flex gap-4.5" key={num}>
                  <b className="font-manrope text-red text-[18px]">{num}</b>
                  <span>
                    <strong className="text-ink block">{title}</strong>
                    <small className="text-muted mt-1 block">{desc}</small>
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#8a93a3]">
              *Specific screening, tracking and inspection procedures should be
              confirmed with Uncle Lenny before publication.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 lg:py-27.5">
        <div className="container-custom max-w-200">
          <div className="mb-12 max-w-175">
            <p className="text-red mb-5.5 text-[12px] font-extrabold tracking-[0.18em]">
              FAQ
            </p>
            <h2 className="font-manrope text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-[-0.04em]">
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
            <details
              className="border-line border-t py-5.25 last:border-b"
              key={q}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-extrabold">
                {q}
                <ChevronDown size={18} />
              </summary>
              <p className="text-muted mt-4 mb-0 max-w-175 text-[14px]">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-red py-22.5 text-white">
        <div className="container-custom text-center">
          <p className="mb-5.5 text-[12px] font-extrabold tracking-[0.18em]">
            READY TO TALK?
          </p>
          <h2 className="font-manrope mx-auto mb-4.5 max-w-190 text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-[-0.04em]">
            Let&apos;s plan a safer school run.
          </h2>
          <p className="mx-auto mb-7 max-w-150 text-[#ffe4e5]">
            Parents, schools and organisations can contact our team directly on
            WhatsApp.
          </p>
          <WhatsAppButton
            phone="263780927394"
            message="Hi Uncle Lenny, I'd like to enquire about school transport."
            location="final_cta"
            service="school_transport"
            className="text-navy inline-flex items-center gap-2.25 rounded-[10px] bg-white px-5 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5"
          />
        </div>
      </section>
    </main>
  );
}
