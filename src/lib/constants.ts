import sarwaat from "../../public/assets/Sarwaat.png";
import monabbir from "../../public/assets/Monabbir.png";

import { IconSourceCode, IconShoppingBag, IconSeo } from "@tabler/icons-react";

export const navLinks = [
  {
    href: "about",
    label: "About",
  },

  {
    href: "services",
    label: "Services",
  },

  {
    href: "projects",
    label: "Projects",
  },

  {
    href: "testimonial",
    label: "Testimonial",
  },
];

export const about = [
  {
    name: "Sarwaat Tahsin Hriddo",
    title: "Co-Founder & Chief Executive Officer (CEO)",
    image: sarwaat,
    imgBg: "#E6DEDD",
  },
  {
    name: "Monabbir Ahmed Bhuiyan",
    title: "Co-Founder & Chief Technology Officer (CTO)",
    image: monabbir,
    imgBg: "#E6DEDD",
  },
];

export const services = [
  {
    title: "Web Design and Development",
    description:
      "Our web design services cater to businesses of all types, from restaurants and cafes to retail stores and professional service providers. We create visually appealing, user-friendly websites that engage your customers and drive business growth. Our team of experienced web developers and designers uses the latest web development technologies and design trends to ensure your website performs flawlessly, attracting and retaining more customers. We prioritize customer satisfaction and quality, working closely with you to tailor our web design and development solutions to your unique needs, ultimately enhancing your online visibility and engagement. Every website we build is meticulously tested for performance, usability, and responsiveness across all devices, ensuring an exceptional user experience that converts visitors into loyal customers.",
    icon: IconSourceCode,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Boost your online sales with our customized e-commerce solutions. We build and manage online stores that provide a seamless shopping experience for your customers, helping you increase conversions and grow your business. Our team creates visually appealing, user-friendly e-commerce websites tailored to your specific needs, ensuring a smooth and enjoyable shopping journey. From product listings and payment gateways to inventory management and order fulfillment, we handle every aspect of your online store. Our solutions include secure payment processing, mobile optimization, and advanced analytics to track and improve performance. By partnering with us, you gain a dedicated team committed to your success, providing personalized support, timely updates, and strategic advice to help you adapt to market changes and achieve sustainable growth.",
    icon: IconShoppingBag,
  },
  {
    title: "SEO and Marketing",
    description:
      "Enhance your online presence with our customized SEO and marketing solutions. We develop strategic campaigns to increase visibility and drive growth. Our team excels in keyword research, on-page optimization, and high-quality backlink building to boost your search engine rankings. We also manage social media and email marketing to effectively engage your audience and build brand loyalty. Our services include performance analysis, mobile optimization, and advanced analytics to track and improve results. Partner with us for personalized support, timely updates, and strategic advice to help you adapt to market changes. Our proactive approach ensures your digital assets are secure, up-to-date, and performing at their best, fostering strong relationships and driving long-term business success.",
    icon: IconSeo,
  },
];
