export type GalleryItem =
  | {
      id: string;
      type: "image";
      src: string;
      thumb: string;
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
    id: "living-fireplace-01",
    type: "image",
    src: img("living-fireplace-01"),
    thumb: img("living-fireplace-01-thumb"),
    alt: "Refinished hardwood floor in a living room with fireplace and French doors",
    label: "Refinishing",
    span: "large",
  },
  {
    id: "herringbone-dining",
    type: "image",
    src: img("herringbone-dining"),
    thumb: img("herringbone-dining-thumb"),
    alt: "Herringbone hardwood floor pattern in a dining room",
    label: "Installation",
    span: "tall",
  },
  {
    id: "kitchen-navy-01",
    type: "image",
    src: img("kitchen-navy-01"),
    thumb: img("kitchen-navy-01-thumb"),
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
    id: "builtin-greatroom-01",
    type: "image",
    src: img("builtin-greatroom-01"),
    thumb: img("builtin-greatroom-01-thumb"),
    alt: "Light hardwood flooring in a great room with built-in cabinetry",
    label: "Hardwood Flooring",
    span: "wide",
  },
  {
    id: "stairs-after-wide",
    type: "image",
    src: img("stairs-after-wide"),
    thumb: img("stairs-after-wide-thumb"),
    alt: "Refinished staircase with stained wood treads and painted risers",
    label: "Refinishing",
    span: "tall",
  },
  {
    id: "venue-hall-01",
    type: "image",
    src: img("venue-hall-01"),
    thumb: img("venue-hall-01-thumb"),
    alt: "Large event hall with hardwood flooring and pendant lighting",
    label: "Installation",
    span: "normal",
  },
  {
    id: "amber-room",
    type: "video",
    src: vid("amber-room"),
    poster: poster("amber-room-poster"),
    alt: "Finished room with amber-stained hardwood flooring",
    label: "Refinishing",
    span: "normal",
  },
  {
    id: "bay-window-room",
    type: "image",
    src: img("bay-window-room"),
    thumb: img("bay-window-room-thumb"),
    alt: "Hardwood flooring in a sunlit room with bay windows",
    label: "Refinishing",
    span: "wide",
  },
  {
    id: "kitchen-navy-02",
    type: "image",
    src: img("kitchen-navy-02"),
    thumb: img("kitchen-navy-02-thumb"),
    alt: "Light oak hardwood flooring beneath a navy blue kitchen island",
    label: "Hardwood Flooring",
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
    id: "builtin-greatroom-02",
    type: "image",
    src: img("builtin-greatroom-02"),
    thumb: img("builtin-greatroom-02-thumb"),
    alt: "Hardwood flooring in a great room with a water view",
    label: "Hardwood Flooring",
    span: "normal",
  },
  {
    id: "floor-detail-mahogany",
    type: "image",
    src: img("floor-detail-mahogany"),
    thumb: img("floor-detail-mahogany-thumb"),
    alt: "Close-up detail of finished mahogany-tone hardwood flooring",
    label: "Refinishing",
    span: "normal",
  },
  {
    id: "venue-hall-02",
    type: "image",
    src: img("venue-hall-02"),
    thumb: img("venue-hall-02-thumb"),
    alt: "Event hall hardwood floor with string lighting",
    label: "Installation",
    span: "large",
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
];
