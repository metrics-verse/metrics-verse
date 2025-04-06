import { http, HttpResponse } from "msw";
import { githubUrl } from "./constant";
import { orgRepositories } from "./fixtures/org.repository.fixture";

export const orgsHandlers = [
  http.get(`${githubUrl}/orgs/*/repos`, ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "", 10);
    let response = orgRepositories;
    if (!page || page > 1) {
      response = [];
    }
    return HttpResponse.json(response);
  }),
];
