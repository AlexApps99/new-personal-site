import { Metadata, Viewport } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBriefcase, faFileArrowDown, faFlask, faGlobe, faGraduationCap, faHeart, faLocationDot, faMicrochip, faPhone, faUserCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import ObfuscatedLink from "./obfuscated_link";
import { NAME, OPENGRAPH, TWITTER } from "../config";
import styles from "./cv.module.css";

const PAGE_TITLE = "Alex Brown - CV";
const EXTERNAL_PAGE_TITLE = "Alex Brown - CV";

export const metadata: Metadata = {
  // should be overriden by each page
  title: PAGE_TITLE,
  openGraph: {
    title: EXTERNAL_PAGE_TITLE,
    ...OPENGRAPH
  },
  twitter: {
    // should be overriden by each page
    title: EXTERNAL_PAGE_TITLE,
    ...TWITTER
  },
  robots: {
    index: false,
    follow: false,
  }
};

export const viewport: Viewport = {
  themeColor: '#32CD32',
};

const CONTACT_DATA: { icon: IconDefinition, data: JSX.Element }[] = [
  {
    icon: faLocationDot,
    data: <>Auckland, NZ</>,
  },
  {
    icon: faGlobe,
    data: <a className="text-green-600" href="https://alexbrown.nz/">alexbrown.nz</a>,
  },
  {
    icon: faPhone,
    data: <ObfuscatedLink target="_blank" text="gMzITNgEjMwACNwIDI0YzK" href={(text: string) => "tel:" + text.replaceAll(" ", "-")} placeholder="+64 000 000 0000" />,
  },
  {
    icon: faLinkedin,
    data: <a className="text-green-600" href="https://www.linkedin.com/in/alex-b-nz/" target="_blank">alex-b-nz</a>,
  },
  {
    icon: faGithub,
    data: <a className="text-green-600" href="https://github.com/AlexApps99" target="_blank">AlexApps99</a>,
  },
  {
    icon: faEnvelope,
    data: <ObfuscatedLink className="text-green-600" target="_blank" text="t92YuwWah12ZAlTOzBHch5CelxWY" href={(text: string) => "mailto:" + text} placeholder="enable.js@example.org" />,
  }
];

const SUMMARY: JSX.Element = <p>
  I am a driven Part II Software Engineering student at UoA, with a keen interest in solving hard problems.
  I taught myself how to code in high school, and have loved it ever since.
  I learn independently at a rapid pace, shown by the breadth of my personal projects and the scale of my work at Comply Pro.
  I am looking for a challenging role where I can grow my skills and make a difference.
</p>;

function skill(text: string): JSX.Element {
  return <span className="font-bold">{text}</span>;
}

