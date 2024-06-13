"use client";

import Image from "next/image";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { about } from "@/lib/constants";
import HowWeDo from "./_components/howwedo";

const About = () => {
  return (
    <section id="about">
      <section className="m-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-3xl tracking-wider">About Us</h2>
          <p className="mx-4 p-5 text-primary text-[17px] max-w-full leading-[30px] lg:mx-20 xs:text-[13px] xs:justify-between text-justify">
            At Code & Crust, we specialize in creating stunning websites that
            help all-tier businesses succeed online. Whether you’re in the
            restaurant industry, retail, professional services, or any other
            sector, our team of experts will work with you to develop a web
            presence that sets you apart from the competition without breaking
            your bank. Our personalized approach ensures your website and mobile
            app are designed to captivate your audience and drive business
            growth. Our post-production services and maintenance ensure that
            your website and app maintain peak performance, security, and
            relevance.
          </p>
        </div>
      </section>
      <section className="flex flex-col  items-center justify-center">
        <h2 className="font-bold text-3xl tracking-wider">Meet the Team</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {about.map((item, index) => (
            <CardContainer className="inter-var" key={index}>
              <CardBody className="bg-card relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border items-center justify-center  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-neutral-600 dark:text-white pt-4 item"
                >
                  {item.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-md font-semibold max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.title}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>

      <section className="m-5">
        <div className="flex flex-col items-center justify-center mb-3">
          <h2 className="font-bold text-3xl tracking-wider">How We Do</h2>
        </div>
        <div className="pt-7">
          <HowWeDo />
        </div>
      </section>
    </section>
  );
};

export default About;
