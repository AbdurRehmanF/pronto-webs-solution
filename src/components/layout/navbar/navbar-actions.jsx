import Link from "next/link";
import { Button } from "@/components/ui/button";

export const NavbarActions = () => {
  return (
    <>
      <Link href="tel:+17372868887" passHref>
        <Button variant="default" size="sm">
          +1(737)-286-8887
        </Button>
      </Link>
      <Button variant="secondary" size="sm">
        Get Your Free Proposal
      </Button>
    </>
  );
};
