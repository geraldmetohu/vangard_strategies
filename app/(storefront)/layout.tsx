import { type ReactNode } from "react";
import { NavBar } from "../componets/storefront/NavBar";
import { Footer } from "../componets/storefront/Footer";

export default function StoreFrontLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="w-full px-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
