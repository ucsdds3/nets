export type BoardMemberRecord = {
  id: string;
  name: string;
  title: string;
  emailUrl?: string;
  linkedinUrl?: string;
  image: string;
};

export type BoardMembersFile = {
  members: BoardMemberRecord[];
};
