import { url, literal, object, string, uuid } from "zod/v4";

export const env = object({
  MODE: literal(["dev", "prd", "stg"]),
  PUBLIC_API_URL: url(),
  PUBLIC_HYPERDX_URL: url(),
  PUBLIC_HYPERDX_API_KEY: uuid(),
  PUBLIC_HYPERDX_SERVICE: string(),
}).parse(import.meta.env);
