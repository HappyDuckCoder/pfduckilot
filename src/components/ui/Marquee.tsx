"use client";

import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    { src: "public/techStack/01.svg", text: "HTML" },
    { src: "public/techStack/02.svg", text: "CSS" },
    { src: "public/techStack/03.svg", text: "JavaScript" },
    { src: "public/techStack/04.svg", text: "Tailwind" },
    { src: "public/techStack/05.svg", text: "TypeScript" },
    { src: "public/techStack/06.svg", text: "Python" },
    { src: "public/techStack/07.svg", text: "MySQL" },
  ];

  const lowerMarquee = [
    { src: "public/techStack/08.svg", text: "Java" },
    { src: "public/techStack/09.svg", text: "React" },
    { src: "public/techStack/10.svg", text: "Git" },
    { src: "public/techStack/11.svg", text: "GitHub" },
    { src: "public/techStack/12.svg", text: "VS Code" },
    { src: "public/techStack/13.svg", text: "Postman" },
    { src: "public/techStack/14.svg", text: "Next.Js" },
  ];

  return (
    <div className="container mx-auto md:px-28">
      <MarqueeItem images={upperMarquee} from={"0%"} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={"0%"} />
    </div>
  );
};

export default Marquee;
