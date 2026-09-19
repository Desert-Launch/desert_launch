// Raster imports are inlined by the bundler (esbuild `dataurl` loader) — the
// design-system build never copies image files anywhere.
declare module "*.png" {
  const src: string;
  export default src;
}
