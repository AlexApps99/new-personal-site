import { Metadata, Viewport } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBriefcase, faFileArrowDown, faFlask, faGlobe, faGraduationCap, faHeart, faLocationDot, faMicrochip, faPhone, faUserCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import ObfuscatedLink from "./obfuscated_link";
import { NAME } from "../config";

const PAGE_TITLE = "Alex Brown - CV";
const EXTERNAL_PAGE_TITLE = "Alex Brown - CV";

export const metadata: Metadata = {
  // should be overriden by each page
  title: PAGE_TITLE,
  openGraph: {
    title: EXTERNAL_PAGE_TITLE,
  },
  twitter: {
    // should be overriden by each page
    title: EXTERNAL_PAGE_TITLE,
  },
};

export const viewport: Viewport = {
  themeColor: '#32CD32',
};

const CONTACT_DATA: { icon: IconDefinition, data: JSX.Element }[] = [
  {
    icon: faLocationDot,
    data: <address>Auckland, NZ</address>,
  },
  {
    icon: faGlobe,
    data: <address><a href="https://alexbrown.nz/">alexbrown.nz</a></address>,
  },
  {
    icon: faPhone,
    data: <address><ObfuscatedLink className="nostyle" target="_blank" text="gMzITNgEjMwACNwIDI0YzK" href={(text: string) => "tel:" + text.replaceAll(" ", "-")} placeholder="+64 000 000 0000" /></address>,
  },
  {
    icon: faLinkedin,
    data: <address><a href="https://www.linkedin.com/in/alex-b-nz/" target="_blank">alex-b-nz</a></address>,
  },
  {
    icon: faGithub,
    data: <address><a href="https://github.com/AlexApps99" target="_blank">AlexApps99</a></address>,
  },
  {
    icon: faEnvelope,
    data: <address><ObfuscatedLink target="_blank" text="t92YuwWah12ZAlTOzBHch5CelxWY" href={(text: string) => "mailto:" + text} placeholder="enable.js@example.org" /></address>,
  }
];

const SUMMARY: JSX.Element = <p>
  I am a driven Part II Software Engineering student at UoA, with a keen interest in solving hard problems.
  I taught myself how to code in high school, and have loved it ever since.
  I learn independently at a rapid pace, shown by the breadth of my personal projects and the scale of my work at Comply Pro.
  I am looking for a challenging role where I can grow my skills and make a difference.
</p>;

