import { parseInteger } from "./parseInteger.js";

/**
 * Parses a `string` to a binary `number`. Returns `undefined` instead of `NaN`
 * if it fails.
 *
 * @category Number
 * @example
 * ```typescript
 * parseBinary("101"); // 0b101 -> 5
 * parseBinary("101.5"); // 0b101 -> 5
 * parseBinary("invalid"); // undefined
 * ```
 * @returns Parsed `number` or `undefined` if it fails.
 */
export const parseBinary = parseInteger(2);
