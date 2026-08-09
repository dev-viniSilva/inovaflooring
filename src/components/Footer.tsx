import { services } from "../data/services";
import { site } from "../data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-charcoal py-16 text-[#f6f2eacc]">
      <div className="container-editorial grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo size="lg" tone="light" />
          <p className="mt-6 max-w-[260px] text-sm leading-relaxed">
            Professional hardwood flooring installation, dust-free sanding,
            repairs, and refinishing for NJ, NY, PA &amp; MD.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center justify-center border border-[#f6f2ea66] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-ivory transition-colors hover:border-clay-dim hover:text-clay-dim"
          >
            Get a Free Estimate
          </a>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-8 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-4 !text-[#f6f2ea80]">Services</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>{s.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 !text-[#f6f2ea80]">Contact</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-clay-dim">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="transition-colors hover:text-clay-dim">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-clay-dim"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 !text-[#f6f2ea80]">Serving</p>
            <p className="text-sm">{site.areas.join(" · ")}</p>
            <p className="eyebrow mb-4 mt-8 !text-[#f6f2ea80]">Hours</p>
            <p className="text-sm">
              {site.hoursLine} &middot; {site.hoursDetail}
            </p>
          </div>
        </div>
      </div>

      <div className="container-editorial mt-14 flex flex-col gap-2 border-t border-line-dark pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[#f6f2ea99]">&copy; {new Date().getFullYear()} InovaFlooring. All rights reserved.</p>
      </div>
    </footer>
  );
}
