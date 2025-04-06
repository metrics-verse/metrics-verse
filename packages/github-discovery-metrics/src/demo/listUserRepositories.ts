import { github } from "../github";

github.user
  .listRepositories()
  .then(async (repos) => {
    console.group("List repositories available");
    console.table(
      repos.sort((a: { name: string }, b: { name: string }) =>
        a.name.localeCompare(b.name),
      ),
      ["name", "updated_at"],
    );
    console.groupEnd();
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
  });
