import { AmbientVideo } from "./AmbientVideo";

const points = [
  "Professional craftsmanship on every job, residential or commercial",
  "Dust-free sanding technology on every refinishing project",
  "Experienced installation crews — not subcontracted labor",
  "Quality materials backed by a clear, itemized estimate",
  "Serving NJ, NY, PA & MD",
];

export function WhyInova() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line bg-ink py-20 md:py-28">
      <div className="container-editorial grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6">
          <p className="eyebrow mb-4 !text-clay-dim">Why InovaFlooring</p>
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] text-ivory sm:text-4xl md:text-[2.75rem]">
            Floors are our only trade. That&rsquo;s why they&rsquo;re done
            right.
          </h2>

          <ul className="mt-10 flex flex-col">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 border-t border-line-dark py-4 first:border-t-0 first:pt-0"
              >
                <span className="mt-2.5 h-px w-5 shrink-0 bg-clay-dim" aria-hidden="true" />
                <span className="text-[15px] leading-relaxed text-[#f6f2eabf]">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3 self-start md:col-span-6 md:col-start-7">
          <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
            <AmbientVideo
              src="/media/video/dustfree-sanding.mp4"
              poster="/media/img/dustfree-sanding-poster.jpg"
              alt="Technician using a dust-free sanding system on a hardwood floor"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-[#131110b3] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ivory">
              Dust-Free Sanding
            </span>
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden bg-charcoal">
            <AmbientVideo
              src="/media/video/drum-sanding.mp4"
              poster="/media/img/drum-sanding-poster.jpg"
              alt="Drum sander refinishing a hardwood floor"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-[#131110b3] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ivory">
              Refinishing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
