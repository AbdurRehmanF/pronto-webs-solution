import Link from "next/link";
import { Logo } from "@/components/logo";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Terms Of Service", href: "/terms-of-service" },
    { name: "Privacy And Policy", href: "/privacy-policy" },
  ];

  const serviceLinks = [
    { name: "Logo Design", href: "/logo-design" },
    { name: "Website Design", href: "/web-design" },
    { name: "Website Development", href: "/web-development" },
    { name: "Mobile Application", href: "/mobile-app-development" },
    { name: "SEO", href: "/seo-search-engine-optimization" },
    { name: "Social Media Marketing", href: "/smm-social-media-marketing" },
    { name: "Content Writing", href: "/content-writing" },
    { name: "PPC", href: "/ppc-pay-per-click" },
    { name: "E-Commerce Website", href: "/ecommerce-website-development" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ProntoWebsSolution/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/prontowebssolution/",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/PWebsSolution",
      icon: Twitter,
    },
  ];

  return (
    <footer className="bg-[#F6F4F9]">
      <div className="container mx-auto px-4 lg:px-14 py-8 md:py-14 lg:py-16">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <Logo href="/" size="lg" className="mb-4" />

            <p className="text-foreground text-sm font-light leading-relaxed mb-4">
              ProntoWebsSolution is a full-fledged digital marketing agency with
              over 15 years of serving businesses through top-notch solutions
              that help them increase sales and ROI.
            </p>

            <div className="py-3 mb-4">
              <Image
                alt="Payment Methods - Visa, Mastercard, PayPal, American Express"
                width={213}
                height={41}
                src="/payment-method-icons.png"
                className="h-auto"
              />
            </div>

            <div className="flex items-center gap-2 text-sm">
              <p className="text-foreground font-light">
                © {new Date().getFullYear()}
              </p>
              <span className="text-primary font-semibold">
                ProntoWebsSolution
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <div className="border-b border-foreground pb-2 mb-4">
              <h3 className="text-lg font-bold text-primary">Company</h3>
            </div>
            <div className="flex flex-col space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <div className="border-b border-foreground pb-2 mb-4">
              <h3 className="text-lg font-bold text-primary">Services</h3>
            </div>
            <div className="flex flex-col space-y-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">
              Social Media
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  >
                    <IconComponent className="size-5 text-white" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
