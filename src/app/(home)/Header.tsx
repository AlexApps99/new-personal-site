"use client";

import { HeaderLink, Section } from "./Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAME, TAGLINE, SOCIALS } from "../config";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const PAGE_LINKS: HeaderLink[] = [
  { id: "home", name: "Home", href: "/", type: "link" },
  //{id: 'blog', name: 'Blog', href: '/blog', type: 'link'},
  { id: "cv", name: "Résumé", href: "/cv", type: "external" },
];

export default function Header({
  pageLinks,
  fragLinks,
}: {
  pageLinks: HeaderLink[];
  fragLinks?: HeaderLink[];
}) {
  const pathname = usePathname();

  function inPath(path: string): boolean {
    return pathname === path;
  }

  function makeHeaderLink({ id, name, href, type }: HeaderLink): JSX.Element {
    switch (type) {
      case "fragment":
        return (
          <a href={href} className="glow-hover italic">
            {name}
          </a>
        );
      case "link":
        return (
          <Link
            href={href}
            className={`glow-hover ${inPath(href) ? "before:content-['>_']" : ""}`}
          >
            {name}
          </Link>
        );
      case "external":
        return (
          <a href={href} className="glow-hover group" target="_blank">
            {name}&nbsp;
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="transition-transform group-hover:[transform:scale(1.25)]"
            />
          </a>
        );
    }
  }

  function makeHeaderLinks(links: HeaderLink[]): JSX.Element[] {
    return links.map((link) => (
      <li key={link.id} className="my-3 first:mt-0 last:mb-0">
        {makeHeaderLink(link)}
      </li>
    ));
  }

  const SHOW_FRAG_LINKS: boolean = fragLinks != null && fragLinks.length > 0;

  return (
    <header className="flex max-h-screen flex-shrink-0 space-x-4 bg-gradient-to-b from-slate-900/60 from-30% p-4 font-display sm:space-x-10 sm:p-6 lg:sticky lg:top-0 lg:flex-col lg:space-x-0 lg:bg-gradient-to-r lg:p-24">
      <div className="lg:mb-12">
        <Link href="/">
          <h1 className="text-3xl font-bold [text-shadow:0_0_8px_rgba(255,255,255,0.5)] lg:text-5xl">
            {NAME}
          </h1>
        </Link>
        <h2 className="whitespace-pre-line text-base text-slate-400 lg:text-xl">
          {TAGLINE}
        </h2>
      </div>

      <ul
        className={`flex-grow text-xl ${SHOW_FRAG_LINKS ? "lg:flex-grow-0" : ""}`}
      >
        {makeHeaderLinks(pageLinks)}
      </ul>
      {SHOW_FRAG_LINKS ? (
        <>
          <hr className="my-6 hidden opacity-20 lg:block" />
          <ul className="hidden flex-grow text-xl lg:block">
            {makeHeaderLinks(fragLinks!)}
          </ul>
        </>
      ) : null}

      <ul className="flex flex-col items-center justify-normal text-3xl lg:flex-row lg:text-5xl">
        {SOCIALS.map((social) => (
          <li key={social.name} className="m-1">
            <a
              href={typeof social.url === "string" ? social.url : "about:blank"}
              title={social.name}
              className="text-gray-400 transition hover:text-white hover:[filter:drop-shadow(0_0_2px_white)]"
              target="_blank"
            >
              <FontAwesomeIcon icon={social.icon} size="1x" fixedWidth />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
