import { GitBranch, Globe } from "lucide-react";
import { ReactNode } from "react";
import { t } from "../../lib/i18n";
import Translate from "../../components/Translate";

interface Project {
  name: string;
  descriptionKey: string;
  githubUrl: string;
  websiteUrl?: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "picodohorizonte",
    descriptionKey: "projects.picodohorizonte.description",
    githubUrl: "https://github.com/iagoalvess/picodohorizonte-backend",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#512BD4] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          .NET
        </span>
        <span className="rounded-full bg-[#336791] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          PostgreSQL
        </span>
      </div>
    ),
  },
  {
    name: "wifi-bh",
      descriptionKey: "projects.wifi-bh.description",
    githubUrl: "https://github.com/iagoalvess/wifibh",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#512BD4] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          .NET
        </span>
        <span className="rounded-full bg-[#336791] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          PostgreSQL
        </span>
        <span className="rounded-full bg-[#336791] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          PostGIS
        </span>
      </div>
    ),
  },
  {
    name: "bustracker",
      descriptionKey: "projects.bustracker.description",
    githubUrl: "https://github.com/iagoalvess/bustracker",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#512BD4] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          .NET
        </span>
        <span className="rounded-full bg-[#336791] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          PostgreSQL
        </span>
        <span className="rounded-full bg-[#336791] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          PostGIS
        </span>
      </div>
    ),
  },
    {
    name: "investimentos",
      descriptionKey: "projects.investimentos.description",
    githubUrl: "https://github.com/iagoalvess/investimentos",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#512BD4] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          .NET
        </span>
        <span className="rounded-full bg-[#336791] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          PostgreSQL
        </span>
      </div>
    ),
  },
  {
    name: "our-places",
      descriptionKey: "projects.our-places.description",
    githubUrl: "https://github.com/iagoalvess/our-places-api",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#E89F3E] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Java
        </span>
        <span className="rounded-full bg-[#6DB33F] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Spring Boot
        </span>
      </div>
    ),
  },
  {
    name: "race-manager-api",
      descriptionKey: "projects.race-manager-api.description",
    githubUrl: "https://github.com/iagoalvess/race-manager-api",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#E89F3E] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Java
        </span>
        <span className="rounded-full bg-[#6DB33F] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Spring Boot
        </span>
      </div>
    ),
  },
  {
    name: "user-service/email-service",
      descriptionKey: "projects.user-service.description",
    githubUrl: "https://github.com/iagoalvess/user-service",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#E89F3E] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Java
        </span>
        <span className="rounded-full bg-[#6DB33F] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Spring Boot
        </span>
        <span className="rounded-full bg-[#6DB33F] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          RabbitMQ
        </span>
      </div>
    ),
  },
  {
    name: "huffman",
      descriptionKey: "projects.huffman.description",
    githubUrl: "https://github.com/iagoalvess/huffman",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          C++
        </span>
      </div>
    ),
  },
  {
    name: "convex hull",
      descriptionKey: "projects.convex-hull.description",
    githubUrl: "https://github.com/iagoalvess/fechoConvexo",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          C++
        </span>
      </div>
    ),
  },
  {
    name: "P2P chat blockchain",
      descriptionKey: "projects.p2p-chat.description",
    githubUrl: "https://github.com/iagoalvess/DCC-Internet-P2P-Blockchain-Chat",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Python
        </span>
      </div>
    ),
  },
  {
    name: "math expressions",
      descriptionKey: "projects.math-expressions.description",
    githubUrl: "https://github.com/iagoalvess/expressoesMatematicas",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          C++
        </span>
      </div>
    ),
  },
  {
    name: "RIP over UDP",
      descriptionKey: "projects.rip-over-udp.description",
    githubUrl: "https://github.com/iagoalvess/UDPRIP",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Python
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  descriptionKey,
  githubUrl,
  websiteUrl,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4"><Translate id={descriptionKey} /></p>
      </div>
      <div className={`flex w-full justify-between ${websiteUrl ? "divide-x divide-zinc-400 dark:divide-zinc-500" : ""}`}>
        {websiteUrl && (
            <a
            href={websiteUrl}
            target="_blank"
            className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
          >
            <Globe strokeWidth={1.4} className="size-5" /> <Translate id="projects.visitWebsite" />
          </a>
        )}
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
            <GitBranch strokeWidth={1.4} className="size-5" /> <Translate id="projects.viewOnGitHub" />
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        <Translate id="projects.title" />
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.githubUrl} {...project} />
        ))}
      </div>
    </>
  );
}
