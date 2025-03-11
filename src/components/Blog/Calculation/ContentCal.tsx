import React from "react";

const ContentCal = ({
  title,
  descriptionL1,
  descriptionL2,
}: {
  title: string;
  descriptionL1: string;
  descriptionL2: string;
}) => {
  return (
    <>
      <h4 className="font-semibold mb-3">{title}</h4>
      <p className="mb-4">
        <ol className="list-disc list-outside">
          <li className="bf-bullet">{descriptionL1}</li>
          <li className="bf-bullet">{descriptionL2}</li>
        </ol>
      </p>
    </>
  );
};

export default ContentCal;
