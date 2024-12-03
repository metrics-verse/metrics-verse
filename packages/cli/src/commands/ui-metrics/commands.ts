import { buildCommand, buildRouteMap } from "@stricli/core";
import { usage } from "./impl";

export const usageCommand = buildCommand({
  loader: async () => {
    const { usage } = await import("./impl");
    console.log("enter");
    return usage;
  },
  parameters: {
    flags: {
      package: {
        kind: "parsed",
        parse: String,
        brief: "package name",
      },
      directory: {
        kind: "parsed",
        parse: String,
        brief: "folder to scan within project",
        optional: true,
      },
    },
  },
  docs: {
    brief: "Extract the component usage across project for particular package",
  },
});

export const uiMetricsRoutes = buildRouteMap({
  routes: {
    usage: usageCommand,
  },
  docs: {
    brief: "Ui metrics commands",
  },
});