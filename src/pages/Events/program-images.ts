import bigbottom from "../../assets/programs/big-little-bottom.png";
import bigtop from "../../assets/programs/big-little-top.png";
import careerfairbottom from "../../assets/programs/fair-bottom.png";
import careerfairtop from "../../assets/programs/fair-top.png";
import welcomebottom from "../../assets/programs/welcome-bottom.png";
import welcometop from "../../assets/programs/welcome-top.png";

const PROGRAM_IMAGE_BY_FILE: Record<string, string> = {
  "big-little-bottom.png": bigbottom,
  "big-little-top.png": bigtop,
  "fair-bottom.png": careerfairbottom,
  "fair-top.png": careerfairtop,
  "welcome-bottom.png": welcomebottom,
  "welcome-top.png": welcometop,
};

export function programImageSrc(fileName: string): string {
  const src = PROGRAM_IMAGE_BY_FILE[fileName];
  if (src === undefined) {
    throw new Error(`Unknown program image: ${fileName}`);
  }
  return src;
}
