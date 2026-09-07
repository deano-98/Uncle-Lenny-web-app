export type AnalyticsParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event",
      targetOrEventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export const ANALYTICS_EVENTS = {
  WHATSAPP_CLICK: "whatsapp_click",
  PHONE_CLICK: "phone_click",
  EMAIL_CLICK: "email_click",
  DIRECTIONS_CLICK: "directions_click",
  GENERATE_LEAD: "generate_lead",
  VIEW_SERVICE: "view_service",
  VIEW_PRICING: "view_pricing",
  BOOKING_START: "booking_start",
  BOOKING_COMPLETE: "booking_complete",
  PURCHASE: "purchase",
} as const;

export type AnalyticsEventName =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS] | string;

export function trackEvent(
  eventName: AnalyticsEventName,
  params: AnalyticsParams = {}
) {
  if (typeof window === "undefined") return;

  const campaign = getStoredCampaign();

  window.gtag?.("event", eventName, {
    ...params,
    ...(campaign
      ? {
          campaign_source: campaign.source,
          campaign_medium: campaign.medium,
          campaign_name: campaign.name,
        }
      : {}),
  });
}

export type CampaignData = {
  source?: string;
  medium?: string;
  name?: string;
  term?: string;
  content?: string;
};

const CAMPAIGN_KEY = "site_campaign";

export function getStoredCampaign(): CampaignData | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = sessionStorage.getItem(CAMPAIGN_KEY);
    return raw ? (JSON.parse(raw) as CampaignData) : null;
  } catch {
    return null;
  }
}
