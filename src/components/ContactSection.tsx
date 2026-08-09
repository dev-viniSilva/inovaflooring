import { ContactForm } from "./ContactForm";
import { Logo } from "./Logo";
import { site } from "../data/site";

export function ContactSection() {
  return (
    <section id="contact" className="texture-lines scroll-mt-20 border-t border-line-dark bg-ink py-20 md:py-28">
      <div className="container-editorial">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] text-ivory sm:text-4xl md:text-[2.75rem]">
            Let&rsquo;s Talk About Your Floors.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#f6f2eabf]">
            Tell us about your project and we&rsquo;ll get back to you with
            the next steps.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl border border-line-dark bg-paper p-6 shadow-2xl sm:p-10 md:p-12">
          <div className="mb-8 flex justify-center">
            <Logo size="lg" tone="dark" />
          </div>
          <ContactForm />
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <a href={site.phoneHref} className="text-[15px] font-bold text-ivory transition-colors hover:text-clay-dim">
            {site.phoneDisplay}
          </a>
          <a href={site.emailHref} className="text-[15px] font-bold text-ivory transition-colors hover:text-clay-dim">
            {site.email}
          </a>
          <p className="text-[15px] text-[#f6f2ea99]">
            {site.hoursLine} &middot; {site.hoursDetail}
          </p>
        </div>
      </div>
    </section>
  );
}
