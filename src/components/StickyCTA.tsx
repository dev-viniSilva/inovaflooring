import { useEffect, useState } from "react";
import { site } from "../data/site";
import { useScrolled } from "../hooks/useScrolled";

// Mobile-only action bar pinned to the bottom of the screen: one tap to call
// or jump to the estimate form. It appears after the hero and tucks away while
// the contact form itself is on screen.
export function StickyCTA() {
  const pastHero = useScrolled(480);
  const [contactInView, setContactInView] = useState(false);

  useEffect(() => {
    const check = () => {
      const target = document.getElementById("contact");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      setContactInView(rect.top < window.innerHeight * 0.75 && rect.bottom > 0);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const visible = pastHero && !contactInView;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-[#131110f2] px-3 pt-3 backdrop-blur-md transition-transform duration-300 ease-out lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-md items-center gap-2">
        <a
          href="#top"
          aria-label="Back to top"
          tabIndex={visible ? 0 : -1}
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ivory min-[400px]:flex"
        >
          <img
            src="/media/img/logo-icon.png"
            alt=""
            aria-hidden="true"
            width={30}
            height={30}
            className="h-[30px] w-[30px] select-none"
            draggable={false}
          />
        </a>

        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="InovaFlooring on Instagram"
          tabIndex={visible ? 0 : -1}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f6f2ea40] text-ivory transition-colors active:bg-[#f6f2ea1a]"
        >
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
          </svg>
        </a>

        <a
          href={site.phoneHref}
          tabIndex={visible ? 0 : -1}
          className="flex h-12 shrink-0 items-center justify-center gap-1.5 border border-[#f6f2ea40] px-3 text-[12px] font-bold tracking-wide text-ivory transition-colors active:bg-[#f6f2ea1a]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="whitespace-nowrap">{site.phoneDisplay}</span>
        </a>

        <a
          href="#contact"
          tabIndex={visible ? 0 : -1}
          className="flex h-12 min-w-0 flex-1 items-center justify-center whitespace-nowrap bg-clay px-3 text-[13px] font-bold uppercase tracking-[0.08em] text-ivory transition-colors active:bg-clay-dim"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}
