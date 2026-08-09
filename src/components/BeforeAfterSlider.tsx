import { useCallback, useRef, useState } from "react";
import type { BeforeAfterPair } from "../data/beforeAfter";

interface BeforeAfterSliderProps {
  pair: BeforeAfterPair;
}

export function BeforeAfterSlider({ pair }: BeforeAfterSliderProps) {
  const [percent, setPercent] = useState(50);
  const [interacted, setInteracted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, pct)));
    setInteracted(true);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => setDragging(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    let next = percent;
    if (e.key === "ArrowLeft") next -= 5;
    else if (e.key === "ArrowRight") next += 5;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = 100;
    else return;
    e.preventDefault();
    setPercent(Math.min(100, Math.max(0, next)));
    setInteracted(true);
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="group relative aspect-[4/3] w-full touch-none select-none overflow-hidden bg-ivory-dim sm:aspect-[16/10]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={() => dragging && setDragging(false)}
      >
        <img
          src={pair.after.src}
          alt={pair.after.alt}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          loading="lazy"
        />

        <img
          src={pair.before.src}
          alt={pair.before.alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
          draggable={false}
          loading="lazy"
        />

        <span className="absolute left-4 top-4 bg-[#201c18b3] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ivory">
          Before
        </span>
        <span className="absolute right-4 top-4 bg-[#201c18b3] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ivory">
          After
        </span>

        <div
          className="absolute inset-y-0 z-10 flex w-0 -translate-x-1/2 items-center justify-center"
          style={{ left: `${percent}%` }}
        >
          <div className="absolute inset-y-0 w-px bg-[#f6f2eae6]" />
          <div
            role="slider"
            tabIndex={0}
            aria-label={`Comparison slider for ${pair.title}. Use arrow keys to compare before and after.`}
            aria-valuenow={Math.round(percent)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={onKeyDown}
            className="flex h-11 w-11 cursor-ew-resize items-center justify-center rounded-full border border-[#f6f2eacc] bg-[#201c18cc] text-ivory shadow-lg transition-transform focus-visible:scale-110"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M5 3 1 8l4 5M11 3l4 5-4 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-5 flex justify-center transition-opacity duration-500 ${
            interacted ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="bg-[#201c18b3] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ivory">
            Drag to compare
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-xl text-charcoal">{pair.title}</h3>
        <span className="eyebrow">{pair.service}</span>
      </div>
    </div>
  );
}
