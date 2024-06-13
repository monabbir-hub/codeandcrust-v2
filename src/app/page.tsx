"use client";

import { useRef, useState, useEffect } from "react";
import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
  const navbarHeight = 160; // Adjust this value based on your actual navbar height
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = [
      { ref: heroRef, id: "hero" },
      { ref: aboutRef, id: "about" },
      { ref: servicesRef, id: "services" },
      { ref: contactRef, id: "contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: `-${navbarHeight}px 0px 0px 0px`,
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  const handleNavClick = (section: string) => {
    if (section === "hero" && heroRef.current) {
      window.scrollTo({
        top: heroRef.current.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    } else if (section === "about" && aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    } else if (section === "services" && servicesRef.current) {
      window.scrollTo({
        top: servicesRef.current.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    } else if (section === "conatact" && contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative z-0 bg-background">
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />
      <div ref={heroRef} id="hero">
        <Hero />
      </div>
      <div ref={aboutRef} id="about">
        <About />
      </div>

      <div ref={servicesRef} id="services">
        <Services />
      </div>

      <div ref={contactRef} id="contact" className="relative z-0">
        <Contact />
      </div>
    </div>
  );
}
