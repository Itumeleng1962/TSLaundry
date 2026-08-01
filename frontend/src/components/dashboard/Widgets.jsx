import { Reveal } from "@/components/common/Motion";

// Reusable dashboard building blocks
export function StatCard({ label, value, sub, accent = false, testid }) {
  return (
    <div data-testid={testid} className={`rounded-2xl border p-6 ${accent ? "border-gold bg-ink text-white" : "border-line bg-white"}`}>
      <p className={`text-xs font-bold uppercase tracking-wider ${accent ? "text-white/50" : "text-[#666666]"}`}>{label}</p>
      <p className={`mt-2 font-serif text-4xl font-light ${accent ? "text-gold" : "text-ink"}`}>{value}</p>
      {sub && <p className={`mt-1 text-xs ${accent ? "text-white/50" : "text-[#666666]"}`}>{sub}</p>}
    </div>
  );
}

export function DashHeader({ title, subtitle }) {
  return (
    <Reveal className="mb-8">
      <h1 className="font-serif text-4xl font-light text-ink">{title}</h1>
      {subtitle && <p className="mt-2 text-[#666666]">{subtitle}</p>}
    </Reveal>
  );
}

export function Panel({ title, children, action }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      {title && (
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-serif text-xl text-ink">{title}</h3>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export function StatusPill({ status }) {
  const map = {
    Delivered: "bg-green-50 text-green-700",
    Success: "bg-green-50 text-green-700",
    Paid: "bg-green-50 text-green-700",
    Active: "bg-green-50 text-green-700",
    Processing: "bg-gold/10 text-gold",
    Collected: "bg-gold/10 text-gold",
    "Out for delivery": "bg-gold/10 text-gold",
    Scheduled: "bg-cloud text-[#666666]",
    Paused: "bg-cloud text-[#666666]",
  };
  return <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${map[status] || "bg-cloud text-[#666666]"}`}>{status}</span>;
}
