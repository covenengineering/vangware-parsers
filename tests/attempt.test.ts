import type { Tests } from "@vangware/test";
import { attempt } from "../src/attempt.js";

const throwingFunction = (shouldThrow: boolean) => {
	// eslint-disable-next-line functional/no-conditional-statement
	if (shouldThrow) {
		// eslint-disable-next-line functional/no-throw-statement
		throw new Error("fail");
	} else {
		return "success";
	}
};

const safeFunction = attempt(throwingFunction);

export default [
	{
		given: "a function that could throw, not throwing",
		must: "return expected value",
		received: () => safeFunction(false),
		wanted: () => "success",
	},
	{
		given: "a function that could throw, throwing",
		must: "return undefined",
		received: () => safeFunction(true),
		wanted: () => undefined,
	},
] as Tests<string | undefined>;
