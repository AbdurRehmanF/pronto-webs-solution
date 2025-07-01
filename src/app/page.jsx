import { ContactFormSection } from "@/components/sections/contact-form-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <ProcessSection />
      <ContactFormSection />
    </div>
  );
}
