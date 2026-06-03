export type ProgramRecord = {
  title: string;
  description: string;
  season: string;
  imageTop: string;
  imageBottom: string;
  flippedLayout: boolean;
};

export type ProgramsFile = {
  programs: ProgramRecord[];
};
