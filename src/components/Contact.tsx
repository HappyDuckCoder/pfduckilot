"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import SplitText from "./ui/SplitText";

const socialLinks = [
  { href: "https://facebook.com", icon: FaFacebook, color: "text-blue-500" },
  { href: "https://instagram.com", icon: FaInstagram, color: "text-pink-500" },
  { href: "https://linkedin.com", icon: FaLinkedin, color: "text-blue-400" },
  {
    href: "https://github.com/HappyDuckCoder",
    icon: FaGithub,
    color: "text-gray-300",
  },
];

const Contact = () => {
  const handleEmailClick = () => {
    const email = "8E5oE@example.com";
    console.log("Sending email to:", email);
  };

  return (
    <section
      id="contact-section"
      className="py-24 bg-lightColor text-darkColor"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center flex flex-col justify-center items-center gap-3 mx-2 w-full">
          <SplitText
            text="Great things can happen"
            className="text-4xl md:text-6xl font-extrabold text-darkColor"
          />
          <SplitText
            text='with a simple "Hello"'
            className="text-4xl md:text-6xl font-extrabold text-darkColor"
          />
        </div>
        <p className="text-gray-600 text-center text-xl mt-4">
          Feel free to connect with me on social media or send me a message!
        </p>

        {/* Social links — harmonize with light theme */}
        <div className="flex justify-center mt-6 space-x-6">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-darkColor text-2xl transition-colors"
            >
              <Icon />
            </Link>
          ))}
        </div>

        {/* Contact form — soft borders, light-friendly */}
        <form
          className="mt-12 p-6 rounded-2xl border border-gray-200/80 bg-white/50"
          onSubmit={handleEmailClick}
        >
          {["Your Name", "Your Email", "Message"].map((label, index) => (
            <div key={index} className="mt-4">
              <label className="block text-sm font-medium text-gray-600 uppercase tracking-wider">
                {label}
              </label>
              {label === "Message" ? (
                <textarea
                  placeholder="Your message..."
                  rows={3}
                  className="w-full mt-1 p-3 rounded-lg border border-gray-200 bg-white/80 text-darkColor placeholder:text-gray-400 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition"
                ></textarea>
              ) : (
                <input
                  type={label === "Your Email" ? "email" : "text"}
                  placeholder={
                    label === "Your Email" ? "example@email.com" : "John Doe"
                  }
                  className="w-full mt-1 p-3 rounded-lg border border-gray-200 bg-white/80 text-darkColor placeholder:text-gray-400 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="mt-6 w-full py-3 text-lg font-semibold rounded-xl border-2 border-darkColor text-darkColor bg-transparent hover:bg-darkColor hover:text-lightColor transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
