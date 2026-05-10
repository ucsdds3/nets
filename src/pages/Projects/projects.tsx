import heroImage from "../../assets/projects/projects-hero.png";
import ProjectsCard from "./ProjectsCard";
import { featuredProject, pastProjects } from "./ProjectCardData";

export default function Projects() {
  return (
    <section className="relative mb-[30px] overflow-hidden bg-[#efefef] pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-95"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-18deg, transparent 0 310px, #c6e9f1 310px 560px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex w-full flex-col">
        <div className="relative grid min-h-[min(420px,55vh)] items-start gap-6 px-4 pt-24 md:min-h-screen md:grid-cols-[1fr_auto] md:pl-10 md:pr-4">
          <h1 className="relative z-20 text-[10vw] font-bold tracking-tight text-accent md:text-[10vw]">
            PROJECTS
          </h1>
          <img
            src={heroImage}
            alt="NETS members with project poster"
            className="pointer-events-none absolute top-40 right-0 z-0 h-[min(40vh,350px)] w-[min(83vw,924px)] max-w-none object-cover object-top-right md:top-64 md:h-[min(60vh,700px)] md:w-[min(81vw,1036px)]"
          />
        </div>

        <div className="mt-10 flex flex-col gap-16 px-4 md:mt-14 md:gap-28 md:px-0">
          <ProjectsCard project={featuredProject} align="left" />

          <h2 className="text-center text-[40px] leading-none font-bold tracking-[-0.06em] text-accent md:text-[64px]">
            PAST PROJECTS
          </h2>

          {pastProjects.map((project, index) => (
            <ProjectsCard
              key={project.title}
              project={project}
              align={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
