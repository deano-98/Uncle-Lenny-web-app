"use client";

import { trackEvent } from "@/lib/analytics/events";

type Props = {
  email: string;
  location: string;
  children?: React.ReactNode;
  className?: string;
};

export function EmailButton({
  email,
  location,
  children = "Email Us",
  className,
}: Props) {
  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={() => trackEvent("email_click", { location })}
    >
      {children}
    </a>
  );
}
