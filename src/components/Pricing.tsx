const factors = [
  "Material",
  "Project size",
  "Installation requirements",
  "Existing flooring",
  "Preparation",
  "Finish",
  "Customization",
];

export function Pricing() {
  return (
    <section className="texture-lines border-t border-line-dark bg-charcoal py-20 md:py-28">
      <div className="container-editorial grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="eyebrow mb-4">Investment</p>
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] text-ivory sm:text-4xl md:text-[2.75rem]">
            Professional flooring from
          </h2>
          <p className="mt-3 font-display text-6xl font-extrabold leading-none text-clay-dim sm:text-7xl md:text-8xl">
            $4.50
            <span className="ml-2 text-xl font-bold text-[#f6f2eab3] sm:text-2xl">
              / sq. ft.
            </span>
          </p>

          <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-[#f6f2eabf]">
            Final pricing depends on the specifics of your project. We give
            every homeowner a clear, itemized estimate before work begins
            &mdash; no surprises, no vague ranges.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center bg-clay px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-clay-dim"
          >
            Request a Free Estimate
          </a>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#f6f2ea99]">
            Pricing depends on
          </p>
          <ul className="mt-5 flex flex-col">
            {factors.map((factor) => (
              <li
                key={factor}
                className="border-t border-line-dark py-3.5 text-[15px] text-ivory first:border-t-0"
              >
                {factor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
