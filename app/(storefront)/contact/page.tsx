// app/(storefront)/contact/page.tsx
export const dynamic = "force-dynamic"; // tell Next to never SSG this page
import ContactFormClient from "./ContactFormClient";

// This page-level component is a server component.
// We wrap the client‐side form in Suspense so that
// useSearchParams (a CSR hook) is only ever called inside a client boundary.

export default function ContactPage() {
  return (
      <ContactFormClient />
  );
}
