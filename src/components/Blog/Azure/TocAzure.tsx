"use client";

import { HeaderContent } from "@/lib/AzureCourse";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

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
        className={`fixed top-5 left-5 hover:scale-110 text-lightColor z-50 transition-all duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-12 left-0 h-screen w-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            📚 Table of Contents
          </h2>

          {/* Danh sách nội dung */}
          <ul className="flex-1 pr-2 overflow-y-scroll mt-2 mb-10">
            {HeaderContent.map((header, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => handleScrollToSection(index)}
                  className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-darkColor text-white shadow-md"
                      : "bg-gray-100 hover:bg-gray-200 text-black"
                  }`}
                >
                  <span className="truncate">{header}</span>
                  <ChevronRight
                    size={18}
                    className={`transition-transform ${
                      activeIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default TocAzure;
