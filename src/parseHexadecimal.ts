import { parseInteger } from "./parseInteger.js";

/**
 * Parses a `string` to a hexadecimal `number`. Returns `undefined` instead of
 * `NaN` if it fails.
 *
 * @category Number
 * @example
 * ```typescript
 * parseHexadecimal("101"); // 0x101 -> 257
 * parseHexadecimal("101.5"); // 0x101 -> 257
 * parseHexadecimal("invalid"); // undefined
 * ```
 * @returns Parsed `number` or `undefined` if it fails.
 */
export const parseHexadecimal = parseInteger(16);
