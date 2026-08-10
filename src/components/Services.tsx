import { useEffect, useRef, useState } from "react";
import { services, type Service } from "../data/services";

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex h-full w-[248px] shrink-0 snap-start flex-col border border-line bg-ivory transition-shadow duration-300 hover:shadow-lg sm:w-[280px]">
      {service.image ? (
        <div className="aspect-[4/3] w-full overflow-hidden bg-ink">
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </div>
      ) : (
        <div className="texture-lines aspect-[4/3] w-full bg-charcoal" aria-hidden="true" />
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-base font-bold leading-tight text-charcoal sm:text-lg">
          {service.name}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-charcoal-soft">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [thumb, setThumb] = useState({ widthPct: 100, leftPct: 0 });

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
    const widthPct = Math.min(100, (el.clientWidth / el.scrollWidth) * 100);
    const scrollRatio = max > 0 ? el.scrollLeft / max : 0;
    setThumb({ widthPct, leftPct: scrollRatio * (100 - widthPct) });
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    // `behavior: "smooth"` combined with scroll-snap can silently get stuck
    // in some Chromium versions and never actually move -- "instant" is the
    // reliable choice here. The CSS scroll-snap + scroll-smooth on the
    // container still gives touch/trackpad scrolling its natural glide.
    el.scrollBy({ left: amount * direction, behavior: "instant" });
    // Don't rely solely on the native "scroll" event to sync the arrow/thumb
    // state -- it isn't guaranteed to fire synchronously after a
    // programmatic scroll, so update explicitly right away too.
    updateScrollState();
  };

  const arrowClasses =
    "flex h-10 w-10 shrink-0 items-center justify-center border border-line text-charcoal transition-colors hover:border-charcoal disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-line";

  return (
    <section id="services" className="scroll-mt-20 border-t border-line bg-ivory py-20 md:py-28">
      <div className="container-editorial">
        <div className="mb-8 flex flex-col justify-between gap-6 md:mb-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="font-display text-3xl font-extrabold text-charcoal sm:text-4xl md:text-[2.75rem]">
              A full-service flooring contractor.
            </h2>
          </div>

          <div className="flex items-end justify-between gap-6 md:items-center">
            <p className="max-w-xs text-[15px] leading-relaxed text-charcoal-soft">
              From material selection to final finish, every category is
              handled by the same crew &mdash; not subcontracted out.
            </p>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
                aria-label="Scroll services left"
                className={arrowClasses}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 2 4 8l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
                aria-label="Scroll services right"
                className={arrowClasses}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-stone">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
            <path
              d="M1 6h16M1 6l3.5-3.5M1 6l3.5 3.5M17 6l-3.5-3.5M17 6l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Scroll to see all services
        </div>

        <div className="relative">
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ivory to-transparent transition-opacity duration-300 sm:w-16 ${
              atStart ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden="true"
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ivory to-transparent transition-opacity duration-300 sm:w-16 ${
              atEnd ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden="true"
          />

          <div
            ref={scrollRef}
            role="region"
            aria-label="Services, scroll horizontally for more"
            tabIndex={0}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 focus:outline-none sm:gap-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => (
              <div key={service.id} data-card>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-5 h-[3px] w-full max-w-[220px] rounded-full bg-line">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-clay transition-[left,width] duration-150 ease-out"
            style={{ width: `${thumb.widthPct}%`, left: `${thumb.leftPct}%` }}
          />
        </div>
      </div>
    </section>
  );
}
