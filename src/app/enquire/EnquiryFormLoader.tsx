"use client";

import { useSearchParams } from "next/navigation";
import { EnquiryForm } from "@/components/EnquiryForm";

/**
 * Reads the optional ?service= query param (set by the service-tier CTAs) and
 * passes it to the enquiry form so the relevant support level is preselected.
 */
export function EnquiryFormLoader() {
  const params = useSearchParams();
  return (
    <EnquiryForm
      defaultService={params.get("service") ?? undefined}
      defaultDestination={params.get("destination") ?? undefined}
      defaultDates={params.get("dates") ?? undefined}
      defaultTripLength={params.get("tripLength") ?? undefined}
    />
  );
}
