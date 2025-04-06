import { RestEndpointMethodTypes } from "@octokit/rest";

export type GitHubRepositories =
  RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"]["data"];

export type GitHubOrgRepositories =
  RestEndpointMethodTypes["repos"]["listForOrg"]["response"]["data"];

export type GitHubRepositoriesLanguages =
  RestEndpointMethodTypes["repos"]["listLanguages"]["response"]["data"];

export type GitHubRepositoryContent =
  RestEndpointMethodTypes["repos"]["getContent"]["response"];
