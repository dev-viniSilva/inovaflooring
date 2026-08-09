export interface BeforeAfterPair {
  id: string;
  title: string;
  service: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}

const img = (name: string) => `/media/img/${name}.webp`;

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "staircase-01",
    title: "Staircase Restoration",
    service: "Refinishing",
    before: {
      src: img("stairs-before-wide"),
      alt: "Worn oak stair treads with carpeted upper flight before refinishing",
    },
    after: {
      src: img("stairs-after-wide"),
      alt: "Same staircase after refinishing, with rich stained treads and painted risers",
    },
  },
  {
    id: "staircase-02",
    title: "Staircase Railing & Treads",
    service: "Refinishing",
    before: {
      src: img("stairs-before-detail"),
      alt: "Staircase railing and worn treads before restoration",
    },
    after: {
      src: img("stairs-after-detail"),
      alt: "Staircase railing and treads after restoration, with dark handrail and stained wood",
    },
  },
];
