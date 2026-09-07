import Link from "next/link";
import { ArrowRight, ShieldCheck, Heart, Clock, BusFront } from "lucide-react";

export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-navy text-white py-27.5">
        <div className="container-custom">
          <p className="text-xs font-extrabold tracking-[0.18em] text-red mb-5.5">ABOUT US</p>
          <h1 className="text-[clamp(3.2rem,7vw,6.5rem)] tracking-[-0.055em] font-manrope font-bold mb-4">
            Dedicated to safer<br />
            <span className="text-[#ff5b61]">school journeys.</span>
          </h1>
          <p className="max-w-[680px] text-[#c5d2e3] text-lg">
            Providing Harare families and schools with dependable, punctual, and child-friendly transportation.
          </p>
        </div>
      </section>

      {/* Main Story & Graphic Split */}
      <section className="py-27.5">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] text-red mb-4">OUR MISSION</p>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.04em] font-manrope font-bold mb-4">
              Peace of mind for parents every morning and afternoon.
            </h2>
            <p className="text-muted mb-4">
              Uncle Lenny School Run Services was built to solve a critical daily challenge: ensuring children arrive at school safely, comfortably, and right on schedule.
            </p>
            <p className="text-muted mb-6">
              We work closely with parents, school administrators, and private groups across Harare to deliver transportation services tailored around school calendars and timetables.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-[#f5f7fa] rounded-[14px]">
                <Clock className="text-red mb-2" size={24} />
                <strong className="block text-ink text-[15px]">Punctual Runs</strong>
                <small className="text-muted text-xs">Timely morning pickups</small>
              </div>
              <div className="p-5 bg-[#f5f7fa] rounded-[14px]">
                <ShieldCheck className="text-red mb-2" size={24} />
                <strong className="block text-ink text-[15px]">Safety First</strong>
                <small className="text-muted text-xs">Vetted drivers & vehicles</small>
              </div>
            </div>
          </div>

          {/* Bus Illustration Placeholder Card */}
          <div className="relative bg-navy rounded-[24px] p-10 text-white min-h-[380px] flex flex-col justify-between overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(223,32,40,0.25),_transparent_40%)]" />

            <div className="relative z-10">
              <span className="text-[10px] tracking-[0.18em] font-extrabold text-[#ff5b61] uppercase">
                UNCLE LENNY FLEET
              </span>
              <h3 className="text-2xl font-manrope font-bold mt-1.5">Harare School Transport</h3>
            </div>

            {/* Graphic Bus Box */}
            <div className="relative z-10 w-full bg-[#f8fafc] text-navy rounded-t-[20px] rounded-b-[10px] p-4 my-5">
              <div className="h-[22px] bg-red text-white text-[9px] font-extrabold tracking-[0.15em] px-[10px] py-[3px] rounded-t-[12px]">
                UNCLE LENNY
              </div>
              <div className="flex gap-1.5 my-3">
                <div className="h-9 flex-1 bg-[#102d54] rounded-[6px] border-3 border-[#d9e2ed]" />
                <div className="h-9 flex-1 bg-[#102d54] rounded-[6px] border-3 border-[#d9e2ed]" />
                <div className="h-9 flex-1 bg-[#102d54] rounded-[6px] border-3 border-[#d9e2ed]" />
                <div className="h-9 flex-1 bg-[#102d54] rounded-[6px] border-3 border-[#d9e2ed]" />
              </div>
              <div className="absolute -bottom-[10px] left-[20px] w-[24px] h-[24px] rounded-full bg-[#0c1420] border-[4px] border-[#6c7684]" />
              <div className="absolute -bottom-[10px] right-[20px] w-[24px] h-[24px] rounded-full bg-[#0c1420] border-[4px] border-[#6c7684]" />
            </div>

            <div className="relative z-10 flex items-center justify-between text-[#c5d2e3] text-[13px]">
              <span>Reliable Daily Transport</span>
              <BusFront size={20} className="text-red" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}