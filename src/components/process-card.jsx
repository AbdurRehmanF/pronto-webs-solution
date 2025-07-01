import Image from "next/image";

export const ProcessCard = ({ image, title, description, alt }) => {
  return (
    <div className="group rounded-xl overflow-hidden">
      <div>
        <Image
          alt={alt}
          width={416}
          height={118}
          className="w-full h-[260px]"
          src={image || "/placeholder.svg"}
        />
      </div>
      <div className="relative bg-black py-6 px-8 h-full before:content-[''] before:absolute before:bg-primary before:w-[300px] before:h-[5px] group-hover:before:w-full group-hover:before:h-full before:top-0 before:left-1/2 before:-translate-x-1/2 before:transition-all before:ease-in-out before:duration-700">
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-white font-light leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