const SECTIONS: {
  icon: IconDefinition,
  title: string,
  content: JSX.Element
}[] = [
  {
    icon: faGraduationCap,
    title: "Education",
    content: <>
      <span className="!pl-0"><span><b>University of Auckland - Bachelor of Engineering (Honours)</b> - 9.00/9.00 GPA</span> <span className="float-right italic">2023 - 2026</span></span>
      <ul className={styles.thick}>
        <li>
          <span><b>Software Engineering Class Representative</b> (2024)</span>
          <p>
            Advocating for 300 students across 4 courses,
            {skill('resolving issues')} through communication.
          </p>
        </li>
        <li>
          <span><b>Teaching Assistant - ENGGEN 115</b> (2024)</span>
          <p>
            Voluntarily answered student Q&A in 2023, which led to a paid TA role in 2024.<br/>
            {skill('Helping')} dozens of students every day, facilitating weekly staff {skill('debriefs')}.
          </p>
        </li>
        <li>
          <span><b><a className="text-green-600" href="https://www.auckland.ac.nz/en/science/study-with-us/science-scholars-programme.html" target="_blank">Science Scholars</a></b> (2023)</span>
          <p>
            Engaged in various scientific discussions with professors and peers,<br/>
            developed {skill('scientific writing and research')} skills with an <a className="text-green-600" href="https://sciencescholarsuoa.wixsite.com/science-scholars-23/post/leaky-abstractions" target="_blank">article analyzing recent CPU flaws</a>.
          </p>
        </li>
      </ul>
    </>
  },
  {
    icon: faBriefcase,
    title: "Industry experience",
    content: <>
      <span className="!pl-0"><span><b><a className="text-green-600" href="https://www.complypro.io/" target="_blank">Comply Pro</a>, Auckland - Software Engineer (intern)</b></span> <span className="float-right italic">2022 - present</span></span>
      <div>
        <p>
          Filling many roles across their codebases, including backend ({skill('node.js + SQL')}),<br/>
          Web/Mobile ({skill('Angular + Ionic + TypeScript')}), and internal tooling ({skill('Vue')}, {skill('node.js + SQL')}).<br/>
          Managing simultaneous feature {skill('branches')} in {skill('Git')}, performing regular {skill('PR code reviews')}.
        </p><p>
          <b>Key achievements:</b>
        </p>
        <ul className={styles.thick}>
          <li>
            Rewrote the <a className="text-green-600" href="https://www.safefoodpro.com/features/bluetooth-probe-integration" target="_blank">temperature probe UI</a> using {skill('Web Bluetooth APIs')}, by {skill('reverse-engineering')} the DishTemp protocol with {skill('WireShark')}.
            Used by thousands of customers every day.
          </li>
          <li>
            Added {skill('2FA')} to our Web apps using {skill('Firebase Authentication')}.<br/>
            {skill('Improved security practices')} internally, and for several large clients.
          </li>
          <li>
            Rewrote {skill('MS-SQL')} server code and stored procedures for {skill('PostgreSQL')} migration.
            Changes reached every corner of the codebase, requiring a comprehensive {skill('regression test suite')}.<br/>
            Significantly cuts hosting costs, enabling product expansion into Canada.
          </li>
          <li>
            Spearheaded the {skill('backend')} of approval and permit workflows,
            a <a className="text-green-600" href="https://www.siteapppro.com/ca/workflows-and-approvals" target="_blank">&quot;killer feature&quot;</a> for Site App Pro that has attracted large international clients.<br/>
          </li>
        </ul>
      </div>
      {/* TODO Add bullet points of transferrable skills, and consider removing the first summary */}
      <span className="!pl-0"><span><b><a className="text-green-600" href="https://www.exploregroup.co.nz/" target="_blank">Explore Group</a>, Bay of Islands - Ferry crew, restaurant staff</b></span> <span className="float-right italic">2021 - 2022</span></span>
      <p>
        Being a deckhand demanded {skill('situational awareness')}, {skill('teamwork')}, and clear {skill('communication')} with the skipper.
        As a kitchenhand, I learned the importance of {skill('positive interactions')} with customers, {skill('handling complaints')} effectively, and {skill('working quickly under pressure')}.
      </p>
    </>

  },
  {
    icon: faUsers,
    title: "Club projects",
    content: <>
      <span className="!pl-0"><span><b>Auckland Program for Space Systems</b></span> <span className="float-right italic">2023 - present</span></span>
      <p>
        {skill('Leading a satellite design team')} that won the APSS Mission Proposal Competition 2023.<br/>
        Currently working on the upcoming &quot;Kessler&quot; satellite&apos;s {skill('C++')}/{skill('FreeRTOS')}-based firmware,
        by coordinating with a team, balancing strict {skill('hardware requirements')} and {skill('tight deadlines')}.
      </p>
      <span className="!pl-0"><span><b>UoA Game Developers Guild</b></span> <span className="float-right italic">2023 - present</span></span>
      <p>
        Passionate about Game development since high school.
        Formed a team at GDG, honed {skill('project management')} and {skill('team communication')}.
        Released 3 games in 2023, <a className="text-green-600" href="https://xnopytagameing.itch.io/annihilation-inc" target="_blank">one with 700+ plays</a>.
        Experienced in Unity 3D ({skill('C#')}), Godot, and {skill('OpenGL')} programming ({skill('Rust')}/{skill('C++')}).
      </p>
    </>
  },
  {
    icon: faAward,
    title: "Achievements",
    content: <ul className={styles.thick}>
      <li>
        <span><b>UoA Dean&apos;s Honours list</b> - top 5% in Part 1 Engineering (2023)</span>
      </li>
      <li>
        <span><b>ENGGEN 115 - First in class award</b> (2023)</span>
      </li>
      <li>
        <span><b>UoA <a className="text-green-600" href="https://www.auckland.ac.nz/en/science/about-the-faculty/department-of-mathematics/study-mathematics/max.html" target="_blank">MAX program</a> - First in class award</b> (2022)</span>
      </li>
      <li>
        <span><b>UoA Top Achiever Scholarship</b> (2022)</span>
      </li>
      <li>
        <span><b>NCEA Scholarship in Calculus, Statistics</b> (2022)</span>
      </li>
      <li>
        <span><b>UoA <a className="text-green-600" href="https://www.auckland.ac.nz/en/engineering/about-the-faculty/engineering-science/new-zealand-engineering-science-competition/previous-winners.html#:~:text=Team%20122" target="_blank">NZ Engineering Science Competition</a></b> - Runners up, $2000 prize (2021)</span>
      </li>
    </ul>
  },
  // TODO this is in a weird spot, a lot of this can be moved elsewhere but it's also useful to keep
  // Make it briefer (bullet-points, key skills)
  {
    icon: faMicrochip,
    title: "Technical skills",
    content: <ul className={styles.thick}>
      <li>
        <b>Linux</b>:
        Linux has been my primary OS since 2016, so I&apos;m highly experienced in
        writing {skill('shell scripts')} and interfacing with the {skill('Linux ecosystem')}, {skill('GCC/Clang')}, {skill('CMake')}, and other tools.
      </li>
      <li>
        <b>Embedded</b>:
        I have made projects with {skill('Arduino')}, {skill('NodeMCU')} (ESP8266),
        {skill('Raspberry Pi')}, {skill('RP2040')}, and {skill('MSP430')}, using SPI/I<sup>2</sup>C/UART protocols.
        I also have experience designing {skill('PCBs')} in KiCAD.
      </li>
      {/* <li>
        <b>Other</b>:
        I have done a bunch of other stuff that I should quickly summarize. TODO!
      </li> */}
    </ul>
  },
  // TODO add more GitHub links here, make the repos tidier
  {
    icon: faFlask,
    title: "Personal projects",
    content: <ul className={styles.thick}>
      <li>
        <b><a className="text-green-600" href="https://github.com/AlexApps99/SparkMemes" target="_blank">SparkMemes</a></b>: An automated <a className="text-green-600" href="https://www.youtube.com/@SparkMemes" target="_blank">YouTube channel</a> with over 4000 entertaining videos generated without human interaction. ({skill('Python')}, {skill('REST APIs')}, {skill('Tkinter')})
      </li>
      <li>
        <b><a className="text-green-600" href="https://github.com/AlexApps99/badapple_encoder" target="_blank"><i>Bad Apple!!</i> video playback on CASIO FX9860GII</a></b>: A custom video codec, with a {skill('Python')} encoder and a {skill('C')} decoder. The video is 20x smaller when compressed, and fits on the calculator.
      </li>
      <li>
        <b>FFToMIDI</b>: A {skill('Python')}/{skill('numpy')} project that converts audio into Piano notes using the {skill('Fast Fourier Transform')}. You can still understand human speech encoded through thousands of Piano notes!
      </li>
      <li>
        <b><a className="text-green-600" href="https://github.com/ZoussCity/stardome" target="_blank">Space visualisation</a></b>: A program in {skill('Rust')} to accurately visualise the Earth-Moon system, rendering with {skill('OpenGL')} and generating ephemerides with NASA&apos;s SPICE toolkit.
      </li>
      <li>
        <b>GameBoy VHDL recreation</b>: An {skill('FPGA')} project to recreate the Nintendo GameBoy in {skill('VHDL')}, including Z80-based {skill('CPU design')}, and an SDRAM-backed PPU, for the {skill('DE0-CV')} board.<br/>
      </li>
      <li>
        <b>Other</b>: I&apos;ve written emulators, physics simulations, scrapers, websites, Pi-crunchers, raymarchers, and more.
        I&apos;d love to discuss any of my projects in more detail!
      </li>
    </ul>
  },
  {
    icon: faHeart,
    title: "Interests",
    content: <ul className={styles.thick}>
      <li>
        <b>Hiking and Kayaking</b>:
        I love wandering through NZ&apos;s beautiful outdoors, and the sense of freedom it brings.
        I&apos;m looking forward to my next &quot;NZ Great Walks&quot; track.
      </li>
      <li>
        <b>Open Source</b>:
        I make a point of using and contributing to open-source projects, and
        I owe my passion for tinkering to Linux and the open-source community.
      </li>
      <li>
        <b>Photography</b>: I got serious about photography last year, to enjoy late-night city commutes.
        I love capturing the asymmetry between nature and technology.
      </li>
    </ul>
  },
  {
    icon: faUserCheck,
    title: "References",
    content: <p>
      References are available on request.
    </p>
  }
];

