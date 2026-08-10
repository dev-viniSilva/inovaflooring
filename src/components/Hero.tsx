import { site } from "../data/site";

const capabilities = [
  "Installation",
  "Refinishing",
  "Repairs",
  "Dust-Free Sanding",
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="/media/img/venue-hall-wide.webp"
          alt="Wide view of an event hall with hardwood flooring and exposed brick walls"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-[#131110a6] to-[#13111040]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131110bf] via-transparent to-transparent" />
      </div>

      <div className="container-editorial relative z-10 w-full pb-16 pt-40 sm:pb-20 md:pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 animate-fade-up !text-clay-dim">
            Hardwood Flooring &middot; {site.areas.join(" · ")}
          </p>

          <h1
            className="animate-fade-up font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-tight text-ivory sm:text-6xl lg:text-[5.25rem]"
            style={{ animationDelay: "80ms" }}
          >
            Floors built right.
            <br />
            Made to last.
          </h1>

          <p
            className="mt-6 max-w-lg animate-fade-up text-[15px] leading-relaxed text-[#f6f2eabf] sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Professional hardwood flooring installation, dust-free sanding,
            repairs, and refinishing for homes and businesses across the
            region.
          </p>

          <ul
            className="mt-6 flex animate-fade-up flex-wrap gap-x-5 gap-y-2 border-y border-[#f6f2ea26] py-4"
            style={{ animationDelay: "200ms" }}
          >
            {capabilities.map((c) => (
              <li key={c} className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#f6f2eab3]">
                {c}
              </li>
            ))}
          </ul>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "260ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-clay px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-clay-dim"
            >
              Request a Free Estimate
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center border border-[#f6f2ea66] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-colors hover:border-ivory hover:bg-[#f6f2ea1a]"
            >
              View Our Work
            </a>
          </div>

          <a
            href={site.phoneHref}
            className="mt-7 inline-block animate-fade-up text-sm font-bold tracking-wide text-[#f6f2eacc] underline decoration-[#f6f2ea4d] underline-offset-4 transition-colors hover:text-ivory"
            style={{ animationDelay: "320ms" }}
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
