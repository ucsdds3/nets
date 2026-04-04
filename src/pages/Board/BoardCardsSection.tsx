import BoardMemberCard from "./BoardMemberCard";
import sarineImg from "../../assets/image 10777.png";
const MEMBERS = [
  {
    name: "Sarine Krikorian",
    title: "President",
    emailUrl: "sarine@ucsd.edu",
    linkedinUrl: "https://www.linkedin.com/in/sarine-krikorian-b2b1b1b1b1b1/",
  },
  {
    name: "Sarine Krikorian",
    title: "President",
    emailUrl: "sarine@ucsd.edu",
    linkedinUrl: "https://www.linkedin.com/in/sarine-krikorian-b2b1b1b1b1b1/",
  },
  {
    name: "Sarine Krikorian",
    title: "President",
    emailUrl: "sarine@ucsd.edu",
    linkedinUrl: "https://www.linkedin.com/in/sarine-krikorian-b2b1b1b1b1b1/",
  },
  {
    name: "Sarine Krikorian",
    title: "President",
    emailUrl: "sarine@ucsd.edu",
    linkedinUrl: "https://www.linkedin.com/in/sarine-krikorian-b2b1b1b1b1b1/",
  },
  {
    name: "Sarine Krikorian",
    title: "President",
    emailUrl: "sarine@ucsd.edu",
    linkedinUrl: "https://www.linkedin.com/in/sarine-krikorian-b2b1b1b1b1b1/",
  },
  {
    name: "Sarine Krikorian",
    title: "President",
    emailUrl: "sarine@ucsd.edu",
    linkedinUrl: "https://www.linkedin.com/in/sarine-krikorian-b2b1b1b1b1b1/",
  },
  {
    name: "Sarine Krikorian",
    title: "President",
    emailUrl: "sarine@ucsd.edu",
    linkedinUrl: "https://www.linkedin.com/in/sarine-krikorian-b2b1b1b1b1b1/",
  },
  {
    name: "Sarine Krikorian",
    title: "President",
    emailUrl: "sarine@ucsd.edu",
    linkedinUrl: "https://www.linkedin.com/in/sarine-krikorian-b2b1b1b1b1b1/",
  },
  {
    name: "Sarine Krikorian",
    title: "President",
    emailUrl: "sarine@ucsd.edu",
    linkedinUrl: "https://www.linkedin.com/in/sarine-krikorian-b2b1b1b1b1b1/",
  },
];

export default function BoardCardsSection() {
  return (
    <section className="relative bg-[#2a2a2a] py-16 px-6 md:px-10 z-1">
      {/* Optional geometric accent */}

      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="absolute -left-40 w-[120%] h-50 opacity-30 pointer-events-none bg-primary/40"
          style={{ top: `calc(20rem + ${index * 40}rem)`, rotate: `${(-1) ** index * 5}deg` }}
        />
      ))}
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {MEMBERS.map((member) => (
            <BoardMemberCard
              key={member.name}
              name={member.name}
              title={member.title}
              imagePlaceholder={sarineImg}
              emailUrl={member.emailUrl}
              linkedInUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
