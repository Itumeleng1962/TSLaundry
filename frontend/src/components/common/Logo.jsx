import { Link } from "react-router-dom";
import { Droplets } from "lucide-react";

// Text-based wordmark with a gold droplet mark for crisp rendering at any size.
export function Logo({ dark = false, className = "" }) {
  return (
    <Link
      to="/"
      data-testid="brand-logo"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/30 transition-colors duration-300 group-hover:bg-gold/20">
        <Droplets className="h-4.5 w-4.5 text-gold" strokeWidth={1.5} style={{ width: 18, height: 18 }} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-xl tracking-tight ${dark ? "text-white" : "text-ink"}`}
        >
          TS Unique
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-gold">
          Laundry
        </span>
      </span>
    </Link>
  );
}
