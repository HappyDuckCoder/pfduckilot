"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#hero-section", icon: <FaHome size={26} />, label: "Home" },
  { href: "#about-section", icon: <FaUser size={26} />, label: "About" },
  {
    href: "#project-section",
    icon: <FaBriefcase size={26} />,
    label: "Projects",
  },
  {
    href: "#experience-section",
    icon: <FaGraduationCap size={26} />,
    label: "Experience",
  },
  {
    href: "#contact-section",
    icon: <FaEnvelope size={26} />,
    label: "Contact",
  },
];

const FloatingNavbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-black/85 backdrop-blur-md shadow-xl px-4 py-3 rounded-2xl flex items-center gap-1 md:gap-2 text-white transition-all duration-300 z-50 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      {NAV_LINKS.map(({ href, icon, label }) => (
        <Link
          key={href}
          href={href}
          className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
          title={label}
        >
          <span className="text-lg opacity-90">{icon}</span>
          <span className="text-sm font-medium hidden sm:inline">{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default FloatingNavbar;
