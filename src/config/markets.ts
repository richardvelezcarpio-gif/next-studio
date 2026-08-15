export type EcuadorLocale = "es" | "en";

export const ecuadorMarket = {
  country: "Ecuador",
  currency: "USD",
  plans: [
    { id: "website-basic", name: "Website Basic", setup: "$399", monthly: "$15/month" },
    { id: "business", name: "Business", setup: "$699", monthly: "$25/month" },
    { id: "business-pro", name: "Business Pro", setup: "$999", monthly: "$39/month" },
    { id: "ai-business", name: "AI Business", setup: "From $1,499", monthly: "From $59/month" },
  ],
  digitalCard: "$70",
} as const;
