import React from "react";

type Props = {
  title: string;
};

export default function LevelTitle({ title }: Props) {
  return <h2>{title}</h2>;
}