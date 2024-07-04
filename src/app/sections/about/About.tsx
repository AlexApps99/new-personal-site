import {Section} from '../Section';

export default function About({ title, body }: { title: string; body: string }): Section {
  return {
    id: "about",
    name: "About",
    element: (
      <>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{body}</p>
      </>
    )
  };
}
