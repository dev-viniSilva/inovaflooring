export interface Service {
  id: string;
  name: string;
  description: string;
  image?: string;
  span: "wide" | "tall" | "large" | "normal";
}

export const services: Service[] = [
  {
    id: "hardwood-flooring",
    name: "Hardwood Flooring",
    description:
      "Solid hardwood flooring solutions built for long-term quality and value.",
    image: "/media/img/floor-detail-mahogany.webp",
    span: "large",
  },
  {
    id: "engineered-hardwood",
    name: "Engineered Hardwood",
    description:
      "Stable, dimensionally sound flooring built to perform over radiant heat, concrete, and below-grade spaces.",
    span: "normal",
  },
  {
    id: "installation",
    name: "Flooring Installation",
    description:
      "Precise, professional installation with careful attention to subfloor prep and detail.",
    image: "/media/img/builtin-greatroom-01.webp",
    span: "wide",
  },
  {
    id: "vinyl-flooring",
    name: "Vinyl Flooring",
    description:
      "Durable, water-resistant vinyl systems suited to high-traffic residential and commercial spaces.",
    span: "normal",
  },
  {
    id: "lvt",
    name: "LVT / Luxury Vinyl Tile",
    description:
      "Realistic wood-look tile flooring engineered for durability, comfort, and low maintenance.",
    span: "normal",
  },
  {
    id: "dust-free-sanding",
    name: "Dust-Free Sanding",
    description:
      "Contained sanding systems that remove old finishes with a fraction of the airborne dust.",
    image: "/media/img/dustfree-sanding-poster.jpg",
    span: "tall",
  },
  {
    id: "refinishing",
    name: "Hardwood Refinishing",
    description:
      "Full refinishing that restores worn, scratched, or dated hardwood to its original character.",
    image: "/media/img/living-fireplace-02.webp",
    span: "normal",
  },
  {
    id: "repairs",
    name: "Flooring Repairs",
    description:
      "Board replacement, structural repair, and finish correction that preserves the existing floor.",
    span: "normal",
  },
  {
    id: "custom",
    name: "Custom Flooring Solutions",
    description:
      "Herringbone, chevron, wide plank, borders, and inlay work for architecturally distinct spaces.",
    image: "/media/img/herringbone-dining.webp",
    span: "wide",
  },
];

export const process = [
  {
    number: "01",
    title: "Contact Us",
    description: "Tell us about your flooring project.",
  },
  {
    number: "02",
    title: "Consultation",
    description: "Discuss the space, flooring, and desired result.",
  },
  {
    number: "03",
    title: "Professional Work",
    description:
      "Our team handles installation, repair, sanding, or refinishing.",
  },
  {
    number: "04",
    title: "Transformation",
    description: "Enjoy the finished result.",
  },
];
