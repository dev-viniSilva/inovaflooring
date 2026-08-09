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
      alt: "Staircase newel post with carpeted upper treads and a bare, unfinished handrail before refinishing",
    },
    after: {
      src: img("stairs-after-closeup"),
      alt: "Same staircase newel post after refinishing, with a glossy black handrail and rich stained treads",
    },
  },
  {
    id: "staircase-02",
    title: "Staircase Detail",
    service: "Refinishing",
    before: {
      src: img("stairs-before-detail"),
      alt: "Close-up of worn staircase treads with a dull, faded finish before restoration",
    },
    after: {
      src: img("stairs-after-detail"),
      alt: "Refinished staircase with glossy stained treads and a black handrail after restoration",
    },
  },
];
