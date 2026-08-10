import { site } from "../data/site";

export function ReviewCTA() {
  return (
    <section className="border-t border-line bg-ivory py-16 md:py-20">
      <div className="container-editorial flex flex-col items-center text-center">
        <div className="flex gap-1" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-clay">
              <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77-4.19-4.08 5.79-.84L10 1.5Z" />
            </svg>
          ))}
        </div>

        <p className="eyebrow mt-5">Loved The Results?</p>
        <h2 className="mt-4 max-w-lg font-display text-3xl font-extrabold leading-[1.1] text-charcoal sm:text-4xl">
          Leave InovaFlooring a review.
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-charcoal-soft">
          If you&rsquo;re happy with your new floors, a quick Google review
          helps other homeowners across NJ, NY, PA &amp; MD find us.
        </p>

        <a
          href={site.googleReview}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-flex items-center justify-center gap-2.5 bg-clay px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-clay-dim"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#f6f2ea"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.55c2.08-1.92 3.28-4.74 3.28-8.1Z"
            />
            <path
              fill="#f6f2ea"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.55-2.77c-.98.66-2.24 1.05-3.73 1.05-2.87 0-5.3-1.94-6.17-4.53H2.18v2.85A11 11 0 0 0 12 23Z"
            />
            <path
              fill="#f6f2ea"
              d="M5.83 14.09A6.6 6.6 0 0 1 5.48 12c0-.73.13-1.44.35-2.09V7.06H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.94l3.65-2.85Z"
            />
            <path
              fill="#f6f2ea"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.06l3.65 2.85C6.7 7.32 9.13 5.38 12 5.38Z"
            />
          </svg>
          Leave a Google Review
        </a>
      </div>
    </section>
  );
}
