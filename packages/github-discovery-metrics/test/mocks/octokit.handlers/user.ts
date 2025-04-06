import { http, HttpResponse } from "msw";
import { githubUrl } from "./constant";
import { RestEndpointMethodTypes } from "@octokit/rest";
import { repository } from "./fixtures/repository.fixture";

// These request handlers focus on the endpoints
// that concern the user.
export const handlers = [
  http.get(`${githubUrl}/user/repos`, ({ request, params, cookies }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "", 10);
    let response: RestEndpointMethodTypes["orgs"]["listForAuthenticatedUser"]["response"]["data"] =
      [repository as any];
    if (!page || page > 1) {
      response = [];
    }
    return HttpResponse.json(response);
  }),
];
