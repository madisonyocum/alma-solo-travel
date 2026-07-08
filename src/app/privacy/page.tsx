import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Alma Solo Travel handles your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" name="Privacy" path="/privacy">
      <p>Last updated: July 2025</p>
      <p>
        Alma Solo Travel (&ldquo;Alma&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to
        protecting your personal information. This policy explains what we collect, how we use it,
        and your rights in relation to it.
      </p>

      <h2>Who we are</h2>
      <p>
        Alma Solo Travel is a bespoke travel-planning service for women travelling independently.
        For questions about this policy, contact us at{" "}
        <a href="mailto:hello@almasolotravel.com" className="underline">
          hello@almasolotravel.com
        </a>
        .
      </p>

      <h2>What we collect</h2>
      <p>We collect the following information when you submit an enquiry or sign up to our journal:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Your name and email address</li>
        <li>Travel preferences, dates, budget and destination details you share with us</li>
        <li>Any additional information you choose to provide in your enquiry</li>
      </ul>
      <p>
        We do not collect payment information directly. Any payments are handled by a third-party
        processor and subject to their privacy policy.
      </p>

      <h2>How we use your information</h2>
      <p>We use the information you provide to:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Respond to your enquiry and deliver your travel plan</li>
        <li>Communicate with you about your trip while we work together</li>
        <li>Send you journal updates and travel inspiration, if you have opted in</li>
        <li>Improve our service based on the types of trips clients ask for</li>
      </ul>
      <p>We will never sell, rent or share your personal information with third parties for their own marketing.</p>

      <h2>Legal basis for processing</h2>
      <p>
        We process your information on the basis of your consent (enquiry submission and journal
        sign-up) and, where a service agreement exists, the performance of that contract. You may
        withdraw consent at any time by contacting us.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We retain enquiry data for up to 24 months after our last correspondence. Journal subscriber
        data is kept until you unsubscribe. You may request deletion at any time.
      </p>

      <h2>Your rights</h2>
      <p>Under US, UK, and EU data protection law, you have the right to:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to or restrict how we process your data</li>
        <li>Request a copy of your data in a portable format</li>
      </ul>
      <p>
        To exercise any of these rights, email{" "}
        <a href="mailto:hello@almasolotravel.com" className="underline">
          hello@almasolotravel.com
        </a>
        . We will respond within 30 days.
      </p>

      <h2>Cookies</h2>
      <p>
        We use minimal cookies to save your enquiry draft locally in your browser. No advertising or
        tracking cookies are set without your consent. See our{" "}
        <a href="/cookies" className="underline">Cookie Policy</a> for full details.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Significant changes will be communicated via
        email to active clients and subscribers. The date at the top of this page shows when it was
        last revised.
      </p>
    </LegalPage>
  );
}
