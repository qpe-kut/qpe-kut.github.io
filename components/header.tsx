import Logo from "@/components/logo";

import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="fixed w-full mx-auto h-[70px] shadow-lg backdrop-blur-xl z-10">
      <div className="h-full container max-w-2xl mx-auto px-2 flex justify-between md:justify-normal md:space-x-4">
        <Logo />

        {/* PC, tablet */}
        <div className="hidden h-full md:flex items-center">
          <ul className="md:flex text-lg text-slate-800 space-x-4">
            <li className="hover:text-[#1B7AFE] hover:underline">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#1B7AFE] hover:underline">
              <Link href="/research">Research</Link>
            </li>
            <li className="hover:text-[#1B7AFE] hover:underline">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* mobile */}
        <div className="flex items-center md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu size={38} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60 text-slate-800">
              <DropdownMenuLabel className="text-lg">Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href="/about">
                  <DropdownMenuItem>
                    <p className="text-lg">About</p>
                  </DropdownMenuItem>
                </Link>
                <Link href="/research">
                  <DropdownMenuItem>
                    <p className="text-lg">Research</p>
                  </DropdownMenuItem>
                </Link>
                <Link href="/contact">
                  <DropdownMenuItem>
                    <p className="text-lg">Contact</p>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
