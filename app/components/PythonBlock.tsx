"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";

interface PythonBlockProps {
  code: string;
}

export const PythonBlock: React.FC<PythonBlockProps> = ({ code }) => (
  <SyntaxHighlighter
    language="python"
    style={oneDark}
    PreTag="div"
    customStyle={{
      borderRadius: "0.5rem",
      padding: "0.5rem 1rem",
      display: "inline-block",
      margin: "2px",
      minWidth: "140px",
      textAlign: "center",
    }}
  >
    {code || " "} {/* show empty string if no word yet */}
  </SyntaxHighlighter>
);
