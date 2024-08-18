import {Section} from './Section';

export default function About({ body }: { body: string }): Section {
  return {
    id: "about",
    name: "About",
    headingName: "About Me",
    element: (
      <p className="p-2 text-slate-300">{body}</p>
    )
  };
}
