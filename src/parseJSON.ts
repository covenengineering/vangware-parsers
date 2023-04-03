import type { JSONValue } from "@vangware/types";
import { attempt } from "./attempt.js";

/**
 * Custom reviver that omits `"__proto__"` for safer parsing.
 *
 * @category Internal
 * @example
 * ```typescript
 * JSON.parse('{"__proto__":"😈"}', omitProto); // {}
 * ```
 * @param key Current key.
 * @param value Current value.
 * @returns The current value or `undefined` if the key is `"__proto__"`.
 */
const omitProto = (key: string, value: unknown) =>
	key === "__proto__" ? undefined : value;

/**
 * Safely parses a JSON string or returns `undefined` if is invalid.
 *
 * @category JSON
 * @example
 * ```typescript
 * parseJSON('{"__proto__":"😈"}'); // {}
 * parseJSON("invalid"); // undefined
 * ```
 * @param string String to be parsed.
 * @returns Parsed string or `undefined` if invalid JSON.
 */
export const parseJSON = attempt(
	<Output extends JSONValue = JSONValue>(string: string) =>
		JSON.parse(string, omitProto) as Output,
);
