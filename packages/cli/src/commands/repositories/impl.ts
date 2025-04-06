import { user } from "@metrics-verse/organisation-discovery-metrics";
import type { LocalContext } from "../../context";

export async function listUserRepositories(this: LocalContext): Promise<void> {
  const repositories = await user.listRepositories();
  console.group("List repositories available");
  console.table(
    repositories.sort((a: { name: string }, b: { name: string }) =>
      a.name.localeCompare(b.name),
    ),
    ["name", "updated_at"],
  );
  console.groupEnd();
}
