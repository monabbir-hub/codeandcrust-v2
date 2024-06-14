"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import {
  plan,
  design,
  implement,
  test,
  qa,
  deploy,
  maintain,
} from "../../../../public/assets";
import Image, { StaticImageData } from "next/image";
import { Qahiri } from "next/font/google";

interface HowWeDoItem {
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
  img: StaticImageData;
}

const HowWeDo = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {howwedo.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};
const Skeleton: React.FC<{ img: StaticImageData }> = ({ img }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative">
    <Image
      src={img}
      alt="plan"
      fill
      style={{ objectFit: "cover" }}
      className="rounded-xl"
    />
  </div>
);

const howwedo = [
  {
    title: "Plan",
    description:
      "We conduct a thorough cost-benefit analysis, schedule tasks, and estimate resources. Our team gathers requirements from various stakeholders to create a detailed software requirement specification document. This document sets clear expectations and goals, aiding in precise project planning.",
    header: <Skeleton img={plan} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    img: "plan",
  },
  {
    title: "Design",
    description:
      "Our software engineers analyze requirements and identify the best solutions, integrating pre-existing modules, making informed technology choices, and selecting the right development tools. We ensure seamless integration into your existing IT infrastructure to enhance performance and user experience.",
    header: <Skeleton img={design} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    img: "design",
  },
  {
    title: "Implement",
    description:
      "Our development team translates requirements into actionable coding tasks, working diligently to achieve the final product efficiently and effectively. We prioritize clean, maintainable code to ensure long-term success and scalability.",
    header: <Skeleton img={implement} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    img: "implment",
  },
  {
    title: "Test",
    description:
      "We employ both automated and manual testing to ensure the software is bug-free and meets your expectations. Testing runs parallel to development, allowing for immediate issue resolution. This comprehensive testing approach ensures your website or app is robust, secure, and ready for deployment.",
    header: <Skeleton img={test} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    img: "test",
  },
  {
    title: "Quality Assurance",
    description:
      "Before deployment, our Quality Assurance (QA) team rigorously tests the entire system to ensure it meets all specified requirements and performs flawlessly. We conduct usability testing, security checks, and performance assessments to guarantee that the final product is of the highest quality.",
    header: <Skeleton img={qa} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    img: "qa",
  },
  {
    title: "Deploy",
    description:
      "We maintain separate build and production environments to ensure uninterrupted service for your users during updates. This phase includes packaging, environment configuration, and installation tasks to move the latest build to production seamlessly. Our deployment strategy ensures minimal downtime and a smooth transition for your users.",
    header: <Skeleton img={deploy} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    img: "deploy",
  },
  {
    title: "Maintain",
    description:
      "Post-deployment, we address any issues, manage software changes, and continually monitor performance, security, and user experience to identify improvement opportunities. Our proactive maintenance services ensure your website or app remains up-to-date, secure, and optimized for peak performance, fostering long-term customer satisfaction and business success.",
    header: <Skeleton img={maintain} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    img: "maintain",
  },
];

export default HowWeDo;
