import { site } from "../data/site";

export function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a href={site.phoneHref} className={className}>
      {site.phoneDisplay}
    </a>
  );
}
