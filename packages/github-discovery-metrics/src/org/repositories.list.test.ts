// File: test/github.int.test.ts
import { listRepositories } from "./repositories.list";
import { test } from "node:test";
import assert from "node:assert";

test("Organisation repostitories returns a list of repositories", async () => {
  const repos = await listRepositories("metrics-verse");
  assert.strictEqual(repos.length, 1);
  assert.strictEqual(repos[0].name, "metrics-verse");
});
