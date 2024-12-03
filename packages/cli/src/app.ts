import { buildApplication, buildRouteMap } from "@stricli/core";
import {
  buildInstallCommand,
  buildUninstallCommand,
} from "@stricli/auto-complete";
import { name, version, description } from "../package.json";
import { subdirCommand } from "./commands/subdir/command";
import { nestedRoutes } from "./commands/nested/commands";
import { uiMetricsRoutes } from "./commands/ui-metrics/commands";

const routes = buildRouteMap({
  routes: {
    subdir: subdirCommand,
    nested: nestedRoutes,
    "ui-metrics": uiMetricsRoutes,
    install: buildInstallCommand("cli", { bash: "__cli_bash_complete" }),
    uninstall: buildUninstallCommand("cli", { bash: true }),
  },
  docs: {
    brief: description,
    hideRoute: {
      install: true,
      uninstall: true,
    },
  },
});

export const app = buildApplication(routes, {
  name,
  versionInfo: {
    currentVersion: version,
  },
});
