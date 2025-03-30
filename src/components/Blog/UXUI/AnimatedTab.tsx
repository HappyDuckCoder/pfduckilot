import React, { useState } from "react";

interface Timing {
  name: string;
  style: string;
}

const TimingAnimation: React.FC = () => {
  const timingExamples: Timing[] = [
    { name: "Linear", style: "linear" },
    { name: "Ease", style: "ease" },
    { name: "Ease-In", style: "ease-in" },
    { name: "Ease-Out", style: "ease-out" },
    { name: "Ease-In-Out", style: "ease-in-out" },
  ];

  const [timing, setTiming] = useState<Timing>(timingExamples[0]);
  const [isHovered, setIsHovered] = useState(false); // Thêm trạng thái hover

  const handleTimingChange = (selectedTiming: Timing) => {
    setTiming(selectedTiming);
  };

  return (
    <div>
      <p className="text-sm text-gray-600 mb-2">Chọn kiểu chuyển động:</p>
      <select
        className="border rounded p-2 mb-4"
        value={timing.name}
        onChange={(e) =>
          handleTimingChange(
            timingExamples.find((t) => t.name === e.target.value) as Timing
          )
        }
      >
        {timingExamples.map((t) => (
          <option key={t.name} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>

      <div
        className="relative w-64 h-10 border"
        onMouseEnter={() => setIsHovered(true)} // Bật trạng thái hover
        onMouseLeave={() => setIsHovered(false)} // Tắt trạng thái hover
      >
        <div
          className={`h-full bg-blue-500 absolute left-0 top-0 transition-all duration-1000 ${
            isHovered ? "w-full" : "w-0"
          }`} // Chiều rộng dựa trên trạng thái hover
          style={{
            transitionTimingFunction: timing.style,
          }}
        ></div>
      </div>
    </div>
  );
};

export default TimingAnimation;
