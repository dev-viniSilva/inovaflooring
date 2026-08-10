export const site = {
  name: "InovaFlooring",
  phoneDisplay: "732-533-8124",
  phoneHref: "tel:+17325338124",
  email: "info@inovaflooring.com",
  emailHref: "mailto:info@inovaflooring.com",
  instagram: "https://www.instagram.com/inovaflooring/",
  instagramHandle: "@inovaflooring",
  googleReview: "https://share.google/YmF8YdBqb7f3Q3KKg",
  hoursLine: "Open Daily",
  hoursDetail: "6:00 AM – 9:00 PM",
  areas: ["NJ", "NY", "PA", "MD"],
  areasFull: ["New Jersey", "New York", "Pennsylvania", "Maryland"],
} as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
