import React from "react";

const ListComp = ({ header, list }: { header: string; list: string[] }) => {
  return (
    <div className="p-4">
      {header !== "" && (
        <h3 className="text-lg font-semibold flex items-center">
          <span className="mr-2 text-xl">📌</span> {header}
        </h3>
      )}
      <ul className="space-y-1">
        {list.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-lg">•</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComp;
