export function InovaBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute bottom-3 right-3 bg-[#201c18b3] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ivory ${className}`}
    >
      InovaFloor
    </span>
  );
}
