"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines: number[];
  code: string;
};

const CodeBlockCal = ({ codeData }: { codeData: CodeBlockProps }) => {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock {...codeData} />
    </div>
  );
};

export default CodeBlockCal;
