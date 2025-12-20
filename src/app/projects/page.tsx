import { GitBranch, Globe } from "lucide-react";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  githubUrl: string;
  websiteUrl?: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "wifi-bh",
    description: "Web application for managing public Wi-Fi points in Belo Horizonte. Users can add new points, rate existing ones with stars, import data from PBH CSV files, and view all registered points with coordinates and ratings.",
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
    description:
      "Real-time bus tracking system for Belo Horizonte, using public API data from PBH (Prefeitura de Belo Horizonte). It includes a REST API for querying stops, lines and arrival predictions, a background worker for collecting real-time bus positions, and a GTFS data importer.",
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
    name: "our-places",
    description:
      "A Java backend API built with Spring for relationship management. Designed for couples, it allows saving and rating visited places, storing important dates, and managing shared memories.",
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
    description:
      "A Java backend API built with Spring for race management. Designed for organizers, it allows creating championships and categories, adding participants, recording finish times, and accessing results.",
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
    description:
      "A backend application for user registration built with a microservices architecture. It includes a User Service to handle new user creation and an Email Service to send a welcome notification upon successful registration.",
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
    description:
      "The project is a program designed to reduce the size of text files using the Huffman compression algorithm. It builds a Huffman tree based on character frequency, encoding frequent characters with shorter binary codes. The program supports both compression and decompression of text files.",
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
        <p className="p-4">{description}</p>
      </div>
      <div className={`flex w-full justify-between ${websiteUrl ? "divide-x divide-zinc-400 dark:divide-zinc-500" : ""}`}>
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
          >
            <Globe strokeWidth={1.4} className="size-5" /> Visit website
          </a>
        )}
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> View on GitHub
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
          <ProjectCard key={project.githubUrl} {...project} />
        ))}
      </div>
    </>
  );
}
