import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NoiseBackground from "@/components/NoiseBackground";
import { projects } from "@/lib/data";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { id } = await params;
  const projectId = Number(id);
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <NoiseBackground mode="light" intensity={0.1}>
        <section className="py-14 md:py-18">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              ← Back to Home
            </Link>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.10)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative min-h-[260px] md:min-h-[360px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent" />
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {project.category}
                  </p>
                  <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                    {project.title}
                  </h1>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                      {project.timeline}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                      {project.status}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                      Team size: {project.teamSize}
                    </span>
                  </div>

                  <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
                    >
                      View on GitHub
                      <span>↗</span>
                    </Link>
                    <Link
                      href="/#project-section"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Back to Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </NoiseBackground>

      <NoiseBackground mode="dark" intensity={0.1}>
        <section className="py-14 md:py-16 text-slate-200">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Project Overview
                </h2>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  {project.overview}
                </p>
              </article>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">Problem</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">Solution</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </article>
              </div>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7">
                <h3 className="text-xl font-semibold text-white">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">Contribution</h3>
                  <ul className="mt-4 space-y-2">
                    {project.contribution.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">Achievements</h3>
                  <ul className="mt-4 space-y-2">
                    {project.achievements.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-8 self-start">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Project Info</h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <p>
                    <span className="text-slate-400">Role:</span>{" "}
                    <span className="text-slate-100">{project.role}</span>
                  </p>
                  <p>
                    <span className="text-slate-400">Timeline:</span>{" "}
                    <span className="text-slate-100">{project.timeline}</span>
                  </p>
                  <p>
                    <span className="text-slate-400">Status:</span>{" "}
                    <span className="text-slate-100">{project.status}</span>
                  </p>
                  <p>
                    <span className="text-slate-400">Team size:</span>{" "}
                    <span className="text-slate-100">{project.teamSize}</span>
                  </p>
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Highlights</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {project.highlights.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Results</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {project.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </aside>
          </div>
        </section>
      </NoiseBackground>
    </main>
  );
};

export default ProjectDetailPage;
