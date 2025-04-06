// mocks/handlers/index.js
import { handlers as userHandlers } from "./user";

// The root-level request handlers combine
// all the domain-based handlers into a single
// network description array.
export const octokitHanders = [...userHandlers];
