import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import { services } from "@/lib/constants";

const Services = () => {
  return (
    <section id="services" className="mb-10">
      <div className="bg-white dark:bg-black w-full h-[4.5rem] mt-20 " />
      <div className="flex flex-col items-center justify-center mt-20 pb-20">
        <h2 className="font-bold text-3xl tracking-wider">Services</h2>
      </div>
      <div className="flex flex-wrap items-start justify-between lg:gap-1 gap-y-8">
        {services.map((item) => (
          <div
            key={item.title}
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-md mx-auto p-4 relative bg-card"
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard text={item.title} />

            <h3 className="dark:text-white text-black mt-4 text-md font-regular text-justify ">
              {item.description}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
