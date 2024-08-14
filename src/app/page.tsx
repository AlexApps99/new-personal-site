import { ABOUT_BODY, HEADING_FONT, NAME, PROJECTS } from "./config";
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
    <div className="flex flex-col lg:flex-row">
      {header}
      <main className="p-4 space-y-8 flex-grow max-w-4xl py-8 lg:py-24 mx-auto text-lg">
        {sections.map((section) => (
          <section className="" key={section.id} id={section.id}>
            <h2 className={`text-2xl ${HEADING_FONT.className} !font-bold [text-shadow:0_0_4px_rgba(255,255,255,0.5)]`}>{section.headingName || section.name}</h2>
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
