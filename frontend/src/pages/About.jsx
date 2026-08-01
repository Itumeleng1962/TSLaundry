import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Counter } from "@/components/common/Counter";
import { STATS } from "@/data/content";
import { IMAGES } from "@/lib/constants";
import { Heart, Target, Sparkles } from "lucide-react";

const VALUES = [
  { icon: Sparkles, title: "Excellence, always", text: "We treat every garment as if it were our own — because trust is earned one fold at a time." },
  { icon: Heart, title: "People first", text: "Friendly, reliable service from a team that genuinely cares about giving you time back." },
  { icon: Target, title: "Relentlessly reliable", text: "Rain or not, we serve. On-time collection and delivery is a promise, not a hope." },
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="Our story" title="Founded on a simple belief: your time is precious" lede="TS Unique Laundry began in a small Johannesburg garage in 2019 with one van and a promise — laundry should never steal your weekend again." />
      <section className="container-x py-16 lg:py-24">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
            <img src={IMAGES.cleanTowels} alt="Our facility" className="h-[420px] w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="The mission" title="Premium care, made effortless" lede="What started as a side hustle for busy neighbours is now Joburg's most-loved laundry subscription — trusted by thousands of homes and businesses." />
          <Reveal>
            <p className="text-base leading-relaxed text-[#666666]">Today we run a fleet of eco-conscious vehicles and a modern facility staffed by fabric-care specialists. Every order is tracked, insured and handled with white-glove attention. Our slogan says it best: <span className="font-serif text-xl italic text-gold">Rain or Not We Serve.</span></p>
            <p className="mt-4 text-base leading-relaxed text-[#666666]">We're proud to give thousands of South Africans their evenings and weekends back — one perfectly folded load at a time.</p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <SectionHeading center eyebrow="What we stand for" title="Values woven into everything" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10"><v.icon className="h-6 w-6 text-gold" strokeWidth={1.25} /></span>
                <h3 className="mt-6 font-serif text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#666666]">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="noise relative overflow-hidden bg-ink py-24 text-white">
        <div className="container-x relative z-10 grid grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-serif text-5xl font-light text-gold sm:text-6xl"><Counter to={s.value} suffix={s.suffix} /></p>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
