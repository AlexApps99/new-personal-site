import {
  faGithub,
  faItchIo,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { DM_Sans, Inter, Michroma } from "next/font/google";
import { Project } from "./(home)/Projects";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

export const IN_DEV_MODE: boolean = process.env.NODE_ENV === "development";

export const INCLUDE_PHONE_IN_RESUME: boolean = IN_DEV_MODE;

// set to null to disable
export const GOOGLE_ANALYTICS_ID: string | null = IN_DEV_MODE
  ? null
  : "G-MCN4KKHP88";

export const HEADING_FONT = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

// export const TEXT_FONT = Inter({ weight: ["400", "700"], subsets: ["latin"] });
export const TEXT_FONT = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const BASE_URL: string = "https://alexbrown.nz";

export const NAME: string = "Alex Brown";

export const TAGLINE: string =
  "Problem solver,\nsoftware engineer,\nand student";

export const PAGE_TITLE: string = "Alex Brown";

export const EXTERNAL_PAGE_TITLE: string = "Alex Brown's personal site";

export const EXTERNAL_PAGE_DESCRIPTION: string =
  "A driven 2nd year Software Engineering student at UoA, with a keen interest in solving hard problems.";

export const KEYWORDS: string[] = [
  "Alex Brown",
  "software engineer",
  "embedded",
  "resume",
  "university",
];

export const OPENGRAPH: OpenGraph = {
  // should be overriden by each page
  title: EXTERNAL_PAGE_TITLE,
  description: EXTERNAL_PAGE_DESCRIPTION,
  url: "./",
  locale: "en_NZ",
  type: "website",
};

export const TWITTER: Twitter = {
  card: "summary",
  // should be overriden by each page
  title: EXTERNAL_PAGE_TITLE,
  description: EXTERNAL_PAGE_DESCRIPTION,
};

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
  {
    name: "Itch.io",
    url: "https://xnopytagameing.itch.io/",
    icon: faItchIo,
  },
  // {
  //   name: "Feed",
  //   // TODO implement this lol
  //   url: "/atom.xml",
  //   icon: faRss,
  // }
];

export const ABOUT_BODY: string = `I am a driven 2nd year Software Engineering student at UoA, \
with a keen interest in solving hard problems.
I taught myself how to code in high school, and have loved it ever since. \
Recently I've been tinkering a lot with FPGAs and embedded hardware, \
but I love writing CPU emulators, planetary simulations, \
computer graphics code, musical experiments, \
and whatever else I can get my hands on.`;

const WALTER_WHITE = `My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead, murdered by my brother-in-law Hank Schrader. Hank has been building a meth empire for over a year now and using me as his chemist.`;

