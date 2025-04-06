import { octokitService } from "../services/octokit.service";
import { GitHubRepositories } from "../services/types";

export async function listRepositories() {
  let page = 1;
  let personalRepos: GitHubRepositories = [];

  while (true) {
    const response = await octokitService.repos.listForAuthenticatedUser({
      visibility: "all",
      per_page: 100,
      page,
    });

    const repos = response.data;

    if (repos.length === 0) {
      break;
    }

    personalRepos = personalRepos.concat(repos);
    page++;
  }

  return personalRepos;
}
