"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { motion, useInView } from "framer-motion";
import ccv1 from "../../../public/assets/ccv1.png";
import bangladiner from "../../../public/assets/bangladiners.png";
import { fadeIn, textVariant } from "@/lib/motion";
import React, { useRef } from "react";

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const tabs = [
    {
      title: "Code & Crust V1",
      value: "codeandcrustv1",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-secondary cursor-pointer"
          onClick={() =>
            window.open("https://codeandcrust.vercel.app/", "_blank")
          }
        >
          <p>Code & Crust v1.0</p>
          <p className="text-sm md:text-lg mt-4">
            At Code & Crust, we specialize in crafting innovative and high-end
            websites tailored to your unique needs. Whether you're in the
            restaurant industry, e-commerce, or any other field, our expert team
            delivers top-notch digital solutions designed to elevate your online
            presence. Explore our comprehensive services, from website design
            and development to SEO optimization and digital marketing
            strategies. Transform your business with Code & Crust and experience
            unparalleled quality and performance.
          </p>
          <Image
            src={ccv1}
            width={1000}
            height={1000}
            alt="Code & Crust v1.0"
            className="object-cover object-left-top mt-6 md:mt-10 rounded-xl mx-auto"
          />
        </div>
      ),
    },

    {
      title: "Bangla Diners",
      value: "bangladiners",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-secondary cursor-pointer"
          onClick={() => window.open("https://bangladiners.ca/", "_blank")}
        >
          <p>Bangla Diners</p>
          <p className="text-sm md:text-lg mt-4">
            Bangla Diners is your premier destination for exploring the rich and
            diverse flavors of Bengali cuisine. Our website offers an extensive
            menu, showcasing traditional dishes made with the freshest
            ingredients. Whether you're looking for classic favorites or
            contemporary twists on Bengali staples, Bangla Diners provides a
            culinary experience like no other. Join us in celebrating the
            heritage and culture of Bengal, and savor the authentic taste of our
            carefully curated recipes.
          </p>
          <div>
            <Image
              src={bangladiner}
              width={1000}
              height={1000}
              alt="Bangla Diners"
              className="object-cover object-left-top mt-6 md:mt-10 rounded-xl mx-auto"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" ref={sectionRef}>
      <div className="bg-white dark:bg-black w-full h-[4.5rem] mt-20 " />
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={textVariant(0.2)}
        className="flex flex-col items-center justify-center mt-10 "
      >
        <h2 className="font-bold text-3xl tracking-wider">Projects</h2>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("", "", 0.1, 1)}
        className="flex flex-col items-center justify-center mt-10 pb-20"
      >
        <div className="h-[25rem] md:h-[45rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10 px-4 md:px-0">
          <Tabs tabs={tabs} />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
