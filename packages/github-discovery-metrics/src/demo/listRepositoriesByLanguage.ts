import { github } from "../github";

github.user
  .listRepositories()
  .then(async (repos) => {
    const jsRepos = await github.languages.getLanguages(repos, [
      "JavaScript",
      "TypeScript",
    ]);
    console.group("List repositories available");
    console.table(jsRepos, ["name", "languages"]);
    console.groupEnd();
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
  });
