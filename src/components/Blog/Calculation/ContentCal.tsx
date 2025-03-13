import React from "react";
import { cn } from "@/lib/utils"; // Hoặc import từ "clsx" nếu chưa có hàm `cn`

const ContentCal = ({
  title,
  listDescription,
  className = "",
  titleClassName = "",
}: {
  title: string;
  listDescription: string[];
  className?: string;
  titleClassName?: string;
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <h4 className={cn("font-semibold text-lg", titleClassName)}>{title}</h4>
      <ol className="list-disc list-outside pl-4 text-sm">
        {listDescription.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default ContentCal;
