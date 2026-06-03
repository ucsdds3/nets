type ImageModuleMap = Record<string, string>;

/** Look up a bundled image by filename from an eager `import.meta.glob` map. */
export function createAssetImageResolver(
  modules: ImageModuleMap,
  assetsDir: string,
  label: string
): (fileName: string) => string {
  return (fileName: string) => {
    const path = `${assetsDir}/${fileName}`;
    const src = modules[path];
    if (src === undefined) {
      throw new Error(`Unknown ${label} image: ${fileName}`);
    }
    return src;
  };
}
