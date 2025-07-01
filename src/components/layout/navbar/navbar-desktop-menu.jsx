import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const NavbarDesktopMenu = ({ items }) => {
  return (
    <div className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList className="gap-2 xl:gap-6">
          {items.map((item) => (
            <NavigationMenuItem key={item.name}>
              {item.hasDropdown ? (
                <>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-3 p-4">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <li key={dropdownItem.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={dropdownItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {dropdownItem.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  {item.name}
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
