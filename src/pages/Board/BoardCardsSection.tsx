import BoardMemberCard from "./BoardMemberCard";
import boardMembersData from "./board-members.json";
import type { BoardMemberRecord } from "./board-members.types";
import { boardImageSrc } from "./board-images";

type BoardMemberResolved = BoardMemberRecord & {
  imageSrc: string;
};

const MEMBERS: BoardMemberResolved[] = boardMembersData.members.map((m) => ({
  ...m,
  imageSrc: boardImageSrc(m.image),
}));

export default function BoardCardsSection() {
  return (
    <section className="relative bg-primary py-16 px-6 md:px-10 z-1">
      {/* Optional geometric accent */}

      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="absolute -left-40 w-[120%] h-50 opacity-30 pointer-events-none bg-accent/40"
          style={{ top: `calc(20rem + ${index * 40}rem)`, rotate: `${(-1) ** index * 5}deg` }}
        />
      ))}
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {MEMBERS.map((member) => (
            <BoardMemberCard
              key={member.id}
              name={member.name}
              title={member.title}
              imagePlaceholder={member.imageSrc}
              emailUrl={member.emailUrl}
              linkedInUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
