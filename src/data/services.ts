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
    id: "installation",
    name: "Flooring Installation",
    description:
      "Precise, professional installation with careful attention to subfloor prep and detail.",
    image: "/media/img/floor-install-oak.webp",
    span: "wide",
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
    image: "/media/img/stairs-after-wide.webp",
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
