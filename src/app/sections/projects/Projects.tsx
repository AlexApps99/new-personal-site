import { faAngular, faGitAlt, faJava, faJs, faPython, faReact, faRust } from '@fortawesome/free-brands-svg-icons';
import {Section} from '../Section';
import { faDatabase, faEnvelope, faHashtag, faLaptopCode, faMicrochip, faRss, faServer, faShapes, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Project = {
  title: string;
  description: string;
  url: string;
  image?: string;
  tech: string[];
};

type TechnologyCategory = "frontend" | "backend" | "database" | "devops" | "cloud" | "mobile" | "other";

type Technology = {
  category: TechnologyCategory;
  name: string;
  color: string; // hex
  icon?: any;
};

export default function Projects(): Section {

  const TECHS: { [id: string]: Technology; } = {
    vhdl: { category: "other", name: "VHDL", color: "#000000", icon: faMicrochip },
    c: { category: "other", name: "C", color: "#000000", icon: faLaptopCode },
    cpp: { category: "other", name: "C++", color: "#000000", icon: faLaptopCode },
    java: { category: "other", name: "Java", color: "#000000", icon: faJava },
    js: { category: "other", name: "JavaScript, TypeScript", color: "#000000", icon: faJs },
    rust: { category: "other", name: "Rust", color: "#000000", icon: faRust },
    react: { category: "frontend", name: "React", color: "#000000", icon: faReact },
    angular: { category: "frontend", name: "Angular", color: "#000000", icon: faAngular },
    freertos: { category: "frontend", name: "FreeRTOS", color: "#000000", icon: faServer },
    git: { category: "devops", name: "Git", color: "#000000", icon: faGitAlt },
    python: { category: "other", name: "Python", color: "#000000", icon: faPython },
    opengl: { category: "other", name: "OpenGL", color: "#000000", icon: faShapes },
    sql: { category: "database", name: "SQL", color: "#000000", icon: faDatabase },
    cSharp: { category: "other", name: "C#", color: "#000000", icon: faHashtag },
    reverseEngineering: { category: "other", name: "Reverse Engineering", color: "#000000", icon: faWrench },
    assembly: { category: "other", name: "Assembly", color: "#000000", icon: faMicrochip },
  };

  const PROJECTS: Project[] = [
    {
      title: "Project 1",
      description: "This is the first project",
      url: "https://example.com",
      tech: []
    },
    {
      title: "Project 2",
      description: "This is the second project",
      url: "https://example.com",
      tech: ["vhdl", "rust"]
    }
  ];

  return {
    id: "projects",
    name: "Projects",
    element: (
      <>
        <h2 className="text-xl font-bold">Projects</h2>
        <ul className="grid col-auto grid-cols-2 col-start-1">
          {PROJECTS.map((project) => (
            <li key={project.title} className="m-2 border-gray-400 border rounded-md block">
              <figure>
                <figcaption>TODO</figcaption>
                <blockquote></blockquote>
              </figure>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.url}>{project.url}</a>
              <ul>
                {project.tech.map((tech) => (
                  <li key={tech} className="m-1">
                    <span className="text-gray-400"><FontAwesomeIcon icon={TECHS[tech].icon}></FontAwesomeIcon></span>
                    <span>{TECHS[tech].name}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </>
    )
  };
}

