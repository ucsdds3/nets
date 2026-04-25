import type { ProjectCardData } from "./ProjectCardData";

type ProjectsCardProps = {
  project: ProjectCardData;
  align?: "left" | "right";
};

export default function ProjectsCard({ project, align = "left" }: ProjectsCardProps) {
  const isRight = align === "right";

  return (
    <article
      className={`grid w-full max-w-[1160px] overflow-visible border border-slate-200 bg-base-100 shadow-[0_4px_3.55px_rgba(0,0,0,0.25)] md:h-[517px] ${
        isRight ? "md:ml-auto md:grid-cols-[61%_39%]" : "md:grid-cols-[39%_61%]"
      }`}
    >
      <div
        className={`${isRight ? "md:order-2" : ""} relative aspect-square overflow-visible md:h-full md:aspect-auto`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover md:absolute md:bottom-0 md:left-1/2 md:h-[112%] md:w-[112%] md:max-w-none md:-translate-x-1/2"
        />
      </div>
      <div className={`${isRight ? "md:order-1" : ""} p-6 md:overflow-y-auto md:p-8`}>
        <span className="inline-block rounded-[13px] border border-accent px-3 py-1 text-xs tracking-wide text-accent md:text-sm">
          {project.date}
        </span>
        <h3 className="mt-4 text-[24px] leading-tight font-semibold tracking-tight text-black md:text-[36px]">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-black md:text-[20px] md:tracking-tight">
          {project.description}
        </p>
      </div>
    </article>
  );
}
