import React from "react";

const ContentCal = ({
  title,
  listDescription,
}: {
  title: string;
  listDescription: string[];
}) => {
  return (
    <>
      <h4 className="font-semibold mb-3">{title}</h4>
      <p className="mb-4">
        <ol className="list-disc list-outside">
          {listDescription.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </p>
    </>
  );
};

export default ContentCal;
