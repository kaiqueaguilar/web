import { url, literal, object, parse, string, uuid } from "zod/v4";

const schema = object({
  MODE: literal(["dev", "prd", "stg"]),
  PUBLIC_API_URL: url(),
  PUBLIC_HYPERDX_URL: url(),
  PUBLIC_HYPERDX_API_KEY: uuid(),
  PUBLIC_HYPERDX_SERVICE: string(),
});

export const env = parse(schema, import.meta.env);