export const PROJECTS: Project[] = [
  {
    title: "Flappy Bird VHDL",
    description: `As a team of four, we created a complex FPGA-based \"Flappy Bird\"-inspired game written in VHDL for the \
DE0-CV development board, as part of the COMPSYS 305 course. \
Our final project utilised Pulse Density Modulation for audio output, \
Discrete Cosine Transform-encoded video playback (JPEG-inspired), \
and sprite rotation using per-pixel trigonometry and matrix multiplication. \
It plays Bad Apple!`,
    yearFrom: 2024,
    yearTo: 2024,
    tech: ["vhdl", "git", "python", "team"],
  },
  {
    title: "APSS-2 Kessler firmware",
    description: `As part of the APSS-2 team, I've been developing the firmware for the upcoming APSS-2 satellite. \
Primarily, I've been writing mission-specific C code for the satellite's on-board computer (OBC),
which runs FreeRTOS on a Cortex-M7 microcontroller. As the satellite's development is a team effort, \
I've been working closely with the team, and spending a large amount of time testing and validating \
the firmware on the satellite's hardware.`,
    yearFrom: 2024,
    yearTo: 2024,
    tech: ["c", "freertos", "make", "rust", "git", "team", "jira"],
  },
  {
    title: "APSS Pico-SAT 2024",
    description: `This was a fun diversion from my work at APSS - we designed and built small model \"satellites\" to launch \
at the NZ Rocketry Association's 2024 launch event. I designed the satellite's PCB in KiCAD, integrating an MSP430 microcontroller, \
and wrote the firmware in C++. The satellite recorded barometric telemetry data during its flight, reaching a peak height of 900 meters. \
The hardest part of the project was searching for the satellite after it landed in a field.`,
    yearFrom: 2024,
    yearTo: 2024,
    tech: ["cpp", "pcb", "make", "git", "team"],
  },
  {
    title: "Portfolio site, Résumé",
    description: `You're looking at it! I built this site using Next.js, TypeScript, and Tailwind CSS. \
Most of my time spent on this project was spent on design, so hopefully it looks nice!`,
    yearFrom: 2024,
    yearTo: 2024,
    tech: ["js", "react"],
  },
  {
    title: "Various Game Jam games",
    description: `I've participated in several game jams hosted by the Game Developers Guild, as well as Kiwijam 2023 and 2024. \
I really enjoy the short-form structure of game jams, because it allows me to take risks and experiment with new ideas while working with friends. \
One of my titles, "ring_zero", was featured alongside 10 indie games, at the "Spark Game Arena Live" event. \
I usually work in Unity or Godot, though I try to wear many hats including writing GLSL shaders, \
creating sound effects, and drawing pixel art, depending on the strengths of each team. My games collectively have several thousand plays - give them a try!`,
    yearFrom: 2023,
    yearTo: 2024,
    url: "https://xnopytagameing.itch.io/",
    tech: ["csharp", "godot", "opengl", "git", "team"],
  },
  {
    title: "WDCC x SESA Hackathon 2024",
    description: `As a team of 6, we made a fun local multiplayer party game with 3 mobile clients \
and one TV "game display". Our game won the "Most Over-Engineered" award for the event. \
To synchronise state between the connected players, we used a WebSockets server implemented in C# \
to communicate between clients and the server. \
The result is a game where players can connect seamlessly and actions are reflected in real time. \
Both codebases were automatically built and deployed with Docker on commit using GitHub Actions, \
and reverse proxied behind NGINX.`,
    yearFrom: 2024,
    yearTo: 2024,
    url: "https://space.feroxfoxxo.com/",
    tech: ["csharp", "js", "react", "websockets", "git", "team"],
  },
  /*
  {
    title: "NZ Cyber Security Competition 2024",
    description: WALTER_WHITE,
    yearFrom: 2024,
    yearTo: 2024,
    tech: ["c", "python", "linux", "security", "ghidra", "wireshark"]
  },
  {
    title: "Noted markup language",
    description: WALTER_WHITE,
    yearFrom: 2023,
    yearTo: 2023,
    tech: ["rust", "js"]
  },
  {
    title: "Postgres DB migration (ComplyPro)",
    description: WALTER_WHITE,
    yearFrom: 2024,
    yearTo: 2024,
    tech: ["js", "sql", "aws", "express", "git", "jira"]
  },
  {
    title: "Mobile MFA login (ComplyPro)",
    description: WALTER_WHITE,
    yearFrom: 2023,
    yearTo: 2023,
    tech: ["js", "ionic", "angular", "firebase", "git", "jira"]
  },
  {
    title: "Bluetooth temperature probe support (ComplyPro)",
    description: WALTER_WHITE,
    yearFrom: 2023,
    yearTo: 2023,
    tech: ["js", "ionic", "angular", "wireshark", "git", "jira"]
  },
  {
    title: "Stardome space visualization",
    description: WALTER_WHITE,
    yearFrom: 2022,
    yearTo: 2022,
    git: "https://github.com/AlexApps99/stardome",
    tech: ["rust", "opengl"]
  },
  {
    title: "SparkMemes automated YouTube channel",
    description: WALTER_WHITE,
    yearFrom: 2018,
    yearTo: 2022,
    url: "https://www.youtube.com/@SparkMemes",
    git: "https://github.com/AlexApps99/SparkMemes",
    tech: ["python", "linux", "bash"]
  },
  {
    title: "NES Emulator",
    description: WALTER_WHITE,
    yearFrom: 2022,
    yearTo: 2022,
    tech: ["rust", "assembly"],
  },
  {
    title: "Bad Apple!! on CASIO fx-9750GII",
    description: WALTER_WHITE,
    yearFrom: 2022,
    yearTo: 2022,
    tech: ["c", "python", "bash"]
  },
  */
  {
    title: "Other?",
    description:
      "See my GitHub for more projects - there are lots of shorter projects and experiments that I haven't listed here.",
    tech: [],
  },
];
