import { useEffect, useRef, useState } from "react";
import { services, type Service } from "../data/services";

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex h-full w-[248px] shrink-0 flex-col border border-line bg-ivory transition-shadow duration-300 hover:shadow-lg sm:w-[280px]">
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
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const [step, setStep] = useState(0);
  const [thumb, setThumb] = useState({ widthPct: 100, leftPct: 0 });

  const measure = () => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || "16") || 16;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.getBoundingClientRect().width : viewport.clientWidth * 0.8;

    const newMax = Math.max(0, track.scrollWidth - viewport.clientWidth);
    setStep(cardWidth + gap);
    setMaxOffset(newMax);
    setOffset((o) => Math.min(o, newMax));
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    // Measure synchronously right away -- don't rely solely on
    // ResizeObserver's first callback, since its delivery timing isn't
    // guaranteed the same way across every browser/rendering context, and
    // step/maxOffset must never be left at their zero defaults (that would
    // silently clamp every scroll to a no-op).
    measure();

    const observer = new ResizeObserver(() => measure());
    observer.observe(viewport);
    observer.observe(track);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const viewportWidth = viewportRef.current?.clientWidth ?? 0;
    const trackWidth = trackRef.current?.scrollWidth ?? 0;
    const widthPct = trackWidth > 0 ? Math.min(100, (viewportWidth / trackWidth) * 100) : 100;
    const ratio = maxOffset > 0 ? offset / maxOffset : 0;
    setThumb({ widthPct, leftPct: ratio * (100 - widthPct) });
  }, [offset, maxOffset]);

  const goTo = (next: number) => setOffset(Math.min(maxOffset, Math.max(0, next)));
  const goPrev = () => goTo(offset - (step || 1));
  const goNext = () => goTo(offset + (step || 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) goPrev();
    else if (delta < -40) goNext();
    touchStartX.current = null;
  };

  const atStart = offset <= 0;
  const atEnd = offset >= maxOffset;

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
                onClick={goPrev}
                disabled={atStart}
                aria-label="Previous services"
                className={arrowClasses}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 2 4 8l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={atEnd}
                aria-label="Next services"
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
          Swipe or use the arrows to see all services
        </div>

        <div
          ref={viewportRef}
          role="region"
          aria-label="Services"
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex gap-3 sm:gap-4"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: "transform 500ms cubic-bezier(0.65, 0, 0.35, 1)",
            }}
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
            className="absolute inset-y-0 left-0 rounded-full bg-clay transition-[left,width] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ width: `${thumb.widthPct}%`, left: `${thumb.leftPct}%` }}
          />
        </div>
      </div>
    </section>
  );
}
