'use client';

import { useEffect } from "react";

const CAMPAIGN_KEY = "site_campaign";

export function CampaignTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const source = params.get("utm_source");
    const medium = params.get("utm_medium");
    const name = params.get("utm_campaign");
    const term = params.get("utm_term");
    const content = params.get("utm_content");

    if (!source && !medium && !name && !term && !content) return;

    sessionStorage.setItem(
      CAMPAIGN_KEY,
      JSON.stringify({ source, medium, name, term, content })
    );
  }, []);

  return null;
}
