import { http, HttpResponse } from "msw";
import { githubUrl } from "./constant";

export const languagesHandlers = [
  http.get(`${githubUrl}/repos/*/*/languages`, () => {
    return HttpResponse.json({
      TypeScript: 26316,
      JavaScript: 3752
    });
  }),
];
