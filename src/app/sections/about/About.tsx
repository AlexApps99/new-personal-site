import { HEADING_FONT } from '@/app/config';
import {Section} from '../Section';

export default function About({ title, body }: { title: string; body: string }): Section {
  return {
    id: "about",
    name: "About",
    element: (
      <>
        <h2 className={`text-2xl ${HEADING_FONT.className} !font-bold`}>{title}</h2>
        <p className="p-2">{body}</p>
      </>
    )
  };
}
