export type GalleryItem =
  | {
      id: string;
      type: "image";
      src: string;
      alt: string;
      label: string;
      span: "wide" | "tall" | "large" | "normal";
    }
  | {
      id: string;
      type: "video";
      src: string;
      poster: string;
      alt: string;
      label: string;
      span: "wide" | "tall" | "large" | "normal";
    };

const img = (name: string) => `/media/img/${name}.webp`;
const poster = (name: string) => `/media/img/${name}.jpg`;
const vid = (name: string) => `/media/video/${name}.mp4`;

export const galleryItems: GalleryItem[] = [
  {
    id: "venue-hall-wedding",
    type: "image",
    src: img("venue-hall-wedding"),
    alt: "Large event hall with rich hardwood flooring, wine barrels, and floral arches",
    label: "Installation",
    span: "large",
  },
  {
    id: "herringbone-dining",
    type: "image",
    src: img("herringbone-dining"),
    alt: "Herringbone hardwood floor pattern in a dining room",
    label: "Installation",
    span: "tall",
  },
  {
    id: "full-staircase",
    type: "image",
    src: img("full-staircase"),
    alt: "Overhead view of a staircase with a newly installed, unfinished wood railing and newel posts",
    label: "Installation",
    span: "tall",
  },
  {
    id: "kitchen-navy",
    type: "image",
    src: img("kitchen-navy"),
    alt: "Light oak hardwood flooring in a navy blue kitchen",
    label: "Hardwood Flooring",
    span: "normal",
  },
  {
    id: "room-pan-01",
    type: "video",
    src: vid("room-pan-01"),
    poster: poster("room-pan-01-poster"),
    alt: "Walkthrough of a finished room with light hardwood flooring",
    label: "Installation",
    span: "normal",
  },
  {
    id: "venue-hall-wide",
    type: "image",
    src: img("venue-hall-wide"),
    alt: "Wide view of an event hall with hardwood flooring and exposed brick walls",
    label: "Hardwood Flooring",
    span: "wide",
  },
  {
    id: "stairs-after-closeup",
    type: "image",
    src: img("stairs-after-closeup"),
    alt: "Close-up of a refinished staircase with stained treads and painted white risers",
    label: "Refinishing",
    span: "tall",
  },
  {
    id: "venue-hall-lighting",
    type: "image",
    src: img("venue-hall-lighting"),
    alt: "Event hall hardwood floor under warm ambient lighting",
    label: "Installation",
    span: "normal",
  },
  {
    id: "living-fireplace-pan",
    type: "video",
    src: vid("living-fireplace-pan"),
    poster: poster("living-fireplace-pan-poster"),
    alt: "Walkthrough of a finished living room with hardwood flooring and a fireplace",
    label: "Refinishing",
    span: "normal",
  },
  {
    id: "floor-install-oak",
    type: "image",
    src: img("floor-install-oak"),
    alt: "Light oak hardwood flooring being installed in a room under construction",
    label: "Installation",
    span: "wide",
  },
  {
    id: "stairs-hallway-after",
    type: "image",
    src: img("stairs-hallway-after"),
    alt: "Refinished hardwood staircase and hallway with a glossy finish",
    label: "Refinishing",
    span: "normal",
  },
  {
    id: "bedroom-nook",
    type: "video",
    src: vid("bedroom-nook"),
    poster: poster("bedroom-nook-poster"),
    alt: "Finished bedroom with hardwood flooring",
    label: "Installation",
    span: "tall",
  },
  {
    id: "floor-detail-mahogany",
    type: "image",
    src: img("floor-detail-mahogany"),
    alt: "Close-up detail of finished mahogany-tone hardwood flooring",
    label: "Refinishing",
    span: "normal",
  },
  {
    id: "sealer-product",
    type: "image",
    src: img("sealer-product"),
    alt: "Professional-grade wood floor finish used on a hardwood refinishing project",
    label: "Refinishing",
    span: "normal",
  },
  {
    id: "dustfree-sanding",
    type: "video",
    src: vid("dustfree-sanding"),
    poster: poster("dustfree-sanding-poster"),
    alt: "Technician using a dust-free sanding system on a hardwood floor",
    label: "Dust-Free Sanding",
    span: "wide",
  },
  {
    id: "drum-sanding",
    type: "video",
    src: vid("drum-sanding"),
    poster: poster("drum-sanding-poster"),
    alt: "Drum sander refinishing a hardwood floor, revealing bare wood beneath the old finish",
    label: "Refinishing",
    span: "normal",
  },
  {
    id: "room-pan-02",
    type: "video",
    src: vid("room-pan-02"),
    poster: poster("room-pan-02-poster"),
    alt: "Walkthrough of a finished room with light hardwood flooring and large windows",
    label: "Hardwood Flooring",
    span: "large",
  },
];
