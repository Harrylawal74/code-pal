declare module "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
declare module "react-syntax-highlighter/dist/cjs/styles/hljs/*";


declare module "react-syntax-highlighter" {
  import * as React from "react";

  export interface SyntaxHighlighterProps {
    language?: string;
    style?: object;
    children?: React.ReactNode;
    PreTag?: string | React.ComponentType<any>;
    customStyle?: React.CSSProperties;
    showLineNumbers?: boolean;
  }

  export class Prism extends React.Component<SyntaxHighlighterProps> {}
  export class Light extends React.Component<SyntaxHighlighterProps> {}
  export class Dark extends React.Component<SyntaxHighlighterProps> {}
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism/*";
declare module "react-syntax-highlighter/dist/cjs/styles/hljs/*";
