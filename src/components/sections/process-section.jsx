import { ProcessCard } from "@/components/process-card";

export const ProcessSection = () => {
  const processSteps = [
    {
      image: "/placeholder.svg?height=118&width=416",
      alt: "Strategic market analysis illustration",
      title: "Strategic Market Analysis",
      description:
        "Before taking on any project, we conduct a thorough market analysis. This is not just a strategy but it's the foundation of how we do things to achieve excellence.",
    },
    {
      image: "/placeholder.svg?height=118&width=416",
      alt: "Product excellence evaluation illustration",
      title: "Product Excellence Evaluation",
      description:
        "The secret to every product or service is its unique selling point. Our dynamic team goes above and beyond to evaluate your product, highlighting your excellence and strengths.",
    },
    {
      image: "/placeholder.svg?height=118&width=416",
      alt: "Captivating design collaterals illustration",
      title: "Captivating Design Collaterals",
      description:
        "From stunning graphics to engaging presentations, our designs are not just visually appealing, but they also truly tell the story of your brand.",
    },
    {
      image: "/placeholder.svg?height=118&width=416",
      alt: "Strategic digital platform setup illustration",
      title: "Strategic Digital Platform Setup",
      description:
        "Having an online presence is not just a goal but a necessity. Whether it's building social media profiles or websites, we strategically set up your business on all digital platforms.",
    },
    {
      image: "/placeholder.svg?height=118&width=416",
      alt: "Diverse marketing appeal illustration",
      title: "Diverse Marketing Appeal",
      description:
        "Diversity in content is crucial for engagement. Our team curates a diverse range of content that caters to various demographics and establishes a meaningful connection.",
    },
    {
      image: "/placeholder.svg?height=118&width=416",
      alt: "Amplifying digital voice illustration",
      title: "Amplifying Your Digital Voice",
      description:
        "Our top digital marketing solutions also include amplifying your digital voice. From targeted ads to content marketing, we make your digital voice resonate with the widest audience possible.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-14">
        <div className="mb-12">
          <div className="xl:max-w-[760px] w-full mx-auto xl:flex xl:flex-col xl:justify-center h-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-primary px-1 lg:px-0">
              How we build your business to new heights?
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-8">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              image={step.image}
              alt={step.alt}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
