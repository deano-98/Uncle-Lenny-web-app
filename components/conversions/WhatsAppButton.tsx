'use client';

import { trackEvent } from "@/lib/analytics/events";

type Props = {
  phone: string;
  message?: string;
  location: string;
  service?: string;
  children?: React.ReactNode;
  className?: string;
};

export function WhatsAppButton({
  phone,
  message,
  location,
  service,
  children = "WhatsApp Us",
  className,
}: Props) {
  const href = `https://wa.me/${phone.replace(/\D/g, "")}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        trackEvent("whatsapp_click", {
          location,
          service,
        })
      }
    >
      {children}
    </a>
  );
}
