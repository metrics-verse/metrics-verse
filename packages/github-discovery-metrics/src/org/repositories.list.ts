import { octokitService } from "../services/octokit.service";
import { GitHubOrgRepositories } from "../services/types";

export async function listRepositories(
  orgName: string
): Promise<GitHubOrgRepositories> {
  let page = 1;
  let orgRepos: GitHubOrgRepositories = [];

  while (true) {
    const response = await octokitService.repos.listForOrg({
      org: orgName,
      type: "all",
      per_page: 100,
      page: page,
    });

    const repos: GitHubOrgRepositories = response.data;

    if (repos.length === 0) {
      break;
    }

    orgRepos = orgRepos.concat(repos);

    page++;
  }

  return orgRepos;
}
