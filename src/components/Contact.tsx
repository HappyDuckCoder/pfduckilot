import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import SplitText from "./ui/SplitText";

// Danh sách các mạng xã hội
const socialLinks = [
  { href: "https://facebook.com", icon: FaFacebook, color: "text-blue-500" },
  { href: "https://instagram.com", icon: FaInstagram, color: "text-pink-500" },
  { href: "https://linkedin.com", icon: FaLinkedin, color: "text-blue-400" },
  { href: "https://github.com", icon: FaGithub, color: "text-gray-300" },
];

const Contact = () => {
  return (
    <section id="contact-section" className="py-24 bg-darkBg text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center flex flex-col justify-center items-center gap-3 mx-2 w-full">
          {/* Tiêu đề */}
          <SplitText
            text="Great things can happen"
            className="text-5xl md:text-6xl font-extrabold"
          />
          <SplitText
            text='with a simple "Hello"'
            className="text-5xl md:text-6xl font-extrabold"
          />
        </div>
        <p className="text-gray-400 text-center text-xl mt-4">
          Feel free to connect with me on social media or send me a message!
        </p>

        {/* Mạng xã hội */}
        <div className="flex justify-center mt-6 space-x-6">
          {socialLinks.map(({ href, icon: Icon, color }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              className={`${color} text-3xl hover:scale-110 transition-transform`}
            >
              <Icon />
            </Link>
          ))}
        </div>

        {/* Form liên hệ */}
        <form className="mt-12 bg-transparent p-6 rounded-lg">
          {["Your Name", "Your Email", "Message"].map((label, index) => (
            <div key={index} className="mt-4">
              <label className="block text-lg font-medium">{label}</label>
              {label === "Message" ? (
                <textarea
                  placeholder="Your message..."
                  rows={1}
                  className="w-full p-2 bg-transparent border-b border-gray-500 text-white outline-none focus:border-blue-500 transition"
                ></textarea>
              ) : (
                <input
                  type={label === "Your Email" ? "email" : "text"}
                  placeholder={
                    label === "Your Email" ? "example@email.com" : "John Doe"
                  }
                  className="w-full p-2 bg-transparent border-b border-gray-500 text-white outline-none focus:border-blue-500 transition"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 py-3 text-lg font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
