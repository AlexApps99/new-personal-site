import { faAngular, faAws, faGitAlt, faJira, faNodeJs, faPython, faReact, faRust, faSquareJs, faUnity, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import {Section} from '../Section';
import { faArrowUpRightFromSquare, faBolt, faDatabase, faDragon, faFire, faLaptopCode, faLayerGroup, faMicrochip, faMobileAlt, faNetworkWired, faPeopleGroup, faShapes, faShieldHalved, faTerminal, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const TECH_CATEGORY_COLOURS: { [id: string]: string; } = {
  embedded: "#934",
  web: "#49a",
  game: "#3a4",
  hacking: "#a63",
  tools: "#36a",
  other: "#83a",
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
      tech: ["vhdl", "git", "python", "team"]
    },
    {
      title: "APSS-2 Kessler firmware",
      description: "",
      tech: ["c", "freertos", "make", "rust", "git", "team", "jira"]
    },
    {
      title: "APSS Pico-SAT 2024",
      description: "",
      tech: ["cpp", "pcb", "make", "git", "team"]
    },
    {
      title: "Portfolio site, Résumé",
      description: "",
      tech: ["js", "react"]
    },
    {
      title: "NZ Cyber Security Competition 2024",
      description: "",
      tech: ["c", "python", "linux", "security", "ghidra", "wireshark"]
    },
    {
      title: "Noted markup language",
      description: "",
      tech: ["rust", "js"]
    },
    {
      title: "Postgres DB migration",
      description: "",
      tech: ["js", "sql", "aws", "express", "git", "jira"]
    },
    {
      title: "Mobile MFA login",
      description: "",
      tech: ["js", "ionic", "angular", "firebase", "git", "jira"]
    },
    {
      title: "Bluetooth temperature probe support",
      description: "",
      tech: ["js", "ionic", "angular", "wireshark", "git", "jira"]
    },
    {
      title: "Stardome space visualization",
      description: "",
      tech: ["rust", "opengl"]
    },
    {
      title: "SparkMemes automated YouTube channel",
      description: "",
      tech: ["python", "linux", "bash"]
    },
    {
      title: "ring_zero, Annihilation Inc.",
      description: "",
      url: "https://xnopytagameing.itch.io/",
      tech: ["csharp", "opengl", "git", "team"]
    },
    {
      title: "NES Emulator",
      description: "",
      tech: ["rust", "assembly"],
    },
    {
      title: "Bad Apple!! on CASIO fx-9750GII",
      description: "",
      tech: ["c", "python", "bash"]
    },
    {
      title: "Other?",
      description: "",
      tech: []
    }
  ];

  return {
    id: "projects",
    name: "Projects",
    element: (
      <>
        <h2 className="text-xl font-bold">Projects</h2>
        <ul className="">
          {PROJECTS.map((project) => (
            <li key={project.title} className="">
              <figure className="m-2 p-2 border-slate-600 bg-slate-700 border rounded-xl shadow-inner shadow-slate-600 block">
                <figcaption className="font-bold">{
                  (project.url) ?
                     <a href={project.url} target="_blank">{project.title} <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a>
                  :
                    project.title
                }</figcaption>
                {/* <img src={project.image} alt={project.title} className="w-full rounded-t-xl" /> */}
                <p>
                  {project.description}
                </p>
                <ul className="flex flex-wrap">
                  {project.tech.map((tech) => (
                    <li key={tech} className="m-1 rounded-full px-2" style={{"backgroundColor": TECH_CATEGORY_COLOURS[TECHS[tech].category]}}>
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

