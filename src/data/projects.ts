/** Selected work. Screenshots are imported so Astro can optimise them
 *  and emit a responsive srcset at build time. */

import type { ImageMetadata } from "astro";

import academiq from "@/assets/projects/academiq.webp";
import cabgrade from "@/assets/projects/cabgrade.webp";
import routewala from "@/assets/projects/routewala.webp";

export type Project = {
  name: string;
  blurb: string;
  /** Imported screenshot, shown at the top of the card. */
  image?: ImageMetadata;
  role: string;
  duration: string;
  completed: string;
  tech: string[];
  highlights: string[];
  challenges: string[];
  impact: string;
  live?: string;
  repo?: string;
  collaborators?: { name: string; role: string }[];
};

export const projects: Project[] = [
  {
    name: "Routewala",
    image: routewala,
    blurb:
      "An end-to-end Employee Transportation System (ETS) for corporates and their transport partners — rostering, route optimisation, live GPS and compliance in one platform.",
    role: "Full-Stack Developer",
    duration: "Ongoing",
    completed: "2026",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Google Maps",
      "React Native",
    ],
    highlights: [
      "Built shift-aware smart rostering that plans routes and auto-allocates cabs in minutes.",
      "Implemented route optimisation for pickup and drop sequencing to cut distance, fuel and travel time.",
      "Delivered live GPS tracking with speed, odometer, geofencing, route-deviation alerts and accurate ETAs.",
      "Built compliance management for driver licences, vehicle documents and permits, with automated expiry reminders.",
      "Shipped attendance and no-show capture through companion driver, employee and supervisor apps.",
      "Added safety tooling — SOS, guard and escort flows — plus reporting and analytics across every trip.",
    ],
    challenges: [
      "Keeping live vehicle telemetry responsive for large fleets without overwhelming the client.",
      "Modelling rosters, vendors and compliance as 10+ modules that still behave as one product.",
    ],
    impact:
      "Replaces spreadsheets and manual coordination with a single connected platform for transport teams — from planning the roster to verifying every document and tracking every kilometre.",
    live: "https://routewala.com",
  },
  {
    name: "CabGrade",
    image: cabgrade,
    blurb:
      "Cab and fleet management software for Indian car rental and taxi operators — bookings, billing, drivers and analytics, with a free tier for small operators.",
    role: "Full-Stack Developer",
    duration: "Ongoing",
    completed: "2026",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "React Native",
    ],
    highlights: [
      "Built smart booking management replacing the WhatsApp-and-Excel workflow most operators run on.",
      "Implemented one-click billing and invoicing with payment and accounting integrations.",
      "Delivered vehicle and driver management with multi-user, role-based access control.",
      "Shipped 80+ reports and analytics giving operators visibility into their own business numbers.",
      "Built companion mobile apps — an admin app and a chauffeur-facing driver app.",
      "Added per-operator branded websites and corporate taxi (ETS) management.",
    ],
    challenges: [
      "Designing for operators migrating off spreadsheets, so onboarding had to be near-zero friction.",
      "Supporting an inter-operator booking network across cities while keeping each operator's data isolated.",
    ],
    impact:
      "Serves 400+ operators across India with a platform that has processed over Rs 2,500 Cr in billing, at 95% retention.",
    live: "https://kbcd.in",
  },
  {
    name: "Academiq AI",
    image: academiq,
    blurb:
      "An AI workspace for classrooms — lesson plans, worksheets, quizzes and homework help generated in seconds, built for teachers and students.",
    role: "Full-Stack Developer",
    duration: "Ongoing",
    completed: "2026",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "LLM APIs",
    ],
    highlights: [
      "Built AI generation flows for lesson plans, worksheets, quizzes and homework help.",
      "Implemented authentication with email/password and Google sign-in, plus persistent sessions.",
      "Designed school workspaces so teachers and students can join and share resources.",
      "Added a gamified layer — badges and progress — to keep students engaged.",
    ],
    challenges: [
      "Grounding model output in real curriculum requirements so results are classroom-usable, not generic.",
      "Keeping generation latency low enough that teachers use it mid-planning.",
    ],
    impact:
      "Turns hours of lesson preparation into seconds, giving teachers usable classroom material rather than raw model output.",
    live: "https://academiq-tools.io",
  },
  {
    name: "Dakshana Edu Portal",
    blurb:
      "A learning-management platform for Dakshana scholars — resources, exams, results and analytics in one place.",
    role: "Full-Stack Developer",
    duration: "6 months",
    completed: "October 2024",
    tech: [
      "React",
      "Node.js",
      "MUI",
      "Redux",
      "AWS S3",
      "Recharts",
      "ExcelJS",
      "Docx",
      "Framer Motion",
      "Lodash",
      "Crypto",
    ],
    highlights: [
      "Built the front-end in React with MUI, backed by a Redux store.",
      "Implemented file upload and storage on AWS S3 with signed access.",
      "Generated exam analysis in the browser — question-wise, scholar-wise and topic-wise breakdowns.",
      "Shipped an admin dashboard for managing scholars, content and exam cycles.",
    ],
    challenges: [
      "Integrating direct-to-S3 uploads without exposing credentials.",
      "Keeping the UI responsive while analysing large result datasets client-side.",
    ],
    impact:
      "Streamlined how resources and results are managed for both admins and scholars, replacing scattered spreadsheets with a single platform.",
    live: "https://lms.dakshana.org",
    repo: "https://github.com/kamdev-choudhary/dak-edu-portal",
    collaborators: [{ name: "Sandeep Tiwari", role: "Web Developer" }],
  },
  {
    name: "Portfolio",
    blurb:
      "This site. A statically generated portfolio built on Astro, shipping no UI-framework runtime at all.",
    role: "Designer & Developer",
    duration: "Ongoing",
    completed: "2026",
    tech: [
      "Astro",
      "TypeScript",
      "Tailwind CSS v4",
      "Starwind UI",
      "GitHub Pages",
    ],
    highlights: [
      "Fully static output — no server, no UI-framework runtime, around 12kB of JavaScript.",
      "Command palette (⌘K) and vim-style keyboard navigation written in plain TypeScript.",
      "Contact form posts to a Google Apps Script endpoint, which files each enquiry in a Sheet and emails a copy.",
      "Client-side PDF resume generation, plus a print stylesheet for the same page.",
    ],
    challenges: [
      "Replacing a React component library with accessible markup that ships no runtime.",
      "Taking contact submissions without a backend, while keeping spam out.",
    ],
    impact:
      "Replaced a server-rendered Next.js site with a static build that hosts for free and loads in a fraction of the payload.",
    repo: "https://github.com/kamdev-choudhary/kamdev-choudhary.github.io",
  },
];
