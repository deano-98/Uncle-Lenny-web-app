import Link from "next/link";
import { ArrowRight, ShieldCheck, Heart, Clock, BusFront } from "lucide-react";

export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-navy py-27.5 text-white">
        <div className="container-custom">
          <p className="text-red mb-5.5 text-xs font-extrabold tracking-[0.18em]">
            ABOUT US
          </p>
          <h1 className="font-manrope mb-4 text-[clamp(3.2rem,7vw,6.5rem)] font-bold tracking-[-0.055em]">
            Dedicated to safer
            <br />
            <span className="text-[#ff5b61]">school journeys.</span>
          </h1>
          <p className="max-w-170 text-lg text-[#c5d2e3]">
            Providing Harare families and schools with dependable, punctual, and
            child-friendly transportation.
          </p>
        </div>
      </section>

      {/* Main Story & Graphic Split */}
      <section className="py-27.5">
        <div className="container-custom grid grid-cols-1 items-center gap-15 lg:grid-cols-2">
          <div>
            <p className="text-red mb-4 text-xs font-extrabold tracking-[0.18em]">
              OUR MISSION
            </p>
            <h2 className="font-manrope mb-4 text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-[-0.04em]">
              Peace of mind for parents every morning and afternoon.
            </h2>
            <p className="text-muted mb-4">
              Uncle Lenny School Run Services was built to solve a critical
              daily challenge: ensuring children arrive at school safely,
              comfortably, and right on schedule.
            </p>
            <p className="text-muted mb-6">
              We work closely with parents, school administrators, and private
              groups across Harare to deliver transportation services tailored
              around school calendars and timetables.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[14px] bg-[#f5f7fa] p-5">
                <Clock className="text-red mb-2" size={24} />
                <strong className="text-ink block text-[15px]">
                  Punctual Runs
                </strong>
                <small className="text-muted text-xs">
                  Timely morning pickups
                </small>
              </div>
              <div className="rounded-[14px] bg-[#f5f7fa] p-5">
                <ShieldCheck className="text-red mb-2" size={24} />
                <strong className="text-ink block text-[15px]">
                  Safety First
                </strong>
                <small className="text-muted text-xs">
                  Vetted drivers & vehicles
                </small>
              </div>
            </div>
          </div>

          {/* Bus Illustration Placeholder Card */}
          <div className="bg-navy relative flex min-h-95 flex-col justify-between overflow-hidden rounded-3xl p-10 text-white shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(223,32,40,0.25),transparent_40%)]" />

            <div className="relative z-10">
              <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#ff5b61] uppercase">
                UNCLE LENNY FLEET
              </span>
              <h3 className="font-manrope mt-1.5 text-2xl font-bold">
                Harare School Transport
              </h3>
            </div>

            {/* Graphic Bus Box */}
            <div className="text-navy relative z-10 my-5 w-full rounded-t-[20px] rounded-b-[10px] bg-[#f8fafc] p-4">
              <div className="bg-red h-5.5 rounded-t-xl px-2.5 py-0.75 text-[9px] font-extrabold tracking-[0.15em] text-white">
                UNCLE LENNY
              </div>
              <div className="my-3 flex gap-1.5">
                <div className="h-9 flex-1 rounded-md border-3 border-[#d9e2ed] bg-[#102d54]" />
                <div className="h-9 flex-1 rounded-md border-3 border-[#d9e2ed] bg-[#102d54]" />
                <div className="h-9 flex-1 rounded-md border-3 border-[#d9e2ed] bg-[#102d54]" />
                <div className="h-9 flex-1 rounded-md border-3 border-[#d9e2ed] bg-[#102d54]" />
              </div>
              <div className="absolute -bottom-2.5 left-5 h-6 w-6 rounded-full border-4 border-[#6c7684] bg-[#0c1420]" />
              <div className="absolute right-5 -bottom-2.5 h-6 w-6 rounded-full border-4 border-[#6c7684] bg-[#0c1420]" />
            </div>

            <div className="relative z-10 flex items-center justify-between text-[13px] text-[#c5d2e3]">
              <span>Reliable Daily Transport</span>
              <BusFront size={20} className="text-red" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}