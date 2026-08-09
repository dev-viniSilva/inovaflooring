import { useState } from "react";
import { galleryItems } from "../data/gallery";
import { GalleryTile } from "./GalleryTile";
import { Lightbox } from "./Lightbox";

export function ProjectGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="work" className="scroll-mt-20 border-t border-line bg-ivory py-20 md:py-28">
      <div className="container-editorial">
        <div className="mb-12 flex flex-col justify-between gap-4 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Selected Work</p>
            <h2 className="text-3xl text-charcoal sm:text-4xl md:text-[2.75rem]">
              Floors, photographed as they deserve to be.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 [grid-auto-rows:180px] sm:gap-3 md:grid-cols-4 md:[grid-auto-rows:220px]">
          {galleryItems.map((item, i) => (
            <GalleryTile key={item.id} item={item} onOpen={() => setOpenIndex(i)} />
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          items={galleryItems}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
