import { Section } from "../sections/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAME, TAGLINE, SOCIALS, HEADING_FONT } from "../config";
import { useEffect, useState } from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Header(sections: Section[]) {
  return (
    <header className={`space-x-6 lg:space-x-0 lg:space-y-12 lg:sticky lg:top-0 flex lg:flex-col max-h-screen p-6 lg:p-24 bg-gradient-to-b lg:bg-gradient-to-r from-slate-900/60 from-30% flex-shrink-0 ${HEADING_FONT.className}`}>
      <div>
        <h1 className="font-bold text-3xl lg:text-5xl [text-shadow:0_0_8px_rgba(255,255,255,0.5)]">{NAME}</h1>
        <h2 className="whitespace-pre-line text-slate-400 text-base lg:text-xl">{TAGLINE}</h2>
      </div>

      <ul className="flex-grow text-xl">
        {
          sections.map((section) => (
            <li key={section.id} className="mb-3">
              <a href={`#${section.id}`} className="glow-hover">{section.name}</a>
            </li>
          ))
        }
        <li>
          <a href="/cv" className="glow-hover group" target="_blank">Résumé&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="group-hover:[transform:scale(1.25)] transition-transform" /></a>
        </li>
      </ul>


      <ul className="items-center flex flex-col lg:flex-row justify-normal text-4xl lg:text-5xl">
        {
          SOCIALS.map((social) => (
            <li key={social.name} className="m-1">
              <a href={typeof social.url === 'string' ? social.url : 'about:blank'} title={social.name} className="text-gray-400 transition hover:text-white hover:[filter:drop-shadow(0_0_2px_white)]" target="_blank"><FontAwesomeIcon icon={social.icon} size="1x" fixedWidth /></a>
            </li>
          ))
        }
      </ul>
    </header>
  );
}
