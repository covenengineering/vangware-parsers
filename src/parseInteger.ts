import type { Maybe, Radix } from "@vangware/types";

/**
 * Parses a `string` to a `number` with the given `radix`. Returns `undefined`
 * instead of `NaN` if it fails.
 *
 * @category Number
 * @example
 * ```typescript
 * const parseDecimal = parseInteger(10);
 *
 * parseDecimal("101"); // 101
 * parseDecimal("101.5"); // 101
 * parseDecimal("invalid"); // undefined
 * ```
 * @param radix Radix to use for parsing (`16` for hexadecimal, `10` for decimal, and so on).
 * @returns Curried function with `radix` in context.
 */
export const parseInteger = (radix: Radix) => (string: string) => {
	const integer = parseInt(string, radix as number);

	return (Number.isNaN(integer) ? undefined : integer) as Maybe<number>;
};
