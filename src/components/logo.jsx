import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({
  href = "/",
  size = "default",
  className,
  showText = false,
  textClassName,
  ...props
}) => {
  const sizeClasses = {
    sm: "w-24 xl:w-28",
    default: "w-32 xl:w-40",
    lg: "w-40 xl:w-48",
    xl: "w-48 xl:w-56",
  };

  const LogoContent = () => (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <Image
        alt="Pronto Logo"
        width={200}
        height={64}
        className={cn(sizeClasses[size], "h-auto")}
        src="/logo.png"
      />
      {showText && (
        <span className={cn("font-bold text-foreground", textClassName)}>
          Pronto
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="cursor-pointer">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};