export default function Cv() {
  return (<>

    {/* TODO change the link when the PDF changes */}
    <a className={"text-green-600 text-2xl print:!hidden " + styles.download} href="/cv/cv-2024-04.pdf" target="_blank" type="application/pdf" download="Alex Brown - CV.pdf">Download CV <FontAwesomeIcon icon={faFileArrowDown} /></a>

    <header>
      <div className="flex justify-between items-baseline">
        <h1 className="my-0 text-4xl font-bold">{NAME}</h1>
        <h2 className="my-0 italic text-right text-lg font-bold">Part&nbsp;II Software&nbsp;Engineer @ University&nbsp;of&nbsp;Auckland</h2>
      </div>
      <ul className="p-0 m-0 pt-2 grid justify-between grid-cols-[repeat(2,auto)] sm:grid-cols-[repeat(3,auto)]">
        {CONTACT_DATA.map(({ icon, data }) => (
          <li key={icon.iconName} className="block whitespace-nowrap">
            <FontAwesomeIcon icon={icon} />
            <address className="inline not-italic pl-2">
              {data}
            </address>
          </li>
        ))}
      </ul>
    </header>

    <main>

      <section className="print:break-inside-avoid">{SUMMARY}</section>

      {
        SECTIONS.map(({ icon, title, content }) => (
          <section key={title} className={'print:break-inside-avoid ' + styles.indentedSummary}>
            <h2 className="rounded-full !pl-2 text-lg bg-gradient-to-t from-[rgba(32,255,32,1.0)] to-[rgba(32,255,32,0.25)] font-bold"><FontAwesomeIcon icon={icon} /> {title}</h2>
            {content}
          </section>
        ))
      }

    </main>
  </>);
}
