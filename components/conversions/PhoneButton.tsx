"use client";

import { trackEvent } from "@/lib/analytics/events";

type Props = {
  phone: string;
  location: string;
  children?: React.ReactNode;
  className?: string;
};

export function PhoneButton({
  phone,
  location,
  children = "Call Us",
  className,
}: Props) {
  return (
    <a
      href={`tel:${phone}`}
      className={className}
      onClick={() => trackEvent("phone_click", { location })}
    >
      {children}
    </a>
  );
}
