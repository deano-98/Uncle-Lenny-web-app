import Link from "next/link";
import {
  ArrowRight,
  BusFront,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

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
      <section className="bg-navy py-27.5 text-white">
        <div className="container-custom">
          <p className="text-red mb-5.5 text-xs font-extrabold tracking-[0.18em]">
            OUR FLEET
          </p>
          <h1 className="font-manrope mb-4 text-[clamp(3.2rem,7vw,6.5rem)] font-bold tracking-[-0.055em]">
            Safe, clean &<br />
            <span className="text-[#ff5b61]">well-maintained.</span>
          </h1>
          <p className="max-w-170 text-lg text-[#c5d2e3]">
            A look at our vehicle categories designed to handle daily school
            runs and group outings across Harare.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-27.5">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {fleetItems.map((item) => (
              <div
                key={item.title}
                className="border-line flex flex-col overflow-hidden rounded-[22px] border bg-white"
              >
                {/* CSS Bus Graphic Placeholder Container */}
                <div className="relative flex h-60 flex-col justify-between overflow-hidden bg-linear-to-br from-[#0b2b58] to-navy p-6">
                  <span className="bg-red self-start rounded-md px-2.5 py-1 text-[10px] font-extrabold tracking-[0.15em] text-white">
                    {item.tag}
                  </span>

                  {/* Bus Illustration Graphic */}
                  <div className="relative h-25 w-full rounded-t-2xl rounded-b-lg bg-[#f8fafc] p-3 shadow-lg">
                    <div className="bg-red h-4.5 rounded-t-[10px] px-2 py-0.5 text-[8px] font-extrabold tracking-widest text-white">
                      UNCLE LENNY
                    </div>
                    <div className="mt-2 flex gap-1">
                      <div className="h-7 flex-1 rounded-sm border-2 border-[#d9e2ed] bg-[#102d54]" />
                      <div className="h-7 flex-1 rounded-sm border-2 border-[#d9e2ed] bg-[#102d54]" />
                      <div className="h-7 flex-1 rounded-sm border-2 border-[#d9e2ed] bg-[#102d54]" />
                      <div className="h-7 flex-1 rounded-sm border-2 border-[#d9e2ed] bg-[#102d54]" />
                    </div>
                    <div className="absolute -bottom-2.5 left-5 h-6 w-6 rounded-full border-4 border-[#6c7684] bg-[#0c1420]" />
                    <div className="absolute right-5 -bottom-2.5 h-6 w-6 rounded-full border-4 border-[#6c7684] bg-[#0c1420]" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <h3 className="font-manrope mb-2 text-[1.35rem] font-bold">
                      {item.title}
                    </h3>
                    <p className="text-red mb-3 text-[13px] font-extrabold">
                      {item.capacity}
                    </p>
                    <p className="text-muted mb-5 text-sm">{item.idealFor}</p>
                  </div>

                  <div className="border-line grid gap-2 border-t pt-4">
                    <span className="text-ink flex items-center gap-2 text-[13px]">
                      <CheckCircle2 size={16} className="text-red" />{" "}
                      Safety-checked vehicles
                    </span>
                    <span className="text-ink flex items-center gap-2 text-[13px]">
                      <CheckCircle2 size={16} className="text-red" /> Clean &
                      seatbelt equipped
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