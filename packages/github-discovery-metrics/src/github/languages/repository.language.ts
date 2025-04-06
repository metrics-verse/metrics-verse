import { GitHubRepositories, GitHubOrgRepositories, GitHubRepositoriesLanguages } from "../../../dist";
import { octokitService } from "../../services/octokit.service";

export interface ListOfRepositoriesByLanguage {
  repo: GitHubRepositories[0] | GitHubOrgRepositories[0];
  languages: GitHubRepositoriesLanguages
}

export async function getLanguages(
  repos: GitHubRepositories | GitHubOrgRepositories, filterByLanguage: string[]
): Promise<ListOfRepositoriesByLanguage[]> {
  const languagesAndRepos: ListOfRepositoriesByLanguage[] = [];

  for (const repo of repos) {
    const languages = await octokitService.repos.listLanguages({
      owner: repo.owner.login,
      repo: repo.name,
    });

    if (languages.data) {
      const repoLanguages = Object.keys(languages.data);
      const containsLanguage = repoLanguages.some(lang => filterByLanguage.includes(lang));
      if (containsLanguage) {
        languagesAndRepos.push({ repo, languages: languages.data });
      }
    }
  }

  return languagesAndRepos;
}
