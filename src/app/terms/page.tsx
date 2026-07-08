import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms governing Alma Solo Travel's planning services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" name="Terms" path="/terms">
      <p>Last updated: July 2025</p>
      <p>
        Please read these terms carefully before using Alma Solo Travel&rsquo;s planning services.
        By submitting an enquiry or purchasing a plan, you agree to these terms.
      </p>

      <h2>About Alma</h2>
      <p>
        Alma Solo Travel is a bespoke travel-planning service. We are a planning studio, not a
        travel agent, tour operator or booking platform. We do not make bookings on your behalf.
        Any bookings you make based on our recommendations are directly between you and the relevant
        hotel, airline or provider.
      </p>

      <h2>Our services</h2>
      <p>
        We offer personalised travel planning for women travelling independently, delivered as a
        digital guide. The scope of each plan is confirmed in writing before work begins and depends
        on the service tier you select.
      </p>
      <p>
        Delivery is typically within 7 days of receiving all required information from you. Rush
        planning may be available as a quoted extra.
      </p>

      <h2>Pricing and payment</h2>
      <p>
        Prices shown on our website are indicative starting points. Your final price is confirmed
        before any work begins and will depend on your trip length, destination and the complexity
        of your request. We will not proceed without your explicit agreement to the quoted price.
      </p>
      <p>
        Payment terms are confirmed at the time of booking. We typically require payment in full
        before the planning process begins.
      </p>

      <h2>Revisions</h2>
      <p>
        Each service tier includes a specified number of revision rounds. Additional revisions beyond
        what is included may be quoted and charged separately. Revisions are for refinements to the
        original brief, not a change in destination or trip type.
      </p>

      <h2>Cancellations and refunds</h2>
      <p>
        Once planning has begun, we are unable to offer a full refund as time and research have been
        invested in your trip. If you wish to cancel before planning begins, please contact us as
        soon as possible and we will discuss options in good faith.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        We take care with every recommendation and draw on direct experience and research.
        However, we cannot guarantee the availability, quality, pricing or conduct of any
        third-party provider, including hotels, restaurants, transport or experiences.
      </p>
      <p>
        Alma Solo Travel is not liable for any loss, damage or expense arising from your use of
        our plans, including changes to third-party services after delivery. We strongly recommend
        comprehensive travel insurance for all trips.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Your travel plan is created for your personal use only. You may not reproduce, resell or
        distribute any part of it without written permission from Alma Solo Travel.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales. Alma Solo Travel operates and
        serves clients in the US, UK, and Europe. Any disputes will be subject to the exclusive
        jurisdiction of the courts of England and Wales.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email us at{" "}
        <a href="mailto:hello@almasolotravel.com" className="underline">
          hello@almasolotravel.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
