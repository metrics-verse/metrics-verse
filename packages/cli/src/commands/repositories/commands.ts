import { buildCommand, buildRouteMap } from "@stricli/core";

export const listUserRepositories = buildCommand({
  loader: async () => {
    const { listUserRepositories } = await import("./impl");
    return listUserRepositories;
  },
  parameters: {
    flags: {},
  },
  docs: {
    brief: "Extract the component usage across project for particular package",
  },
});

export const uiMetricsRoutes = buildRouteMap({
  routes: {
    listUserRepositories,
  },
  docs: {
    brief: "Display user repositories",
  },
});
