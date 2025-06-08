import { url, object, string, uuid } from "zod/v4";

export const env = object({
  API_URL: url(),
  HYPERDX_API_KEY: uuid(),
  HYPERDX_SERVICE: string(),
}).parse({
  API_URL: import.meta.env.PUBLIC_API_URL,
  HYPERDX_API_KEY: import.meta.env.PUBLIC_HYPERDX_API_KEY,
  HYPERDX_SERVICE: import.meta.env.PUBLIC_HYPERDX_SERVICE,
});
