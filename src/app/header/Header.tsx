import { Section } from "../sections/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAME, TAGLINE, SOCIALS, HEADING_FONT } from "../config";
import { useEffect, useState } from "react";

export default function Header(sections: Section[]) {
  return (
    <header className={`sticky top-0 flex flex-col max-h-screen w-1/3 p-8 bg-gradient-to-r from-slate-900 from-30% ${HEADING_FONT.className}`}>
      <div className="mb-12">
        <h1 className="font-bold text-2xl">{NAME}</h1>
        <h2>{TAGLINE}</h2>
      </div>

      <ul className="flex-grow">
        {
          sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.name}</a>
            </li>
          ))
        }
      </ul>


      <ul className="items-center flex">
        {
          SOCIALS.map((social) => (
            <li key={social.name} className="m-1">
              <a href={typeof social.url === 'string' ? social.url : 'about:blank'} title={social.name} className="text-gray-400 transition-colors hover:text-white" target="_blank"><FontAwesomeIcon icon={social.icon} size="1x" fixedWidth /></a>
            </li>
          ))
        }
      </ul>
    </header>
  );
}
