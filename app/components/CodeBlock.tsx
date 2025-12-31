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

    // Regex patterns
    const STRING_PATTERN = /^".*"$|^'.*'$/;
    const NUMBER_PATTERN = /^[0-9]+(\.[0-9]+)?$/;

    // Regex to match strings first, then words/numbers
    const regex =
      /(\s*(?:[1-9]\d{0,2}|1000)\s*\||\".*?\"|'.*?'|\b\w+\b|\s+|[^\s\w])/g;
    const tokens = text.match(regex) || [];
    const PIPE_NUMBER_PATTERN = /^\s*(?:[1-9]\d{0,2}|1000)\s*\|\s*$/;

    return tokens.map((token, idx) => {
      if (!token.trim()) return <span key={idx}>{token}</span>;

      if (STRING_PATTERN.test(token)) {
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
      } else if (PIPE_NUMBER_PATTERN.test(token)) {
        return (
          <span key={idx} className="text-gray-200">
            {token}
          </span>
        );
      } else if (NUMBER_PATTERN.test(token)) {
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
    <div className="self-start p-4 bg-gray-700 text-white rounded-lg font-mono w-full mb-5 min-h-50 h-full overflow-auto no-y-scrollbar text-nowrap">
      {/* Sentence area */}
      <pre className="whitespace-pre-wrap">
        {sentenceParts.map((part, i) => (
          <span key={part.id} className="text-nowrap">
            {renderInlineCode(part.text)}
          </span>
        ))}
      </pre>
    </div>
  );
};

export default CodeBlock;
