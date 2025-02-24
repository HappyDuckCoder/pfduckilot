"use client";

import { HeaderContent } from "@/lib/AzureCourse";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const TocAzure = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleScrollToSection = (index: number) => {
    setActiveIndex(index);
    const sectionId = `section-${index}`;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      HeaderContent.forEach((_, index) => {
        const section = document.getElementById(`section-${index}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 3) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Nút Toggle Sidebar */}
      <button
        className="fixed top-5 left-10 bg-blue-500 text-white p-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
        {isOpen ? "Đóng" : "Mở"} TOC
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-[80vh] w-72 bg-[#0a192f] text-white p-5 rounded-r-lg shadow-lg transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-80"
        } lg:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-4 text-center text-blue-400">
          📌 Table of Contents
        </h2>
        <ul className="space-y-3">
          {HeaderContent.map((header, index) => (
            <li key={index}>
              <button
                onClick={() => handleScrollToSection(index)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-blue-500 text-white font-bold"
                    : "hover:bg-gray-800 hover:text-blue-400"
                }`}
              >
                {header}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default TocAzure;
