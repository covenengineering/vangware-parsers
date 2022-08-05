import { parseInteger } from "./parseInteger.js";

/**
 * Parses a `string` to a decimal `number`. Returns `undefined` instead of `NaN`
 * if it fails.
 *
 * @category Number
 * @example
 * ```typescript
 * parseDecimal("101"); // 101
 * parseDecimal("101.5"); // 101
 * parseDecimal("invalid"); // undefined
 * ```
 * @returns Parsed `number` or `undefined` if it fails.
 */
export const parseDecimal = parseInteger(10);
