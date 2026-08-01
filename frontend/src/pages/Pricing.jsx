import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PricingCalculator } from "@/components/common/PricingCalculator";
import { PRICING } from "@/data/plans";
import { SERVICES } from "@/data/services";
import { ZAR } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Fair, transparent, per kilogram" lede="No hidden fees. Pay for what you wash, or subscribe for the best rate. Prices in South African Rand." />
      <section className="container-x py-16 lg:py-24">
        <div className="mx-auto max-w-4xl"><Reveal><PricingCalculator /></Reveal></div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Rate card" title="Per-service pricing" />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-3xl border border-line bg-white">
            {SERVICES.map((s) => (
              <div key={s.slug} className="flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-4">
                  <s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  <div><p className="font-medium text-ink">{s.title}</p><p className="text-xs text-[#666666]">{s.tagline}</p></div>
                </div>
                <span className="text-sm text-[#666666]">from <b className="font-serif text-lg text-ink">{s.from ? ZAR(s.from) : "Free"}</b> <span className="text-xs">{s.unit}</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <SectionHeading center eyebrow="For business" title="Commercial rates" lede="High-volume pricing for hospitality, corporate and Airbnb clients. Billed monthly with a dedicated manager." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING.commercial.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <div className="rounded-3xl border border-line bg-white p-6 text-center transition-all hover:-translate-y-2 hover:shadow-[0_16px_60px_rgba(0,0,0,0.05)]">
                <p className="font-serif text-4xl font-light text-gold">{ZAR(c.price)}</p>
                <p className="text-xs text-[#666666]">{c.unit}</p>
                <p className="mt-3 text-sm font-medium text-ink">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center"><Link to="/contact" className="rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gold">Request a business quote</Link></Reveal>
      </section>
    </>
  );
}
