import Link from "next/link";
import { ArrowRight, BusFront, ShieldCheck, Users, CheckCircle2 } from "lucide-react";

const fleetItems = [
  {
    title: "School Minibus",
    capacity: "14 - 22 Seats",
    idealFor: "Daily residential pickups & small group runs",
    tag: "POPULAR",
  },
  {
    title: "Mid-Size School Bus",
    capacity: "25 - 35 Seats",
    idealFor: "Medium routes & sports fixtures",
    tag: "VERSATILE",
  },
  {
    title: "Large School Coach",
    capacity: "40+ Seats",
    idealFor: "Full-grade transport & educational trips",
    tag: "HIGH CAPACITY",
  },
];

export default function Fleet() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-navy text-white py-27.5">
        <div className="container-custom">
          <p className="text-xs font-extrabold tracking-[0.18em] text-red mb-5.5">OUR FLEET</p>
          <h1 className="text-[clamp(3.2rem,7vw,6.5rem)] tracking-[-0.055em] font-manrope font-bold mb-4">
            Safe, clean &<br />
            <span className="text-[#ff5b61]">well-maintained.</span>
          </h1>
          <p className="max-w-[680px] text-[#c5d2e3] text-lg">
            A look at our vehicle categories designed to handle daily school runs and group outings across Harare.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-27.5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {fleetItems.map((item) => (
              <div key={item.title} className="border border-line rounded-[22px] overflow-hidden bg-white flex flex-col">
                {/* CSS Bus Graphic Placeholder Container */}
                <div className="h-60 bg-gradient-to-br from-[#0b2b58] to-[#071b3a] p-6 relative flex flex-col justify-between overflow-hidden">
                  <span className="bg-red text-white text-[10px] font-extrabold tracking-[0.15em] px-2.5 py-1 rounded-[6px] self-start">
                    {item.tag}
                  </span>

                  {/* Bus Illustration Graphic */}
                  <div className="w-full h-25 bg-[#f8fafc] rounded-t-[16px] rounded-b-[8px] relative p-3 shadow-lg">
                    <div className="h-[18px] bg-red text-white text-[8px] font-extrabold tracking-[0.1em] px-2 py-0.5 rounded-t-[10px]">
                      UNCLE LENNY
                    </div>
                    <div className="flex gap-1 mt-2">
                      <div className="h-7 flex-1 bg-[#102d54] rounded-[4px] border-2 border-[#d9e2ed]" />
                      <div className="h-7 flex-1 bg-[#102d54] rounded-[4px] border-2 border-[#d9e2ed]" />
                      <div className="h-7 flex-1 bg-[#102d54] rounded-[4px] border-2 border-[#d9e2ed]" />
                      <div className="h-7 flex-1 bg-[#102d54] rounded-[4px] border-2 border-[#d9e2ed]" />
                    </div>
                    <div className="absolute -bottom-[10px] left-[20px] w-[24px] h-[24px] rounded-full bg-[#0c1420] border-[4px] border-[#6c7684]" />
                    <div className="absolute -bottom-[10px] right-[20px] w-[24px] h-[24px] rounded-full bg-[#0c1420] border-[4px] border-[#6c7684]" />
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-[1.35rem] font-manrope font-bold mb-2">{item.title}</h3>
                    <p className="text-red font-extrabold text-[13px] mb-3">{item.capacity}</p>
                    <p className="text-muted text-sm mb-5">{item.idealFor}</p>
                  </div>

                  <div className="pt-4 border-t border-line grid gap-2">
                    <span className="flex items-center gap-2 text-[13px] text-ink">
                      <CheckCircle2 size={16} className="text-red" /> Safety-checked vehicles
                    </span>
                    <span className="flex items-center gap-2 text-[13px] text-ink">
                      <CheckCircle2 size={16} className="text-red" /> Clean & seatbelt equipped
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}