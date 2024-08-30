import { ABOUT_BODY, NAME, PROJECTS } from "../config";
import Header, { PAGE_LINKS } from "./Header";
import type { Section } from "./Section";
import About from "./About";
import Projects from "./Projects";
import Stars from "./Stars";

export default function Home() {
  const sections: Section[] = [
    About({
      body: ABOUT_BODY,
    }),
    Projects(PROJECTS),
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Header
        pageLinks={PAGE_LINKS}
        fragLinks={sections.map((s) => ({
          id: s.id,
          name: s.name,
          href: `#${s.id}`,
          type: "fragment",
        }))}
      />
      <main className="mx-auto max-w-4xl flex-grow space-y-8 p-4 py-8 text-lg lg:py-24">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="font-display text-2xl !font-bold [text-shadow:0_0_4px_rgba(255,255,255,0.5)]">
              {section.headingName || section.name}
            </h2>
            {section.element}
          </section>
        ))}
        <section className="text-center text-slate-300">
          <span>
            Designed and created with{" "}
            <a
              className="text-green-400"
              href="https://nextjs.org/"
              target="_blank"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              className="text-green-400"
              href="https://tailwindcss.com/"
              target="_blank"
            >
              Tailwind
            </a>
            , with{" "}
            <a
              className="text-green-400"
              href="https://fontawesome.com/"
              target="_blank"
            >
              FontAwesome icons
            </a>
            .<br />
            &copy; {NAME}, {currentYear}
          </span>
        </section>
      </main>
      <Stars />
    </div>
  );
}
