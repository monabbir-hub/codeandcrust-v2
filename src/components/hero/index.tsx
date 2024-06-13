import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero">
      <div className="overflow-hidden dark:bg-[#000000] bg-white w-full h-[110vh] lg:min-h-[160vh]">
        <MacbookScroll
          title={
            <div>
              <h1 className="text-[70px] font-bold lg:text-[110px] uppercase">
                Code & <span className="text-primary ">Crust</span>{" "}
              </h1>
              <br />
              <h3 className="text-[1.3rem] lg:text-3xl">
                Drive Growth with{" "}
                <span className="text-primary">
                  Customized Digital Solutions
                </span>{" "}
              </h3>
              <p className="text-sm lg:text-xl">
                Expert Web Design and App Development at Prices That{" "}
                <span className="text-primary">Fit Your Budget</span>
              </p>
            </div>
          }
          src={`/linear.webp`}
          showGradient={false}
        />
      </div>
    </section>
  );
};

export default Hero;
