export type Category = "apps" | "academic";

export interface Project {
  name: string;
  descriptionKey: string;
  githubUrl: string;
  websiteUrl?: string;
  tech: string[];
  category: Category;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "bustracker",
    descriptionKey: "projects.bustracker.description",
    githubUrl: "https://github.com/iagoalvess/bustracker",
    tech: ["C#", ".NET", "PostgreSQL", "PostGIS"],
    category: "apps",
    featured: true,
  },
  {
    name: "user-service/email-service",
    descriptionKey: "projects.user-service.description",
    githubUrl: "https://github.com/iagoalvess/user-service",
    tech: ["Java", "Spring Boot", "RabbitMQ"],
    category: "apps",
    featured: true,
  },
  {
    name: "wifi-bh",
    descriptionKey: "projects.wifi-bh.description",
    githubUrl: "https://github.com/iagoalvess/wifibh",
    tech: ["C#", ".NET", "PostgreSQL", "PostGIS"],
    category: "apps",
    featured: true,
  },
  {
    name: "picodohorizonte",
    descriptionKey: "projects.picodohorizonte.description",
    githubUrl: "https://github.com/iagoalvess/picodohorizonte-backend",
    tech: ["C#", ".NET", "PostgreSQL"],
    category: "apps",
  },
  {
    name: "investimentos",
    descriptionKey: "projects.investimentos.description",
    githubUrl: "https://github.com/iagoalvess/investimentos",
    tech: ["C#", ".NET", "PostgreSQL"],
    category: "apps",
  },
  {
    name: "our-places",
    descriptionKey: "projects.our-places.description",
    githubUrl: "https://github.com/iagoalvess/our-places-api",
    tech: ["Java", "Spring Boot"],
    category: "apps",
  },
  {
    name: "race-manager-api",
    descriptionKey: "projects.race-manager-api.description",
    githubUrl: "https://github.com/iagoalvess/race-manager-api",
    tech: ["Java", "Spring Boot"],
    category: "apps",
  },
  {
    name: "huffman",
    descriptionKey: "projects.huffman.description",
    githubUrl: "https://github.com/iagoalvess/huffman",
    tech: ["C++"],
    category: "academic",
  },
  {
    name: "convex hull",
    descriptionKey: "projects.convex-hull.description",
    githubUrl: "https://github.com/iagoalvess/fechoConvexo",
    tech: ["C++"],
    category: "academic",
  },
  {
    name: "math expressions",
    descriptionKey: "projects.math-expressions.description",
    githubUrl: "https://github.com/iagoalvess/expressoesMatematicas",
    tech: ["C++"],
    category: "academic",
  },
  {
    name: "P2P chat blockchain",
    descriptionKey: "projects.p2p-chat.description",
    githubUrl: "https://github.com/iagoalvess/DCC-Internet-P2P-Blockchain-Chat",
    tech: ["Python"],
    category: "academic",
  },
  {
    name: "RIP over UDP",
    descriptionKey: "projects.rip-over-udp.description",
    githubUrl: "https://github.com/iagoalvess/UDPRIP",
    tech: ["Python"],
    category: "academic",
  },
];

export const techColors: Record<string, string> = {
  "C#": "bg-[#512BD4] text-zinc-100",
  ".NET": "bg-[#512BD4] text-zinc-100",
  PostgreSQL: "bg-[#336791] text-zinc-100",
  PostGIS: "bg-[#336791] text-zinc-100",
  Java: "bg-[#E89F3E] text-zinc-950",
  "Spring Boot": "bg-[#6DB33F] text-zinc-950",
  RabbitMQ: "bg-[#FF6600] text-zinc-100",
  "C++": "bg-[#00D8FE] text-zinc-950",
  Python: "bg-[#3776AB] text-zinc-100",
};

// ordem de exibição dos filtros: as que mais aparecem primeiro
export const allTech = Array.from(
  new Set(projects.flatMap((project) => project.tech)),
).sort(
  (a, b) =>
    projects.filter((p) => p.tech.includes(b)).length -
    projects.filter((p) => p.tech.includes(a)).length,
);
