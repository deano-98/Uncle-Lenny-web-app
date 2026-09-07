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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. Prevent default anchor behavior to control navigation cleanly
    e.preventDefault();

    // 2. Track analytics in a non-blocking block
    try {
      trackEvent("whatsapp_click", {
        location,
        service,
      });
    } catch (err) {
      console.error("Analytics error:", err);
    }

    // 3. Open WhatsApp target window directly
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}