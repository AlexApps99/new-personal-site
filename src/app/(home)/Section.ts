import { JSX } from "react";

export type Section = {
  id: string;
  name: string;
  headingName?: string;
  element: JSX.Element
};

export type HeaderLink = {
  id: string;
  name: string;
  href: string;
  type: "fragment" | "link" | "external";
};
