import { getLanguages } from "./repository.language";
import { test } from "node:test";
import assert from "node:assert";
import { GitHubOrgRepositories } from "../../services/types";

test("Language returns a list of repositories containing languages used", async () => {
  const mockRepositories: GitHubOrgRepositories = [{
    name: "metrics-verse", owner: {
      login: "metrics-verse",
      id: 0,
      node_id: "",
      avatar_url: "",
      gravatar_id: null,
      url: "",
      html_url: "",
      followers_url: "",
      following_url: "",
      gists_url: "",
      starred_url: "",
      subscriptions_url: "",
      organizations_url: "",
      repos_url: "",
      events_url: "",
      received_events_url: "",
      type: "",
      site_admin: false
    },
    id: 0,
    node_id: "",
    full_name: "",
    private: false,
    html_url: "",
    description: null,
    fork: false,
    url: "",
    archive_url: "",
    assignees_url: "",
    blobs_url: "",
    branches_url: "",
    collaborators_url: "",
    comments_url: "",
    commits_url: "",
    compare_url: "",
    contents_url: "",
    contributors_url: "",
    deployments_url: "",
    downloads_url: "",
    events_url: "",
    forks_url: "",
    git_commits_url: "",
    git_refs_url: "",
    git_tags_url: "",
    issue_comment_url: "",
    issue_events_url: "",
    issues_url: "",
    keys_url: "",
    labels_url: "",
    languages_url: "",
    merges_url: "",
    milestones_url: "",
    notifications_url: "",
    pulls_url: "",
    releases_url: "",
    stargazers_url: "",
    statuses_url: "",
    subscribers_url: "",
    subscription_url: "",
    tags_url: "",
    teams_url: "",
    trees_url: "",
    hooks_url: ""
  }]
  const repos = await getLanguages(mockRepositories, ["JavaScript", "TypeScript"]);
  assert.strictEqual(repos.length, 1);
  assert.strictEqual(repos[0].repo.name, "metrics-verse");
  assert.deepStrictEqual(repos[0].languages, {
    TypeScript: 26316,
    JavaScript: 3752
  });
});
