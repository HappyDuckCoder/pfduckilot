"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHome, FaUser, FaEnvelope, FaBriefcase, FaCog } from "react-icons/fa";

// Danh sách các mục trong navbar
const navItems = [
  { href: "#hero-section", icon: FaHome },
  { href: "#about-section", icon: FaUser },
  { href: "#project-section", icon: FaBriefcase },
  { href: "#contact-section", icon: FaEnvelope },
];

const FloatingNavbar = () => {
  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-zinc-700/90 backdrop-blur-md shadow-xl px-12 py-4 rounded-2xl flex space-x-8 text-white transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      {navItems.map(({ href, icon: Icon }, index) => (
        <Link key={index} href={href} className="hover:scale-110 transition">
          <Icon size={26} />
        </Link>
      ))}
    </nav>
  );
};

export default FloatingNavbar;
