import { useCallback, useRef, useState } from "react";
import type { BeforeAfterPair } from "../data/beforeAfter";

interface BeforeAfterSliderProps {
  pair: BeforeAfterPair;
}

// Horizontal movement (px) before a touch is treated as a drag instead of a scroll.
const DRAG_THRESHOLD = 6;

export function BeforeAfterSlider({ pair }: BeforeAfterSliderProps) {
  const [percent, setPercent] = useState(50);
  const [interacted, setInteracted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const start = useRef<{ x: number; y: number; id: number; touch: boolean } | null>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, pct)));
    setInteracted(true);
  }, []);

  const beginDrag = (e: React.PointerEvent) => {
    draggingRef.current = true;
    setDragging(true);
    try {
      containerRef.current?.setPointerCapture?.(e.pointerId);
    } catch {
      // Pointer already released; dragging still works without capture.
    }
    updateFromClientX(e.clientX);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const isTouch = e.pointerType === "touch" || e.pointerType === "pen";
    start.current = { x: e.clientX, y: e.clientY, id: e.pointerId, touch: isTouch };
    // Mouse: grab immediately. Touch: wait to see if the user is scrolling the
    // page or dragging the slider, so vertical scrolling is never hijacked.
    if (!isTouch) beginDrag(e);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const s = start.current;
    if (!s || s.id !== e.pointerId) return;
    if (draggingRef.current) {
      updateFromClientX(e.clientX);
      return;
    }
    if (s.touch) {
      const dx = Math.abs(e.clientX - s.x);
      const dy = Math.abs(e.clientY - s.y);
      if (dx > DRAG_THRESHOLD && dx > dy) beginDrag(e);
    }
  };

  const endDrag = (e: React.PointerEvent, tapJump: boolean) => {
    const s = start.current;
    if (s && s.id === e.pointerId && s.touch && !draggingRef.current && tapJump) {
      // A plain tap (no scroll, no drag) jumps the divider to that spot.
      const moved = Math.hypot(e.clientX - s.x, e.clientY - s.y);
      if (moved <= DRAG_THRESHOLD) updateFromClientX(e.clientX);
    }
    start.current = null;
    draggingRef.current = false;
    setDragging(false);
  };

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

  const ease = dragging ? "none" : "300ms cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        // pan-y: the page can still scroll vertically over the slider on touch
        // devices; only horizontal gestures are handled by the slider.
        style={{ touchAction: "pan-y" }}
        className="group relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden bg-ivory-dim shadow-[0_20px_50px_-20px_rgba(19,17,16,0.35)] sm:aspect-[16/10]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => endDrag(e, true)}
        onPointerCancel={(e) => endDrag(e, false)}
      >
        <img
          src={pair.after.src}
          alt={pair.after.alt}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          draggable={false}
          loading="lazy"
        />

        <img
          src={pair.before.src}
          alt={pair.before.alt}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{
            clipPath: `inset(0 ${100 - percent}% 0 0)`,
            transition: dragging ? "none" : `clip-path ${ease}`,
          }}
          draggable={false}
          loading="lazy"
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#13111059] to-transparent" />

        <span
          className="pointer-events-none absolute left-4 top-4 bg-[#201c18b3] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ivory backdrop-blur-sm transition-opacity duration-300"
          style={{ opacity: percent < 12 ? 0 : 1 }}
        >
          Before
        </span>
        <span
          className="pointer-events-none absolute right-4 top-4 bg-[#201c18b3] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ivory backdrop-blur-sm transition-opacity duration-300"
          style={{ opacity: percent > 88 ? 0 : 1 }}
        >
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 flex w-0 -translate-x-1/2 items-center justify-center"
          style={{ left: `${percent}%`, transition: dragging ? "none" : `left ${ease}` }}
        >
          <div className="absolute inset-y-0 w-[2px] bg-ivory shadow-[0_0_12px_rgba(0,0,0,0.35)]" />
          <div
            role="slider"
            tabIndex={0}
            aria-label={`Comparison slider for ${pair.title}. Use arrow keys to compare before and after.`}
            aria-valuenow={Math.round(percent)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={onKeyDown}
            className={`pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-ivory bg-[#201c18d9] text-ivory shadow-xl backdrop-blur-sm transition-transform duration-200 focus-visible:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-dim ${
              dragging ? "scale-110" : "group-hover:scale-105"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M7 4 2 10l5 6M13 4l5 6-5 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-5 flex justify-center transition-opacity duration-500 ${
            interacted ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="flex items-center gap-2 bg-[#201c18b3] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ivory backdrop-blur-sm">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h12M1 5l3-3M1 5l3 3M13 5l-3-3M13 5l-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Drag to compare
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-xl text-charcoal">{pair.title}</h3>
        <span className="eyebrow">{pair.service}</span>
      </div>
    </div>
  );
}
