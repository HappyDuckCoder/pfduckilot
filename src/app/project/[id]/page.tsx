import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NoiseBackground from "@/components/NoiseBackground";
import { projects } from "@/lib/data";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const { id } = params;
  const projectId = Number(id);
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <NoiseBackground mode="light" intensity={0.1}>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              ← Back to Home
            </Link>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] overflow-hidden">
              <div className="relative w-full aspect-[16/7]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/5 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 text-white">
                  <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-slate-100/85">
                    {project.category}
                  </p>
                  <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
                    {project.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </NoiseBackground>

      <NoiseBackground mode="dark" intensity={0.1}>
        <section className="py-14 md:py-16 text-slate-200">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Project Overview
                </h2>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  {project.overview}
                </p>
              </div>

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

              <div>
                <h3 className="text-xl font-semibold text-white">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Project Info</h3>
                <div className="mt-4 space-y-3 text-sm">
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
            </aside>
          </div>
        </section>
      </NoiseBackground>

      <NoiseBackground mode="light" intensity={0.1}>
        <section className="py-14 md:py-16">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-5">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Results</h3>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome}>- {outcome}</li>
                  ))}
                </ul>
              </div>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
              >
                View on GitHub
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </NoiseBackground>
    </main>
  );
};

export default ProjectDetailPage;
