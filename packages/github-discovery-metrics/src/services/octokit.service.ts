import { Octokit } from "@octokit/rest";

// Replace with your GitHub personal access token
const TOKEN = process.env.GITHUB_TOKEN;

export const octokitService = new Octokit({
  auth: TOKEN,
});
