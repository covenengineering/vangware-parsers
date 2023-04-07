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
 * @see {@link parseJSON}
 *
 * @param key Current key.
 * @param value Current value.
 * @returns The current value or `undefined` if the key is `"__proto__"`.
 */
const omitProtoReviver = (key: string, value: unknown) =>
	key === "__proto__" ? undefined : value;

/**
 * Safely parses a JSON string or returns `undefined` if is invalid.
 *
 * @category JSON
 * @remarks
 * `JSON.parse` is unsafe by default, allowing __proto__ poisoning. This
 * function takes care of it while making its types safer as well.
 * @example
 * ```typescript
 * parseJSON('{"__proto__":"😈"}'); // {}
 * parseJSON("invalid"); // undefined
 * ```
 * @see {@link attempt}
 *
 * @template Output Generic of the output (has to be a `JSONValue`).
 * @param string String to be parsed.
 * @returns Parsed string or `undefined` if invalid JSON.
 */
export const parseJSON = attempt(
	<Output extends JSONValue = JSONValue>(string: string) =>
		JSON.parse(string, omitProtoReviver) as Output,
);
