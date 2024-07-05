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

export const WALTER_WHITE = `My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead, murdered by my brother-in-law Hank Schrader. Hank has been building a meth empire for over a year now and using me as his chemist.`;

const WALTER_WHIPSUM = (WALTER_WHITE + '\n').repeat(30);
