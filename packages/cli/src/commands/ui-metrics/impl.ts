import { getComponentsUsage } from "@metrics-verse/ui-metrics";
import type { LocalContext } from "../../context";

interface FooCommandFlags {
  package: string;
  directory?: string;
}

export async function usage(
  this: LocalContext,
  flags: FooCommandFlags
): Promise<void> {
  getComponentsUsage(flags.package, flags.directory ?? ".");
}
