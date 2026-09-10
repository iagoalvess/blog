"use client";

import { GitBranch, Globe } from "lucide-react";
import { useState } from "react";
import { techColors } from "../lib/projects";

export interface BrowserProject {
  name: string;
  description: string;
  githubUrl: string;
  websiteUrl?: string;
  tech: string[];
  category: string;
  featured?: boolean;
}

interface Labels {
  all: string;
  sections: Record<string, string>;
  featured: string;
  github: string;
  website: string;
  empty: string;
}

const pill = (tech: string) =>
  `rounded-full px-2.5 py-0.5 text-sm dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500 ${
    techColors[tech] ?? "text-zinc-800 ring-1 ring-zinc-400 dark:text-zinc-200"
  }`;

function ProjectCard({
  project,
  labels,
}: {
  project: BrowserProject;
  labels: Labels;
}) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h3 className="flex items-center gap-2 text-xl">
          {project.name}
          {project.featured && (
            <span className="rounded-full px-2 py-0.5 text-xs text-sky-600 ring-1 ring-sky-500 dark:text-sky-500 dark:ring-sky-600">
              {labels.featured}
            </span>
          )}
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          {project.tech.map((tech) => (
            <span key={tech} className={pill(tech)}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="p-4">{project.description}</p>
      </div>
      <div
        className={`flex w-full justify-between ${project.websiteUrl ? "divide-x divide-zinc-400 dark:divide-zinc-500" : ""}`}
      >
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
          >
            <Globe strokeWidth={1.4} className="size-5" /> {labels.website}
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> {labels.github}
        </a>
      </div>
    </div>
  );
}

export default function ProjectsBrowser({
  projects,
  tech,
  labels,
}: {
  projects: BrowserProject[];
  tech: string[];
  labels: Labels;
}) {
  const [filter, setFilter] = useState<string | null>(null);

  const visible = filter
    ? projects.filter((project) => project.tech.includes(filter))
    : projects;

  const sections = Object.keys(labels.sections).map((category) => ({
    category,
    items: visible.filter((project) => project.category === category),
  }));

  return (
    <>
      <div className="mb-16 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setFilter(null)}
          aria-pressed={filter === null}
          className="rounded-full px-2.5 py-0.5 text-sm ring-1 ring-zinc-400 transition-all aria-pressed:bg-sky-500 aria-pressed:text-zinc-50 aria-pressed:ring-sky-500 sm:hover:ring-sky-500 dark:ring-zinc-500 dark:aria-pressed:bg-sky-600 dark:aria-pressed:ring-sky-600"
        >
          {labels.all}
        </button>
        {tech.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item === filter ? null : item)}
            aria-pressed={item === filter}
            className="rounded-full px-2.5 py-0.5 text-sm ring-1 ring-zinc-400 transition-all aria-pressed:bg-sky-500 aria-pressed:text-zinc-50 aria-pressed:ring-sky-500 sm:hover:ring-sky-500 dark:ring-zinc-500 dark:aria-pressed:bg-sky-600 dark:aria-pressed:ring-sky-600"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="space-y-20">
        {sections.map(
          ({ category, items }) =>
            items.length > 0 && (
              <section key={category} className="space-y-8">
                <h2 className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  {labels.sections[category]}
                </h2>
                {items.map((project) => (
                  <ProjectCard
                    key={project.githubUrl}
                    project={project}
                    labels={labels}
                  />
                ))}
              </section>
            ),
        )}
        {visible.length === 0 && (
          <p className="text-center text-zinc-500 dark:text-zinc-400">
            {labels.empty}
          </p>
        )}
      </div>
    </>
  );
}
