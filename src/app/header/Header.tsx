import { Section } from "../sections/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAME, TAGLINE, SOCIALS, HEADING_FONT } from "../config";
import { useEffect, useState } from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Header(sections: Section[]) {
  return (
    <header className={`space-x-6 md:space-x-0 md:space-y-12 md:sticky md:top-0 flex md:flex-col max-h-screen p-4 bg-gradient-to-b md:bg-gradient-to-r from-slate-900/75 from-30% flex-shrink-0 ${HEADING_FONT.className}`}>
      <div className="">
        <h1 className="font-bold text-2xl">{NAME}</h1>
        <h2 className="whitespace-pre-line text-slate-400 text-sm">{TAGLINE}</h2>
      </div>

      <ul className="flex-grow">
        {
          sections.map((section) => (
            <li key={section.id}>
              <a href={`/#${section.id}`} className="glow-hover">{section.name}</a>
            </li>
          ))
        }
        <li>
          <a href="https://alexbrown.nz/" className="glow-hover" target="_blank">Résumé&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a>
        </li>
      </ul>


      <ul className="items-center flex flex-col md:flex-row justify-center md:justify-normal">
        {
          SOCIALS.map((social) => (
            <li key={social.name} className="m-1 text-3xl">
              <a href={typeof social.url === 'string' ? social.url : 'about:blank'} title={social.name} className="text-gray-400 transition-colors hover:text-white glow-hover" target="_blank"><FontAwesomeIcon icon={social.icon} size="1x" fixedWidth /></a>
            </li>
          ))
        }
      </ul>
    </header>
  );
}
