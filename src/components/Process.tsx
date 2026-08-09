import { process } from "../data/services";

export function Process() {
  return (
    <section className="border-t border-line bg-ivory py-20 md:py-28">
      <div className="container-editorial">
        <p className="eyebrow mb-4">How It Works</p>
        <h2 className="mb-12 max-w-lg text-3xl text-charcoal sm:text-4xl md:mb-16 md:text-[2.75rem]">
          From first call to finished floor.
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <div
              key={step.number}
              className={`border-t border-line pt-6 ${i > 0 ? "lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" : ""}`}
            >
              <span className="font-display text-lg font-extrabold text-clay">{step.number}</span>
              <h3 className="mt-3 text-xl text-charcoal">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
