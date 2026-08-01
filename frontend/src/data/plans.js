// Subscription plans (5-week cycle, 4 washes per cycle). ZAR pricing per official rate card.
export const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 350,
    kg: 30,
    washes: 4,
    tagline: "Perfect for individuals & students",
    recommended: false,
    features: [
      "Up to 30 kg per month",
      "4 washes per 5-week cycle",
      "Wash, dry & fold included",
      "Wash & kilogram tracking",
      "Free collection within 3 km",
    ],
    excluded: ["Ironing included", "Express service", "Priority support"],
  },
  {
    id: "standard",
    name: "Standard",
    price: 600,
    kg: 42,
    washes: 4,
    tagline: "Great for busy professionals",
    recommended: false,
    features: [
      "Up to 42 kg per month",
      "4 washes per 5-week cycle",
      "Wash, dry & fold included",
      "Ironing add-on discounted",
      "Free collection within 3 km",
    ],
    excluded: ["Express service", "Priority support"],
  },
  {
    id: "family",
    name: "Family",
    price: 800,
    kg: 53,
    washes: 4,
    tagline: "Built for busy households",
    recommended: true,
    features: [
      "Up to 53 kg per month",
      "4 washes per 5-week cycle",
      "Wash, dry, iron & fold",
      "Blankets & duvets discounted",
      "Free collection within 3 km",
      "WhatsApp support",
    ],
    excluded: ["Priority express"],
  },
  {
    id: "plus",
    name: "Plus",
    price: 1000,
    kg: 63,
    washes: 4,
    tagline: "For large families & hosts",
    recommended: false,
    features: [
      "Up to 63 kg per month",
      "4 washes per 5-week cycle",
      "Wash, dry, iron & fold",
      "Express service included (1 per cycle)",
      "Free collection within 3 km",
      "Priority WhatsApp support",
    ],
    excluded: [],
  },
  {
    id: "premium",
    name: "Premium",
    price: 1250,
    kg: 76,
    washes: 4,
    tagline: "Our most generous plan",
    recommended: false,
    features: [
      "Up to 76 kg per month",
      "4 washes per 5-week cycle",
      "Full treatment + special care",
      "Express service included (2 per cycle)",
      "Free collection within 3 km",
      "Dedicated priority support",
    ],
    excluded: [],
  },
];

// À la carte pricing used by the calculator (official rate card)
export const PRICING = {
  base: { washFold: 19, washIronFold: 22, ironOnly: 8.5 },
  addons: {
    express: 30, // flat surcharge (R20–R50)
    curtains: 35, // per meter
    delivery: 15, // beyond 3 km (free within 3 km)
  },
  deliveryFreeKm: 3,
  special: [
    { label: "Blankets & Duvets", price: "R50 – R120", unit: "per item" },
    { label: "Bags", price: "R35 – R80", unit: "per bag" },
    { label: "Curtains", price: "R35", unit: "per meter" },
    { label: "Stain Remover", price: "R20", unit: "add-on" },
    { label: "Bleach", price: "R20", unit: "add-on" },
    { label: "Same-Day / Express", price: "R20 – R50", unit: "per order" },
  ],
};
