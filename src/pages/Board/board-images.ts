import boardHero from "../../assets/board/board-members-hero.png";
import davinRozsa from "../../assets/board/davin-rozsa.png";
import dionWalker from "../../assets/board/dion-walker.png";
import marcLevy from "../../assets/board/marc-levy.png";
import octaviaBraun from "../../assets/board/octavia-braun.png";
import paigeSchumsky from "../../assets/board/paige-schumsky.png";
import sarineKrikorian from "../../assets/board/sarine-krikorian.png";
import seanMurray from "../../assets/board/sean-murray.png";
import shanellRincon from "../../assets/board/shanell-rincon.png";
import sinduVipparthy from "../../assets/board/sindu-vipparthy.png";

const BOARD_IMAGE_BY_FILE: Record<string, string> = {
  "board-members-hero.png": boardHero,
  "davin-rozsa.png": davinRozsa,
  "dion-walker.png": dionWalker,
  "marc-levy.png": marcLevy,
  "octavia-braun.png": octaviaBraun,
  "paige-schumsky.png": paigeSchumsky,
  "sarine-krikorian.png": sarineKrikorian,
  "sean-murray.png": seanMurray,
  "shanell-rincon.png": shanellRincon,
  "sindu-vipparthy.png": sinduVipparthy,
};

export function boardImageSrc(fileName: string): string {
  const src = BOARD_IMAGE_BY_FILE[fileName];
  if (src === undefined) {
    throw new Error(`Unknown board page image: ${fileName}`);
  }
  return src;
}
