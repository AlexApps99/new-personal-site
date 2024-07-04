import Header from "./header/Header";
import type { Section } from "./sections/Section";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";

const WALTER_WHITE = `My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead, murdered by my brother-in-law Hank Schrader. Hank has been building a meth empire for over a year now and using me as his chemist.`;

const WALTER_WHIPSUM = (WALTER_WHITE + '\n').repeat(30);

export default function Home() {
  const sections: Section[] = [
    About({
      title: "About Me",
      body: WALTER_WHIPSUM
    }),
    Projects(),
    {
      element: <h2>Posts</h2>,
      id: "posts",
      name: "Posts"
    },
    {
      element: <h2>Résumé</h2>,
      id: "resume",
      name: "Résumé"
    }
  ];

  const header = Header(sections);
  return (
    <div className="flex space-x-2">
      {header}
      <main className="p-8">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            {section.element}
          </section>
        ))}
      </main>
    </div>
  );
}
