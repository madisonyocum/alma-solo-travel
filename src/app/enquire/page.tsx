import { Suspense } from "react";
import type { Metadata } from "next";
import { EnquiryFormLoader } from "./EnquiryFormLoader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Start Planning, Alma Solo Travel",
  description:
    "Start your Alma enquiry. Tell us about the solo journey you have in mind and we'll shape it into something personal, considered and entirely your own.",
  path: "/enquire",
});

export default function EnquirePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background pt-16 sm:pt-20">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-10 sm:px-6">
        <Suspense fallback={<p className="p-12 text-center text-muted-ink">Loading…</p>}>
          <EnquiryFormLoader />
        </Suspense>
      </div>
    </div>
  );
}
