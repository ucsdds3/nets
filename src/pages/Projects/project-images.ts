import { createAssetImageResolver } from "../../utils/resolveAssetImage";

const PROJECTS_ASSETS = "../../assets/projects";

const projectImages = import.meta.glob("../../assets/projects/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const projectImageSrc = createAssetImageResolver(
  projectImages,
  PROJECTS_ASSETS,
  "project"
);
