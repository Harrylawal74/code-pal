"use client";

import React, { useState } from "react";
import { Question } from "../types/Questions";

type SentencePart = {
  id: number;
  text: string;
};

interface CodeBlockProps {
  sentenceParts?: SentencePart[];
}

// Keywords & builtins
const PYTHON_KEYWORDS = [
  "def",
  "for",
  "in",
  "if",
  "else",
  "return",
  "while",
  "class",
  "import",
];
const PYTHON_BUILTINS = [
  "print",
  "len",
  "range",
  "int",
  "str",
  "float",
  "list",
  "dict",
];

// Regex patterns
const STRING_PATTERN = /^(['"]).*?\1$/;
const NUMBER_PATTERN = /^[0-9]+(\.[0-9]+)?$/;

const CodeBlock: React.FC<CodeBlockProps> = ({ sentenceParts = [] }) => {
  if (sentenceParts.length === 0) {
    return null;
  }

  // Syntax highlighting
  const renderInlineCode = (text: string) => {
    if (text === "\n") return <br />;

    if (text.trim().startsWith("#")) {
      return <span className="text-gray-500">{text}</span>;
    }

    // Regex to match strings first, then words/numbers
    const regex = /(\d+(\.\d+)?\||\".*?\"|'.*?'|\b\w+\b|\s+|[^\s\w])/g;
    const tokens = text.match(regex) || [];

    return tokens.map((token, idx) => {
      if (!token.trim()) return <span key={idx}>{token}</span>;

      if (/^".*"$|^'.*'$/.test(token)) {
        // Strings including quotes
        return (
          <span key={idx} className="text-green-400">
            {token}
          </span>
        );
      } else if (PYTHON_KEYWORDS.includes(token)) {
        return (
          <span key={idx} className="text-purple-400 font-semibold">
            {token}
          </span>
        );
      } else if (PYTHON_BUILTINS.includes(token)) {
        return (
          <span key={idx} className="text-blue-400">
            {token}
          </span>
        );
      } else if (/^\d+(\.\d+)?\|$/.test(token)) {
        return (
          <span key={idx} className="text-gray-200">
            {token}
          </span>
        );
      } else if (/^[0-9]+(\.[0-9]+)?$/.test(token)) {
        return (
          <span key={idx} className="text-orange-400">
            {token}
          </span>
        );
      } else {
        return <span key={idx}>{token}</span>;
      }
    });
  };

  return (
    <div className="self-start p-4 bg-gray-700 text-white rounded-lg font-mono max-w-250 ">
      {/* Sentence area */}
      <pre className="whitespace-pre-wrap">
        {sentenceParts.map((part, i) => (
          <span key={part.id}>{renderInlineCode(part.text)}</span>
        ))}
      </pre>
    </div>
  );
};

export default CodeBlock;
