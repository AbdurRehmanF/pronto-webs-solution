import { Button } from "@/components/ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-cover bg-no-repeat bg-bottom mt-8">
      <div className="container mx-auto px-4 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Column */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-start text-foreground">
              <span className="text-primary">
                Hire The Best Digital Marketing Company In USA
              </span>
              <p className="mt-1">To Elevate Your Online Presence!</p>
            </h1>

            <div className="grid grid-cols-1">
              <div className="flex flex-col justify-center items-start">
                <p className="text-foreground text-sm my-4 px-1 lg:px-0 lg:pr-24 text-center lg:text-start">
                  Welcome to the pinnacle of digital marketing expertise!
                  ProntoWebsSolution is the best digital marketing company and a
                  trusted partner to elevate your online presence. With a track
                  record of 15+ years in the industry, delivering exceptional
                  results, we set the standards and take your business to new
                  heights.
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button size="lg" className="px-8" variant="secondary">
                Get Your Free Proposal
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <Image
              alt="Professional using laptop for digital marketing"
              width={876}
              height={671}
              className="w-full h-auto max-w-lg lg:max-w-full"
              src="/hero.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
