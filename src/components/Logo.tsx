const sizes = {
  sm: { icon: 26, title: "text-[15px]", sub: "text-[8px]", gap: "gap-2" },
  md: { icon: 34, title: "text-[19px]", sub: "text-[9px]", gap: "gap-2.5" },
  lg: { icon: 52, title: "text-[28px]", sub: "text-[11px]", gap: "gap-3.5" },
  xl: { icon: 72, title: "text-[38px]", sub: "text-[13px]", gap: "gap-4" },
} as const;

interface LogoProps {
  size?: keyof typeof sizes;
  tone?: "dark" | "light";
  className?: string;
}

export function Logo({ size = "md", tone = "dark", className = "" }: LogoProps) {
  const s = sizes[size];
  const titleColor = tone === "light" ? "text-ivory" : "text-charcoal";
  const subColor = tone === "light" ? "text-[#f6f2ea99]" : "text-[#322e29b3]";

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <img
        src="/media/img/logo-icon.png"
        alt=""
        aria-hidden="true"
        width={s.icon}
        height={s.icon}
        className="shrink-0 select-none"
        style={{ width: s.icon, height: s.icon }}
        draggable={false}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-extrabold uppercase tracking-[0.01em] ${s.title} ${titleColor}`}>
          Inova
        </span>
        <span className={`mt-1 font-sans font-semibold uppercase tracking-[0.32em] ${s.sub} ${subColor}`}>
          Flooring
        </span>
      </span>
    </span>
  );
}
