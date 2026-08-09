import { site } from "../data/site";

export function ServiceArea() {
  return (
    <section className="border-t border-line bg-paper py-20 md:py-28">
      <div className="container-editorial">
        <div className="mb-12 flex flex-col justify-between gap-4 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Service Area</p>
            <h2 className="font-display text-3xl font-extrabold text-charcoal sm:text-4xl md:text-[2.75rem]">
              Serving NJ &middot; NY &middot; PA &middot; MD
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-charcoal-soft">
            Residential and commercial flooring, delivered on-site by our own
            crews across the region.
          </p>
        </div>

        <div className="grid grid-cols-2 border-t border-l border-line md:grid-cols-4">
          {site.areasFull.map((area, i) => (
            <div
              key={area}
              className="group relative border-b border-r border-line p-6 transition-colors duration-300 hover:bg-charcoal sm:p-8"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-clay">
                0{i + 1}
              </span>
              <p className="mt-4 font-display text-4xl font-extrabold text-charcoal transition-colors duration-300 group-hover:text-ivory sm:text-5xl">
                {site.areas[i]}
              </p>
              <p className="mt-2 text-sm text-charcoal-soft transition-colors duration-300 group-hover:text-[#f6f2eab3]">
                {area}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
