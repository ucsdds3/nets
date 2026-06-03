import { createAssetImageResolver } from "../../utils/resolveAssetImage";

const BOARD_ASSETS = "../../assets/board";

const boardImages = import.meta.glob("../../assets/board/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const boardImageSrc = createAssetImageResolver(
  boardImages,
  BOARD_ASSETS,
  "board"
);
