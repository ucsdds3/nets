export type ProjectRecord = {
  title: string;
  description: string;
  date: string;
  image: string;
  imageOverflowClass?: string;
};

export type ProjectsFile = {
  featured: ProjectRecord;
  pastProjects: ProjectRecord[];
};

export type ProjectCardData = Omit<ProjectRecord, "image"> & {
  image: string;
};
