import { services, type Service } from "../data/services";

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col border border-line bg-ivory transition-shadow duration-300 hover:shadow-lg">
      {service.image ? (
        <div className="aspect-[4/3] w-full overflow-hidden bg-ink">
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </div>
      ) : (
        <div className="texture-lines aspect-[4/3] w-full bg-charcoal" aria-hidden="true" />
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-base font-bold leading-tight text-charcoal sm:text-lg">
          {service.name}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-charcoal-soft">
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

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
