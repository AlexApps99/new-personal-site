import { faAngular, faAws, faGitAlt, faJira, faNodeJs, faPython, faReact, faRust, faSquareJs, faUnity, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import {Section} from '../Section';
import { faArrowUpRightFromSquare, faBolt, faDatabase, faDragon, faFire, faLaptopCode, faLayerGroup, faMicrochip, faMobileAlt, faNetworkWired, faPeopleGroup, faShapes, faShieldHalved, faTerminal, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HEADING_FONT } from '@/app/config';

export type Project = {
  title: string;
  description: string;
  url?: string;
  git?: string;
  yearTo?: number;
  yearFrom?: number;
  image?: string;
  tech: TechnologyId[];
};

type TechnologyCategory = "embedded" | "web" | "game" | "hacking" | "tools" | "other";

const TECH_CATEGORY_COLOURS: { [id in TechnologyCategory]: { fg: string; bg: string; } } = {
  embedded: { fg: "#fbc", bg: "#712" },
  web: { fg: "#bff", bg: "#167" },
  game: { fg: "#afb", bg: "#071" },
  hacking: { fg: "#fc9", bg: "#620" },
  tools: { fg: "#bef", bg: "#148" },
  other: { fg:"#faf", bg: "#507" },
};

type Technology = {
  category: TechnologyCategory;
  name: string;
  icon: IconDefinition;
};

export type TechnologyId =
  "vhdl" | "c" | "cpp" |
  "js" | "rust" | "react" |
  "angular" | "ionic" | "firebase" |
  "aws" | "express" | "freertos" |
  "git" | "python" | "opengl" |
  "sql" | "csharp" | "ghidra" |
  "wireshark" | "assembly" | "bash" |
  "linux" | "security" | "pcb" |
  "team" | "jira" | "make";

const TECHS: { [id in TechnologyId]: Technology; } = {
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

export default function Projects(projects: Project[]): Section {
  return {
    id: "projects",
    name: "Projects",
    element: (
      <>
        <ul className="">
          {projects.map((project) => (
            <li key={project.title} className="">
              <figure className="m-4 p-2 border-slate-700 bg-slate-700 bg-opacity-50 border-2 rounded-lg shadow-inner shadow-slate-900/50 block">
                <figcaption className="font-bold text-xl flex justify-between">
                  <span className="block">
                  {
                  (project.url) ?
                     <a href={project.url} target="_blank" className="glow-hover group">{project.title}&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="group-hover:[transform:scale(1.25)] transition-transform" /></a>
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
                <p className="text-slate-300 p-2">
                  {project.description}
                </p>
                <ul className="flex flex-wrap">
                  {project.tech.map((tech) => (
                    <li key={tech} className="m-1 rounded-full px-2 shadow-lg text-sm" style={{"backgroundColor": TECH_CATEGORY_COLOURS[TECHS[tech].category].bg, "color": TECH_CATEGORY_COLOURS[TECHS[tech].category].fg}}>
                      <span className="pr-1"><FontAwesomeIcon icon={TECHS[tech].icon} /></span>
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

