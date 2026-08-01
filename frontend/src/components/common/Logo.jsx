import { Link } from "react-router-dom";
import { BRAND } from "@/lib/constants";

// Official TS Unique Laundry eagle emblem used across the site.
export function Logo({ dark = false, className = "" }) {
  return (
    <Link
      to="/"
      data-testid="brand-logo"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <img
        src={BRAND.logo}
        alt="TS Unique Laundry"
        className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-xl tracking-tight ${dark ? "text-white" : "text-cream"}`}>
          TS Unique
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">
          Laundry · Est 2025
        </span>
      </span>
    </Link>
  );
}
