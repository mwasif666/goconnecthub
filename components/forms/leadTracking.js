export function trackLead(leadType) {
    if (typeof window === "undefined" || typeof window.fbq !== "function") {
        return;
    }

    window.fbq("track", "Lead", {
        lead_type: leadType,
        content_name: leadType === "quote_form" ? "Get a Quote" : "Contact Us",
    });
}
