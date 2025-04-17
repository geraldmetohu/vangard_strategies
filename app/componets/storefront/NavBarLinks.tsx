"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
  { id: 0, name: "Home", href: "/" },
  { id: 1, name: "Services", href: "/services" },
  { id: 2, name: "Sectors", href: "/sectors" },
  { id: 3, name: "Partners", href: "/partners" },
  { id: 4, name: "About", href: "/about" },
  { id: 5, name: "Contact", href: "/contact" },
  { id: 6, name: "Contracts Register", href: "/contracts" },
];

interface NavbarLinksProps {
  vertical?: boolean;
}

export function NavbarLinks({ vertical = false }: NavbarLinksProps) {
  const pathname = usePathname();
  // Use vertical layout if requested; otherwise, horizontal layout.
  const containerClasses = vertical
    ? "flex flex-col gap-2"
    : "flex gap-x-3";

  return (
    <div className={cn(containerClasses, "justify-center items-center")}>
      {navbarLinks.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            pathname === item.href
              ? "bg-[#050417] text-[#fef9c3]"
              : "hover:bg-[#050417] hover:text-[#fef9c3] ransition hover:scale-105",
            "px-3 py-2 text-sm font-medium rounded-md transition-all text-[#fefce8]"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
