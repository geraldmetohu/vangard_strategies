// app/(storefront)/contact/page.tsx
import { Suspense } from "react";
import ContactFormClient from "./ContactFormClient";

// This page-level component is a server component.
// We wrap the client‐side form in Suspense so that
// useSearchParams (a CSR hook) is only ever called inside a client boundary.
export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-16 text-center">Loading…</div>}>
      <ContactFormClient />
    </Suspense>
  );
}
