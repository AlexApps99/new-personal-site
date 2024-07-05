import { WALTER_WHITE } from "./config";
import Header from "./header/Header";
import type { Section } from "./sections/Section";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";

export default function Home() {
  const sections: Section[] = [
    About({
      title: "About Me",
      body: WALTER_WHITE
    }),
    Projects()
  ];

  const header = Header(sections);
  return (
    <div className="flex flex-col md:flex-row">
      {header}
      <main className="p-4 space-y-8 flex-grow max-w-4xl pt-16 mx-auto">
        {sections.map((section) => (
          <section className="" key={section.id} id={section.id}>
            {section.element}
          </section>
        ))}
      </main>
    </div>
  );
}
