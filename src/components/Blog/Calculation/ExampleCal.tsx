import React from "react";

interface ExampleCalProps {
  title: string;
  description: string;
}

const ExampleCal: React.FC<ExampleCalProps> = ({ title, description }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h4 className="text-lg font-semibold mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ExampleCal;
