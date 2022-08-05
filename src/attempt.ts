import type { GenericFunction, Maybe, ReadOnlyArray } from "@vangware/types";

/**
 * Wrapper for `try`/`catch` that tries to run a function and silences the
 * `throw`s by returning `undefined` instead.
 *
 * @category Common
 * @example
 * ```typescript
 * const willFail = () => {
 * 	throw new Error("fail");
 * };
 *
 * const safeWillFail = attempt(willFail);
 * safeWillFail(); // undefined
 * ```
 * @param wrappedFunction Function to be wrapped.
 * @returns Function wrapped in `try`/`catch`.
 */
export const attempt =
	<Arguments extends ReadOnlyArray, Output>(
		wrappedFunction: GenericFunction<Arguments, Output>,
	) =>
	(...parameters: Arguments): Maybe<Output> => {
		// eslint-disable-next-line functional/no-try-statement
		try {
			return wrappedFunction(...parameters);
		} catch {
			return undefined;
		}
	};
