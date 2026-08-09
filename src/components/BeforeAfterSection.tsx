import { useState } from "react";
import { beforeAfterPairs } from "../data/beforeAfter";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function BeforeAfterSection() {
  const [active, setActive] = useState(0);
  const pair = beforeAfterPairs[active];

  return (
    <section className="border-t border-line bg-paper py-20 md:py-28">
      <div className="container-editorial">
        <div className="mb-12 max-w-xl md:mb-16">
          <p className="eyebrow mb-4">The Transformation</p>
          <h2 className="text-3xl text-charcoal sm:text-4xl md:text-[2.75rem]">
            See the difference craftsmanship makes.
          </h2>
        </div>

        <BeforeAfterSlider key={pair.id} pair={pair} />

        {beforeAfterPairs.length > 1 && (
          <div className="mt-8 flex gap-3">
            {beforeAfterPairs.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(i)}
                className={`border px-4 py-2 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors ${
                  i === active
                    ? "border-charcoal bg-charcoal text-ivory"
                    : "border-line text-charcoal-soft hover:border-charcoal"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
