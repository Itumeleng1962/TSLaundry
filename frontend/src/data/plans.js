// Subscription plans (monthly, ZAR). One flagged as recommended.
export const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 349,
    kg: 12,
    washes: 4,
    tagline: "Perfect for individuals & students",
    recommended: false,
    features: [
      "12 kg wash & fold monthly",
      "4 collections per month",
      "48-hour turnaround",
      "Free delivery over R250",
      "Email support",
    ],
    excluded: ["Ironing included", "Express lane", "Dedicated manager"],
  },
  {
    id: "standard",
    name: "Standard",
    price: 599,
    kg: 24,
    washes: 6,
    tagline: "Great for busy professionals",
    recommended: false,
    features: [
      "24 kg wash & fold monthly",
      "6 collections per month",
      "Ironing included",
      "Free delivery on all orders",
      "Priority email & chat support",
    ],
    excluded: ["Express lane", "Dedicated manager"],
  },
  {
    id: "family",
    name: "Family",
    price: 949,
    kg: 40,
    washes: 8,
    tagline: "Built for households of 3–5",
    recommended: true,
    features: [
      "40 kg wash, dry, iron & fold",
      "8 collections per month",
      "School uniform care included",
      "Free priority delivery",
      "Express lane (2 per month)",
      "WhatsApp support",
    ],
    excluded: ["Dedicated manager"],
  },
  {
    id: "plus",
    name: "Plus",
    price: 1499,
    kg: 65,
    washes: 12,
    tagline: "For large families & Airbnb hosts",
    recommended: false,
    features: [
      "65 kg full treatment monthly",
      "12 collections per month",
      "Duvets & blankets (2 per month)",
      "Unlimited free delivery",
      "Express lane (4 per month)",
      "Priority WhatsApp support",
    ],
    excluded: ["Dedicated manager"],
  },
  {
    id: "premium",
    name: "Premium",
    price: 2499,
    kg: 110,
    washes: 20,
    tagline: "White-glove, for those who want it all",
    recommended: false,
    features: [
      "110 kg full treatment monthly",
      "Unlimited collections",
      "Special garment care included",
      "Same-day express unlimited",
      "Dedicated account manager",
      "24/7 concierge support",
    ],
    excluded: [],
  },
];

// À la carte pricing used by the calculator
export const PRICING = {
  base: { washFold: 45, washIronFold: 65, ironOnly: 35 },
  addons: {
    express: 40, // per kg surcharge
    curtains: 90, // per kg
    delivery: 60, // flat, waived over threshold
  },
  deliveryFreeOver: 250,
  commercial: [
    { label: "Restaurant linen", price: 35, unit: "per kg" },
    { label: "Guesthouse & Airbnb", price: 38, unit: "per kg" },
    { label: "Spa & wellness towels", price: 40, unit: "per kg" },
    { label: "Corporate uniforms", price: 42, unit: "per kg" },
  ],
};
