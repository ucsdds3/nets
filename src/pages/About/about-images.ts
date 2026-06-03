import { createAssetImageResolver } from "../../utils/resolveAssetImage";

const ABOUT_ASSETS = "../../assets/about";

const aboutImages = import.meta.glob("../../assets/about/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const aboutImageSrc = createAssetImageResolver(
  aboutImages,
  ABOUT_ASSETS,
  "about"
);
