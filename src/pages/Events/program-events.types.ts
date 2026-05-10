export type ProgramEventRecord = {
  title: string;
  description: string;
  season: string;
  imageTop: string;
  imageBottom: string;
  flippedLayout: boolean;
};

export type ProgramEventsFile = {
  events: ProgramEventRecord[];
};
