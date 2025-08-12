import { GitBranch, Globe } from "lucide-react";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  githubUrl: string;
  url: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "our-places",
    description:
      "A Java backend API built with Spring for relationship management. Designed for couples, it allows saving and rating visited places, storing important dates, and managing shared memories. Also developed the web frontend for the project.",
    url: "https://ourplaceslive.vercel.app/",
    githubUrl: "https://github.com/iagoalvess/our-places-api",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#E89F3E] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Java
        </span>
        <span className="rounded-full bg-[#6DB33F] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Spring
        </span>
        <span className="rounded-full bg-[#6DB33F] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Next.js
        </span>
      </div>
    ),
  },
  {
    name: "race-manager-api",
    description:
      "A Java backend API built with Spring for race management. Designed for organizers, it allows creating championships and categories, adding participants, recording finish times, and accessing results.",
    url: "https://github.com/iagoalvess/race-manager-api",
    githubUrl: "https://github.com/iagoalvess/race-manager-api",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#E89F3E] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Java
        </span>
        <span className="rounded-full bg-[#6DB33F] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Spring
        </span>
      </div>
    ),
  },
  {
    name: "brazilian league pool",
    description:
      "The system is an interactive platform for football betting, where users join groups and earn points based on the accuracy of their predictions. Participants are ranked, and the platform also offers detailed stats and a live football news feed, making the experience more dynamic and engaging for sports fans.",
    url: "https://bolao-brasileirao.vercel.app/",
    githubUrl: "https://github.com/iagoalvess/bolao-brasileirao",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Python
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          FastAPI
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          React
        </span>
      </div>
    ),
  },
  {
    name: "huffman",
    description:
      "The project is a program designed to reduce the size of text files using the Huffman compression algorithm. It builds a Huffman tree based on character frequency, encoding frequent characters with shorter binary codes. The program supports both compression and decompression of text files.",
    url: "https://github.com/iagoalvess/huffman",
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
    description:
      "This C++ project processes 2D point data to compute the convex hull of a point set using Graham's or Jarvis's algorithms. Points are read from a text file, and for Graham's method, the user can choose between InsertionSort, MergeSort, or BucketSort.",
    url: "https://github.com/iagoalvess/fechoConvexo",
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
    description:
      "This project implements a distributed P2P chat system using a blockchain-inspired consensus mechanism to ensure message history integrity and ordering across network nodes. The entire application was developed in Python, leveraging the asyncio library for asynchronous handling of concurrent network connections.",
    url: "https://github.com/iagoalvess/DCC-Internet-P2P-Blockchain-Chat",
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
    description:
      "The project is a C++ implementation of a mathematical expression calculator. It includes features for validating and solving complex expressions in both infix and postfix notation. The program can handle parentheses, multiple operators and operands, and expressions up to 1000 characters. It verifies expression validity, converts between notations, and solves them using a simple interface.",
    url: "https://github.com/iagoalvess/expressoesMatematicas",
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
    description:
      "The project is a dynamic routing system based on the RIP protocol over UDP, developed in Python to simulate real routing behavior between multiple routers.",
    url: "https://github.com/iagoalvess/UDPRIP",
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
  description,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <Globe strokeWidth={1.4} className="size-5" /> Visit website
        </a>
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> View code
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}
