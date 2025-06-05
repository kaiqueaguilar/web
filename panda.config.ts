import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  watch: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: ["./src/styles"],
  outdir: "src/styles/classnames",
});
