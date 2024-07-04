import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Inter, Michroma } from "next/font/google";

export const NAME: string = "Alex Brown";

export const TAGLINE: string = "Problem solver,\nsoftware engineer,\nand student";

export const SOCIALS: {
  name: string;
  url: string;
  icon: IconDefinition;
}[] = [
  {
    name: "GitHub",
    url: "https://github.com/AlexApps99",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/alex-b-nz",
    icon: faLinkedin,
  },
  // {
  //   name: "Feed",
  //   // TODO implement this lol
  //   url: "/atom.xml",
  //   icon: faRss,
  // }
];

export const HEADING_FONT = Michroma({ weight: "400", subsets: ["latin"] });

export const TEXT_FONT = Inter({ subsets: ["latin"] });
