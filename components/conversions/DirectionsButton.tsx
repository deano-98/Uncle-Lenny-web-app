"use client";

import { trackEvent } from "@/lib/analytics/events";

type Props = {
  href: string;
  location: string;
  children?: React.ReactNode;
  className?: string;
};

export function DirectionsButton({
  href,
  location,
  children = "Get Directions",
  className,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent("directions_click", { location })}
    >
      {children}
    </a>
  );
}
