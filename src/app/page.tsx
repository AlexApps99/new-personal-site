import { ABOUT_BODY, NAME, PROJECTS } from "./config";
import Header from "./header/Header";
import type { Section } from "./sections/Section";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";

export default function Home() {
  const sections: Section[] = [
    About({
      title: "About Me",
      body: ABOUT_BODY
    }),
    Projects(PROJECTS)
  ];

  const header = Header(sections);

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row">
      {header}
      <main className="p-4 space-y-8 flex-grow max-w-4xl pt-16 mx-auto text-lg">
        {sections.map((section) => (
          <section className="" key={section.id} id={section.id}>
            {section.element}
          </section>
        ))}
        <section className="text-center text-slate-300">
          <span>
            Designed and created with <a className="text-green-400" href="https://nextjs.org/" target="_blank">Next.js</a> and <a className="text-green-400" href="https://tailwindcss.com/" target="_blank">Tailwind</a>, with <a className="text-green-400" href="https://fontawesome.com/" target="_blank">FontAwesome icons</a>.<br/>
            &copy; {NAME}, {currentYear}
          </span>
        </section>
      </main>
    </div>
  );
}
