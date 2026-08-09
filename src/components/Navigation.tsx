import { useEffect, useState } from "react";
import { navLinks, site } from "../data/site";
import { useScrolled } from "../hooks/useScrolled";
import { Logo } from "./Logo";

export function Navigation() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b ${
        open
          ? "bg-[#f6f2ea] border-line"
          : scrolled
            ? "bg-[#f6f2eaf7] backdrop-blur-[3px] border-line transition-colors duration-300"
            : "bg-transparent border-transparent transition-colors duration-300"
      }`}
    >
      <nav className="container-editorial flex h-20 items-center justify-between">
        <a href="#top" onClick={() => setOpen(false)} className="shrink-0">
          <Logo size="md" tone={scrolled || open ? "dark" : "light"} />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[12px] font-bold uppercase tracking-[0.16em] transition-colors ${
                  scrolled || open ? "text-charcoal-soft hover:text-clay" : "text-[#f6f2ead9] hover:text-ivory"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={site.phoneHref}
            className={`text-[13px] font-bold tracking-wide transition-colors ${
              scrolled || open ? "text-charcoal-soft hover:text-clay" : "text-[#f6f2ead9] hover:text-ivory"
            }`}
          >
            {site.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="border border-clay bg-clay px-6 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-clay-dim hover:border-clay-dim"
          >
            Get a Free Estimate
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phoneDisplay}`}
            className={`flex h-10 w-10 items-center justify-center transition-colors ${
              scrolled || open ? "text-charcoal" : "text-ivory"
            }`}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-[2px] w-6 transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45 bg-charcoal" : `${scrolled ? "bg-charcoal" : "bg-ivory"}`
              }`}
            />
            <span
              className={`block h-[2px] w-6 transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45 bg-charcoal" : `${scrolled ? "bg-charcoal" : "bg-ivory"}`
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-[#f6f2ea] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container-editorial flex h-full flex-col justify-between py-10">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line py-5">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-bold text-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-full bg-clay py-4 text-center text-[13px] font-bold uppercase tracking-[0.12em] text-ivory"
            >
              Get a Free Estimate
            </a>
            <a
              href={site.phoneHref}
              className="text-center font-display text-2xl font-bold text-charcoal"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-3 border border-line py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-charcoal-soft transition-colors hover:border-charcoal hover:text-charcoal"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
              </svg>
              {site.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
