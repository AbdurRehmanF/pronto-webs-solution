"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavbarActions } from "./navbar-actions";

export const NavbarClient = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" icon="menu" />
      </SheetTrigger>
      <SheetContent side="right" className="w-80 p-6">
        <SheetTitle />
        <div className="flex flex-col space-y-4">
          {items.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 text-foreground font-medium">
                    <span>{item.name}</span>
                  </div>
                  <div className="pl-4 space-y-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2 text-foreground font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <div className="flex flex-col space-y-3 pt-4 border-t border-border">
            <NavbarActions />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
