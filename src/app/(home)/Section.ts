import { JSX } from "react";

export type Section = {
  id: string;
  name: string;
  headingName?: string;
  element: JSX.Element
};
