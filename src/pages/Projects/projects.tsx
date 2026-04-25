import heroImage from "../../assets/projects/projects-hero.png";
import ProjectsCard from "./ProjectsCard";
import { featuredProject, pastProjects } from "./ProjectCardData";

export default function Projects() {
  return (
    <section className="relative mb-[30px] overflow-hidden bg-[#efefef] pt-28 pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-95"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-18deg, transparent 0 310px, #c6e9f1 310px 560px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex w-full flex-col">
        <div className="relative grid min-h-screen items-start gap-6 px-4 md:grid-cols-[1fr_auto] md:px-0">
          <h1 className="z-1 text-[12vw] leading-none font-extrabold tracking-[-0.06em] text-accent md:pl-10 md:text-[12vw]">
            PROJECTS
          </h1>
          <img
            src={heroImage}
            alt="NETS members with project poster"
            className="absolute top-0 right-0 w-full max-w-[847px] self-end object-cover md:mt-6"
          />
        </div>

        <div className="mt-10 flex flex-col gap-16 px-4 md:mt-14 md:gap-28 md:px-0">
          <ProjectsCard project={featuredProject} align="left" />

          <h2 className="text-center text-[40px] leading-none font-bold tracking-[-0.06em] text-accent md:text-[64px]">
            PAST PROJECTS
          </h2>

          {pastProjects.map((project, index) => (
            <ProjectsCard key={project.title} project={project} align={index % 2 === 0 ? "right" : "left"} />
          ))}
        </div>
      </div>
    </section>
  );
}
