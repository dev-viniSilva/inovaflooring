import { services, type Service } from "../data/services";

const spanClasses: Record<Service["span"], string> = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  large: "col-span-2 row-span-2",
};

function ServiceTile({ service }: { service: Service }) {
  if (service.image) {
    return (
      <div className={`group relative overflow-hidden bg-ink ${spanClasses[service.span]}`}>
        <img
          src={service.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-[#131110a6] to-[#1311101a]" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3 className="font-display text-lg font-bold leading-tight text-ivory sm:text-xl">
            {service.name}
          </h3>
          <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-[#f6f2eab3] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-sm">
            {service.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`texture-lines group relative flex flex-col justify-between overflow-hidden bg-charcoal p-5 transition-colors duration-300 hover:bg-[#241f1a] sm:p-6 ${spanClasses[service.span]}`}
    >
      <span className="h-px w-8 bg-clay" aria-hidden="true" />
      <div>
        <h3 className="font-display text-lg font-bold leading-tight text-ivory sm:text-xl">
          {service.name}
        </h3>
        <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-[#f6f2eab3] sm:text-sm">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-line bg-ivory py-20 md:py-28">
      <div className="container-editorial">
        <div className="mb-12 flex flex-col justify-between gap-4 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="font-display text-3xl font-extrabold text-charcoal sm:text-4xl md:text-[2.75rem]">
              A full-service flooring contractor.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-charcoal-soft">
            From material selection to final finish, every category is
            handled by the same crew &mdash; not subcontracted out.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 [grid-auto-rows:200px] sm:gap-3 md:grid-cols-4 md:[grid-auto-rows:240px]">
          {services.map((service) => (
            <ServiceTile key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
