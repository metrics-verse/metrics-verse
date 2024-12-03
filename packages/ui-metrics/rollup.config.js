import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: "dist/*", hook: "buildStart" }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
    external: [
      "fs",
      "path",
      "url",
      "glob",
      "node:fs",
      "node:path", // Exclude Node.js core modules
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      dts(),
      del({ hook: "buildEnd", targets: "dist/types", verbose: true }),
    ],
  },
]);
