import { languagesHandlers } from "./languages";
import { orgsHandlers } from "./org";
import { userHandlers } from "./user";

// The root-level request handlers combine
// all the domain-based handlers into a single
// network description array.
export const octokitHanders = [...userHandlers, ...orgsHandlers, ...languagesHandlers];
