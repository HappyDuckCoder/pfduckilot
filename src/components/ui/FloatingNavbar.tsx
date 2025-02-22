"use client";

import { useState, useEffect, useRef } from "react";
import { FaHome, FaUser, FaEnvelope, FaBriefcase } from "react-icons/fa";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#home-section", icon: <FaHome size={26} />, label: "Home" },
  { href: "#about-section", icon: <FaUser size={26} />, label: "About" },
  {
    href: "#project-section",
    icon: <FaBriefcase size={26} />,
    label: "Projects",
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
    if (typeof window === "undefined") return; // Đảm bảo chỉ chạy trên client

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
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-zinc-700/90 backdrop-blur-md shadow-xl px-12 py-4 rounded-2xl flex space-x-8 text-white transition-all duration-300 z-50 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      {NAV_LINKS.map(({ href, icon, label }) => (
        <Link key={href} href={href} className="hover:scale-110 transition">
          <span className="sr-only">{label}</span>
          {icon}
        </Link>
      ))}
    </nav>
  );
};

export default FloatingNavbar;
