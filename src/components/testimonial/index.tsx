"use client";

import React, { useRef } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion, useInView } from "framer-motion";
import { textVariant, fadeIn } from "@/lib/motion";

export function Testimonial() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="testimonial" ref={sectionRef}>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={textVariant(0.2)}
          className="flex flex-col items-center justify-center pb-7"
        >
          <h2 className="font-bold text-3xl tracking-wider">Testimonial</h2>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="w-full items-center justify-center flex"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </motion.div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Really Good Experience with them. Great service and I really didn't had to break my bank account ",
    name: "Apu",
    title: "Bangla Diners",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
];

export default Testimonial;
