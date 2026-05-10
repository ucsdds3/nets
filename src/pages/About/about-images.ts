import aboutCommunity from "../../assets/about-community.jpg";
import aboutMentorship from "../../assets/about-mentorship.jpg";
import aboutMissionHero from "../../assets/about-mission-hero.jpg";
import aboutProjects from "../../assets/about-projects.jpg";
import aboutSponsor from "../../assets/about-sponsor.jpg";

const ABOUT_IMAGE_BY_FILE: Record<string, string> = {
  "about-community.jpg": aboutCommunity,
  "about-mentorship.jpg": aboutMentorship,
  "about-mission-hero.jpg": aboutMissionHero,
  "about-projects.jpg": aboutProjects,
  "about-sponsor.jpg": aboutSponsor,
};

export function aboutImageSrc(fileName: string): string {
  const src = ABOUT_IMAGE_BY_FILE[fileName];
  if (src === undefined) {
    throw new Error(`Unknown about page image: ${fileName}`);
  }
  return src;
}
