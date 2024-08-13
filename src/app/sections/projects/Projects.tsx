import { faAngular, faAws, faGitAlt, faJira, faNodeJs, faPython, faReact, faRust, faSquareJs, faUnity, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import {Section} from '../Section';
import { faArrowUpRightFromSquare, faBolt, faDatabase, faDragon, faFire, faLaptopCode, faLayerGroup, faMicrochip, faMobileAlt, faNetworkWired, faPeopleGroup, faShapes, faShieldHalved, faTerminal, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HEADING_FONT, WALTER_WHITE } from '@/app/config';

type Project = {
  title: string;
  description: string;
  url?: string;
  git?: string;
  yearTo?: number;
  yearFrom?: number;
  image?: string;
  tech: string[];
};

type TechnologyCategory = "embedded" | "web" | "game" | "hacking" | "tools" | "other";

const TECH_CATEGORY_COLOURS: { [id: string]: { fg: string; bg: string; } } = {
  embedded: { fg: "#f9a", bg: "#823" },
  web: { fg: "#9ef", bg: "#278" },
  game: { fg: "#8f9", bg: "#182" },
  hacking: { fg: "#ea7", bg: "#730" },
  tools: { fg: "#9cf", bg: "#259" },
  other: { fg:"#d8f", bg: "#618" },
};

type Technology = {
  category: TechnologyCategory;
  name: string;
  icon: IconDefinition;
};

export default function Projects(): Section {

  const TECHS: { [id: string]: Technology; } = {
    vhdl: { category: "embedded", name: "VHDL", icon: faLayerGroup },
    c: { category: "embedded", name: "C", icon: faLaptopCode },
    cpp: { category: "embedded", name: "C++", icon: faLaptopCode },
    js: { category: "web", name: "JavaScript, TypeScript", icon: faSquareJs },
    rust: { category: "other", name: "Rust", icon: faRust },
    react: { category: "web", name: "React", icon: faReact },
    angular: { category: "web", name: "Angular", icon: faAngular },
    ionic: { category: "web", name: "Ionic", icon: faMobileAlt },
    firebase: { category: "web", name: "Firebase", icon: faFire },
    aws: { category: "web", name: "AWS", icon: faAws },
    express: { category: "web", name: "express.js", icon: faNodeJs },
    freertos: { category: "embedded", name: "FreeRTOS", icon: faMicrochip },
    git: { category: "tools", name: "Git", icon: faGitAlt },
    python: { category: "other", name: "Python", icon: faPython },
    opengl: { category: "game", name: "OpenGL", icon: faShapes },
    sql: { category: "web", name: "SQL", icon: faDatabase },
    csharp: { category: "game", name: "C#", icon: faUnity },
    ghidra: { category: "hacking", name: "Ghidra (decompilation)", icon: faDragon },
    wireshark: { category: "hacking", name: "Wireshark", icon: faNetworkWired },
    assembly: { category: "hacking", name: "Assembly", icon: faMicrochip },
    bash: { category: "hacking", name: "Bash", icon: faTerminal },
    linux: { category: "hacking", name: "Linux", icon: faTerminal },
    security: { category: "hacking", name: "Security", icon: faShieldHalved },
    pcb: { category: "embedded", name: "PCB Design", icon: faBolt },
    team: { category: "tools", name: "Team management", icon: faPeopleGroup },
    jira: { category: "tools", name: "Jira", icon: faJira },
    make: { category: "tools", name: "Makefiles", icon: faWrench },
  };

  const PROJECTS: Project[] = [
    {
      title: "Flappy Bird VHDL",
      description: "",
      yearFrom: 2024,
      yearTo: 2024,
      tech: ["vhdl", "git", "python", "team"]
    },
    {
      title: "APSS-2 Kessler firmware",
      description: "",
      yearFrom: 2024,
      yearTo: 2024,
      tech: ["c", "freertos", "make", "rust", "git", "team", "jira"]
    },
    {
      title: "APSS Pico-SAT 2024",
      description: "",
      yearFrom: 2024,
      yearTo: 2024,
      tech: ["cpp", "pcb", "make", "git", "team"]
    },
    {
      title: "Portfolio site, Résumé",
      description: "",
      yearFrom: 2024,
      yearTo: 2024,
      tech: ["js", "react"]
    },
    {
      title: "NZ Cyber Security Competition 2024",
      description: "",
      yearFrom: 2024,
      yearTo: 2024,
      tech: ["c", "python", "linux", "security", "ghidra", "wireshark"]
    },
    {
      title: "Noted markup language",
      description: "",
      yearFrom: 2023,
      yearTo: 2023,
      tech: ["rust", "js"]
    },
    {
      title: "Postgres DB migration",
      description: "",
      yearFrom: 2024,
      yearTo: 2024,
      tech: ["js", "sql", "aws", "express", "git", "jira"]
    },
    {
      title: "Mobile MFA login",
      description: "",
      yearFrom: 2023,
      yearTo: 2023,
      tech: ["js", "ionic", "angular", "firebase", "git", "jira"]
    },
    {
      title: "Bluetooth temperature probe support",
      description: "",
      yearFrom: 2023,
      yearTo: 2023,
      tech: ["js", "ionic", "angular", "wireshark", "git", "jira"]
    },
    {
      title: "Stardome space visualization",
      description: "",
      yearFrom: 2022,
      yearTo: 2022,
      git: "https://github.com/AlexApps99/stardome",
      tech: ["rust", "opengl"]
    },
    {
      title: "SparkMemes automated YouTube channel",
      description: "",
      yearFrom: 2018,
      yearTo: 2022,
      url: "https://www.youtube.com/@SparkMemes",
      git: "https://github.com/AlexApps99/SparkMemes",
      tech: ["python", "linux", "bash"]
    },
    {
      title: "ring_zero, Annihilation Inc.",
      description: "",
      yearFrom: 2023,
      yearTo: 2023,
      url: "https://xnopytagameing.itch.io/",
      tech: ["csharp", "opengl", "git", "team"]
    },
    {
      title: "NES Emulator",
      description: "",
      yearFrom: 2022,
      yearTo: 2022,
      tech: ["rust", "assembly"],
    },
    {
      title: "Bad Apple!! on CASIO fx-9750GII",
      description: "",
      yearFrom: 2022,
      yearTo: 2022,
      tech: ["c", "python", "bash"]
    },
    {
      title: "Other?",
      description: "See my GitHub for more projects - there are lots of shorter projects and experiments that I haven't listed here.",
      tech: []
    }
  ];

  return {
    id: "projects",
    name: "Projects",
    element: (
      <>
        <h2 className={`text-2xl ${HEADING_FONT.className} !font-bold`}>Projects</h2>
        <ul className="">
          {PROJECTS.map((project) => (
            <li key={project.title} className="">
              <figure className="m-4 p-2 border-slate-700 bg-slate-600 bg-opacity-20 backdrop-blur-sm border rounded shadow-inner shadow-slate-900/50 block">
                <figcaption className="font-bold text-xl flex justify-between">
                  <span className="block">
                  {
                  (project.url) ?
                     <a href={project.url} target="_blank" className="glow-hover">{project.title}&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a>
                  :
                    project.title
                  }
                  </span>
                  <span className="block text-slate-400 text-sm">{
                    (project.yearTo == null || project.yearTo == null || project.yearFrom === project.yearTo) ?
                      (project.yearFrom ?? project.yearTo ?? '')
                    :
                      `${project.yearFrom} - ${project.yearTo}`
                  }</span>
                </figcaption>
                {/* <img src={project.image} alt={project.title} className="w-full rounded-t-xl" /> */}
                <p className="text-slate-400 p-2">
                  {project.description || WALTER_WHITE}
                </p>
                <ul className="flex flex-wrap">
                  {project.tech.map((tech) => (
                    <li key={tech} className="m-1 rounded-full px-2 shadow-lg text-sm" style={{"backgroundColor": TECH_CATEGORY_COLOURS[TECHS[tech].category].bg, "color": TECH_CATEGORY_COLOURS[TECHS[tech].category].fg}}>
                      <span className="pr-1"><FontAwesomeIcon icon={TECHS[tech].icon}></FontAwesomeIcon></span>
                      <span>{TECHS[tech].name}</span>
                    </li>
                  ))}
                </ul>
              </figure>

            </li>
          ))}
        </ul>
      </>
    )
  };
}

