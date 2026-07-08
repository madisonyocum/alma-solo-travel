import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How Alma Solo Travel uses cookies and similar technologies.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" name="Cookies" path="/cookies">
      <p>Last updated: July 2025</p>
      <p>
        This policy explains how Alma Solo Travel uses cookies and similar browser technologies on
        our website.
      </p>

      <h2>What are cookies</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They allow the
        site to remember information about your visit, such as your preferences or the contents of
        a form you started filling in.
      </p>

      <h2>What we use</h2>
      <p>
        We currently use only essential, functional browser storage. Specifically, we save a draft
        of your enquiry form locally in your browser using <code>localStorage</code> so that if you
        navigate away and return, your answers are not lost. This data never leaves your device
        unless you submit the form.
      </p>
      <p>
        We do not currently set any third-party, advertising or analytics cookies.
      </p>

      <h2>Strictly necessary storage</h2>
      <p>
        The enquiry draft saved in your browser is strictly necessary for the form to function
        well. It does not contain any tracking identifiers and is cleared when you submit your
        enquiry or reset the form.
      </p>

      <h2>Analytics</h2>
      <p>
        If we add analytics in the future (for example, to understand which destinations are most
        popular), we will update this policy and, where required by law, ask for your consent via
        a cookie banner before any tracking begins.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can clear all locally stored data at any time through your browser settings. In most
        browsers, this is under Settings &rsaquo; Privacy &rsaquo; Clear browsing data. This will
        also clear any saved enquiry draft.
      </p>
      <p>
        Most browsers also let you block all cookies or local storage outright. Note that doing so
        may affect the functionality of some websites.
      </p>

      <h2>Third-party links</h2>
      <p>
        Our website may link to third-party sites (such as hotel or experience providers). These
        sites have their own cookie policies and we are not responsible for them.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we introduce any new cookies or storage that require your consent, we will update this
        page and notify you through a consent banner before anything is set. The date at the top
        of this page shows when it was last revised.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any questions about how we use cookies, email us at{" "}
        <a href="mailto:hello@almasolotravel.com" className="underline">
          hello@almasolotravel.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
