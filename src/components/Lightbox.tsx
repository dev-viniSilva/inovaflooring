import { useEffect, useRef } from "react";
import type { GalleryItem } from "../data/gallery";
import { LightboxVideo } from "./LightboxVideo";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const item = items[index];

  const goPrev = () => onNavigate((index - 1 + items.length) % items.length);
  const goNext = () => onNavigate((index + 1) % items.length);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goPrev();
    else if (delta < -50) goNext();
    touchStartX.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.label} project viewer`}
      className="fixed inset-0 z-[100] flex flex-col bg-[#201c18f7] animate-fade-in"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-8 md:py-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#f6f2eab3]">
          {index + 1} / {items.length} &middot; {item.label}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="flex h-10 w-10 items-center justify-center text-ivory transition-colors hover:text-clay"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 md:px-16">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous project photo"
          className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6f2ea26] text-ivory backdrop-blur-sm transition-colors hover:bg-[#f6f2ea40] hover:text-clay active:scale-90 sm:h-14 sm:w-14 md:left-4"
        >
          <svg width="26" height="26" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 2 4 8l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          key={item.id}
          className="relative flex max-h-full max-w-4xl animate-fade-in-fast flex-col items-center"
        >
          <div className="absolute left-1/2 top-0 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#f6f2ea33] bg-ink shadow-lg sm:h-14 sm:w-14">
            <img
              src="/media/img/logo-icon.png"
              alt="InovaFlooring"
              width={28}
              height={28}
              className="h-7 w-7 select-none sm:h-8 sm:w-8"
              draggable={false}
            />
          </div>

          {item.type === "image" ? (
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[70svh] w-auto object-contain"
            />
          ) : (
            <LightboxVideo src={item.src} poster={item.poster} alt={item.alt} />
          )}
          <p className="mt-4 max-w-lg text-center text-sm text-[#f6f2eab3]">{item.alt}</p>
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next project photo"
          className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6f2ea26] text-ivory backdrop-blur-sm transition-colors hover:bg-[#f6f2ea40] hover:text-clay active:scale-90 sm:h-14 sm:w-14 md:right-4"
        >
          <svg width="26" height="26" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
