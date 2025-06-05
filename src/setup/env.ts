import { url, object, string, uuid } from "zod/v4";

export const env = object({
  HYPERDX_API_KEY: uuid(),
  HYPERDX_SERVICE: string(),
  API_URL: url(),
}).parse({
  HYPERDX_API_KEY: import.meta.env.PUBLIC_HYPERDX_API_KEY,
  HYPERDX_SERVICE: import.meta.env.PUBLIC_HYPERDX_SERVICE,
  API_URL: import.meta.env.PUBLIC_API_URL,
});