const SECTIONS: {
  icon: IconDefinition,
  title: string,
  content: JSX.Element
}[] = [
  {
    icon: faGraduationCap,
    title: "Education",
    content: <>
      <span className="subheading"><span><b>University of Auckland - Bachelor of Engineering (Honours)</b> - 9.00/9.00 GPA</span> <span className="date">2023 - 2026</span></span>
      <ul className="thick">
        <li>
          <span><b>Software Engineering Class Representative</b> (2024)</span>
          <p>
            Advocating for 300 students across 4 courses,
            <span className="skill">resolving issues</span> through communication.
          </p>
        </li>
        <li>
          <span><b>Teaching Assistant - ENGGEN 115</b> (2024)</span>
          <p>
            Voluntarily answered student Q&A in 2023, which led to a paid TA role in 2024.<br/>
            <span className="skill">Helping</span> dozens of students every day, facilitating weekly staff <span className="skill">debriefs</span>.
          </p>
        </li>
        <li>
          <span><b><a href="https://www.auckland.ac.nz/en/science/study-with-us/science-scholars-programme.html" target="_blank">Science Scholars</a></b> (2023)</span>
          <p>
            Engaged in various scientific discussions with professors and peers,<br/>
            developed <span className="skill">scientific writing and research</span> skills with an <a href="https://sciencescholarsuoa.wixsite.com/science-scholars-23/post/leaky-abstractions" target="_blank">article analyzing recent CPU flaws</a>.
          </p>
        </li>
      </ul>
    </>
  },
  {
    icon: faBriefcase,
    title: "Industry experience",
    content: <>
      <span className="subheading"><span><b><a href="https://www.complypro.io/" target="_blank">Comply Pro</a>, Auckland - Software Engineer (intern)</b></span> <span className="date">2022 - present</span></span>
      <div>
        <p>
          Filling many roles across their codebases, including backend (<span className="skill">node.js + SQL</span>),<br/>
          Web/Mobile (<span className="skill">Angular + Ionic + TypeScript</span>), and internal tooling (<span className="skill">Vue</span>, <span className="skill">node.js + SQL</span>).<br/>
          Managing simultaneous feature <span className="skill">branches</span> in <span className="skill">Git</span>, performing regular <span className="skill">PR code reviews</span>.
        </p><p>
          <b>Key achievements:</b>
        </p>
        <ul className="thick">
          <li>
            Rewrote the <a href="https://www.safefoodpro.com/features/bluetooth-probe-integration" target="_blank">temperature probe UI</a> using <span className="skill">Web Bluetooth APIs</span>, by <span className="skill">reverse-engineering</span> the DishTemp protocol with <span className="skill">WireShark</span>.
            Used by thousands of customers every day.
          </li>
          <li>
            Added <span className="skill">2FA</span> to our Web apps using <span className="skill">Firebase Authentication</span>.<br/>
            <span className="skill">Improved security practices</span> internally, and for several large clients.
          </li>
          <li>
            Rewrote <span className="skill">MS-SQL</span> server code and stored procedures for <span className="skill">PostgreSQL</span> migration.
            Changes reached every corner of the codebase, requiring a comprehensive <span className="skill">regression test suite</span>.<br/>
            Significantly cuts hosting costs, enabling product expansion into Canada.
          </li>
          <li>
            Spearheaded the <span className="skill">backend</span> of approval and permit workflows,
            a <a href="https://www.siteapppro.com/ca/workflows-and-approvals" target="_blank">&quot;killer feature&quot;</a> for Site App Pro that has attracted large international clients.<br/>
          </li>
        </ul>
      </div>
      {/* TODO Add bullet points of transferrable skills, and consider removing the first summary */}
      <span className="subheading"><span><b><a href="https://www.exploregroup.co.nz/" target="_blank">Explore Group</a>, Bay of Islands - Ferry crew, restaurant staff</b></span> <span className="date">2021 - 2022</span></span>
      <p>
        Being a deckhand demanded <span className="skill">situational awareness</span>, <span className="skill">teamwork</span>, and clear <span className="skill">communication</span> with the skipper.
        As a kitchenhand, I learned the importance of <span className="skill">positive interactions</span> with customers, <span className="skill">handling complaints</span> effectively, and <span className="skill">working quickly under pressure</span>.
      </p>
    </>

  },
  {
    icon: faUsers,
    title: "Club projects",
    content: <>
      <span className="subheading"><span><b>Auckland Program for Space Systems</b></span> <span className="date">2023 - present</span></span>
      <p>
        <span className="skill">Leading a satellite design team</span> that won the APSS Mission Proposal Competition 2023.<br/>
        Currently working on the upcoming &quot;Kessler&quot; satellite&apos;s <span className="skill">C++</span>/<span className="skill">FreeRTOS</span>-based firmware,
        by coordinating with a team, balancing strict <span className="skill">hardware requirements</span> and <span className="skill">tight deadlines</span>.
      </p>
      <span className="subheading"><span><b>UoA Game Developers Guild</b></span> <span className="date">2023 - present</span></span>
      <p>
        Passionate about Game development since high school.
        Formed a team at GDG, honed <span className="skill">project management</span> and <span className="skill">team communication</span>.
        Released 3 games in 2023, <a href="https://xnopytagameing.itch.io/annihilation-inc" target="_blank">one with 700+ plays</a>.
        Experienced in Unity 3D (<span className="skill">C#</span>), Godot, and <span className="skill">OpenGL</span> programming (<span className="skill">Rust</span>/<span className="skill">C++</span>).
      </p>
    </>
  },
  {
    icon: faAward,
    title: "Achievements",
    content: <ul className="thick">
      <li>
        <span><b>UoA Dean&apos;s Honours list</b> - top 5% in Part 1 Engineering (2023)</span>
      </li>
      <li>
        <span><b>ENGGEN 115 - First in class award</b> (2023)</span>
      </li>
      <li>
        <span><b>UoA <a href="https://www.auckland.ac.nz/en/science/about-the-faculty/department-of-mathematics/study-mathematics/max.html" target="_blank">MAX program</a> - First in class award</b> (2022)</span>
      </li>
      <li>
        <span><b>UoA Top Achiever Scholarship</b> (2022)</span>
      </li>
      <li>
        <span><b>NCEA Scholarship in Calculus, Statistics</b> (2022)</span>
      </li>
      <li>
        <span><b>UoA <a href="https://www.auckland.ac.nz/en/engineering/about-the-faculty/engineering-science/new-zealand-engineering-science-competition/previous-winners.html#:~:text=Team%20122" target="_blank">NZ Engineering Science Competition</a></b> - Runners up, $2000 prize (2021)</span>
      </li>
    </ul>
  },
  // TODO this is in a weird spot, a lot of this can be moved elsewhere but it's also useful to keep
  // Make it briefer (bullet-points, key skills)
  {
    icon: faMicrochip,
    title: "Technical skills",
    content: <ul className="thick">
      <li>
        <b>Linux</b>:
        Linux has been my primary OS since 2016, so I&apos;m highly experienced in
        writing <span className="skill">shell scripts</span> and interfacing with the <span className="skill">Linux ecosystem</span>, <span className="skill">GCC/Clang</span>, <span className="skill">CMake</span>, and other tools.
      </li>
      <li>
        <b>Embedded</b>:
        I have made projects with <span className="skill">Arduino</span>, <span className="skill">NodeMCU</span> (ESP8266),
        <span className="skill">Raspberry Pi</span>, <span className="skill">RP2040</span>, and <span className="skill">MSP430</span>, using SPI/I<sup>2</sup>C/UART protocols.
        I also have experience designing <span className="skill">PCBs</span> in KiCAD.
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
    content: <ul className="thick">
      <li>
        <b><a href="https://github.com/AlexApps99/SparkMemes" target="_blank">SparkMemes</a></b>: An automated <a href="https://www.youtube.com/@SparkMemes" target="_blank">YouTube channel</a> with over 4000 entertaining videos generated without human interaction. (<span className="skill">Python</span>, <span className="skill">REST APIs</span>, <span className="skill">Tkinter</span>)
      </li>
      <li>
        <b><a href="https://github.com/AlexApps99/badapple_encoder" target="_blank"><i>Bad Apple!!</i> video playback on CASIO FX9860GII</a></b>: A custom video codec, with a <span className="skill">Python</span> encoder and a <span className="skill">C</span> decoder. The video is 20x smaller when compressed, and fits on the calculator.
      </li>
      <li>
        <b>FFToMIDI</b>: A <span className="skill">Python</span>/<span className="skill">numpy</span> project that converts audio into Piano notes using the <span className="skill">Fast Fourier Transform</span>. You can still understand human speech encoded through thousands of Piano notes!
      </li>
      <li>
        <b><a href="https://github.com/ZoussCity/stardome" target="_blank">Space visualisation</a></b>: A program in <span className="skill">Rust</span> to accurately visualise the Earth-Moon system, rendering with <span className="skill">OpenGL</span> and generating ephemerides with NASA&apos;s SPICE toolkit.
      </li>
      <li>
        <b>GameBoy VHDL recreation</b>: An <span className="skill">FPGA</span> project to recreate the Nintendo GameBoy in <span className="skill">VHDL</span>, including Z80-based <span className="skill">CPU design</span>, and an SDRAM-backed PPU, for the <span className="skill">DE0-CV</span> board.<br/>
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
    content: <ul className="thick">
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
    <a className="download no-print" href="/cv/cv-2024-04.pdf" target="_blank" type="application/pdf" download="Alex Brown - CV.pdf">Download CV <FontAwesomeIcon icon={faFileArrowDown} /></a>

    <header>
      <div className="heading">
        <h1 className="title">{NAME}</h1>
        <h2 className="subtitle">Part&nbsp;II Software&nbsp;Engineer @ University&nbsp;of&nbsp;Auckland</h2>
      </div>
      <ul className="contacts">
        {CONTACT_DATA.map(({ icon, data }) => (
          <li key={icon.iconName}>
            <FontAwesomeIcon icon={icon} />
            {data}
          </li>
        ))}
      </ul>
    </header>

    <main>

      <section className="summary">{SUMMARY}</section>

      {
        SECTIONS.map(({ icon, title, content }) => (
          <section key={title}>
            <h2><FontAwesomeIcon icon={icon} /> {title}</h2>
            {content}
          </section>
        ))
      }

    </main>
  </>);
}
