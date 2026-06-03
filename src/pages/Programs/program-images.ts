import { createAssetImageResolver } from "../../utils/resolveAssetImage";

const PROGRAMS_ASSETS = "../../assets/programs";

const programImages = import.meta.glob("../../assets/programs/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const programImageSrc = createAssetImageResolver(
  programImages,
  PROGRAMS_ASSETS,
  "program"
);
