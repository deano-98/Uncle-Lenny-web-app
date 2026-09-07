"use client";

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
  const cleanPhone = phone.replace(/\D/g, "");
  const href = `https://wa.me/${cleanPhone}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  const handleClick = () => {
    try {
      trackEvent("whatsapp_click", {
        location,
        service,
      });
    } catch (err) {
      console.error("Analytics error:", err);
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}