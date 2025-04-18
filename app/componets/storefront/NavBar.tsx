import Link from "next/link";
import { NavbarLinks } from "./NavBarLinks";
//import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
//import { UserDropdown } from "./UserDropdown";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { redis } from "@/app/lib/redis";
import { Cart } from "@/app/lib/interfaces";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
// Import Radix's VisuallyHidden component for accessibility
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from '@radix-ui/react-dialog';

export async function NavBar() {
  // This function runs in a Node.js server environment.
  /*const { getUser } = getKindeServerSession();
  const user = await getUser();
  const cart: Cart | null = await redis.get(`cart-${user?.id}`);
  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
*/
  return (
<nav className="sticky top-0 z-50 w-full bg-[#030712] text-[#fefce8]">
  <div className=" mx-2 px-4 sm:px-6 lg:pl-8 pr-0 py-4">
        {/* Desktop Header (visible on md and up) using a 10-column grid */}
        <div className="hidden md:grid grid-cols-12 items-stretch gap-1">
          {/* Columns 1-2: Logo & Title */}
          <div className="col-span-4 flex items-center">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/logo_v.png"
                alt="Vangard Logo"
                width={120}
                height={120}
                className="object-contain"
              />
              <span className="text-2xl font-mono font-semibold whitespace-nowrap">
                Vangard Strategies
              </span>
            </Link>
          </div>

          {/* Column 3: Spacer */}
          <div className="col-span-1"></div>

          {/* Columns 4-7: Navigation Links (centered) */}
          <div className="col-span-4 flex justify-center">
            <NavbarLinks vertical={false} />
          </div>

          {/* Column 8: Spacer */}
          <div className="col-span-1"></div>

          {/* Columns 9-10: Auth Buttons or User Dropdown 
          <div className="col-span-2 flex justify-evenly items-center space-x-1">
            {user ? (
              <UserDropdown
                email={user.email as string}
                name={user.given_name as string}
                userImage={
                  user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
                }
              />
            ) : (
              <>
                <Button
                  variant="outline"
                  asChild
                  className="text-green-500 bg-white border border-green-500 hover:text-green-700 hover:bg-gray-200 hover:border-green-700 text-sm"
                >
                  <LoginLink>Sign In</LoginLink>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="text-green-500 bg-white border border-green-500 hover:text-green-700 hover:bg-gray-200 hover:border-green-700 text-sm"
                >
                  <RegisterLink>Create Account</RegisterLink>
                </Button>
              </>
            )}
          </div> */}
        </div>

        {/* Mobile Header (visible below md) */}
        <div className="flex md:hidden items-center justify-between">
          {/* Left-aligned Logo & Title */}
          <div className="flex-grow text-left">
            <Link href="/" className="inline-flex items-center gap-1">
              <Image
                src="/logo_v.png"
                alt="Vangard Logo"
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="text-xl font-mono font-semibold whitespace-nowrap">
                Vangard Strategies
              </span>
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="flex-shrink-0">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="p-4 bg-black bg-opacity-80 pt-6"
              >
                {/* Provide a hidden DialogTitle for accessibility */}
                <VisuallyHidden>
                  <DialogTitle>Navigation Menu</DialogTitle>
                </VisuallyHidden>
                 {/*<div className="flex flex-col space-y-4">
                  {/* First: Navigation Links as a vertical list }
                  <div>
                    <NavbarLinks vertical={true} />
                  </div>
                  {/* Second: Auth Buttons or User Dropdown, arranged vertically }
                  {user ? (
                    <UserDropdown
                      email={user.email as string}
                      name={user.given_name as string}
                      userImage={
                        user.picture ?? 
                        `https://avatar.vercel.sh/${user.given_name}`
                      }
                    />
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <Button
                        variant="outline"
                        asChild
                        className="text-green-500 bg-white border border-green-500 hover:text-green-700 hover:bg-gray-200 hover:border-green-700 text-sm"
                      >
                        <LoginLink>Sign In</LoginLink>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="text-green-500 bg-white border border-green-500 hover:text-green-700 hover:bg-gray-200 hover:border-green-700 text-sm"
                      >
                        <RegisterLink>Create Account</RegisterLink>
                      </Button>
                    </div>
                  )}
                </div> */}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
