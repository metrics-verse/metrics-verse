import { github } from "../github"

github.orgs
  .listRepositories("metrics-verse")
  .then(async (repos) => {
    console.group("List repositories available");
    console.table(
      repos,
      ["name", "updated_at"],
    );
    console.groupEnd();
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
  });
