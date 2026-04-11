import BoardLanding from "./BoardLanding";
import BoardCardsSection from "./BoardCardsSection";

export default function Board() {
  return (
    <main className="min-h-screen bg-primary z-1">
      <BoardLanding />
      <BoardCardsSection />
    </main>
  );
}
