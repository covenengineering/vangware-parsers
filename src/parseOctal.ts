import { parseInteger } from "./parseInteger.js";

/**
 * Parses a `string` to a octal `number`. Returns `undefined` instead of `NaN`
 * if it fails.
 *
 * @category Number
 * @example
 * ```typescript
 * parseOctal("101"); // 0o101 -> 65
 * parseOctal("101.5"); // 0o101 -> 65
 * parseOctal("invalid"); // undefined
 * ```
 * @returns Parsed `number` or `undefined` if it fails.
 */
export const parseOctal = parseInteger(8);
