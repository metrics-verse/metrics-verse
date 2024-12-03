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
  const componentUsage = await getComponentsUsage(
    flags.package,
    flags.directory ?? "."
  );
  console.group("Component usage results:");
  console.log(componentUsage);
  console.groupEnd();
}
