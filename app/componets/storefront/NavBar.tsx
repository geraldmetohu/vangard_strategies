"use client";

import Link from "next/link";
import { NavbarLinks } from "./NavBarLinks";
import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { UserDropdown } from "./UserDropdown";

export function NavBar({ user }: { user?: any }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#030712] text-[#fefce8] font-normal">
      <div className="mx-2 px-4 sm:px-6 lg:pl-8 pr-0 py-4">
        {/* Desktop Header */}
        <div className="hidden md:grid grid-cols-12 items-stretch gap-1">
          <div className="col-span-4 flex items-left">
            <Link href="/" className="flex items-center gap-1">
              <Image src="/logo_v.png" alt="Vangard Logo" width={120} height={120} className="object-contain" />
              <span className="text-4xl font-semibold whitespace-nowrap">VANGARD STRATEGIES</span>
            </Link>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-4 flex justify-center">
            <NavbarLinks />
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-2 flex justify-evenly items-center space-x-1">
            {user ? (
              <UserDropdown
                email={user.email}
                name={user.given_name}
                userImage={user.picture ?? `https://avatar.vercel.sh/${user.given_name}`}
              />
            ) : (
              <>
                <Button variant="outline" asChild className="text-green-500 bg-white border border-green-500 hover:text-green-700 hover:bg-gray-200 hover:border-green-700 text-sm">
                  <LoginLink>Sign In</LoginLink>
                </Button>
                <Button variant="outline" asChild className="text-green-500 bg-white border border-green-500 hover:text-green-700 hover:bg-gray-200 hover:border-green-700 text-sm">
                  <RegisterLink>Create Account</RegisterLink>
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Header */}
<div className="flex md:hidden justify-between items-center">
  <div className="flex items-center gap-2">
    <Image src="/logo_v.png" alt="Vangard Logo" width={40} height={40} className="object-contain" />
    <span className="text-lg font-semibold">VANGARD STRATEGIES</span>
  </div>


          <div className="flex-shrink-0">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="w-7 h-7 justify-end" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-4 bg-black bg-opacity-70 pt-6">
                <DialogTitle className="sr-only">Navigation Menu</DialogTitle>

                <div className="mb-4 border-b pb-4 flex items-center  gap-3">
                  <Image src="/logo_v.png" alt="Vangard Logo" width={40} height={40} className="object-contain" />
                  <span className="text-xl font-semibold text-[#fefce8]">VANGARD STRATEGIES</span>
                </div>

                <NavbarLinks vertical={true} onNavigate={closeMenu} />

                <div className="mt-4">
                  {user ? (
                    <UserDropdown
                      email={user.email}
                      name={user.given_name}
                      userImage={user.picture ?? `https://avatar.vercel.sh/${user.given_name}`}
                    />
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <SheetTrigger asChild>
                        <Button variant="outline" className="text-green-500 bg-white border border-green-500 hover:text-green-700 hover:bg-gray-200 hover:border-green-700 text-sm">
                          <LoginLink>Sign In</LoginLink>
                        </Button>
                      </SheetTrigger>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="text-green-500 bg-white border border-green-500 hover:text-green-700 hover:bg-gray-200 hover:border-green-700 text-sm">
                          <RegisterLink>Create Account</RegisterLink>
                        </Button>
                      </SheetTrigger>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
