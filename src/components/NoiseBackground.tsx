"use client";

import { useEffect, useState, ReactNode } from "react";

interface NoiseBackgroundProps {
  mode: "dark" | "light";
  intensity?: number;
  children?: ReactNode;
}

function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const intVal = parseInt(hex, 16);
  return {
    r: (intVal >> 16) & 255,
    g: (intVal >> 8) & 255,
    b: intVal & 255,
  };
}

const NoiseBackground: React.FC<NoiseBackgroundProps> = ({
  mode,
  intensity = 0.08,
  children,
}) => {
  const [noiseDataUrl, setNoiseDataUrl] = useState<string | null>(null);

  useEffect(() => {
    console.log("window", typeof window);

    if (typeof window === "undefined") return;

    const canvas = document.createElement("canvas");
    const width = 200;
    const height = 200;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noiseColorHex = mode === "dark" ? "#eeede9" : "#131313";
    const { r, g, b } = hexToRgb(noiseColorHex);

    const imageData = ctx.createImageData(width, height);
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i] = r;
      imageData.data[i + 1] = g;
      imageData.data[i + 2] = b;
      imageData.data[i + 3] = Math.floor(Math.random() * 255 * intensity);
    }
    ctx.putImageData(imageData, 0, 0);
    setNoiseDataUrl(canvas.toDataURL("image/png"));
  }, [mode, intensity]);

  const wrapperBackgroundColor = mode === "dark" ? "#131313" : "#eeede9";

  return (
    <div
      style={{
        backgroundColor: wrapperBackgroundColor,
        backgroundImage: noiseDataUrl ? `url(${noiseDataUrl})` : undefined,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </div>
  );
};

export default NoiseBackground;
