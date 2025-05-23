import { http, HttpResponse } from "msw";
import { githubUrl } from "./constant";
import { userRepositories } from "./fixtures/user.repository.fixture";

export const userHandlers = [
  http.get(`${githubUrl}/user/repos`, ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "", 10);
    let response = userRepositories;
    if (!page || page > 1) {
      response = [];
    }
    return HttpResponse.json(response);
  }),
];
