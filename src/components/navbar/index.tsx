"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ModeToggle } from "../global/mode-toggle";
import { useTheme } from "next-themes";
import { navLinks } from "@/lib/constants";
import { Link as ScrollLink } from "react-scroll";

interface NavbarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, activeSection }) => {
  const { theme, resolvedTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleResize = () => {
    const mobile = window.innerWidth < 1024;
    setIsMobile(mobile);
    if (!mobile) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed w-full z-50 bg-background">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div onClick={() => onNavClick("hero")}>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={
                theme === "dark" || resolvedTheme === "dark"
                  ? "/assets/CodeDark.svg"
                  : "/assets/CodeLight.svg"
              }
              width={110}
              height={110}
              alt="Code & Crust"
            />
            <span
              className={`text-2xl font-bold ${
                theme === "dark" || resolvedTheme === "dark"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              Code & Crust
            </span>
          </div>
        </div>
        {!isMobile ? (
          <div className="flex gap-8 items-center text-black dark:text-white">
            {navLinks.map((link) => (
              <span
                key={link.label}
                onClick={() => onNavClick(link.href)}
                className={`text-lg font-medium hover:font-semibold hover:text-primary cursor-pointer ${
                  theme === "dark" || resolvedTheme === "dark"
                    ? "text-white"
                    : "text-black"
                } ${
                  activeSection === link.href ? "border-b-2 border-primary" : ""
                }`}
              >
                {link.label}
              </span>
            ))}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#d8985f,45%,#F2BA86,55%,#d8985f)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none hover:bg-[linear-gradient(110deg,#f1cba8,45%,#f9dfc7,55%,#f1cba8)] hover:text-background cursor-pointer"
            >
              Contact Us
            </ScrollLink>
            <ModeToggle />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <button
              className="block text-black dark:text-white"
              onClick={toggleSidebar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ModeToggle />
          </div>
        )}
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4 text-black dark:text-white"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col justify-center items-center h-full">
          <ul className="flex flex-col gap-6 p-4 text-black dark:text-white items-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <span
                  onClick={() => {
                    onNavClick(link.href);
                    toggleSidebar();
                  }}
                  className="text-lg font-medium hover:font-semibold hover:text-secondary cursor-pointer"
                >
                  {link.label}
                </span>
              </li>
            ))}
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#d8985f,45%,#F2BA86,55%,#d8985f)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none hover:bg-[linear-gradient(110deg,#f1cba8,45%,#f9dfc7,55%,#f1cba8)] hover:text-background cursor-pointer"
                onClick={toggleSidebar}
              >
                Contact Us
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
