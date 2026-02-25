import BoardLanding from "./BoardLanding";
import BoardCardsSection from "./BoardCardsSection";

export default function Board() {
  return (
    <main className="min-h-screen bg-[#2a2a2a] z-1">
      <BoardLanding />
      <BoardCardsSection />
    </main>
  );
}
