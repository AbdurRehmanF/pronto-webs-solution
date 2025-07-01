import { NavbarClient } from "./navbar-client";
import { NavbarDesktopMenu } from "./navbar-desktop-menu";
import { NavbarActions } from "./navbar-actions";
import { Logo } from "../../logo";

const navigationItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Apps", href: "/services/mobile-apps" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "SEO Services", href: "/services/seo" },
    ],
  },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

export const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-lg transition-all duration-300">
      <nav className="container mx-auto px-4 lg:px-14">
        <div className="flex h-16 items-center justify-between">
          <Logo size="sm" />
          <NavbarDesktopMenu items={navigationItems} />
          <div className="hidden items-center gap-4 lg:flex">
            <NavbarActions />
          </div>
          <NavbarClient items={navigationItems} />
        </div>
      </nav>
    </div>
  );
};
