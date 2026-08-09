import type { GalleryItem } from "../data/gallery";
import { InovaBadge } from "./InovaBadge";

const spanClasses: Record<GalleryItem["span"], string> = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  large: "col-span-2 row-span-2",
};

interface GalleryTileProps {
  item: GalleryItem;
  onOpen: () => void;
}

export function GalleryTile({ item, onOpen }: GalleryTileProps) {
  const tileSrc = item.type === "image" ? item.src : item.poster;

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative overflow-hidden bg-ivory-dim text-left ${spanClasses[item.span]}`}
      aria-label={`Open ${item.label} project photo: ${item.alt}`}
    >
      <img
        src={tileSrc}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div className="pointer-events-none absolute inset-0 bg-transparent transition-colors duration-500 group-hover:bg-[#201c1840]" />

      {item.type === "video" && (
        <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#201c18b3] text-ivory">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
            <path d="M2 1.5v9l8-4.5-8-4.5Z" />
          </svg>
        </span>
      )}

      <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#201c18b3] text-ivory opacity-80 transition-opacity duration-300 group-hover:opacity-100">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M6 2H2v4M10 2h4v4M6 14H2v-4M10 14h4v-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="pointer-events-none absolute bottom-3 left-3 translate-y-1 bg-[#f6f2eaf2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-charcoal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {item.label}
      </span>

      <InovaBadge />
    </button>
  );
}
