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
      <section className="hero">
        <div className="hero-grid" />

        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">SCHOOL TRANSPORTATION • HARARE</p>

            <h1>
              Safe. Reliable.
              <br />
              <span>Ready for the school run.</span>
            </h1>

            <p className="hero-lead">
              Professional school transportation for families, schools and
              educational organisations across Harare.
            </p>

            <div className="actions">
              <WhatsAppButton
                phone="263780927394"
                message="Hi Uncle Lenny, I'd like to enquire about school transport."
                location="hero"
                service="school_transport"
              />

              <Link className="btn btn-light" href="/services">
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-trust">
              <span>
                <ShieldCheck size={17} /> Safety first
              </span>

              <span>
                <Clock3 size={17} /> On-time service
              </span>

              <span>
                <MapPin size={17} /> Harare
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="bus-art">
              <div className="bus-top">UNCLE LENNY</div>

              <div className="bus-windows">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>

              <div className="bus-body">
                <strong>SCHOOL RUN</strong>
                <span>SAFE • RELIABLE • COMFORTABLE</span>
              </div>

              <div className="wheel wheel-one" />
              <div className="wheel wheel-two" />
            </div>

            <div className="floating-stat">
              <span className="stat-icon">
                <ShieldCheck size={22} />
              </span>

              <span>
                <b>Safety first</b>
                <small>Every journey matters.</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container four-grid">
          {[
            ["Safety", "Your child's safety is our priority.", ShieldCheck],
            ["Reliability", "Consistent pickups and drop-offs.", Route],
            ["Comfort", "Clean, comfortable vehicles.", BusFront],
            ["Punctuality", "We value your school's time.", Clock3],
          ].map(([title, text, Icon]) => (
            <div className="trust-card" key={String(title)}>
              <Icon size={26} />

              <div>
                <b>{title as string}</b>
                <p>{text as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow red">WHAT WE DO</p>

            <h2>Transport built around the school day.</h2>

            <p>
              Flexible transport solutions for everyday school runs, trips,
              events and group requirements.
            </p>
          </div>

          <div className="three-grid">
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
              <article className="service-card" key={title}>
                <div className="icon-box">
                  <Icon size={24} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <Link href="/services">
                  Learn more <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container split">
          <div>
            <p className="eyebrow">FOR SCHOOLS</p>

            <h2>A transportation partner your school can rely on.</h2>

            <p className="muted">
              Whether you need daily student transport, additional vehicles
              for a school event, or a longer-term transport arrangement,
              let&apos;s discuss your requirements.
            </p>

            <div className="check-list">
              {[
                "Route and schedule planning",
                "Daily student transportation",
                "School trips and activities",
                "Dedicated vehicle arrangements",
                "Direct communication with our team",
              ].map((x) => (
                <span key={x}>
                  <CheckCircle2 size={18} /> {x}
                </span>
              ))}
            </div>

            <Link className="btn btn-red" href="/schools">
              School Partnership <ArrowRight size={18} />
            </Link>
          </div>

          <div className="dark-panel">
            <div className="mini-badge">SCHOOL PARTNER</div>

            <h3>Tell us what your school needs.</h3>

            <p>
              Share your routes, student numbers and schedule. We can discuss
              the most suitable transport arrangement.
            </p>

            <WhatsAppButton
              phone="263780927394"
              message="Hi Uncle Lenny, I'd like to request a quote for school transport."
              location="school_section"
              service="school_transport"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading inline">
            <div>
              <p className="eyebrow red">THE FLEET</p>
              <h2>Vehicles for different needs.</h2>
            </div>

            <Link className="text-link" href="/fleet">
              View fleet <ArrowRight size={17} />
            </Link>
          </div>

          <div className="fleet-grid">
            {["School Minibus", "Large School Bus", "Group Transport"].map(
              (name, i) => (
                <div className="fleet-card" key={name}>
                  <div className={`mock-vehicle vehicle-${i}`}>
                    <span>UNCLE LENNY</span>
                  </div>

                  <div className="fleet-info">
                    <h3>{name}</h3>

                    <p>
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

      <section className="safety-section">
        <div className="container split reverse-mobile">
          <div className="safety-visual">
            <ShieldCheck size={70} />
            <span>SAFETY FIRST</span>
          </div>

          <div>
            <p className="eyebrow red">SAFETY & RELIABILITY</p>

            <h2>Because getting there safely is the whole point.</h2>

            <p>
              We believe professional school transportation starts with
              responsible people, dependable vehicles, clear schedules and
              good communication.
            </p>

            <div className="number-list">
              <div>
                <b>01</b>

                <span>
                  <strong>Responsible drivers</strong>
                  <small>Experienced and professionally managed.</small>
                </span>
              </div>

              <div>
                <b>02</b>

                <span>
                  <strong>Vehicle care</strong>
                  <small>Clean, presentable and maintained vehicles.</small>
                </span>
              </div>

              <div>
                <b>03</b>

                <span>
                  <strong>Clear communication</strong>
                  <small>
                    Parents and schools can reach the team when needed.
                  </small>
                </span>
              </div>
            </div>

            <p className="small-note">
              *Specific screening, tracking and inspection procedures should
              be confirmed with Uncle Lenny before publication.
            </p>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow red">FAQ</p>
            <h2>Questions schools and parents ask.</h2>
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
            <details key={q}>
              <summary>
                {q}
                <ChevronDown size={18} />
              </summary>

              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <p className="eyebrow">READY TO TALK?</p>

          <h2>Let&apos;s plan a safer school run.</h2>

          <p>
            Parents, schools and organisations can contact our team directly
            on WhatsApp.
          </p>

          <WhatsAppButton
            phone="263780927394"
            message="Hi Uncle Lenny, I'd like to enquire about school transport."
            location="final_cta"
            service="school_transport"
            className="btn btn-white"
          />
        </div>
      </section>
    </main>
  );
}